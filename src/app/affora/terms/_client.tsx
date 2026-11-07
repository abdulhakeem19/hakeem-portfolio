"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SubscriptionTerms } from "@/components/legal-subscription-terms";
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

const EFFECTIVE = "7 November 2026";

const SECTIONS = [
  { id: "what-affora-is", n: "01", t: "What Affora is" },
  { id: "your-account", n: "02", t: "Local use" },
  { id: "your-data", n: "03", t: "Your data and content" },
  { id: "acceptable-use", n: "04", t: "Acceptable use" },
  { id: "affora-pro", n: "05", t: "Subscriptions" },
  { id: "household", n: "06", t: "Backups and local storage" },
  { id: "availability", n: "07", t: "Availability & changes" },
  { id: "liability", n: "08", t: "Limitation of liability" },
  { id: "deletion", n: "09", t: "Data deletion" },
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

export default function AfforaPolicyClient() {
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
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginTop: 32, maxWidth: 900 }}
          >
            Terms of{" "}
            <span className="serif" style={{ color: A.green }}>Service</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            Welcome to Affora. These Terms govern your use of the Affora mobile app and related
            services. By using Affora, you agree to these Terms. If you do not
            agree, please do not use the app.
          </motion.p>
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

          <Section id="what-affora-is" n="01" title="What Affora is">
            <p>Affora is a personal-finance app that helps you understand your spendable money, set savings goals, track debts and bills, and build better money habits. Affora is an informational and organisational tool. <strong style={{ color: "var(--text)" }}>It is not a bank, lender, payment service, investment adviser, or a provider of financial, tax, or legal advice.</strong> You are responsible for your own financial decisions.</p>
          </Section>

          <Section id="your-account" n="02" title="Local use and device security">
            <p>The current Affora app works locally and does not require an Affora account or Google sign-in. Google Play may require its own account for subscriptions. Keep your device secure and only allow access to people you trust. If you are under the age of legal majority where you live, obtain a parent or guardian’s approval for purchases.</p>
          </Section>

          <Section id="your-data" n="03" title="Your data and content">
            <p>Your financial entries belong to you and are stored locally. Optional transaction-notification parsing is performed on-device. Affora does not connect to your bank to move money or retrieve balances. You are responsible for reviewing drafts and calculations before relying on them.</p>
            <p>Our <Link href="/affora/privacy" style={{ color: A.green }}>Privacy Policy</Link> explains local storage, optional permissions, backups, and Google Play Billing.</p>
          </Section>

          <Section id="acceptable-use" n="04" title="Acceptable use">
            <p>Use Affora lawfully and only process financial information you are entitled to use. Do not bypass paid-feature checks, redistribute the app or its assets without permission, or interfere with its operation. These restrictions do not limit activities expressly permitted by applicable law.</p>
          </Section>

          <Section id="affora-pro" n="05" title="Subscriptions and Google Play Billing">
            <SubscriptionTerms app="Affora" color={A.green} />
          </Section>

          <Section id="household" n="06" title="Backups and local storage">
            <p>The current app does not provide developer-operated cloud sync or shared household accounts. Export backups through Profile → Backup &amp; restore and keep them somewhere safe. An exported file is outside the app’s control; protect or delete copies separately. We cannot recover a lost local database or a backup we never received.</p>
          </Section>

          <Section id="availability" n="07" title="Availability & changes">
            <p>We aim to keep Affora available and accurate, but we provide it "as is" and cannot guarantee it will be uninterrupted, error-free, or that calculations will suit every situation. We may add, change, or remove features, and we may update these Terms; material changes will be reflected by the "last updated" date above.</p>
          </Section>

          <Section id="liability" n="08" title="Limitation of liability">
            <p>To the maximum extent permitted by law, Affora and its creator are not liable for any indirect, incidental, or consequential losses, or for financial decisions you make based on information in the app. Affora is a budgeting aid, not a guarantee of any financial outcome. Nothing in these terms excludes liability that cannot legally be excluded or limits mandatory consumer rights.</p>
          </Section>

          <Section id="deletion" n="09" title="Data deletion">
            <p>Use Profile → Clear all data or Android’s clear-storage controls to remove local app data. Manage exported backup copies separately. There is no current Affora server account to delete. Subscription cancellation is a separate step in Google Play.</p>
            <p>See <Link href="/affora/delete-account" style={{ color: A.green }}>Data deletion instructions</Link>. If your question concerns a legacy cloud-account version, email support and specify the version; do not send financial records or passwords.</p>
          </Section>

          <Section id="contact" n="10" title="Contact">
            <p>Questions about these Terms — reach out:</p>
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
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
