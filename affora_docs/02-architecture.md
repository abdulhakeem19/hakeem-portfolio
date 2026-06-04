# 02 · Architecture & System Design

## High-level system

```
┌──────────────────────────────────────────────────────────────┐
│                        ANDROID DEVICE                          │
│                                                                │
│  ┌──────────────────────────────────────────────────────┐    │
│  │                  Flutter App (Affora)                  │    │
│  │                                                        │    │
│  │  Presentation (screens/widgets)  ── go_router routes   │    │
│  │        │  watch/read                                   │    │
│  │  Riverpod providers (state)                            │    │
│  │        │  reactive streams                             │    │
│  │  Drift DAOs ──►  SQLite  ◄── source of truth (offline) │    │
│  │        ▲                                               │    │
│  │  Services: NotificationCapture, Notifications          │    │
│  │  SyncService (debounced mirror + rate-limited)         │    │
│  └───────────────┬────────────────────────────────────────┘   │
│                  │ HTTPS (JWT)        On-device parsing only    │
└──────────────────┼─────────────────────────────────────────────┘
                   │
                   ▼
        ┌────────────────────────────────┐
        │  NestJS API (Render)            │
        │  /api/v1/...                    │
        │  Auth(JWT) · Sync · Household …  │
        │        │ Prisma                  │
        │   PostgreSQL (cloud mirror)      │
        └────────────────────────────────┘
```

**Guiding principle: offline-first.** The local SQLite database is the source of
truth. The backend is a **cloud mirror** for durability, cross-device restore, and
the one truly multi-user feature (couples/household). The UI never blocks on network.

---

## Client (Flutter) architecture

### Layers

```
lib/
  core/
    constants/   app colors, text styles, api_config (backend URL)
    database/    Drift: app_database.dart, tables/, daos/
    parsing/     message_parser.dart, merchant normalizer (on-device)
    providers/   database_provider (shared singletons)
    services/    notification_capture_service, notification_service
    sync/        sync_service, sync_provider
    theme/       Material-3 theme
    utils/       currency, date helpers
  features/      one folder per domain (see below), each with
                 presentation/ (screens, widgets), providers/, sometimes domain/
  shared/        MainShell (tab scaffold + lifecycle), MagicFab, rings, cards
```

**Feature folders (20):** `accounts`, `auth`, `budgets`, `coach`, `committed` (bills),
`debt`, `family`, `forecast`, `goals`, `home`, `networth`, `onboarding`, `profile`,
`progress`, `purchase` (can-I-buy), `reports`, `settings`, `streaks`, `transactions`, `xp`.

### State management — Riverpod

- **Drift streams → `StreamProvider`** make every screen reactive: a write in one tab
  updates every other tab automatically (single source of truth).
- Generated providers (`@riverpod`) for core finance streams (`home_provider.dart`).
- `AsyncNotifier` for auth (`authProvider`) and Pro entitlement (`proProvider`).
- Family summary is a plain `Provider` that composes local streams + a rate-limited
  server fetch (see Sync below).

### Navigation — go_router

`StatefulShellRoute` with a 5-tab shell (`MainShell`): **Home, Goals, Progress, Family, Profile (You)**.
Sub-routes live under `/home/*`:

```
/login  /onboarding
/home  (└ settings, transactions[:id], bills, review, reports, all,
           accounts, budgets, networth, forecast, rules, merchant/:id)
/goals (└ :id)   /progress   /family   /profile
```

A draggable **"Can I buy this?" FAB** floats on the main tabs (hidden on the You tab
and on pushed sub-routes).

### Local database — Drift / SQLite

- 14 tables, 14 DAOs, current **schema version 13** (migrations are additive; see
  [04-data-model.md](04-data-model.md)).
- Code generation via `build_runner` (`*.g.dart`).
- DB file: `reality_wallet.sqlite` in the app documents directory.

### Key services

- **NotificationCaptureService** (Android only) — listens to bank/UPI notifications via
  `notification_listener_service`, parses them on-device, dedupes, and queues
  `PendingTransactions` for review. Pro "auto-confirm" merchants post directly. **No `READ_SMS`.**
- **NotificationService** — `flutter_local_notifications` + `timezone` (IST) for bill
  reminders.

---

## Backend (NestJS) architecture

Modular NestJS app, one module per domain:

