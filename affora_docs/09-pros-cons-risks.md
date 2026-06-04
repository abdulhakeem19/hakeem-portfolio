# 09 · Pros, Cons, Limitations & Risks

An honest assessment to guide priorities and set expectations.

## Strengths (pros)

- **Genuinely differentiated concept** — Reality Balance + Safe-to-Spend is a real
  behavioral wedge, not another expense tracker.
- **Low-friction onboarding to value** — on-device auto-capture means tracking "just happens".
- **Privacy-respecting** — no `READ_SMS`; on-device parsing; data tied to the user's own
  account. Easy, honest Data Safety story.
- **Offline-first & resilient** — local SQLite source of truth; works with no internet;
  reactive UI across tabs; cloud restore on reinstall/new device.
- **Couples mode** — a sticky, word-of-mouth feature most competitors lack.
- **Ethical monetization** — generous free tier; Pro is additive; builds trust.
- **Solid engineering hygiene** — typed schema + additive migrations, uid-based anti-clobber
  sync, rate-limited backend calls, clean analyze, parser test suite.
- **India-fit** — UPI-era Android-first, rupee-native, real-corpus parser.

## Weaknesses / limitations (cons)

- **Android-only auto-capture** — the headline convenience doesn't exist on iOS.
- **Pro is a local toggle** — no real revenue until Play Billing is wired post-upload.
- **AI Coach not built** — current Coach is rule-based; the "AI" is a promise (clearly
  labeled, but still a gap vs. expectations).
- **Local-only data gaps** — net-worth history, receipt attachments, the review queue and
  app preferences don't survive reinstall yet.
- **Full-snapshot sync** — simple and safe, but not true field-level multi-device merge;
  scales poorly if a user's data grows very large.
- **Manual net-worth entry** — no account-balance aggregation; depends on user effort.
- **Single backend region (Render)** — cold starts / latency possible on a free tier.
- **Thin automated coverage outside the parser** — finance math and sync are tested mostly
  by manual QA today.

## Risks & mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Notification-listener permission scares users / OEM kills the service | Capture stops silently | Clear onboarding copy; manual-paste fallback; resume re-check; document in listing |
| Parser misreads a bank's format | Wrong/missing txns | Review inbox (user confirms); real-corpus test suite; easy to extend patterns |
| Stale-local-DB restore overwrites newer cloud data | Data loss (esp. couples) | `allowBackup=false`; cloud sync is the single restore source; local-wins only when truly fresh |
| Two household members editing the same goal | Clobbering | uid-based upsert + owner-scoped reconcile; contributions append-only; `max()` merge |
| Backend hammered by frequent edits | Cost / throttling | Debounce + 5s push floor + trailing coalesce; summary cache 12s; resume guard 20s |
| Play Data-Safety mismatch | Policy rejection | Listing/Data-Safety drafted to match real behavior; review before submit |
| Losing the release keystore | Can never update the app | RELEASE.md warns to back it up in a password manager |
| Postgres int overflow (ARGB colors) | Migration failure | Already handled: `colorValue` is `Float`/`DOUBLE PRECISION` |

## Honest "are we good?" summary
The product concept and core engineering are strong and MVP-complete. The biggest real gaps
before a confident public launch are: **(1)** wiring real **Play Billing**, **(2)** syncing
the **local-only data** so nothing is lost on reinstall, and **(3)** broadening **automated
test coverage** beyond the parser. None block internal/closed testing.
