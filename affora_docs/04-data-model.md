# 04 · Data Model

Two stores, kept in sync: the **client Drift/SQLite DB** (source of truth, offline)
and the **server Prisma/Postgres DB** (cloud mirror + multi-user). Sync is full-snapshot
with `uid`-based upsert for shared entities (see [02-architecture.md](02-architecture.md)).

---

## Client — Drift / SQLite (schema v13, 14 tables)

| Table | Purpose | Notable columns |
|-------|---------|-----------------|
| `SalaryCycles` | Monthly income cycle | month, year, income, salaryDay, startDate |
| `Transactions` | Ledger | amount, category, date, type (expense/income/savings), notes, source, refNo, rawMessage, accountLast4, bankName, tags, attachmentPath\*, linkedTxnId\*, linkType\*, merchantId, accountId |
| `CommittedExpenses` | Recurring bills | name, amount, category, frequency, **dueDay** |
| `Goals` | Savings goals | name, targetAmount, currentAmount, monthlyContribution, emoji, **uid**, **isShared**, **ownerId** |
| `GoalContributions` | Who funded a shared goal (append-only) | **uid**, goalUid, contributorId, contributorName, amount, createdAt |
| `Debts` | Debts | name, originalAmount, currentBalance, monthlyPayment, interestRate |
| `Streaks` | Habit streaks | type (`no_credit`/`under_budget`/`saved_money`), currentCount, bestCount, lastCheckinDate |
| `XpEvents` | Gamification ledger | eventType, xpEarned, description |
| `Merchants` | Learned merchant grouping | rawKey (unique), displayName, category, **autoConfirm**\* |
| `PendingTransactions`\* | Capture review queue | amount, direction, merchantRaw, accountLast4, bankName, refNo, rawMessage, source, status, occurredAt |
| `Categories`\* | User custom categories | name (unique), emoji, colorValue |
| `Accounts` | Banks/cards from captures | bankName, last4, type, displayName, hidden |
| `Budgets` | Per-category monthly cap | category (unique), monthlyLimit |
| `NetWorthSnapshots`\* | Wealth over time | date, assets, liabilities, note |

`\*` = **local-only or has local-only columns** — see "What is NOT synced" below.

### Migration history (additive)
```
v2  committed.frequency
v3  xpEvents table
v4  goals.monthlyContribution
v5  merchants + pendingTransactions tables; transactions capture cols
v6  categories table; transactions accountLast4/bankName/tags/attachmentPath; pending.bankName
v7  accounts table; transactions.accountId
v8  budgets table
v9  committed.dueDay
v10 transactions.linkedTxnId + linkType
v11 goals.uid + isShared + ownerId
v12 goalContributions table
v13 netWorthSnapshots table + merchants.autoConfirm
```
Migrations live in `lib/core/database/app_database.dart` (`onUpgrade`). Always additive;
bump `schemaVersion` and add an `if (from < N)` block.

---

## Server — Prisma / PostgreSQL (15 models)

`User`, `Household`, `HouseholdMember`, `SalaryCycle`, `Transaction`, `Merchant`,
`Account`, `Category`, `GoalContribution`, `Budget`, `CommittedExpense`, `Goal`,
`Streak`, `XpEvent`, `Debt`.

Highlights:
- **`User`** owns most data (salaryCycles, transactions, merchants, accounts, categories,
  budgets, etc.); `member` links to a `Household`.
- **`Household`** owns `goals`, `committedExpenses`, `goalContributions` (shared scope).
- **`Goal`** has `uid @unique`, `isShared`, `ownerId` → pull filters
  `{householdId, OR:[{isShared:true},{ownerId:userId}]}`; push upserts by `uid` and
  reconcile-deletes only the owner's own non-shared goals.
- **`GoalContribution`** has `uid @unique`, append-only upsert (never wiped).
- **`Category.colorValue`** is `Float` / `DOUBLE PRECISION` (an ARGB int like `0xFF27B07A`
  overflows Postgres `int4` — documented gotcha).
- **`Transaction`** carries capture metadata (source, refNo, rawMessage, accountLast4,
  bankName, tags, merchantKey).

### Prisma migrations
```
20260601195010_init
20260603000000_add_debt_and_goal_monthly
20260604000000_add_capture_sync
20260604010000_add_budgets
20260604020000_add_committed_due_day
20260604030000_goal_shared          (backfills legacy goals isShared=true, uid='leg_'||id)
20260604040000_goal_contributions
```
Applied on deploy by `scripts/migrate.js` during `start:prod`.

---

## Sync snapshot (what `GET/POST /sync` carries)

The snapshot mirrors: salary cycles, transactions (+capture metadata), committed expenses
(+dueDay), goals (uid/isShared/ownerId), debts, streaks, xp events, merchants, accounts,
custom categories, budgets, goal contributions.

- Cycles are keyed by `year-month`; transactions reference their cycle by that key.
- Transactions reference merchants by **rawKey** (not local id) so links survive reinstall.

## What is NOT synced (important for "never lose my data")

These are **local-only** today and would **not** survive a reinstall:

- `PendingTransactions` (the review queue)
- `Transactions.attachmentPath` (receipt photos), `linkedTxnId`, `linkType`
  (device-specific ids aren't portable)
- App preferences in `SharedPreferences` (Pro toggle, notification/auto-capture settings,
  FAB position, sync stamp) — and these are **no longer OS-backed-up** either, since
  `allowBackup="false"`.

Everything else (salary, transactions, bills, goals incl. shared, budgets, debts,
streaks/XP, accounts, merchants incl. **auto-confirm**, contributions, and
**net-worth snapshots**) restores via cloud sync.

> **Net-worth snapshots & `Merchants.autoConfirm` now sync** (added in the V1.0.0+2 phase):
> client snapshot/hydrate + server `NetWorthSnapshot` model & `Merchant.autoConfirm` column
> (migration `20260605000000_networth_and_autoconfirm`). They survive a reinstall. Net-worth
> is mirrored (full replace per push) rather than uid-upserted — it's per-user, not shared.
> Remaining local-only gap: receipt attachments (candidate next step — needs blob storage).
