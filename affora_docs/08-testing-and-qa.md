# 08 · Testing & QA

## Automated tests

Run from the app root:
```bash
flutter test
```

| Test file | Coverage |
|-----------|----------|
| `test/message_parser_test.dart` | **39 tests** — the parser: amount/direction, merchant normalization, date/time/bank extraction across the real IDFC/SBI/Union/slice corpus, rejection of non-transactions (declined, card-bill, e-mandate notices, credit-limit alerts, USD), dedupe, and `suggestType` |
| `test/widget_test.dart` | Smoke/widget test |

**Current status:** 39/39 pass. `flutter analyze` is clean (0 errors/warnings).

### Quality gate before any release build
```bash
flutter pub get
dart run build_runner build --delete-conflicting-outputs
flutter analyze        # expect 0 errors / 0 warnings
flutter test           # expect all green
flutter build apk --release
```
Backend: `npm run build` (clean) before pushing to `main`.

## Where to add tests next (high value, low cost)
- `HomeCalculations` unit tests (Reality Balance, Safe-to-Spend edge cases: zero income,
  month boundaries, overspend today).
- Cashflow forecast math (`forecast_provider`).
- Couples merge (`_mergeSummaries`) — no double-count, local-ahead wins.
- Dedupe windows in `PendingTransactionsDao.existsSimilar`.

---

## Manual QA test cases (run on a physical Android device)

Auto-capture, notifications and biometrics need a real device. Suggested matrix:

### Onboarding & auth
- [ ] Fresh install → Google sign-in → onboarding → home.
- [ ] Onboarding: pick a goal **and** the "I'll set this later" skip → no forced ₹50k goal.
- [ ] Sign out → sign back in → data restored (cloud hydrate).

### Core loop
- [ ] Set salary + bills → Reality Balance = income − committed − spent.
- [ ] Spend today → Safe-to-Spend shrinks ₹-for-₹; rolls over correctly next day.
- [ ] Month boundary: remaining-days math correct on the 1st and last day.
- [ ] Zero/no salary set → no negative or NaN numbers.
- [ ] "Can I buy this?" → sensible score + Safe-to-Spend dent.

### Auto-capture & transactions
- [ ] Enable auto-capture → grant access → return → toggle **stays on**, capture works.
- [ ] Receive a bank/UPI notification → appears in review inbox with correct amount/date/bank.
- [ ] Paste an **already-captured** message → "already captured" (not the misleading error).
- [ ] Paste a **non-transaction** → "couldn't find a transaction".
- [ ] No duplicate when the OS fires the same notification twice.
- [ ] Confirm a capture → merchant name/category learned; editing writes back for next time.
- [ ] Transaction detail: rename merchant, change category, flip expense/income, add tag,
      attach photo, view original SMS, delete.

### Planning
- [ ] Add 6 goals (free cap) → 7th prompts upgrade. Same for budgets.
- [ ] Set a category budget → over/near-budget banner appears on home.
- [ ] Add a bill with a due day → reminder scheduled; "due soon" banner within 7 days.
- [ ] Add a debt → months-to-payoff / debt-free date correct.

### Gamification & progress
- [ ] Streak icons correct per type (🚫/✅/💰); active streak shows flame + tint.
- [ ] Completing a goal awards XP (no double-award).
- [ ] Progress financial-health reflects budgets/bills, not a flat proxy.

### Couples / Family (Pro)
- [ ] Free user → Family tab shows locked upsell.
- [ ] Toggle Pro → create household → second account joins via code (max 2).
- [ ] Banner shows **both** names (not the owner twice); current user first.
- [ ] Add to a **shared goal** → updates **instantly** (no restart) and offline.
- [ ] Per-member contribution chips show after sync; no double-count.
- [ ] Joint bills sorted by due day with totals; combined spent/saved shown (amounts only).

### Pro tools
- [ ] Cashflow forecast: on-track vs "run out around <date>" with realistic pace.
- [ ] Net-worth: add snapshots → trend chart + change-since-last.
- [ ] Smart rules: toggle auto-confirm on a merchant → its next capture posts directly.
- [ ] CSV export (Pro) works; gated for free.

### Sync, offline & restore
- [ ] Airplane mode → app fully usable; edits persist.
- [ ] Back online / app resume → changes sync up (rate-limited, no spam).
- [ ] Uninstall → reinstall → sign in → synced data restored (note local-only gaps in
      [04-data-model.md](04-data-model.md)).

### Account & security
- [ ] App lock (PIN/biometric) gates entry; Forgot-PIN escape works.
- [ ] Avatar upload + full-screen view.
- [ ] Clear all data → app resets cleanly.

## Release-readiness checklist
See the gate above + [07-development-stages.md](07-development-stages.md#are-we-ready-for-play-store-testing)
and **[../RELEASE.md](../RELEASE.md)** for signing/upload.
