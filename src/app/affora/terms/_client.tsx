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
  { id: "what-affora-is", n: "01", t: "What Affora is" },
  { id: "your-account", n: "02", t: "Your account" },
  { id: "your-data", n: "03", t: "Your data and content" },
  { id: "acceptable-use", n: "04", t: "Acceptable use" },
  { id: "affora-pro", n: "05", t: "Affora Pro & subscriptions" },
  { id: "household", n: "06", t: "Household / Couples features" },
  { id: "availability", n: "07", t: "Availability & changes" },
  { id: "liability", n: "08", t: "Limitation of liability" },
  { id: "deletion", n: "09", t: "Account deletion" },
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
            services. By creating an account or using Affora, you agree to these Terms. If you do not
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

          <Section id="your-account" n="02" title="Your account">
            <p>You sign in with Google. You are responsible for keeping access to your Google account secure and for the activity under your Affora account. You must be at least 13 years old (or the minimum digital-consent age in your country) to use Affora.</p>
          </Section>

          <Section id="your-data" n="03" title="Your data and content">
            <p>The financial information you enter (salary, expenses, goals, debts, etc.) belongs to you. You grant us permission to store and process it solely to provide the app's features, including syncing it to your account. Our handling of your data is described in our{" "}
              <Link href="/affora/privacy" style={{ color: A.green, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>,{" "}
              which forms part of these Terms.
            </p>
          </Section>

          <Section id="acceptable-use" n="04" title="Acceptable use">
            <p>You agree not to misuse Affora — including:</p>
            <Bullets
              items={[
                "Attempting to access other users' data",
                "Disrupting or overloading the service",
                "Reverse-engineering the app",
                "Using it for any unlawful purpose",
              ]}
            />
            <p>We may suspend or terminate accounts that violate these Terms.</p>
          </Section>

          <Section id="affora-pro" n="05" title="Affora Pro & subscriptions">
            <p>The core app is free. <strong style={{ color: "var(--text)" }}>Affora Pro</strong> is an optional auto-renewing subscription (₹99/month, with any free-trial period shown at purchase) that unlocks additional features.</p>
            <Bullets
              items={[
                <>Subscriptions are billed and managed through your <strong style={{ color: "var(--text)" }}>Google Play</strong> account.</>,
                "They renew automatically until cancelled.",
                "You can cancel anytime in Google Play; cancellation takes effect at the end of the current billing period.",
                "Refunds are handled per Google Play's policies.",
                "We may change Pro pricing or features with reasonable notice.",
              ]}
            />
          </Section>

          <Section id="household" n="06" title="Household / Couples features">
            <p>If you link a household, certain shared information (e.g. shared goals) becomes visible to the members you invite. Only invite people you trust. Individual transactions remain private to each member.</p>
          </Section>

          <Section id="availability" n="07" title="Availability & changes">
            <p>We aim to keep Affora available and accurate, but we provide it "as is" and cannot guarantee it will be uninterrupted, error-free, or that calculations will suit every situation. We may add, change, or remove features, and we may update these Terms; material changes will be reflected by the "last updated" date above.</p>
          </Section>

          <Section id="liability" n="08" title="Limitation of liability">
            <p>To the maximum extent permitted by law, Affora and its creator are not liable for any indirect, incidental, or consequential losses, or for financial decisions you make based on information in the app. Affora is a budgeting aid, not a guarantee of any financial outcome.</p>
          </Section>

          <Section id="deletion" n="09" title="Account deletion">
            <p>You can delete your account and all associated data at any time from <strong style={{ color: "var(--text)" }}>Profile → Delete account</strong> in the app, or by contacting us at the email below. Deletion is permanent.</p>
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
