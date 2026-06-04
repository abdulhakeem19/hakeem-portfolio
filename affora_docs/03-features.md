# 03 · Features — full catalog, how to use, use cases

Legend: **[Free]** available to everyone · **[Pro]** Affora Pro (₹99/mo) ·
**[Pro · Soon]** Pro feature in development. See [06-monetization.md](06-monetization.md)
for the full free/Pro matrix.

---

## A. Money clarity (the core loop)

### 1. Reality Balance **[Free]**
- **What:** Income − committed expenses − variable spend this cycle. The headline number.
- **How to use:** Set your salary in onboarding/Settings; add recurring bills; spend
  naturally. The home ring shows your Reality Balance live.
- **Use case:** "My bank says ₹40k but Affora says my Reality Balance is ₹12k — that's
  what I can actually touch."

### 2. Safe-to-Spend Today **[Free]**
- **What:** Free money remaining ÷ days left in the month, shrinking ₹1-for-₹1 as you
  spend today. A daily anchor.
- **How to use:** Glance at the home ring each morning; it auto-recomputes after every txn.
- **Use case:** Deciding whether today's ₹600 dinner is fine or eats into the rest of the month.

### 3. Money flow **[Free]**
- **What:** Visual of where the salary goes the moment it lands (committed vs free).
- **How to use:** Open from the home screen money-flow sheet.

### 4. Can I buy this? — Purchase Consequences **[Free]** ⭐ signature
- **What:** Answers "what happens if I spend this?" — leads with **consequences**:
  Safe-to-Spend before→after, the goal it delays (days), debt impact, and a plain verdict.
  A multi-factor Reality Score backs it up as a supporting signal.
- **How to use:** Tap the floating "Can I buy this?" FAB on any main tab, type an amount.
- **Use case:** "₹4,500 headphones?" → "Safe-to-Spend ₹812 → ₹655 · Emergency Fund delayed
  ~5 days · Verdict: Safe purchase."

### 5. Turning Points (Upcoming Freedom) **[Free]** ⭐ signature
- **What:** Answers "when does this end?" — the soonest debt/EMI payoff, the monthly money
  it frees, and your projected Safe-to-Spend uplift. Shown as a Home decision card.
- **How to use:** Appears automatically on Home when you have a tracked debt.
- **Use case:** "SBI EMI ends in 74 days · +₹7,938/mo freed · ₹398/day → ₹663/day."
- **Scope:** V1 = debt/EMI payoffs; goal-completion / salary / subscription variants are V2.

> **Home is a decision surface.** It shows the Safe-to-Spend hero, a Reality Balance / Days
> Left / Spent Today trio, then only *decision cards* (review, bills due, Turning Point,
> spending alert, goal impact). Coach, last-month recap, streaks and quick-actions moved off
> Home (see the re-tier in [07](07-development-stages.md)) — every Home card must answer
> "what should I do with my money today?".

---

## B. Transactions & auto-capture

### 5. Auto-capture (notification listener) **[Free, Android]**
- **What:** Reads bank/UPI **notifications** on-device, parses amount/merchant/date/bank,
  and queues them for review. **No `READ_SMS`.**
- **How to use:** Settings → enable Auto-capture → grant notification access. New bank
  notifications then appear in the **Review inbox**.
- **Use case:** Pay by UPI; the spend shows up to review without manual entry.

### 6. Manual paste **[Free]**
- **What:** Paste a bank message; Affora parses it on-device.
- **How to use:** Transactions → paste sheet. Distinct messages for "already captured"
  (duplicate) vs "couldn't find a transaction".

### 7. Review inbox **[Free]**
- **What:** Confirm/edit/dismiss captured drafts. Confirming creates a real transaction and
  **learns** the merchant's display name + category for next time.
- **How to use:** Home review banner → Review inbox → confirm/edit each.

### 8. Transaction detail **[Free]**
- **What:** Rich detail: merchant (rename), "N visits" pill, amount, category picker,
  date+time, account (bank ••last4) with expense/income toggle, notes, tags, receipt photo
  attachment, original SMS, delete.
- **How to use:** Tap any transaction.

### 9. Categories + custom categories **[Free]**
- **What:** Built-in category set + user-created custom categories (emoji + colour).
- **How to use:** Category picker sheet anywhere a category is set.

### 10. Accounts **[Free]**
- **What:** Banks/cards auto-created from captured messages (bank + last4), groupable/hideable.
- **How to use:** Settings → Accounts, or `/home/accounts`.

### 11. All-transactions hub & reports **[Free basic / Pro advanced]**
- **What:** Transactions / Categories / Merchants tabs, spend donut, merchant trend bar
  chart. Free users get **basic reports**; the advanced insights hub is Pro.
- **How to use:** Transactions → insights icon (Pro → `/home/all`, free → `/home/reports`).

---

## C. Planning & personal finance

### 12. Goals (individual & shared) **[Free, capped]**
- **What:** Savings targets with progress, monthly contribution, projected finish, emoji,
  XP on completion. Each goal is **Individual** (private) or **Shared** (household, both fund).
- **How to use:** Goals tab → add goal; toggle "Shared with partner" (Pro) or flip later via
  the goal menu. Free tier: up to **6** goals.
- **Use case:** Personal "Emergency fund ₹50k" + shared "Goa trip ₹30k" with a partner.

