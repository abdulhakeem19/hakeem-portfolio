# 05 · Core Logic — formulas, parsing, scoring

The "brains" of Affora. Most live in `lib/features/home/domain/home_calculations.dart`,
the parser in `lib/core/parsing/`, and feature providers.

---

## Financial formulas (`HomeCalculations`)

```text
Reality Balance      = totalIncome − totalCommitted − totalVariableSpent
Free Money           = totalIncome − totalCommitted
Remaining days       = (lastDayOfMonth − today.day + 1), clamped 1..31
Daily Budget (today) = max(0, (totalIncome − totalCommitted − spentBeforeToday) / remainingDays)
Safe-to-Spend Today  = max(0, DailyBudget − spentToday)
Goal Progress        = clamp(current / target, 0..1)
Debt months left     = ceil(currentBalance / monthlyPayment)   (0 if no payment)
```

- `totalIncome` includes the cycle's base salary **plus** any `income`-type transactions.
- `totalVariableSpent` = sum of `expense`-type transactions in the cycle.
- `totalCommitted` = monthly-equivalent of committed expenses (bimonthly÷2, quarterly÷3,
  annual÷12, else as-is).
- Safe-to-Spend is "sticky for the day": the daily budget is fixed by prior-day spend, then
  shrinks ₹1-for-₹1 as you spend today — so overspending today visibly eats into the number.

## Cashflow forecast (Pro) — `forecast_provider.dart`

```text
freeMoney            = income − committed
remaining            = freeMoney − variableSpentThisMonth
dailyPace            = variableSpentThisMonth / daysElapsed
projectedEndBalance  = remaining − dailyPace × daysRemaining
runsOutOnDay         = today + remaining / dailyPace  (if it lands before month-end)
```
Verdict: on-track (projected leftover ≥ 0) vs "pace too high, you'll run out around <date>".
Bills are shown for context (already reserved in `committed`, so not double-counted).

## Financial-health score (Progress) — grounded in real data

- **Spending score** ← budget adherence (over/under each category cap) + streaks.
- **Bills score** ← committed/income ratio + whether due-date reminders are set.
- Replaced the earlier "streak proxy" so the score reflects actual behavior.

## Can-I-buy-this scoring (`purchase` feature)

A multi-factor score (not a binary), weighing the amount against Safe-to-Spend, goals, and
the remaining month — returns a score + a plain-language verdict and the dent to Safe-to-Spend.

---

## Message parser (`lib/core/parsing/message_parser.dart`)

On-device parser for Indian bank/UPI messages. Extracts:

- **Amount** and **direction** (`debit` → expense, `credit` → income).
- **Merchant / counterparty** (VPA-aware).
- **Account last 4** and **bank name** (IDFC, SBI, HDFC, ICICI, Axis, Union Bank, Kotak,
  Slice, CRED, …).
- **Date/time** across real corpus formats: `03 JUN 2026 at 07:29 PM`,
  `25-05-2026 12:36:19`, `02-06-26`, `02/06/26`, `01-Jun-26` (falls back to `now`).
- **Rejects non-transactions:** declined txns, card-bill payment notices (avoids
  double-counting), e-mandate "upcoming" notices, credit-limit alerts, foreign-currency (USD).

### Dedupe
`PendingTransactionsDao.existsSimilar` blocks duplicates from the same notification firing
multiple times — by amount/refNo/merchant within a time window **plus** a `createdAt`-based
recent window (handles the case where two notifications of one payment parse slightly
different timestamps).

### Type suggestion
`suggestType`: plain debit/credit follow direction; investment/deposit phrasing → `savings`.

---

## Merchant learning (`review_controller.dart`)

When a pending txn is confirmed:
1. Normalize the merchant to a stable `rawKey` (uppercased, VPA-stripped).
2. If unseen → create a `Merchant` (display name + guessed category).
3. If seen → apply learned name/category; any user override is **written back** so future
   txns from that merchant adopt it.
4. The account (bank + last4) is auto-created/matched.

**Auto-confirm (Pro):** at capture time, if a merchant is flagged `autoConfirm` and the user
is Pro, the transaction is posted directly (skips the review inbox), using the learned
category and the current salary cycle.

---

## Couples summary merge (`family_provider.dart`)

- **Local-first:** shared goals, contributions, this-month spend come from local Drift
  streams (instant, offline).
- **Server overlay (2-member):** a rate-limited `/household/summary` fills in the partner's
  income/spend/contributions.
- **Merge rule:** goals union by `uid` taking `max(currentAmount)`; contributions per
  goal/name take `max` — so local edits show immediately and the two devices converge after
  sync with **no double-counting**.
