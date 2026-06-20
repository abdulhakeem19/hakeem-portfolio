"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const I = {
  accent: "#8B7CF6",
  accentTint: "rgba(139,124,246,0.10)",
  border: "rgba(139,124,246,0.18)",
  textHero: "#F5F5FA",
  ink: "#0B0A1A",
};

const EFFECTIVE = "19 June 2026";

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

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span
        style={{
          flexShrink: 0,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: I.accentTint,
          border: `1px solid ${I.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: I.accent,
          marginTop: 1,
        }}
      >
        {n}
      </span>
      <span>{children}</span>
    </li>
  );
}

const strong = (text: React.ReactNode) => <strong style={{ color: "var(--text)" }}>{text}</strong>;

export default function IntentLauncherDeleteDataClient() {
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
            style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.1, marginTop: 32, maxWidth: 900 }}
          >
            Delete your{" "}
            <span className="serif" style={{ color: I.accent }}>data</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 660, marginTop: 20, lineHeight: 1.65 }}>
            Intent Launcher does {strong("not")} have user accounts. There is no sign-in, and your
            personal content — your modes, app limits, focus settings, and screen-time/usage data —
            never leaves your device. We cannot see it and it is not stored on any server.
          </motion.p>
        </motion.div>
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

          <Section id="on-device" n="01" title="On-device data (everything you create in the app)">
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <Step n={1}>Open Android <strong style={{ color: "var(--text)" }}>Settings → Apps → Intent Launcher → Storage</strong>.</Step>
              <Step n={2}>Tap <strong style={{ color: "var(--text)" }}>Clear storage / Clear data</strong>, or simply <strong style={{ color: "var(--text)" }}>uninstall</strong> the app.</Step>
            </ol>
            <p>This permanently removes all modes, limits, focus history, settings, and backups from your device. Nothing is retained anywhere else.</p>
          </Section>

          <Section id="diagnostics" n="02" title="Anonymous diagnostics (optional analytics & crash reports)">
            <Bullets
              items={[
                <>This is anonymous usage and crash data sent via Google Firebase to help us fix bugs and improve the app. It is {strong("not linked to your identity")} and never includes your screen time, which apps you use, or anything inside your apps.</>,
                <>Turn it off any time in {strong("Intent Launcher → Settings → Privacy → Share anonymous analytics")}. Once off, no further diagnostics are collected.</>,
                <>To request deletion of previously collected anonymous diagnostics, email{" "}
                  <a href="mailto:buildwithhakeem@gmail.com?subject=Data%20deletion%20request" style={{ color: I.accent }}>buildwithhakeem@gmail.com</a>{" "}
                  with the subject{" "}
                  <span className="mono" style={{ fontSize: 13, background: I.accentTint, border: `1px solid ${I.border}`, borderRadius: 6, padding: "2px 8px", color: I.accent }}>Data deletion request</span>{" "}
                  (include your Diagnostics ID from {strong("Settings → Support → Copy Diagnostics ID")}, if available). We action requests within {strong("30 days")}.</>,
              ]}
            />
          </Section>

          <Section id="deleted-vs-kept" n="03" title="What is deleted vs kept">
            <div style={{ background: I.accentTint, border: `1px solid ${I.border}`, borderRadius: 12, padding: "16px 20px" }}>
              <Bullets
                items={[
                  <>{strong("Deleted:")} all on-device data (immediately, by you) and any collected anonymous diagnostics on request.</>,
                  <>{strong("Kept:")} nothing personal. Aggregate, non-identifiable analytics may remain, and Firebase auto-expires user-level analytics data (default ~2 months) and crash data (~90 days).</>,
                ]}
              />
            </div>
          </Section>

          <Section id="contact" n="04" title="Contact">
            <p>Questions about deletion — reach out:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: I.accent, color: I.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>app package — com.intentlauncher.app</p>
            <p style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/intent-launcher/privacy" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy →</Link>
              <Link href="/intent-launcher/terms" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Terms &amp; Conditions →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
