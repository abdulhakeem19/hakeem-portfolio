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
  { id: "who-we-are", n: "01", t: "Who we are" },
  { id: "data-accessed", n: "02", t: "Data SnapPipe accesses" },
  { id: "permissions", n: "03", t: "Permissions we request" },
  { id: "collect-share", n: "04", t: "Data we collect & share" },
  { id: "data-leaving", n: "05", t: "When data leaves your device" },
  { id: "originals", n: "06", t: "Originals are never modified" },
  { id: "purchases", n: "07", t: "Purchases" },
  { id: "children", n: "08", t: "Children's privacy" },
  { id: "retention", n: "09", t: "Retention & deletion" },
  { id: "changes", n: "10", t: "Changes to this policy" },
  { id: "contact", n: "11", t: "Contact" },
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
const accentStrong = (text: React.ReactNode) => <strong style={{ color: S.accent }}>{text}</strong>;
const mono = (text: React.ReactNode) => <span className="mono" style={{ fontSize: 12 }}>{text}</span>;

export default function SnapPipePrivacyClient() {
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
            Privacy{" "}
            <span className="serif" style={{ color: S.accent }}>Policy</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            SnapPipe is a private, local-first screenshot organizer by <strong style={{ color: "var(--text)" }}>Vunexo Labs</strong>.
            This policy explains, in plain language, what the app does and does not do with your data.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["Runs on your device", "No servers, no accounts. Your screenshots and everything you create never leave your phone unless you share or export them."],
              ["Collects nothing", "No analytics, no tracking, no ads. Because we never receive your data, we cannot sell, rent, or disclose it."],
              ["Originals untouched", "Compression and blur always write new files. Deletion is routed through Android's confirm dialog."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: S.accentTint, border: `1px solid ${S.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ color: S.accent, fontSize: 15 }}>✓</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: S.textHero }}>{t}</span>
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

          <Section id="who-we-are" n="01" title="Who we are">
            <p>SnapPipe is developed by {strong("Vunexo Labs")}. For any privacy question you can reach us at {accentStrong("buildwithhakeem@gmail.com")}.</p>
            <p>{accentStrong("The short version:")} SnapPipe runs entirely on your device. It has no servers, no accounts, and no analytics. Your screenshots and everything you create in the app never leave your phone unless {strong("you")} explicitly share or export them.</p>
          </Section>

          <Section id="data-accessed" n="02" title="Data SnapPipe accesses">
            <Bullets
              items={[
                <>{strong("Your screenshots (images).")} With your permission, SnapPipe reads images from your device&apos;s media library (the system &quot;Screenshots&quot; album and similarly named images) so it can show, organize, compress, export, and clean them up. SnapPipe reads this media on-device only and {accentStrong("never uploads it.")}</>,
                <>{strong("App data you create.")} Tags, collections, favorites, custom names, and your settings are stored locally in an on-device database. This data is yours and stays on the device.</>,
                <>{strong("Recognized text (OCR).")} If you enable &quot;Search inside screenshots&quot; or use smart blur, SnapPipe reads the text in your images using on-device text recognition (bundled ML Kit). This runs entirely on your phone; recognized text is stored only in the local database and is never uploaded. You can turn it off and clear the index at any time in Settings.</>,
              ]}
            />
          </Section>

          <Section id="permissions" n="03" title="Permissions we request">
            <Bullets
              items={[
                <>{strong("Photos / Media access")} ({mono("READ_MEDIA_IMAGES")} on Android 13+, scoped storage read on older versions; {mono("READ_MEDIA_VISUAL_USER_SELECTED")} for Android 14 partial access) — to read and manage your screenshots. SnapPipe works with full or &quot;selected photos&quot; access.</>,
                <>{strong("Notifications")} (optional, {mono("POST_NOTIFICATIONS")}) — only if you enable cleanup reminders.</>,
                <>SnapPipe does {strong("not")} request contacts, location, SMS, call log, microphone, camera, or all-files access.</>,
              ]}
            />
          </Section>

          <Section id="collect-share" n="04" title="Data we collect and share">
            <p>We collect {accentStrong("nothing")}. SnapPipe has:</p>
            <Bullets
              items={[
                <>{strong("No cloud")} — there is no SnapPipe server; nothing is uploaded.</>,
                <>{strong("No account")} — you don&apos;t sign in.</>,
                <>{strong("No analytics or tracking")} — no usage data, identifiers, or crash analytics are sent anywhere.</>,
                <>{strong("No advertising")} — no ad SDKs, no profiling.</>,
              ]}
            />
            <p>Because we never receive your data, we cannot sell, rent, or disclose it.</p>
          </Section>

          <Section id="data-leaving" n="05" title="When data leaves your device">
            <p>Only when you choose an action that involves another app or location:</p>
            <Bullets
              items={[
                <>{strong("Share")} — sending screenshots or an exported PDF opens Android&apos;s system share sheet; the app you pick receives the file. That app&apos;s own privacy policy then applies.</>,
                <>{strong("Export PDF / Compress / Save copy")} — creates new files in your device storage (e.g. the {mono("Pictures/SnapPipe")} album or a folder you select). These stay on your device until you move or share them.</>,
                <>{strong("Backup")} — &quot;Back up data&quot; writes a JSON file containing only your SnapPipe metadata (tags, collections, favorites, custom names — no images) to a location you choose. Restoring reads such a file you select.</>,
              ]}
            />
            <p>In every case, you initiate the action and choose the destination.</p>
          </Section>

          <Section id="originals" n="06" title="Originals are never modified">
            <p>Compression and the blur tool always write {strong("new")} files. Your original screenshots are left untouched. Deletion is routed through the Android system delete dialog, so you confirm every removal and files can be recovered from the system Trash where the OS supports it.</p>
          </Section>

          <Section id="purchases" n="07" title="Purchases (SnapPipe Pro)">
            <p>SnapPipe Pro is a one-time, optional unlock for advanced features. Any purchase is processed by the app store (e.g. Google Play). We do not receive or store your payment details; the store handles the transaction under its own privacy policy.</p>
          </Section>

          <Section id="children" n="08" title="Children's privacy">
            <p>SnapPipe is not directed at children under 13 and does not knowingly collect data from them (it does not collect data from anyone).</p>
          </Section>

          <Section id="retention" n="09" title="Data retention and deletion">
            <p>Your data lives on your device for as long as you keep it. You can remove it at any time:</p>
            <Bullets
              items={[
                "Remove individual items, tags, or collections inside the app.",
                <>Use {mono("Settings → Clear SnapPipe data")} to erase all SnapPipe metadata.</>,
                "Uninstalling the app removes its local database.",
              ]}
            />
          </Section>

          <Section id="changes" n="10" title="Changes to this policy">
            <p>If this policy changes, we will update the date above and publish the new version. Material changes will be noted in the app&apos;s &quot;What&apos;s new&quot;.</p>
          </Section>

          <Section id="contact" n="11" title="Contact">
            <p>Questions about privacy? Email:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: S.accent, color: S.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>SnapPipe — by Vunexo Labs</p>
            <p style={{ marginTop: 4 }}>
              <Link href="/snappipe/terms" style={{ color: S.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Terms of Service →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
