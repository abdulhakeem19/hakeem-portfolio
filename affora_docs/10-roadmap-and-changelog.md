# 10 · Roadmap & Changelog

> **Keep this file current.** Every meaningful change gets a Changelog entry (and a
> corresponding update to the relevant topic doc). See "Keeping these docs up to date"
> in [README.md](README.md).

---

> **Strategic version plan (pillar-based V1.0→V3.0) with status checklist lives in
> [12-version-roadmap.md](12-version-roadmap.md).** This section is the tactical near-term list.

## Near-term roadmap (pre/at launch)

Priority order — the three real gaps before a confident public launch:

1. **Real Google Play Billing** — replace the local Pro toggle with `in_app_purchase`
   products once the app is uploaded. → updates [06-monetization.md](06-monetization.md).
2. **Close the local-only data gaps** — add `NetWorthSnapshots` (+ `Merchants.autoConfirm`)
   to the sync snapshot + backend models so they survive reinstall.
   → updates [04-data-model.md](04-data-model.md).
3. **Broaden automated tests** — `HomeCalculations`, forecast math, couples merge, dedupe.
   → updates [08-testing-and-qa.md](08-testing-and-qa.md).
4. **Ship to internal testing** — push commits, deploy backend, sign & upload (RELEASE.md).

## Mid-term

- Build the **AI Coach** (LLM-backed) and flip it from "Soon" to live for Pro.
- Receipt-attachment cloud storage (so photos survive reinstall).
- Richer insights/projections; year-in-review.
- Optional account-balance import to reduce manual net-worth entry.

## Longer-term / exploratory

- iOS strategy (auto-capture parity is the hard part).
- Field-level / incremental sync if data volumes grow.
- Goal-based nudges and "turning point" detection (e.g. EMI ending) as retention hooks.

> The original long-form product vision lives in **[../ROADMAP.md](../ROADMAP.md)**.

---

## Changelog

Format: `## [version] — YYYY-MM-DD` then bullet points. Newest on top. Bump
`version:` in `pubspec.yaml` for releasable changes. Dates use the commit date.

### [Unreleased] — pending push/deploy
Recent work committed locally; not yet pushed to `main` / deployed. Group these under the
next version tag when released.

- **Play Billing:** real `in_app_purchase` integration — `affora_pro_monthly` subscription,
  purchase + restore + purchase-stream entitlement, with a local-activation fallback until
  the Play Console product is live. (`ProScreen` Go Pro/Restore wired.)
- **Launch prep:** removed exact-alarm permissions and switched reminders to inexact (avoids
  Play `USE_EXACT_ALARM` rejection); privacy policy now points to
  `https://buildwithhakeem.dev/affora/privacy` (added `web/affora-privacy.html` to host);
  added `docs/11-launch-readiness.md` (signing/AAB/permission-declaration/subscription guide);
  store listing gained an Affora Pro subscription note.
- **Build `1.0.0+2`:** public version stays `1.0.0` (no public v1 yet); the build code
  increments. In-app About now reads the real version+build via `package_info_plus` (no
  hardcoded string), so every generated build is distinguishable.
- **Don't-lose-my-data sync:** net-worth snapshots and the merchant **auto-confirm** flag
  now sync to the backend (client snapshot/hydrate + Prisma `NetWorthSnapshot` model &
  `Merchant.autoConfirm` column + migration `20260605000000_networth_and_autoconfirm`), so a
  reinstall restores them. **Requires a backend deploy** to take effect.
- **Tests:** added `home_calculations_test.dart` + `debt_calculations_test.dart` (Reality
  Balance, daily budget, Safe-to-Spend edges, goal progress, debt months). Suite 39 → 61.
- **V1 refocus (Affora Constitution):** repositioned Affora as a *daily spending-decision
  assistant* around two questions — "What can I spend today?" and "What happens if I spend
  this?". **Home is now a decision surface**: Safe-to-Spend hero + a Reality Balance / Days
  Left / Spent Today trio + decision cards only (Review, Bills due, **Turning Point**,
  Spending alert, Goal impact). Removed Coach card / last-month / streaks / quick-actions
  from Home (features kept, relocated).
