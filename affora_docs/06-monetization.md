# 06 · Monetization — Free vs Pro

## Philosophy (non-negotiable)

**Additive, never extractive.** The free app is fully usable, forever. Pro only adds
*new* capabilities, things that cost money to run (AI, cloud infra), or power-user depth.
**Nothing that is free becomes Pro.** This is stated to users on the Pro screen:
*"Auto-capture, tracking, the Smart Coach and the whole core app stay free, forever."*

## Pricing

- **Affora Pro — ₹99/month.**
- Implemented today as a **local entitlement toggle** (`proProvider`, key
  `pro_entitlement`). Real **Google Play Billing** is wired as a placeholder and activates
  once products are created in the Play Console post-upload. Until then, Pro can be toggled
  on-device for end-to-end testing.

## Free vs Pro matrix

| Capability | Free | Pro |
|---|---|---|
| Reality Balance, Safe-to-Spend, Money flow | ✅ | ✅ |
| Can I buy this? | ✅ | ✅ |
| **Auto-capture + manual paste + review inbox** | ✅ | ✅ |
| Transactions, accounts, categories (+custom) | ✅ | ✅ |
| Goals | ✅ up to **6** | ✅ unlimited |
| Budgets & limits | ✅ up to **6** | ✅ unlimited |
| Recurring bills + due reminders | ✅ | ✅ |
| Debt slayer, streaks, XP, progress | ✅ | ✅ |
| Basic reports | ✅ | ✅ |
| **Smart Coach** (rule-based) | ✅ | ✅ |
| Couples / Family mode | — | ✅ |
| Advanced insights hub + CSV export | — | ✅ |
| Cashflow forecast | — | ✅ |
| Net-worth tracker | — | ✅ |
| Smart auto-rules (auto-confirm merchants) | — | ✅ |
| **AI Coach** (conversational, LLM) | — | 🔜 Pro · Coming soon |

Free caps are deliberately **generous (6)** so a normal user never hits them.

## Gating implementation

- `lib/features/settings/presentation/pro_gate.dart`
  - `isPro(ref)` — sync read of `proProvider`.
  - `showProUpsell(context, title, body)` — bottom-sheet upsell with a "See Affora Pro" CTA.
  - `kFreeGoalLimit = 6`, `kFreeBudgetLimit = 6`.
- Entry points (`Settings → Pro tools`) call `_openPro(...)`: navigate if Pro, else upsell.
- Family tab gates the whole screen on `proProvider` → locked view for free users.
- `kProPrefsKey` is exposed so non-Riverpod code (capture service) can check entitlement for
  auto-confirm.

## The Coach honesty model

- **Smart Coach (free):** explicitly a **rule engine** that reads your real numbers —
  instant, private, offline. The UI no longer overstates it (dropped the "Online" badge).
- **AI Coach (Pro · Soon):** a banner clearly marks the conversational AI version as in
  development. It is **not** sold as already shipped — paying for Pro today is justified by
  the features that *do* ship (couples, forecast, net-worth, auto-rules, insights/export).

## Why these are fair to charge for

- **Couples mode** = real multi-user infrastructure (households, server aggregation).
- **AI Coach** = real per-message LLM cost.
- **Forecast / net-worth / auto-rules / insights** = genuine "get ahead" power tools,
  additive to the free core.
