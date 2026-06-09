"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const A = {
  bg: "#07120D",
  surface: "#0D1F16",
  featured: "#162C20",
  green: "#27B07A",
  greenTint: "rgba(39,176,122,0.10)",
  border: "rgba(39,176,122,0.18)",
  borderEm: "rgba(39,176,122,0.30)",
  textHero: "#F5F7F6",
  textSecondary: "#8B9B92",
};

const EFFECTIVE = "9 June 2026";

const SECTIONS = [
  { id: "what-we-collect", n: "01", t: "Information we collect" },
  { id: "how-stored", n: "02", t: "How your data is stored" },
  { id: "how-we-use", n: "03", t: "How we use your data" },
  { id: "payments", n: "04", t: "Payments" },
  { id: "sharing", n: "05", t: "Sharing" },
  { id: "retention", n: "06", t: "Data retention & deletion" },
  { id: "permissions", n: "07", t: "Permissions" },
  { id: "children", n: "08", t: "Children" },
  { id: "changes", n: "09", t: "Changes to this policy" },
  { id: "contact", n: "10", t: "Contact" },
];

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

export default function AfforaPrivacyClient() {
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
              effective <span style={{ color: A.green }}>{EFFECTIVE}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginTop: 32, maxWidth: 900 }}
          >
            Privacy{" "}
            <span className="serif" style={{ color: A.green }}>Policy</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            Affora helps you understand and manage your personal finances. This policy explains
            what we collect, why, and your choices.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["Locally stored", "Most of your financial data lives on your device, encrypted at rest where the OS supports it."],
              ["Optional cloud sync", "Cloud backup is opt-in, sign-in-gated, and all traffic uses HTTPS."],
              ["You own your data", "Clear local data, sign out, or delete your account and cloud data at any time."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: A.greenTint, border: `1px solid ${A.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ color: A.green, fontSize: 15 }}>✓</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: A.textHero }}>{t}</span>
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
              <span style={{ color: A.green }}>{s.n}</span> {s.t.toLowerCase()}
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

          <Section id="what-we-collect" n="01" title="Information we collect">
            <p><strong style={{ color: "var(--text)" }}>Account information (via Google Sign-In).</strong> When you sign in, we receive your name, email address, and profile picture from Google to create and identify your account.</p>
            <p><strong style={{ color: "var(--text)" }}>Financial information you enter.</strong> Your salary, committed expenses (bills, EMIs), transactions, savings goals, debts, streaks, net-worth entries, and related notes. You provide this directly; we do not import it from your bank.</p>
            <p><strong style={{ color: "var(--text)" }}>Household information.</strong> If you link a household, we store the household membership and invite code so you and your partner can share goals.</p>
          </Section>

          <Section id="how-stored" n="02" title="How your data is stored">
            <Bullets
              items={[
                <>Most of your financial data is stored <strong style={{ color: A.green }}>locally on your device</strong> (encrypted at rest by the operating system where supported).</>,
                <>Your data syncs to our backend server (tied to your account) so it survives reinstalls and device changes, and to enable partner linking. All network traffic uses <strong style={{ color: "var(--text)" }}>HTTPS</strong>.</>,
              ]}
            />
          </Section>

          <Section id="how-we-use" n="03" title="How we use your data">
            <Bullets
              items={[
                "To provide the app's features (budgets, goals, gamification, household sharing).",
                "To authenticate you and keep you signed in.",
                <>We do <strong style={{ color: "var(--text)" }}>not</strong> sell your data or use it for advertising.</>,
              ]}
            />
          </Section>

          <Section id="payments" n="04" title="Payments">
            <p>Affora Pro is an optional auto-renewing subscription processed by <strong style={{ color: "var(--text)" }}>Google Play</strong>. We do not receive or store your payment-card details.</p>
          </Section>

          <Section id="sharing" n="05" title="Sharing">
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Google</strong> processes your sign-in and any Affora Pro payment. See Google's Privacy Policy.</>,
                <><strong style={{ color: "var(--text)" }}>Household partners</strong> can see shared household goals you choose to create.</>,
                <>We do <strong style={{ color: "var(--text)" }}>not</strong> share your personal financial data with any other third party, except where required by law.</>,
              ]}
            />
          </Section>

          <Section id="retention" n="06" title="Data retention & deletion">
            <Bullets
              items={[
                <>You can clear all local data any time from <strong style={{ color: "var(--text)" }}>Profile → Clear All Data</strong> in the app.</>,
                <>You can sign out to remove your session from the device.</>,
                <>To delete your account and all associated data, go to <strong style={{ color: "var(--text)" }}>Profile → Delete account</strong> in the app, or contact us at the email below. Deletion is permanent.</>,
              ]}
            />
          </Section>

          <Section id="permissions" n="07" title="Permissions">
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Notifications</strong> — daily money-ritual reminders and bill nudges.</>,
                <><strong style={{ color: "var(--text)" }}>Internet</strong> — to sign in and sync your data.</>,
              ]}
            />
          </Section>

          <Section id="children" n="08" title="Children">
            <p>Affora is not directed at children under 13 and we do not knowingly collect their data.</p>
          </Section>

          <Section id="changes" n="09" title="Changes to this policy">
            <p>We may update this policy as Affora evolves. Material changes will be reflected here with a new effective date.</p>
          </Section>

          <Section id="contact" n="10" title="Contact">
            <p>Questions or deletion requests — reach out:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: A.green, color: "#06120D", fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/case/affora" style={{ color: A.green, textDecoration: "underline", textUnderlineOffset: 3 }}>Learn more about Affora →</Link>
              <Link href="/affora/terms" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Terms of Service →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