- **Turning Points (new):** an "Upcoming Freedom" card from the soonest debt/EMI payoff —
  date, monthly ₹ freed, and projected Safe-to-Spend uplift. (Debt-only in V1.)
- **Purchase Consequences:** "Can I Buy This?" now leads with consequences (Safe-to-Spend
  before→after, goal delay, debt impact, verdict); the Reality Score is demoted to support.
- **Re-tier (demote, routes kept):** Debt → Goals ("Debt Freedom"); Transactions + Reports →
  Progress ("Reflect"); Coach → Settings. Net Worth / Forecast / Rules stay in Pro tools.
- **Sharpened loop:** rare, smart after-purchase notification (fires only on a >18% drop or
  below ₹200 — a signal, not noise); monthly Safe-to-Spend **adherence** card on Progress.
- **Positioning:** new store short description + two-questions framing.
- **Docs:** added the categorized `docs/` set (this folder) — full project documentation.
- **Restore:** disabled Android Auto Backup; cloud sync (Google login) is the single source
  of truth for reinstall/cross-device restore. (`7c97bad`)
- **Offline-first family tab:** rewrote the couples summary to be local-first + reactive
  (shared-goal "add money" now updates instantly and works offline); **smart sync**
  (on-resume refresh) + **rate limiting** (5s push floor + trailing, 12s summary cache, 20s
  resume guard); **budget discoverability** via a Settings "Personal finance" section.
  (`9cb4e31`)
- **Pro tier:** honest Smart-Coach / AI-Coach-"coming soon" split; **cashflow forecast**,
  **net-worth tracker**, **smart auto-rules** (per-merchant auto-confirm); free caps raised
  to 6 goals/budgets; reworked Pro screen. (`6761cd8`)
- **Family depth:** per-member shared-goal contributions; combined summary; joint bills +
  due dates; shared-goal quick actions. (`a3a554d`, `3549730`)
- **Goals:** shared vs individual goals with uid-based anti-clobber sync. (`0d421d8`)
- **Pro gating** + generous free-tier caps. (`8253cd6`)
- **Progress:** financial-health grounded in real data. (`5518192`)
- **UX:** family banner fix, onboarding goal-skip, greeting/streak polish, photo viewer.
  (`d1d57a5`)
- **Phases 1–4:** sync captured data; per-category budgets + alerts; bill due-dates &
  reminders; last-month recap + refund/duplicate linking.
  (`aecba01`, `48b9a57`, `f0bcdea`, `a42aa55`)
- **Capture/insights ("Phase A"):** on-device auto-capture, merchant learning, spend
  reports; rich transaction detail; custom categories; date/time extraction; Accounts +
  All-transactions hub; duplicate-capture fix; expense/income/savings type selection.

### [1.0.0+1] — initial baseline
- Core finance engine (Reality Balance, Safe-to-Spend, daily budget, goals/debts/bills).
- 5-tab UI, onboarding, Progress/Family/Profile/Coach; green Material-3 theme.
- Google Sign-In + backend auth (JWT); client↔backend full-snapshot sync.
- Notifications, app lock (PIN/biometric), CSV export, Pro paywall scaffolding.
- Play prep docs (STORE_LISTING, PRIVACY_POLICY, RELEASE); rebrand Reality Wallet → Affora.

> For exact, per-commit detail use `git log --oneline`. This changelog summarizes;
> [07-development-stages.md](07-development-stages.md) narrates the stages.

---

## How to record a change (template)

```
### [<new version>] — <YYYY-MM-DD>
- <area>: <what changed and why, user-facing first>. (<commit hash>)
```
Then: update the relevant topic doc, and if the project's stage changed, update
[07-development-stages.md](07-development-stages.md) + the "at a glance" table in
[README.md](README.md).
