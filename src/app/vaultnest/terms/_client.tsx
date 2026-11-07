"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SubscriptionTerms } from "@/components/legal-subscription-terms";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const I = {
  bg: "#07130F",
  surface: "#0E1B16",
  featured: "#152922",
  accent: "#34D399",
  accentTint: "rgba(52,211,153,0.10)",
  border: "rgba(52,211,153,0.18)",
  borderEm: "rgba(52,211,153,0.30)",
  textHero: "#F2F7F4",
  textSecondary: "#8FA69C",
  ink: "#04140E",
};

const EFFECTIVE = "7 November 2026";

const SECTIONS = [
  { id: "service", n: "01", t: "Using VaultNest" },
  { id: "files", n: "02", t: "Files and backups" },
  { id: "connections", n: "03", t: "Connected services" },
  { id: "billing", n: "04", t: "Subscriptions" },
  { id: "privacy", n: "05", t: "Privacy" },
  { id: "rights", n: "06", t: "Your rights" },
  { id: "contact", n: "07", t: "Contact" },
];

function Mark() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 13,
          background: `linear-gradient(150deg, ${I.accent}, #0E9E6E)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 24,
          color: I.ink,
          boxShadow: "0 8px 24px rgba(52,211,153,0.35)",
        }}
      >
        V
      </span>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: I.textHero }}>VaultNest</span>
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

export default function VaultNestTermsClient() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(900px circle at 50% -5%, rgba(52,211,153,0.12), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
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
            Terms of{" "}
            <span className="serif" style={{ color: I.accent }}>Service</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", marginTop: 20, lineHeight: 1.65 }}>These terms apply to VaultNest File Vault for Android, provided by Vunexo Labs (Abdul Hakeem). By using the app you agree to these terms. If you do not agree, stop using it.</motion.p>

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

          <Section id="service" n="01" title="Using VaultNest">
            <p>VaultNest helps you browse, organize, move, copy, delete, and transfer files and use an optional private Vault. We grant you a personal, non-exclusive license to use it lawfully. Only access files, devices, and services you are authorized to use. Do not bypass paid-feature checks or redistribute our code, branding, or assets without permission, except as applicable law permits.</p>
            <p>The app contains no ads. If you are below the age of legal majority where you live, obtain a parent or guardian’s approval for purchases.</p>
          </Section>
          <Section id="files" n="02" title="Your files and backups">
            <p>Your files remain yours. File operations can modify or delete data, including on connected storage. Review the selected files and destination before confirming. Recycle-bin behavior depends on the operation and storage provider; recovery is not guaranteed. Keep independent backups of important files.</p>
            <p>Protect your device and Vault credentials. We cannot promise to recover encrypted files, forgotten credentials, deleted data, or files we never received. Clearing app storage or uninstalling may remove app-private Vault data and connection settings; exported and remote copies are separate.</p>
          </Section>
          <Section id="connections" n="03" title="Cloud, remote, and PC connections">
            <p>Connections to cloud providers, NAS/remote servers, or the local Access-from-PC server are optional and directed by you. The connected provider’s terms and storage limits apply. Use trusted networks and protect the credentials you configure. Enable local file access only when needed and disable it when finished.</p>
            <p>We do not operate those third-party storage services and cannot guarantee their availability or restore files deleted from them. Disconnecting VaultNest does not delete files already transferred to a provider.</p>
          </Section>
          <Section id="billing" n="04" title="Subscriptions and billing">
            <SubscriptionTerms app="VaultNest" color={I.accent} />
          </Section>
          <Section id="privacy" n="05" title="Privacy and deletion">
            <p>Our <Link href="/vaultnest/privacy" style={{ color: I.accent }}>Privacy Policy</Link> explains local files, credentials, connected providers, and Google Play billing. We do not operate a VaultNest account backend. Manage local app data through Android settings and manage remote files with the provider. Cancel subscriptions separately in Google Play.</p>
          </Section>
          <Section id="rights" n="06" title="Availability and your rights">
            <p>We may update the app and these terms. We do not promise uninterrupted operation, compatibility with every device, or that every file operation will succeed. To the extent permitted by applicable law, the app is provided as available and we are not responsible for indirect losses or data loss caused by circumstances outside our control.</p>
            <p>Nothing here excludes liability that cannot legally be excluded or limits mandatory consumer rights, including remedies for faulty digital content. Updates do not remove rights that apply to existing purchases under applicable law. If a term is unenforceable, the remaining terms apply to the extent permitted by law.</p>
          </Section>
          <Section id="contact" n="07" title="Contact and changes">
            <p>We revise the date above when these terms change and communicate material changes as appropriate. Questions or purchase support: Vunexo Labs · Abdul Hakeem · <a href="mailto:buildwithhakeem@gmail.com" style={{ color: I.accent }}>buildwithhakeem@gmail.com</a>.</p>
            <p><Link href="/vaultnest/privacy" style={{ color: I.accent }}>Privacy Policy →</Link></p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
