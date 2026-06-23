"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const K = {
  bg: "#081210",
  surface: "#0D1C17",
  featured: "#13271E",
  accent: "#34D399",
  accentTint: "rgba(52,211,153,0.10)",
  border: "rgba(52,211,153,0.18)",
  borderEm: "rgba(52,211,153,0.30)",
  textHero: "#F0FDF9",
  textSecondary: "#6EE7B7",
  ink: "#081210",
};

const EFFECTIVE = "22 June 2026";

const SECTIONS = [
  { id: "summary", n: "01", t: "The summary" },
  { id: "data-processed", n: "02", t: "Data processed & where it stays" },
  { id: "what-we-dont-do", n: "03", t: "What Kaasu does not do" },
  { id: "permissions", n: "04", t: "Permissions" },
  { id: "your-control", n: "05", t: "Your control" },
  { id: "children", n: "06", t: "Children" },
  { id: "changes", n: "07", t: "Changes to this policy" },
  { id: "contact", n: "08", t: "Contact" },
];

function Mark() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 13,
          background: `linear-gradient(150deg, ${K.accent}, #0F7A52)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 24,
          color: K.ink,
          boxShadow: "0 8px 24px rgba(52,211,153,0.30)",
        }}
      >
        K
      </span>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: K.textHero }}>Kaasu</span>
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
        <span className="mono" style={{ fontSize: 12, color: K.accent, fontWeight: 600 }}>{n}</span>
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
          <span style={{ color: K.accent, flexShrink: 0, marginTop: 1 }}>·</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const strong = (text: React.ReactNode) => <strong style={{ color: "var(--text)" }}>{text}</strong>;
const accentStrong = (text: React.ReactNode) => <strong style={{ color: K.accent }}>{text}</strong>;

export default function KaasuPrivacyClient() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(900px circle at 50% -5%, rgba(52,211,153,0.10), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      {/* hero */}
      <section className="dev-section" style={{ paddingTop: 48, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Mark />
            <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
              last updated <span style={{ color: K.accent }}>{EFFECTIVE}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginTop: 32, maxWidth: 900 }}
          >
            Privacy{" "}
            <span className="serif" style={{ color: K.accent }}>Policy</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            Kaasu is a privacy-first expense tracker for Android. This policy explains, in plain language,
            what data Kaasu handles and how.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["Collects nothing", "There are no accounts, no cloud servers, no analytics, and no ads. Everything the app records stays on your device."],
              ["No account, no sign-in", "Kaasu works without an account. You never give us your name, email, or phone number."],
              ["You control your data", "Export, clear, or delete your data any time from within the app. Uninstalling removes everything."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: K.accentTint, border: `1px solid ${K.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ color: K.accent, fontSize: 15 }}>✓</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: K.textHero }}>{t}</span>
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
              <span style={{ color: K.accent }}>{s.n}</span> {s.t.toLowerCase()}
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
                <>{accentStrong("Kaasu collects nothing.")} There are no accounts, no cloud servers, no analytics, and no ads. Everything the app records stays on your device.</>,
                <>{strong("Transactions, categories, accounts, budgets, rules, and settings")} you create or that Kaasu captures are stored only in a local database on your device. They are {accentStrong("never")} transmitted off the device by Kaasu.</>,
                <>{strong("No personal profile.")} An optional display name and avatar you set are stored locally for personalization only.</>,
                <>{strong("No advertising. No data selling.")} We do not show ads and we never sell, rent, or trade your data.</>,
              ]}
            />
          </Section>

          <Section id="data-processed" n="02" title="What data Kaasu processes — and where it stays">
            <p>The following is stored {accentStrong("only on your device")} and is {strong("never")} transmitted to us or any third party:</p>
            <Bullets
              items={[
                <>{strong("Transactions, categories, accounts, budgets, rules, and settings")} you create or that Kaasu captures automatically.</>,
                <>{strong("Notification content:")} With your permission, Kaasu&apos;s notification listener reads notifications {strong("only from the payment and bank apps you enable")} (<span className="mono" style={{ fontSize: 12 }}>Settings → Bank sources</span>) plus your messaging app, to detect transactions. Parsing happens entirely on-device. Kaasu does not read notifications from other apps, and does not read your SMS inbox.</>,
                <>{strong("Profile name and avatar")} (optional) — stored locally for personalization only.</>,
              ]}
            />
            <p>Uninstalling the app removes this information from your device.</p>
          </Section>

          <Section id="what-we-dont-do" n="03" title="What Kaasu does not do">
            <Bullets
              items={[
                <>Does {strong("not")} create an account or require sign-in.</>,
                <>Does {strong("not")} upload, sync, or back up your data to any server. (Backups you create are plain files saved by {strong("you")}, to a location {strong("you")} choose.)</>,
                <>Does {strong("not")} contain advertising or third-party analytics/tracking SDKs.</>,
                <>Does {strong("not")} request location, contacts, camera, microphone, or SMS-reading permissions.</>,
              ]}
            />
          </Section>

          <Section id="permissions" n="04" title="Permissions Kaasu uses">
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Notification access</strong> (<span className="mono" style={{ fontSize: 12 }}>BIND_NOTIFICATION_LISTENER_SERVICE</span>): to read payment alerts from the apps you enable, on-device. You grant this manually in Android Settings and can revoke it any time.</>,
                <><strong style={{ color: "var(--text)" }}>Post notifications</strong> (optional, Android 13+): only to show budget and reminder alerts you turn on.</>,
              ]}
            />
          </Section>

          <Section id="your-control" n="05" title="Your control over your data">
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Export:</strong> <span className="mono" style={{ fontSize: 12 }}>Settings → Back up data</span> (a JSON file) or Export transactions (CSV). These files are created locally and shared only if you choose to.</>,
                <><strong style={{ color: "var(--text)" }}>Delete:</strong> <span className="mono" style={{ fontSize: 12 }}>Settings → Danger Zone → Clear all transactions</span> or <span className="mono" style={{ fontSize: 12 }}>Delete all data</span> performs a permanent local wipe.</>,
                <>Uninstalling the app removes its local database.</>,
              ]}
            />
          </Section>

          <Section id="children" n="06" title="Children">
            <p>Kaasu is not directed at children under 13 and collects no data from anyone.</p>
          </Section>

          <Section id="changes" n="07" title="Changes to this policy">
            <p>If this policy changes, the &quot;last updated&quot; date above will change and the new version will ship with the app.</p>
          </Section>

          <Section id="contact" n="08" title="Contact">
            <p>Questions about privacy? Reach out:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: K.accent, color: K.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>app package — com.kaasu.app</p>
            <p style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/kaasu/terms" style={{ color: K.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Terms of Service →</Link>
              <Link href="/kaasu/delete-account" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Delete your data →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
