# 07 · Development Stages — start → now, and current status

This is the chronological story of how Affora was built, derived from the commit history,
so a newcomer can see what was implemented at each stage and where we are today.

---

## Stage 0 — Foundation & prototype
- Project bootstrapped as **Reality Wallet**, later **rebranded to Affora**.
- Full UI built to match the prototype: 5-tab navigation, Reality Balance ring hero,
  onboarding flow, Progress / Family / Profile / Coach screens; green Material-3 theme,
  numpad purchase screen, money-flow nodes, achievements, goals/progress redesign.
- Core finance engine: Reality Balance, Safe-to-Spend, daily budget, goals/debts/bills.

## Stage 1 — Auth, sync & store prep
- **Google Sign-In** (Android) + backend auth → JWT.
- **Client ↔ backend sync** (full snapshot, local-wins) and early data-loss fixes.
- Notifications, **app lock** (PIN/biometric), CSV export, **Pro paywall** scaffolding.
- Play prep: **STORE_LISTING.md**, **PRIVACY_POLICY.md**, **RELEASE.md** publish guide.
- Reliability: lock-screen UX, dialog-pop bug, home reactivity, family join, profile editing,
  crash guard, FAB overlap, "buy anyway" logging.

## Stage 2 — Auto-capture & insights ("Phase A")
- **On-device auto transaction capture** (notification listener) + **merchant learning** +
  **spend reports**. Parser hardened against a real IDFC/SBI/slice corpus; fixed
  auto-capture crash and parser false-negatives.
- Rich **transaction detail**, **custom categories**, **date/time** extraction.
- **Accounts** + **All-transactions insights hub**.
- Fixed duplicate captures; added expense/income/savings type selection.

## Stage 3 — The four planning phases
- **Phase 1:** sync captured transactions, merchants, accounts & custom categories.
- **Phase 2:** per-category **budgets** + over-budget alerts.
- **Phase 3:** **bill due-dates & reminders**.
- **Phase 4:** **last-month recap** card + refund/duplicate linking.

## Stage 4 — Family & UX depth
- **Shared vs individual goals** (uid-based, anti-clobber sync fix).
- Family banner fix, **onboarding goal-skip**, greeting/streak polish, profile photo viewer.
- Progress **financial-health grounded in real data**.
- **Pro gating** + generous free-tier caps.
- Family tab: **combined summary, joint bills + due dates, shared-goal actions,
  per-member contributions**.

## Stage 5 — Pro tier & sound architecture (most recent)
- **Pro tier** done right: honest Smart Coach / AI-Coach-coming-soon split, **cashflow
  forecast**, **net-worth tracker**, **smart auto-rules**; free caps raised to 6.
- **Offline-first family tab** (local-first + reactive) — fixes "shared goal doesn't update
  until restart"; **smart sync** + **rate limiting**; budget discoverability in Settings.
- **Android Auto Backup disabled** — cloud sync owns reinstall/cross-device restore.

## Stage 6 — V1 refocus (identity over features)
- Adopted the **Affora Constitution**: a daily spending-decision assistant around two
  questions ("What can I spend today?" / "What happens if I spend this?").
- **Home → decision surface** (Safe-to-Spend hero + Reality/DaysLeft/SpentToday trio +
  decision cards only). Coach/last-month/streaks/quick-actions removed from Home.
- **Turning Points** (debt/EMI freedom card); **Purchase Consequences** lead in "Can I Buy
  This?"; smart (rare) after-purchase notification; Safe-to-Spend **adherence** on Progress.
- **Re-tier:** Debt → Goals; Transactions/Reports → Progress; Coach → Settings. Nothing
  deleted — power tools demoted to their tiers.

> Full per-commit history: `git log --oneline`. Keep the **changelog**
> ([10-roadmap-and-changelog.md](10-roadmap-and-changelog.md)) updated going forward.

---

## Where we are now

### Are we MVP-complete?
**Yes — feature-complete MVP (and beyond).** The core loop, auto-capture, planning tools
(budgets/bills/goals/debt), gamification, couples mode, a Pro tier, and offline-first sync
are all implemented. Code quality bar is currently met:

- `flutter analyze` — **0 errors / 0 warnings** (only pre-existing style infos).
- `flutter test` — **39/39 passing**.
- `flutter build apk --release` — **builds** (~69 MB).
- Backend `npm run build` — **clean**.

### Are we ready for Play Store testing?
**Almost — the code is; a few release steps remain.** To start **internal/closed testing**:

1. **Push the latest commits.** A stack of client commits (and earlier backend commits) is
   currently **unpushed**. The **backend push is required** so Render deploys the migrations
   that newer sync fields depend on.
2. **Deploy/verify backend** on Render (migrations applied on `start:prod`).
3. **Signing & upload:** create the release keystore and `android/key.properties`, then
   build a signed **AAB**, following **[../RELEASE.md](../RELEASE.md)**.
4. **Play Console:** create the app, paste **[../STORE_LISTING.md](../STORE_LISTING.md)**,
   complete **Data Safety** to match real behavior, upload to an internal testing track.
5. **Real-device QA pass** — run the checklist in
   [08-testing-and-qa.md](08-testing-and-qa.md) on a physical Android device (auto-capture is
   Android-only and needs a device).

### Known pre-launch caveats (be honest in the listing)
- Pro is a **local toggle** until Play Billing products exist post-upload.
- **Net-worth snapshots, receipt attachments, the review queue, and app preferences are
  local-only** — they won't survive reinstall yet (see [04-data-model.md](04-data-model.md)).
- Auto-capture is **Android-only**.

**Bottom line:** *MVP is done and release-quality. We are at the "ship to internal testing"
gate — pending push + backend deploy + the keystore/upload steps above.*
