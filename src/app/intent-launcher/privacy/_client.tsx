"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const I = {
  bg: "#0B0A1A",
  surface: "#13122A",
  featured: "#1C1A38",
  accent: "#8B7CF6",
  accentTint: "rgba(139,124,246,0.10)",
  border: "rgba(139,124,246,0.18)",
  borderEm: "rgba(139,124,246,0.30)",
  textHero: "#F5F5FA",
  textSecondary: "#9A95B5",
  ink: "#0B0A1A",
};

const EFFECTIVE = "19 June 2026";

const SECTIONS = [
  { id: "summary", n: "01", t: "The summary" },
  { id: "on-device", n: "02", t: "Stored only on your device" },
  { id: "permissions", n: "03", t: "Device permissions" },
  { id: "analytics", n: "04", t: "Analytics & crash reporting" },
  { id: "what-we-dont", n: "05", t: "What we do not do" },
  { id: "backup", n: "06", t: "Backup & import" },
  { id: "purchases", n: "07", t: "Purchases (Pro)" },
  { id: "children", n: "08", t: "Children's privacy" },
  { id: "security", n: "09", t: "Data security" },
  { id: "rights", n: "10", t: "Your rights" },
  { id: "changes", n: "11", t: "Changes to this policy" },
  { id: "contact", n: "12", t: "Contact" },
];

