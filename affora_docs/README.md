# Affora — Project Documentation

> **Affora (package `com.abdulhakeem.reality_wallet`, internal name `reality_wallet`)**
> A behavioral-finance app for young Indian earners. It reframes your bank
> balance as a **Reality Balance** — what's actually yours after every fixed
> commitment is set aside — and turns mindful spending into a daily, gamified ritual.

This folder is the **single source of truth** for understanding Affora end-to-end.
It's written so a teammate — or a new LLM picking up the project cold — can
understand the *what*, *why*, *how*, and *where we are* without reading the code first.

---

## How to read these docs

Read in order for a full picture, or jump to what you need:

| # | Doc | What's inside |
|---|-----|---------------|
| 00 | **[README.md](README.md)** (this file) | Index, doc conventions, how to keep docs updated |
| 01 | **[01-product-overview.md](01-product-overview.md)** | What Affora is, mission, target user, value prop, market positioning, pitch |
| 02 | **[02-architecture.md](02-architecture.md)** | System design, tech stack, client + backend architecture, sync model, security |
| 03 | **[03-features.md](03-features.md)** | Every feature, how to use it, use cases, free vs Pro |
| 04 | **[04-data-model.md](04-data-model.md)** | Client Drift schema + server Prisma models + sync snapshot |
| 05 | **[05-core-logic.md](05-core-logic.md)** | Financial formulas, message parser, merchant learning, scoring |
| 06 | **[06-monetization.md](06-monetization.md)** | Free vs Pro, pricing, gating, monetization ethics |
| 07 | **[07-development-stages.md](07-development-stages.md)** | Build history start→now, current stage, MVP / Play Store readiness |
| 08 | **[08-testing-and-qa.md](08-testing-and-qa.md)** | Automated tests + manual QA test cases per feature |
| 09 | **[09-pros-cons-risks.md](09-pros-cons-risks.md)** | Strengths, weaknesses, limitations, risks & mitigations |
| 10 | **[10-roadmap-and-changelog.md](10-roadmap-and-changelog.md)** | Future roadmap + version changelog (update on every change) |
| 11 | **[11-launch-readiness.md](11-launch-readiness.md)** | Ship-to-Play pre-flight: signing status, AAB, permission declarations, subscription setup |
| 12 | **[12-version-roadmap.md](12-version-roadmap.md)** | Pillar-based version roadmap (V1.0→V3.0) with per-version status checklist |

### Related root-level docs (operational, not duplicated here)

- **[../README.md](../README.md)** — quick repo intro & local-run commands
- **[../ROADMAP.md](../ROADMAP.md)** — original product vision & long-form roadmap
- **[../RELEASE.md](../RELEASE.md)** — step-by-step Google Play release guide (keystore, signing, upload)
- **[../STORE_LISTING.md](../STORE_LISTING.md)** — paste-ready Play Store listing + Data Safety answers
- **[../PRIVACY_POLICY.md](../PRIVACY_POLICY.md)** — published privacy policy

---

## Project at a glance

| | |
|---|---|
| **Type** | Cross-platform mobile app (Android-first), behavioral personal finance |
| **Client** | Flutter (Material 3) · Riverpod · Drift/SQLite · go_router |
| **Backend** | NestJS · Prisma · PostgreSQL · hosted on Render |
| **Auth** | Google Sign-In → backend-issued JWT |
| **Data model** | **Offline-first** — local SQLite is source of truth; backend is the cloud mirror |
| **Backend base URL** | `https://affora-backend.onrender.com/api/v1` |
| **Version** | `1.0.0+1` · DB schema `v13` |
| **Monetization** | Free core, **Affora Pro** at ₹99/mo |
| **Current stage** | **MVP feature-complete**; code is release-quality (analyze clean, 39 tests, APK builds). Pre-launch steps (push, backend deploy, Play upload) pending — see [07](07-development-stages.md) |

---

## Keeping these docs up to date (IMPORTANT)

These docs are only useful if they stay honest. **On every meaningful change:**

1. Update the relevant topic doc (e.g. a new feature → [03-features.md](03-features.md);
   a schema change → [04-data-model.md](04-data-model.md)).
2. Add a dated entry to the **Changelog** in [10-roadmap-and-changelog.md](10-roadmap-and-changelog.md).
3. If the change moves the project's stage (e.g. "uploaded to Play internal testing"),
   update the **Current stage** in [07-development-stages.md](07-development-stages.md) and the
   "at a glance" row above.
4. Bump `version:` in `pubspec.yaml` for releasable changes and note it in the changelog.

A handy convention for commits that touch behavior: also touch docs in the same commit,
so the docs and code never drift apart.
