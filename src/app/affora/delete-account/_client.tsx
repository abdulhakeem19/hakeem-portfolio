"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const A = {
  green: "#27B07A",
  greenTint: "rgba(39,176,122,0.10)",
  border: "rgba(39,176,122,0.18)",
  textHero: "#F5F7F6",
  red: "#EF4444",
  redTint: "rgba(239,68,68,0.06)",
  redBorder: "rgba(239,68,68,0.20)",
};

const EFFECTIVE = "9 June 2026";

function Mark() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 13,
          background: `linear-gradient(150deg, ${A.green}, #1A8A5E)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 24,
          color: "#06120D",
          boxShadow: "0 8px 24px rgba(39,176,122,0.35)",
        }}
      >
        A
      </span>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: A.textHero }}>Affora</span>
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
        <span className="mono" style={{ fontSize: 12, color: A.green, fontWeight: 600 }}>{n}</span>
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
          <span style={{ color: A.green, flexShrink: 0, marginTop: 1 }}>·</span>
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
          background: A.greenTint,
          border: `1px solid ${A.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: A.green,
          marginTop: 1,
        }}
      >
        {n}
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function AfforaDeleteAccountClient() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(900px circle at 50% -5%, rgba(39,176,122,0.10), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      {/* hero */}
      <section className="dev-section" style={{ paddingTop: 48, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Mark />
            <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
              last updated <span style={{ color: A.green }}>{EFFECTIVE}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.1, marginTop: 32, maxWidth: 900 }}
          >
            Delete your account{" "}
            <span className="serif" style={{ color: A.green }}>&amp; data</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 640, marginTop: 20, lineHeight: 1.65 }}>
            You have two ways to delete your Affora account and all associated data.
            Both options are permanent and cannot be undone.
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

          <Section id="in-app" n="01" title="Delete in the app (instant)">
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <Step n={1}>Open <strong style={{ color: "var(--text)" }}>Affora</strong> and sign in.</Step>
              <Step n={2}>Go to the <strong style={{ color: "var(--text)" }}>Profile</strong> tab.</Step>
              <Step n={3}>Scroll to <strong style={{ color: "var(--text)" }}>Account</strong> and tap <strong style={{ color: "var(--text)" }}>Delete account</strong>.</Step>
              <Step n={4}>Confirm. Your account and all associated data are permanently deleted from our servers, removed from your device, and you are signed out.</Step>
            </ol>
          </Section>

          <Section id="by-email" n="02" title="Request by email">
            <p>
              Email{" "}
              <a href="mailto:buildwithhakeem@gmail.com" style={{ color: A.green }}>buildwithhakeem@gmail.com</a>{" "}
              from the address you used to sign in, with the subject{" "}
              <span className="mono" style={{ fontSize: 13, background: A.greenTint, border: `1px solid ${A.border}`, borderRadius: 6, padding: "2px 8px", color: A.green }}>
                Delete my Affora account
              </span>.{" "}
              We will delete your account and data within <strong style={{ color: "var(--text)" }}>7 days</strong> and confirm by reply.
            </p>
          </Section>

          <Section id="what-is-deleted" n="03" title="What is deleted">
            <p>Deleting your account permanently removes <strong style={{ color: "var(--text)" }}>all</strong> of the following from our servers:</p>
            <Bullets
              items={[
                "Your account profile — name, email address, and profile picture.",
                "All financial data you entered — salary, transactions, committed expenses and bills, savings goals, debts, budgets and accounts.",
                "Gamification data — streaks and XP.",
                "Household / couples links and shared-goal membership.",
              ]}
            />
            <p style={{ color: "var(--text-3)" }}>The copy stored locally on your device is also wiped when you delete in the app.</p>
          </Section>

          <Section id="retention" n="04" title="Data retention">
            <div style={{ background: A.greenTint, border: `1px solid ${A.border}`, borderRadius: 12, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              <Bullets
                items={[
                  <>Your data is removed from our active systems <strong style={{ color: "var(--text)" }}>immediately</strong> on deletion.</>,
                  <>Encrypted database backups are automatically purged within <strong style={{ color: "var(--text)" }}>30 days</strong>.</>,
                  <>We do not retain your personal data after that, and we never sold or shared it with third parties.</>,
                ]}
              />
            </div>
          </Section>

          <Section id="contact" n="05" title="Contact">
            <p>Questions about deletion — reach out:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: A.green, color: "#06120D", fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/case/affora" style={{ color: A.green, textDecoration: "underline", textUnderlineOffset: 3 }}>Learn more about Affora →</Link>
              <Link href="/affora/privacy" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy →</Link>
              <Link href="/affora/terms" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Terms of Service →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
