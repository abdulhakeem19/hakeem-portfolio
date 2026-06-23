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

const EFFECTIVE = "23 June 2026";

const SECTIONS = [
  { id: "what-kaasu-is", n: "01", t: "What Kaasu is" },
  { id: "what-kaasu-does-not-do", n: "02", t: "What Kaasu does not do" },
  { id: "accuracy", n: "03", t: "Accuracy & your responsibility" },
  { id: "your-data", n: "04", t: "Your data" },
  { id: "acceptable-use", n: "05", t: "Acceptable use" },
  { id: "warranty", n: "06", t: "No warranty" },
  { id: "liability", n: "07", t: "Limitation of liability" },
  { id: "changes", n: "08", t: "Changes to these terms" },
  { id: "contact", n: "09", t: "Contact" },
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

export default function KaasuTermsClient() {
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
            Terms of{" "}
            <span className="serif" style={{ color: K.accent }}>Service</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            These terms govern your use of <strong style={{ color: "var(--text)" }}>Kaasu</strong>, a privacy-first
            expense tracker for Android. By installing or using Kaasu, you agree to these terms. If you do not agree,
            please do not use the app. How your data is handled is described in our{" "}
            <Link href="/kaasu/privacy" style={{ color: K.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>.
          </motion.p>
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

          <Section id="what-kaasu-is" n="01" title="What Kaasu is">
            <p>Kaasu is a personal-finance aid that reads payment notifications on your device and turns them into a local spending log. It is provided {strong("as-is")}, to help you track your spending.</p>
            <p>Kaasu is {strong("not")} a bank, payment service, or financial advisor, and is not a substitute for your bank&apos;s official statements.</p>
          </Section>

          <Section id="what-kaasu-does-not-do" n="02" title="What Kaasu does not do">
            <Bullets
              items={[
                <>Kaasu does {strong("not")} move money, make payments, or initiate transactions.</>,
                <>Kaasu does {strong("not")} connect to, log in to, or access your bank or payment accounts.</>,
                <>Kaasu does {strong("not")} upload your data to any server. Everything stays on your device.</>,
              ]}
            />
          </Section>

          <Section id="accuracy" n="03" title="Accuracy and your responsibility">
            <p>Transaction capture is {strong("best-effort")}: Kaasu parses notification text, and some formats may be read imperfectly or missed. {strong("Always verify important figures against your bank's official records.")}</p>
            <Bullets
              items={[
                "You are responsible for the accuracy of any transaction you add or edit manually.",
                <>You are responsible for your own backups. Clearing app data, uninstalling, or changing devices will remove your local data — export a backup first (<span className="mono" style={{ fontSize: 12 }}>Settings → Back up data</span>).</>,
              ]}
            />
          </Section>

          <Section id="your-data" n="04" title="Your data">
            <p>Your data is stored locally on your device and is yours. Kaasu does not collect, transmit, or sell it. How your data is handled is described in the{" "}
              <Link href="/kaasu/privacy" style={{ color: K.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>.
            </p>
          </Section>

          <Section id="acceptable-use" n="05" title="Acceptable use">
            <p>You agree to use Kaasu only for lawful, personal purposes. You may not attempt to misuse the app, reverse-engineer it for malicious purposes, or use it in any way that violates applicable law.</p>
          </Section>

          <Section id="warranty" n="06" title="No warranty">
            <p>Kaasu is provided &quot;as-is&quot; and &quot;as-available&quot;, without warranties of any kind, express or implied, including but not limited to accuracy, fitness for a particular purpose, or uninterrupted operation. You use the app at your own discretion and risk.</p>
          </Section>

          <Section id="liability" n="07" title="Limitation of liability">
            <p>To the maximum extent permitted by law, the developer of Kaasu shall not be liable for any indirect, incidental, or consequential damages, or for any financial decisions made in reliance on the app&apos;s figures. Kaasu is a tracking aid, not financial advice.</p>
          </Section>

          <Section id="changes" n="08" title="Changes to these terms">
            <p>These terms may be updated from time to time. The &quot;last updated&quot; date above will change, and continued use of the app after an update constitutes acceptance of the revised terms.</p>
          </Section>

          <Section id="contact" n="09" title="Contact">
            <p>Questions about these terms? Reach out:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: K.accent, color: K.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>app package — com.kaasu.app</p>
            <p style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/kaasu/privacy" style={{ color: K.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy →</Link>
              <Link href="/kaasu/delete-account" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Delete your data →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
