# 01 · Product Overview

> **Tagline: "Your Daily Spending Reality."**
> Affora is a *daily spending-decision assistant*, defined by two questions:
> **(1) What can I spend today?** (Safe-to-Spend) and **(2) What happens if I spend
> this?** (Purchase Consequences) — plus the emotional hook **"When does this end?"**
> (Turning Points). Everything else is demoted so it never competes with these.
> See the full **Affora Constitution** in the project memory and

## What Affora is

Affora is a **behavioral finance app**, not an accounting tool. Most finance apps
show you what's *in your account*. Affora shows you what's *actually yours to spend*
today, after rent, EMIs, bills and savings are mentally "set aside" — a number it
calls the **Reality Balance**.

> The problem isn't that people don't know they're overspending.
> They don't *feel* the consequence until it's too late.

Affora's job is to move the user from:

> **Salary → Spend → Regret**

to:

> **Salary → Allocate → Track → Save → Grow**

## The core insight

Show people their **Reality Balance** (income − every committed obligation), then
divide what's left by the days remaining in the month. That single number —
**Safe-to-Spend Today** — creates *daily behavioral anchoring* instead of monthly regret.

## Target user

| | |
|---|---|
| **Age** | 22–35 |
| **Profile** | First-generation earners, newly married couples, IT/software engineers, gig workers |
| **Income** | ₹20,000 – ₹1,50,000 / month |
| **Pain** | Living paycheck to paycheck, credit-card/BNPL dependence, no emergency fund, impulsive spending, no financial discipline |
| **Platform** | **Android-first** (India's UPI-heavy market) |

**Anchoring real-world test case (the builder's own numbers):**
- Salary ₹57,120/mo
- Committed: Rent ₹11,500 + EB ₹3,500 + SBI EMI ₹18,912 + Slice ₹11,250 = ₹45,162
- Reality Balance ≈ ₹11,958
- SBI EMI ends Aug 2026 → ₹7,938/mo freed → a concrete "turning point" the app can surface

## Value proposition

1. **Honesty about money** — one number (Reality Balance) instead of a misleading bank balance.
2. **Daily anchor** — Safe-to-Spend adapts as the month progresses.
3. **Decision support** — "Can I buy this?" scores a purchase against goals *before* you commit.
4. **Frictionless tracking** — on-device auto-capture of bank/UPI notifications (no manual logging required, no `READ_SMS`).
5. **Habit formation** — streaks, XP and levels make discipline feel like a game.
6. **Couples mode** — partners share household goals and a joint dashboard.
7. **Privacy-first & offline-first** — data lives on the device; parsing is on-device; cloud sync is tied to your own Google login.

## Differentiators vs. the market

| Typical finance apps | Affora |
|---|---|
| Show account balance | Shows **Reality Balance** (what's truly spendable) |
| Monthly reports → regret | **Daily** Safe-to-Spend anchor |
| Read SMS for transactions (privacy-invasive) | **Notification-listener + manual paste**, parsed **on-device**, no `READ_SMS` |
| Spreadsheet vibes | **Gamified** (streaks/XP/levels), warm green Material-3 UI |
| Single-user | **Couples/Family** shared goals + joint dashboard |
| Online-only | **Offline-first**; works with no internet, syncs when available |
| Aggressive paywalls | Free core stays fully usable; Pro is **additive**, not extractive |

**Explicitly out of scope (by design):** a "split the bill" feature is intentionally excluded.

## Market positioning & go-to-market

- **Segment:** behavioral money management for young Indian Android users in the UPI economy.
- **Wedge:** "auto-capture + Reality Balance" — minimal effort to start, immediate clarity.
- **Pricing:** free core + **Affora Pro ₹99/mo** (couples mode, cashflow forecast,
  net-worth tracker, smart auto-rules, advanced insights/export, AI Coach coming soon).
- **Distribution:** Google Play (India), starting with internal/closed testing.
- **Growth loops:** couples mode (one user invites a partner), streak/level sharing,
  and the "turning point" moment (e.g. an EMI ending) as a natural share/retention hook.

## One-paragraph pitch (product-presentation style)

> **Affora turns your salary into a plan you can feel.** The moment money lands, it
> shows your **Reality Balance** — what's genuinely yours after rent, EMIs and bills —
> and a **Safe-to-Spend** number for today. It quietly captures your bank and UPI
> notifications on-device (no SMS snooping), learns your merchants, and rewards mindful
> spending with streaks and levels. Couples can pool goals on a shared dashboard. It
> works fully offline and syncs to the cloud when you're online. Free to use for real;
> **Affora Pro (₹99/mo)** adds forecasting, net-worth tracking and smart automation for
> people who want to get ahead — never by locking away the basics.
