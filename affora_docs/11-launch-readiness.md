# 11 · Launch Readiness — ship to internal testing

Pre-flight for the first Google Play upload (internal testing track). Pairs with
**[../RELEASE.md](../RELEASE.md)** (keystore/signing/upload commands) and
**[../STORE_LISTING.md](../STORE_LISTING.md)** (listing + Data Safety).

## Readiness snapshot

| Area | Status |
|------|--------|
| Code quality | ✅ `flutter analyze` 0/0 · 61 tests pass · release build OK |
| Version | ✅ `1.0.0+2` (versionName/Code from `pubspec.yaml`; in-app About reads it) |
| App id | ✅ `com.abdulhakeem.reality_wallet` (`android/app/build.gradle.kts`) |
| Release signing | ✅ `android/key.properties` present → release builds sign with the real keystore (debug fallback if absent). **Back up the keystore + passwords.** |
| Network security | ✅ HTTPS only (cleartext disabled) |
| Auto-Backup | ✅ disabled (`allowBackup=false`); cloud sync owns restore |
| Billing | ✅ wired (`in_app_purchase`); ⚠️ **product must be created in Play Console** (below) |
| Backend | ⚠️ **must be pushed/deployed** so the latest sync migrations run on Render |

## Build the upload artifact (AAB, not APK)

Play takes an **Android App Bundle**:
```
flutter build appbundle --release
# → build/app/outputs/bundle/release/app-release.aab
```
(APK is fine for sideloading/QA; AAB is the store upload.)

## Things only YOU can do in the Play Console

### 1. Monetization — create the Pro subscription
- Product **id must be exactly `affora_pro_monthly`** (matches `kProProductId` in
  `lib/features/settings/services/billing_service.dart`).
- Type: **subscription**, base plan **₹99/month**, auto-renewing.
- Until it exists + the app is on a test track, the store reports it unavailable and the
  Pro screen falls back to local activation (by design). Add **license testers** to test the
  real purchase without being charged.

### 2. Permissions Declaration form (⚠️ scrutiny)
Affora ships two sensitive permissions — be ready to justify them, or Play may reject:

- **Notification access** (`BIND_NOTIFICATION_LISTENER_SERVICE`, the
  `NotificationListener` service) — powers on-device auto-capture of bank/UPI transaction
  notifications. Justification: *"Core feature: Affora reads the user's bank/UPI transaction
  notifications on-device to auto-log expenses. Parsing is local; no notification content
  leaves the device except the user's own synced transactions. Manual entry is available as
  an alternative; the listener is opt-in via system settings."*
- **Exact alarms** — ✅ **RESOLVED.** Both `USE_EXACT_ALARM` and `SCHEDULE_EXACT_ALARM` are
  removed (and `tools:node="remove"` strips any a plugin merges in); bill/morning/evening
  reminders use `AndroidScheduleMode.inexactAllowWhileIdle`. No exact-alarm declaration
  needed, no rejection risk — reminders fire within a small window, which is fine for nudges.

Other permissions are low-risk: `INTERNET`, `POST_NOTIFICATIONS`, `USE_BIOMETRIC`
(app lock), `RECEIVE_BOOT_COMPLETED` (reschedule reminders after reboot).

### 3. Data Safety + listing
- Use the answers in **[../STORE_LISTING.md](../STORE_LISTING.md)** (financial info collected,
  encrypted in transit, not sold/shared). Mention Affora Pro is an auto-renewing subscription.
- IAP/subscriptions are declared in the **Monetization** section, not Data Safety.

### Privacy policy URL
Play **requires** a public URL that points **directly at the policy** — the bare domain
`https://buildwithhakeem.dev` is **not** acceptable. Use a dedicated per-app path:
- **`https://buildwithhakeem.dev/affora/privacy`** (already set in `STORE_LISTING.md`,
  `kPrivacyPolicyUrl`, and the in-app Profile link).
- Host **`web/affora-privacy.html`** (a clean standalone page generated from
  `PRIVACY_POLICY.md`) at that path on your site.
- A fallback already exists: the backend serves `/privacy` — but the developer-domain URL is
  more professional, so we point everything there. Make sure the URL resolves before submitting.

### 4. Upload
Follow **[../RELEASE.md](../RELEASE.md)** → create app → internal testing track → upload the
AAB → add testers → roll out.

## Final pre-upload checklist
- [x] Exact-alarm permissions removed; reminders switched to inexact (no rejection risk).
- [ ] Set the **privacy policy URL** in the Play listing (see "Privacy policy" below).
- [ ] Push both repos; confirm Render deployed the new migrations.
- [ ] `flutter build appbundle --release` (signed).
- [ ] Create `affora_pro_monthly` subscription (₹99/mo) + license testers.
- [ ] Complete Permissions Declaration (notification access) + Data Safety.
- [ ] Upload AAB to internal testing; install via the tester link; run the
      [08-testing-and-qa.md](08-testing-and-qa.md) device checklist.