```
src/
  auth/              Google token verify → JWT issue; JwtStrategy; @CurrentUser
  users/             profile (GET/PATCH /users/me)
  salary-cycles/     monthly income cycles
  transactions/      transactions CRUD
  committed-expenses/ recurring bills
  goals/             goals CRUD + allocate
  debts/             debts CRUD
  streaks/  xp-events/  habit + gamification data
  household/          create/join/leave, GET /household, GET /household/summary
  sync/              GET /sync (pull snapshot) · POST /sync (push snapshot)
  privacy/           privacy endpoints
  prisma/            PrismaService (DB access)
```

- **ORM:** Prisma → PostgreSQL. 15 models (see [04-data-model.md](04-data-model.md)).
- **Migrations:** SQL files in `prisma/migrations/`, applied on deploy by a custom
  `scripts/migrate.js` during `start:prod`.
- **Hosting:** Render, auto-deploy from GitHub `main`.
- **API base:** `/api/v1`.

### Representative endpoints

```
POST /auth/google           exchange Google token for app JWT
GET  /users/me · PATCH /users/me
GET/POST/PATCH/DELETE  /salary-cycles · /transactions · /committed-expenses
GET/POST/PATCH/DELETE  /goals  ·  POST /goals/:id/allocate
GET/POST/PATCH/DELETE  /debts
GET  /household · POST /household · POST /household/join · DELETE /household/leave
GET  /household/summary     aggregated couples dashboard data
GET  /sync · POST /sync     full-snapshot pull / push
```

All authenticated routes require `Authorization: Bearer <jwt>`.

---

## Authentication flow

```
App: Google Sign-In  ─►  Google ID token
App ─► POST /auth/google (id token)  ─►  Backend verifies with Google
Backend ─► upsert User, issue app JWT  ─►  App stores JWT
App ─► all API calls with Bearer JWT
```

Auth is **mandatory** — the router redirects unauthenticated users to `/login`.
That means every user has a cloud-synced account, which is what makes
reinstall/cross-device restore work.

---

## Sync model (the important part)

**Strategy:** *pull-on-fresh-install, mirror-on-change, local-wins-if-present.*

1. **Reconcile (on sign-in):** `GET /sync`.
   - If **local has no data** and the server has a snapshot → **hydrate** (server → local).
     This is the **reinstall / new-device restore** path.
   - If **local has data** → it's authoritative → **push** (local → server). We never
     overwrite live local data on reopen.
2. **Mirror-on-change:** a Drift `tableUpdates()` listener **debounces 2s** then pushes
   the full snapshot.
3. **Shared entities use stable `uid`s:** goals and goal-contributions sync by `uid`
   with **server-side upsert + owner-scoped reconcile**, so two household members never
   clobber each other's data. Contributions are append-only.
4. **Couples dashboard:** the Family tab is **local-first** (its goals/contributions/
   spend come from local Drift streams → instant, offline-capable) and *overlays* a
   rate-limited server aggregate for the partner's numbers, merged with `max()` so the
   two converge after sync with no double-counting.

### Rate limiting (protecting the backend)

| Call | Limit |
|------|-------|
| Snapshot push | 2s debounce **+** hard min 5s between network pushes; bursts coalesce into one trailing push |
| `GET /household/summary` | cached 12s; reads within the window serve cache |
| On-resume refresh (app foregrounded) | guarded to once per 20s |

### Restore & device transfer

- **Cloud sync is the single source of truth for restore.** Reinstall + sign in with the
  same Google account → `reconcile()` hydrates the latest snapshot. Works across devices.
- **Android Auto Backup is disabled** (`android:allowBackup="false"`) so the OS can't
  restore a *stale* local DB that would trip the local-wins rule and push old data over
  newer server data. (See [04-data-model.md](04-data-model.md) for what is *not* synced.)

---

## Security & privacy

- **On-device parsing:** bank/UPI messages are parsed locally; raw text is stored locally
  and only mirrored to the user's own account.
- **No `READ_SMS`:** capture uses the notification listener (user-granted) + manual paste.
- **App lock:** optional PIN / biometric (`local_auth`) gate via `LockGate`.
- **Transport:** HTTPS + JWT bearer auth; network security config in place.
- **Data safety:** see [../STORE_LISTING.md](../STORE_LISTING.md) and
  [../PRIVACY_POLICY.md](../PRIVACY_POLICY.md).

## Build & deploy pipeline

- **Client:** `flutter pub get` → `dart run build_runner build --delete-conflicting-outputs`
  → `flutter analyze` / `flutter test` → `flutter build apk --release` (signed via
  `android/key.properties`, see [../RELEASE.md](../RELEASE.md)).
- **Backend:** push to GitHub `main` → Render auto-deploys → `scripts/migrate.js` runs new
  SQL migrations on `start:prod`.