### 13. Budgets & limits (per category) **[Free, capped]**
- **What:** Monthly spend cap per category, with over/near-budget alerts on home and a
  budget-adherence input to the financial-health score.
- **How to use:** **Settings → Personal finance → Budgets & limits**, or the home budget
  alert banner, or All-transactions → Categories → Set budgets. Free tier: up to **6** budgets.
- **Use case:** Cap "Food & Drinks" at ₹6,000/mo and get nudged before you blow it.

### 14. Recurring bills (committed expenses) + due dates & reminders **[Free]**
- **What:** Rent, EMIs, subscriptions with frequency (monthly/bimonthly/quarterly/annual)
  and an optional **due day**; scheduled local reminders; "bills due soon" home banner.
- **How to use:** Settings → Personal finance → Recurring bills, or `/home/bills`.

### 15. Debt slayer **[Free]**
- **What:** Track debts (balance, monthly payment, rate) and see months-to-payoff / a
  debt-free date.
- **How to use:** Debt section; add each loan/card.
- **Use case:** "SBI EMI clears Aug 2026, freeing ₹7,938/mo" — the turning-point moment.

### 16. Last-month recap **[Free]**
- **What:** A home banner summarizing last month's spent & earned; supports refund/duplicate
  linking on transactions.

---

## D. Habits & gamification

### 17. Streaks **[Free]**
- **What:** Habit streaks with proper icons per type — `no_credit` (🚫 avoided credit),
  `under_budget` (✅ stayed under budget), `saved_money` (💰 saved). Active streaks get a
  warm tint + flame badge.
- **How to use:** Progress tab; streaks update from daily behavior.

### 18. XP, levels & achievements **[Free]**
- **What:** Earn XP for good actions (e.g. completing a goal), level up, unlock achievements.

### 19. Progress / financial health **[Free]**
- **What:** A financial-health view scored from **real data** — spending score from budget
  adherence, bills score from committed/income ratio + due-date reminders, plus streaks.
- **How to use:** Progress tab.

---

## E. Couples / Family **[Pro]**

The whole Family tab is Pro (free users see a locked upsell view).

### 20. Household link **[Pro]**
- **What:** Create a household, share an invite code; a partner joins (max 2 members).
- **How to use:** Family tab → create/join with code.

### 21. Joint dashboard **[Pro]**
- **What:** Banner with both members; **combined monthly spent/saved** (amounts only —
  individual transactions stay private).

### 22. Shared goals + quick actions + per-member contributions **[Pro]**
- **What:** Shared goals only on the Family tab; "Add money" inline; a 🎉 celebration on
  completion; per-member contribution chips ("You · ₹12k", "Partner · ₹8k").
- **How to use:** Family tab → shared goal card → Add money.
- **Note:** Updates **instantly** (local-first) and works offline; partner sees it after sync.

### 23. Joint bills & due calendar **[Pro]**
- **What:** Household bills sorted by due day with 🔔 chips and a monthly total.

---

## F. Coach **[Free basic / Pro AI soon]**

### 24. Smart Coach **[Free]**
- **What:** A **rule-based** assistant that reads your real numbers and answers instantly
  ("Can I afford ₹4,500?", "How am I doing this month?", debt payoff, where to save).
  Honest by design: labeled as rules-on-your-data, instant, private, offline.
- **How to use:** Open the Coach; tap a quick reply or type a question.

### 25. AI Coach **[Pro · Soon]**
- **What:** A conversational, LLM-powered coach (scenario planning, written monthly review).
  Clearly marked **"Coming soon"** — *not* sold as already shipped.

---

## G. Platform & account

### 26. Cashflow forecast **[Pro]**
- **What:** Projects your variable-spending pace day-by-day and warns if you'll run short
  before month-end ("at ₹X/day you'll run out around the 26th"). Chart + upcoming bills.
- **How to use:** Settings → Pro tools → Cashflow forecast (`/home/forecast`).

### 27. Net-worth tracker **[Pro]**
- **What:** Log assets/liabilities snapshots; see net worth trend + change-since-last-log.
- **How to use:** Settings → Pro tools → Net-worth tracker (`/home/networth`).
- **Note:** Currently **local-only** (not yet cloud-synced — see [04](04-data-model.md)).

### 28. Smart auto-rules **[Pro]**
- **What:** Manage learned merchants (recategorize/delete) and toggle **auto-confirm** per
  merchant so trusted captures post straight to the ledger, skipping review.
- **How to use:** Settings → Pro tools → Smart rules (`/home/rules`).

### 29. CSV export & advanced insights **[Pro]**
- **What:** Export transactions to CSV; deeper trends/projections.

### 30. Profile, avatar & app lock **[Free]**
- **What:** Edit profile, upload/view avatar full-screen, optional PIN/biometric app lock,
  Pro status, sign-out.
- **How to use:** You (Profile) tab; Settings for lock & data.

### 31. Onboarding **[Free]**
- **What:** Set income/salary day; optionally pick a starter goal or **skip it** ("I'll set
  this later" — no forced default).

### 32. Offline-first + cloud sync & restore **[Free]**
- **What:** Full functionality with no internet; automatic background sync when online;
  reinstall/new-device restore via Google login. See [02-architecture.md](02-architecture.md).
