"use client";

import { motion } from "framer-motion";
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

const EFFECTIVE = "6 July 2026";

const SECTIONS = [
  { id: "summary", n: "01", t: "The summary" },
  { id: "collect", n: "02", t: "Data we collect" },
  { id: "files", n: "03", t: "Access to files" },
  { id: "network", n: "04", t: "Features that use the network" },
  { id: "purchases", n: "05", t: "In-app purchases" },
  { id: "permissions", n: "06", t: "Permissions summary" },
  { id: "children", n: "07", t: "Children's privacy" },
  { id: "retention", n: "08", t: "Retention & deletion" },
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

export default function VaultNestPrivacyClient() {
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
            Privacy{" "}
            <span className="serif" style={{ color: I.accent }}>Policy</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            VaultNest File Vault is a privacy-first file manager for Android developed by Vunexo Labs.
            This policy explains what the app does and does not do with your data — and the short answer
            is that it does not collect, transmit, or sell any of it.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["Nothing collected", "No analytics, no ads, no crash-reporting SDKs, no developer backend. We never receive your files or personal data."],
              ["Everything on-device", "Browsing, organizing, and cleaning up happens on your device. File contents are never sent anywhere by the app."],
              ["You choose the endpoints", "Cloud, NAS, and PC transfers go directly between your device and services you connect. Nothing passes through us."],
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
            <p>{strong("VaultNest does not collect, transmit, or sell your personal data.")} Everything the app does happens on your device, or directly between your device and services you yourself connect. We operate no servers that receive your files or personal information.</p>
            <Bullets
              items={[
                <>{strong("No data collection.")} No analytics, no advertising, no crash-reporting SDKs, and no developer-owned backend. We create no accounts.</>,
                <>{strong("Files stay on your device.")} File contents are {accentStrong("never")} sent anywhere by the app.</>,
                <>{strong("Network features are yours to initiate.")} Cloud, NAS, and Access-from-PC features connect only to endpoints {accentStrong("you")} choose. No data passes through Vunexo Labs.</>,
              ]}
            />
          </Section>

          <Section id="collect" n="02" title="Data we collect">
            <p>{accentStrong("None.")} VaultNest has no analytics, no advertising, no crash-reporting SDKs, and no developer-owned backend. We do not create accounts, and we never receive your files, file names, folder contents, or usage data.</p>
          </Section>

          <Section id="files" n="03" title="Access to files on your device">
            <p>To function as a file manager, VaultNest requests access to files and media on your device (including {strong("“All files access”")} / <span className="mono">MANAGE_EXTERNAL_STORAGE</span> on supported versions). This access is used {accentStrong("only")} to let you browse, view, organize, move, copy, delete, restore, and clean up files {strong("on your own device")}, at your direction. File contents are never sent anywhere by the app.</p>
          </Section>

          <Section id="network" n="04" title="Features that use the network">
            <p>The app uses the internet only for features you explicitly initiate, and only between your device and endpoints {strong("you")} choose. {accentStrong("No data passes through Vunexo Labs.")}</p>
            <Bullets
              items={[
                <>{strong("Cloud storage (Google Drive, Dropbox).")} If you connect a cloud account, VaultNest uses the provider&apos;s official OAuth sign-in to obtain permission to read and write files in your own account. The app talks directly to Google/Dropbox servers. We never see your cloud credentials or files. OAuth tokens are stored {strong("encrypted on your device")} (Android Keystore-backed EncryptedSharedPreferences) and can be removed at any time via {strong("Disconnect")}. Your use of those services is also governed by Google&apos;s and Dropbox&apos;s own privacy policies.</>,
                <>{strong("Access from PC (built-in FTP server).")} When you turn this on, your device runs a local FTP server so computers on your own Wi&#8209;Fi network can transfer files. It runs only while you enable it, is protected by a username/password you set, and exposes only what you choose. Nothing leaves your local network and nothing reaches us.</>,
                <>{strong("Remote / NAS (SMB, FTP, SFTP clients).")} If you add a remote server, VaultNest connects directly to the address {strong("you")} enter to browse and transfer files. Connection details and passwords are stored {strong("encrypted on your device")} only.</>,
              ]}
            />
          </Section>

          <Section id="purchases" n="05" title="In-app purchases">
            <p>The optional {strong("“Pro”")} upgrade is processed by {strong("Google Play Billing")}. Google handles the payment; VaultNest never receives or stores your payment details. Google&apos;s processing is governed by{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Google&apos;s Privacy Policy</a>.
            </p>
          </Section>

          <Section id="permissions" n="06" title="Permissions summary">
            <Bullets
              items={[
                <>{strong("Media / All files access")} — browse and manage files on your device.</>,
                <>{strong("Biometric")} — optional lock for the private Vault.</>,
                <>{strong("Internet / network state / Wi‑Fi state")} — cloud, remote, and Access-from-PC features above.</>,
                <>{strong("Foreground service (data sync / media playback)")} — keep the FTP server or media playback running while in use, with a visible notification.</>,
                <>{strong("Notifications")} — show the running-service notification.</>,
                <>{strong("Receive boot completed")} — optional restore of scheduled state after reboot.</>,
              ]}
            />
          </Section>

          <Section id="children" n="07" title="Children's privacy">
            <p>VaultNest is a general-purpose utility and is not directed at children. We collect no data from anyone.</p>
          </Section>

          <Section id="retention" n="08" title="Data retention & deletion">
            <p>Because we hold no data, there is nothing for us to retain or delete on a server. All app data (settings, encrypted tokens/credentials, recycle-bin contents) lives on your device and is removed when you clear the app&apos;s data or uninstall it. Disconnecting a cloud or remote connection removes its stored tokens/credentials immediately.</p>
          </Section>

          <Section id="changes" n="09" title="Changes to this policy">
            <p>If this policy changes, the &ldquo;Last updated&rdquo; date above will change and the new version will be published at the same URL.</p>
          </Section>

          <Section id="contact" n="10" title="Contact">
            <p>Questions about this policy:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: I.accent, color: I.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>VaultNest File Vault — Vunexo Labs</p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
