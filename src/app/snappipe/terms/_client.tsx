"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const S = {
  bg: "#03071E",
  surface: "#0A0E1A",
  featured: "#0F1730",
  accent: "#4F8BFF",
  accentTint: "rgba(79,139,255,0.10)",
  border: "rgba(79,139,255,0.18)",
  borderEm: "rgba(79,139,255,0.30)",
  textHero: "#EAF1FF",
  textSecondary: "#9DBCFF",
  ink: "#FFFFFF",
};

const EFFECTIVE = "26 June 2026";

const SECTIONS = [
  { id: "the-service", n: "01", t: "The service" },
  { id: "your-content", n: "02", t: "Your content & responsibility" },
  { id: "acceptable-use", n: "03", t: "Acceptable use" },
  { id: "pro", n: "04", t: "SnapPipe Pro" },
  { id: "warranty", n: "05", t: "No warranty" },
  { id: "liability", n: "06", t: "Limitation of liability" },
  { id: "privacy", n: "07", t: "Privacy" },
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
          background: `linear-gradient(150deg, #0B5FFF, #0A2A8C)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 24,
          color: S.ink,
          boxShadow: "0 8px 24px rgba(11,95,255,0.40)",
        }}
      >
        S
      </span>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: S.textHero }}>SnapPipe</span>
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
        <span className="mono" style={{ fontSize: 12, color: S.accent, fontWeight: 600 }}>{n}</span>
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
          <span style={{ color: S.accent, flexShrink: 0, marginTop: 1 }}>·</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const strong = (text: React.ReactNode) => <strong style={{ color: "var(--text)" }}>{text}</strong>;

export default function SnapPipeTermsClient() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(900px circle at 50% -5%, rgba(79,139,255,0.12), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      {/* hero */}
      <section className="dev-section" style={{ paddingTop: 48, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Mark />
            <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
              last updated <span style={{ color: S.accent }}>{EFFECTIVE}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginTop: 32, maxWidth: 900 }}
          >
            Terms of{" "}
            <span className="serif" style={{ color: S.accent }}>Service</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            These terms govern your use of <strong style={{ color: "var(--text)" }}>SnapPipe</strong>, a screenshot
            organizer app by <strong style={{ color: "var(--text)" }}>Vunexo Labs</strong>. By installing or using
            SnapPipe, you agree to these terms. If you do not agree, please do not use the app. How your data is
            handled is described in our{" "}
            <Link href="/snappipe/privacy" style={{ color: S.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>.
          </motion.p>
        </motion.div>
      </section>

      {/* TOC */}
      <section className="dev-section" style={{ paddingTop: 40, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="dev-chip mono" style={{ cursor: "pointer", fontSize: 11 }}>
              <span style={{ color: S.accent }}>{s.n}</span> {s.t.toLowerCase()}
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

          <Section id="the-service" n="01" title="The service">
            <p>SnapPipe is an on-device utility that helps you organize, rename, tag, compress, blur, export, and clean up screenshots stored on your device. It is provided {strong("as-is")} for your personal use.</p>
          </Section>

          <Section id="your-content" n="02" title="Your content and your responsibility">
            <Bullets
              items={[
                <>Your screenshots and the data you create remain {strong("yours")}. We claim no ownership.</>,
                <>You are responsible for the screenshots you process and share, and for ensuring you have the right to use, modify, and distribute them.</>,
                <>Features that create copies (compress, blur, PDF export) or delete files act on the files you select. {strong("Deletion is permanent once you confirm it")} in the Android system dialog (subject to the system Trash where available). Keep your own backups of anything important.</>,
              ]}
            />
          </Section>

          <Section id="acceptable-use" n="03" title="Acceptable use">
            <p>You agree not to use SnapPipe to break the law, to infringe others&apos; rights, or to process content you are not permitted to handle. You agree not to attempt to reverse engineer, tamper with, or misuse the app beyond what the law allows.</p>
          </Section>

          <Section id="pro" n="04" title="SnapPipe Pro">
            <p>Some features are part of an optional one-time purchase, &quot;SnapPipe Pro&quot;. Purchases are handled by your app store and are subject to that store&apos;s terms and refund policies. The set of free vs. Pro features may change over time.</p>
          </Section>

          <Section id="warranty" n="05" title="No warranty">
            <p>SnapPipe is provided {strong("“as is” and “as available”, without warranties of any kind")}, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the app will be error-free or uninterrupted, or that any operation (compression, export, deletion, backup, restore) will always succeed without data loss.</p>
          </Section>

          <Section id="liability" n="06" title="Limitation of liability">
            <p>To the maximum extent permitted by law, Vunexo Labs is not liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, files, or profits, arising from your use of (or inability to use) SnapPipe — including any accidental deletion or modification of your files. Because SnapPipe operates locally and stores nothing on our side, recovery of lost on-device data is your responsibility.</p>
          </Section>

          <Section id="privacy" n="07" title="Privacy">
            <p>Your use of SnapPipe is also governed by our{" "}
              <Link href="/snappipe/privacy" style={{ color: S.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>, which explains
              that the app is local-first with no cloud, accounts, or tracking.
            </p>
          </Section>

          <Section id="changes" n="08" title="Changes to these terms">
            <p>We may update these terms from time to time. The &quot;Last updated&quot; date reflects the current version; continued use after a change means you accept the updated terms.</p>
          </Section>

          <Section id="contact" n="09" title="Contact">
            <p>Questions about these terms? Email:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: S.accent, color: S.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>SnapPipe — by Vunexo Labs</p>
            <p style={{ marginTop: 4 }}>
              <Link href="/snappipe/privacy" style={{ color: S.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
