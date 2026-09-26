"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

// Save Him!'s cyan on night navy.
const I = {
  accent: "#22D3EE",
  accentTint: "rgba(34,211,238,0.10)",
  border: "rgba(34,211,238,0.18)",
  textHero: "#F4F7FB",
  ink: "#0A1428",
};

const EFFECTIVE = "26 September 2026";

const SECTIONS = [
  { id: "summary", n: "01", t: "The summary" },
  { id: "collect", n: "02", t: "Data we collect" },
  { id: "device", n: "03", t: "What stays on your device" },
  { id: "permissions", n: "04", t: "Permissions" },
  { id: "third", n: "05", t: "Third parties" },
  { id: "children", n: "06", t: "Children's privacy" },
  { id: "retention", n: "07", t: "Retention & deletion" },
  { id: "changes", n: "08", t: "Changes to this policy" },
  { id: "contact", n: "09", t: "Contact" },
];

/** The app icon and name. */
function Mark() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <Image
        src="/save-him/icon.png"
        alt=""
        width={44}
        height={44}
        style={{ borderRadius: 13, boxShadow: "0 8px 24px rgba(34,211,238,0.25)" }}
      />
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.12em", color: I.textHero }}>SAVE HIM!</span>
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

export default function SaveHimPrivacyClient() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(900px circle at 50% -5%, rgba(111,168,240,0.12), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
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
            Save Him! is a puzzle game for Android developed by Vunexo Labs. This policy explains
            what the game does and does not do with your data. The short answer is that it collects
            nothing and cannot connect to the internet.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["Nothing collected", "No account, no analytics, no ads, no crash-reporting SDKs and no developer backend. We never receive any data from the game."],
              ["No internet access", "The game does not request the internet permission, so it has no way to send anything anywhere."],
              ["Progress stays with you", "Finished levels, settings and play stats are saved only on your device."],
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
            <p>{strong("Save Him! does not collect, transmit, or sell any personal data.")} The game runs entirely on your device. It has no account, no advertising, no analytics and no server, and it does not have permission to use the internet.</p>
          </Section>

          <Section id="collect" n="02" title="Data we collect">
            <p>{accentStrong("None.")} Vunexo Labs never receives any information from Save Him! automatically: not your progress, your device details, how you play, nor anything else.</p>
            <p>The only exception is feedback that {strong("you choose to send")}. If you tap {strong("Send feedback")} (in Settings or the pause menu), the game prepares a message and opens your phone&apos;s share sheet. You pick the app (for example WhatsApp or email) and the recipient, and you can read or edit the message before sending. It contains:</p>
            <Bullets
              items={[
                <>The feelings you tapped and any note you typed.</>,
                <>The game version, the level you were on, your in-game settings and your screen size.</>,
                <>Your play stats: tries, deaths by cause, and time spent per level.</>,
              ]}
            />
            <p>It does not contain your name, contacts, location, device identifiers or anything outside the game. If you send it to us, we use it only to improve the game, and we delete it on request.</p>
          </Section>

          <Section id="device" n="03" title="What stays on your device">
            <p>To remember where you are, the game saves a small amount of data {strong("locally, in the app's private storage")}:</p>
            <Bullets
              items={[
                <>{strong("Progress")}: which levels you have finished.</>,
                <>{strong("Settings")}: sound, vibration, screen shake, game speed, screen orientation, hints and path preview, and which tutorials you have seen.</>,
                <>{strong("Play stats")}: tries, deaths, time and taps per level, shown to you in Settings → Play stats.</>,
              ]}
            />
            <p>This data never leaves your device unless you send it yourself as described above, and it is not linked to you in any way.</p>
          </Section>

          <Section id="permissions" n="04" title="Permissions">
            <p>Save Him! requests {accentStrong("no permissions")}. In particular it does not request internet, location, contacts, camera, microphone, storage or notification access. Vibration uses the system&apos;s standard haptic feedback and needs no permission.</p>
          </Section>

          <Section id="third" n="05" title="Third parties">
            <p>The game contains no third-party SDKs that collect data: no ads, analytics or crash reporting. Save Him! is distributed through {strong("Google Play")}, which handles installation and updates under{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Google&apos;s Privacy Policy</a>. Feedback you choose to share goes through the app you pick, under that app&apos;s own privacy policy.
            </p>
          </Section>

          <Section id="children" n="06" title="Children's privacy">
            <p>Save Him! collects no data from anyone, including children.</p>
          </Section>

          <Section id="retention" n="07" title="Data retention & deletion">
            <p>Because we hold no data, there is nothing for us to retain or delete. Your local progress, settings and play stats are removed when you use Settings → Reset progress, clear the app&apos;s data, or uninstall the game. To have feedback you sent us deleted, email us.</p>
          </Section>

          <Section id="changes" n="08" title="Changes to this policy">
            <p>If a future version changes what the game does with data (for example, adding optional ads), this policy will be updated first. The &ldquo;Last updated&rdquo; date above will change and the new version will be published at the same URL.</p>
          </Section>

          <Section id="contact" n="09" title="Contact">
            <p>Questions about this policy:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: I.accent, color: I.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>Save Him! — Vunexo Labs</p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