function Mark() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 13,
          background: `linear-gradient(150deg, ${I.accent}, #5B4BD6)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 24,
          color: I.ink,
          boxShadow: "0 8px 24px rgba(139,124,246,0.35)",
        }}
      >
        I
      </span>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: I.textHero }}>Intent Launcher</span>
    </span>
  );
}

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      className="dev-card"
      style={{ padding: 28, scrollMarginTop: 96 }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 14 }}>
        <span className="mono" style={{ fontSize: 12, color: I.accent, fontWeight: 600 }}>{n}</span>
        <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.025em" }}>{title}</h2>
      </div>
      <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </motion.section>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "flex", gap: 10 }}>
          <span style={{ color: I.accent, flexShrink: 0, marginTop: 1 }}>·</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const strong = (text: React.ReactNode) => <strong style={{ color: "var(--text)" }}>{text}</strong>;
const accentStrong = (text: React.ReactNode) => <strong style={{ color: I.accent }}>{text}</strong>;

export default function IntentLauncherPrivacyClient() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(900px circle at 50% -5%, rgba(139,124,246,0.12), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      {/* hero */}
      <section className="dev-section" style={{ paddingTop: 48, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Mark />
            <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
              last updated <span style={{ color: I.accent }}>{EFFECTIVE}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginTop: 32, maxWidth: 900 }}
          >
            Privacy{" "}
            <span className="serif" style={{ color: I.accent }}>Policy</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            Intent Launcher is an Android home-screen launcher that helps you open apps with intent,
            understand your screen time, and reduce distraction. This policy explains what the app
            collects and, just as importantly, what it deliberately does not.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["Usage stays on-device", "Your screen-time and app-usage data never leaves your device — it is never transmitted to us or anyone."],
              ["No account, no sign-in", "The app works without an account. You never give us your name, email, or phone number."],
              ["Anonymous analytics only", "We measure which features are used — never your usage content — and you can turn it off."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: I.accentTint, border: `1px solid ${I.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ color: I.accent, fontSize: 15 }}>✓</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: I.textHero }}>{t}</span>
                </div>
                <div style={{ fontSize: 12.5, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* TOC */}
      <section className="dev-section" style={{ paddingTop: 40, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="dev-chip mono" style={{ cursor: "pointer", fontSize: 11 }}>
              <span style={{ color: I.accent }}>{s.n}</span> {s.t.toLowerCase()}
            </a>
          ))}
        </div>
      </section>

      {/* content */}
      <motion.section
        className="dev-section"
        style={{ paddingTop: 32, position: "relative", zIndex: 1 }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 860, margin: "0 auto" }}>

          <Section id="summary" n="01" title="The summary">
            <Bullets
              items={[
                <>{strong("Your usage data stays on your device.")} Your modes, hidden apps, app limits, focus settings, and the screen-time statistics the app reads are stored on your device and are {accentStrong("never")} transmitted to us or anyone else.</>,
                <>{strong("No account, no sign-in.")} The app works without an account. You never give us your name, email, or phone number.</>,
                <>{strong("Anonymous analytics only.")} We use Google Firebase Analytics, Crashlytics, and Performance Monitoring to understand which features are used, fix crashes, and keep the app fast. This data is anonymous and does {accentStrong("not")} include your screen-time numbers, the apps you use, or any content.</>,
                <>{strong("You can opt out")} of analytics and crash reporting at any time in Settings → Privacy.</>,
                <>{strong("No advertising. No data selling.")} We do not show ads and we never sell, rent, or trade your data.</>,
              ]}
            />
          </Section>

          <Section id="on-device" n="02" title="Information stored only on your device">
            <p>The following is created and kept {accentStrong("locally")} on your device using Android&apos;s on-device database (Room) and preferences storage (DataStore). It is {strong("never")} sent to us or any third party:</p>
            <Bullets
              items={[
                <>{strong("Launcher configuration")} — your modes, which apps are assigned to or excluded from each mode, hidden apps, appearance/theme settings, and other preferences.</>,
                <>{strong("App limits and focus settings")} — the daily time limits and focus configuration you create.</>,
                <>{strong("Screen-time and app-usage statistics")} — read from Android&apos;s on-device usage data to show your insights (today&apos;s screen time, top apps) and to enforce the limits you set.</>,
              ]}
            />
            <p>Uninstalling the app removes this information from your device.</p>
          </Section>

          <Section id="permissions" n="03" title="Device permissions and why we request them">
            <p>Intent Launcher requests only what it needs to work as a launcher with screen-time and focus features. {strong("None of these permissions are used to send your data anywhere.")}</p>
            <Bullets
              items={[
                <>{strong("Usage Access (PACKAGE_USAGE_STATS)")} — Read your device&apos;s screen-time and app-usage statistics so the app can show insights and enforce the daily limits you set. Read from Android&apos;s own on-device statistics, processed entirely on your device, and {accentStrong("never collected, transmitted, or shared")} — not even in anonymous form. You can revoke it any time.</>,
                <>{strong("Display over other apps (SYSTEM_ALERT_WINDOW)")} — Show a full-screen block reminder when a limited app reaches its daily limit. Generated locally; reads or transmits nothing.</>,
                <>{strong("Foreground service (FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE)")} — Run a lightweight on-device monitor that checks which app is in the foreground so it can enforce your configured limits. This happens in real time on your device and is not recorded or sent anywhere.</>,
                <>{strong("Notifications (POST_NOTIFICATIONS)")} — Show the persistent notification Android requires for the limit-enforcement service, and any reminders you enable.</>,
                <>{strong("Run after restart (RECEIVE_BOOT_COMPLETED)")} — Restart the limit-enforcement monitor after you reboot so your limits keep working.</>,
                <>{strong("App visibility (launcher queries)")} — As a launcher, the app needs the list of installed, launchable apps so it can display and open them. This list is used only on your device.</>,
              ]}
            />
            <p>{strong("Intent Launcher does not use Android's Accessibility Service.")} We deliberately do not read screen content, messages, passwords, keystrokes, or in-app activity.</p>
          </Section>

          <Section id="analytics" n="04" title="Analytics and crash reporting">
            <p>To understand which features are useful, find and fix bugs, and keep the app fast, the app uses three Google services:</p>
            <Bullets
              items={[
                <>{strong("Firebase Analytics")} — anonymous, aggregated product events such as which screens are opened and which features are used (e.g. <span className="mono">onboarding_completed</span>, <span className="mono">mode_created</span>, <span className="mono">limit_set</span>), plus session counts, app version, and general device/OS type.</>,
                <>{strong("Firebase Crashlytics")} — crash reports (stack traces, app state at the time of the crash, device model, OS version) so we can fix stability issues.</>,
                <>{strong("Firebase Performance Monitoring")} — anonymous performance metrics such as app start-up time and the app&apos;s own network request response times, so we can find and fix slowdowns.</>,
              ]}
            />
            <p style={{ marginTop: 4, fontWeight: 600, color: "var(--text)" }}>What this analytics data does NOT include</p>
            <p>We have deliberately scoped analytics so it can {accentStrong("never")} capture your personal usage. Analytics and crash reports do {strong("not")} include:</p>
            <Bullets
              items={[
                "your screen-time numbers or daily totals;",
                "which apps you use, any app names, or anything read via Usage Access;",
                "your modes' contents, hidden apps, or limit values;",
                "any message, password, photo, file, or other content.",
              ]}
            />
            <p>In short: we measure how people use {strong("Intent Launcher itself")}, not how you use {strong("your phone")}. This data is processed by Google as a data processor on our behalf — see{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Google&apos;s Privacy Policy</a>.
            </p>
            <p>{strong("Opting out.")} You can disable analytics and crash reporting at any time in {strong("Settings → Privacy")}. When disabled, the app stops sending product events and crash reports.</p>
          </Section>

          <Section id="what-we-dont" n="05" title="What we do not do">
            <Bullets
              items={[
                <>We do {strong("not")} transmit your screen-time data, app list, or any usage content.</>,
                <>We do {strong("not")} use advertising SDKs or show ads.</>,
                <>We do {strong("not")} sell, rent, or trade your data.</>,
                <>We do {strong("not")} read the content inside your apps (messages, emails, browsing, passwords, photos, etc.).</>,
                <>We do {strong("not")} use Android&apos;s Accessibility Service.</>,
              ]}
            />
          </Section>

          <Section id="backup" n="06" title="Backup and import">
            <p>Intent Launcher lets you export a backup of your settings and import it later. A backup is a file created on your device at your request and stored wherever you choose. We never receive or store your backup. If you share a backup file with another app or service, that file becomes subject to the privacy practices of wherever you send it.</p>
          </Section>

          <Section id="purchases" n="07" title="Purchases (Intent Launcher Pro)">
            <p>If you upgrade to Intent Launcher Pro, the purchase is processed entirely by {strong("Google Play Billing")}. We never receive, see, or store your payment details (card numbers, billing address, etc.). Google&apos;s handling of your purchase is governed by{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Google&apos;s Privacy Policy</a>. Your Pro entitlement is verified through Google Play and recorded on your device.
            </p>
          </Section>

          <Section id="children" n="08" title="Children's privacy">
            <p>Intent Launcher is not directed to children under 13 and we do not knowingly collect personal information from children. The analytics described above are anonymous and not tied to an identity. If you believe a child has provided personal information in a way that reached us, contact us and we will address it.</p>
          </Section>

          <Section id="security" n="09" title="Data security">
            <p>Your launcher configuration and usage data never leave your device, so the primary protection for that information is the security of your own device (lock screen, encryption, Android&apos;s app sandboxing). Analytics and crash data are transmitted to Google over encrypted connections. No method of electronic storage or transmission is 100% secure, but keeping your personal usage on-device materially reduces exposure compared to cloud-based alternatives.</p>
          </Section>

          <Section id="rights" n="10" title="Your rights">
            <p>Depending on where you live (for example under the GDPR or CCPA), you may have rights to access, correct, or delete personal data and to object to processing. Because the app stores your launcher and usage data only on your device, you already control it directly — clearing app data or uninstalling removes it. For the anonymous analytics handled by Google, you can opt out in {strong("Settings → Privacy")}. For any other request, contact us using the details below.</p>
          </Section>

          <Section id="changes" n="11" title="Changes to this Privacy Policy">
            <p>We may update this Privacy Policy from time to time, for example when we add features. When we do, we will revise the &quot;Last updated&quot; date above and, where appropriate, surface the change in the app or on this page. Continued use of the app after an update means you accept the revised policy.</p>
          </Section>

          <Section id="contact" n="12" title="Contact us">
            <p>If you have any questions about this Privacy Policy or the app&apos;s privacy practices, reach out:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: I.accent, color: I.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>app package — com.intentlauncher.app</p>
            <p style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/intent-launcher/terms" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Terms &amp; Conditions →</Link>
              <Link href="/intent-launcher/delete-data" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Delete your data →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
