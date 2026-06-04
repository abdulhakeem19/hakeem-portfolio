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
  warning: "#F59E0B",
};

const EFFECTIVE = "4 June 2026";

const SECTIONS = [
  { id: "what-we-access", n: "01", t: "Information we access — and why" },
  { id: "on-device", n: "02", t: "What stays on your device" },
  { id: "cloud-sync", n: "03", t: "What syncs to the cloud" },
  { id: "what-we-dont", n: "04", t: "What we never do" },
  { id: "permissions", n: "05", t: "Permissions we request" },
  { id: "couples", n: "06", t: "Couples & household sharing" },
  { id: "payments", n: "07", t: "Affora Pro & payments" },
  { id: "retention", n: "08", t: "Data retention & deletion" },
  { id: "third-parties", n: "09", t: "Third-party services" },
  { id: "children", n: "10", t: "Children" },
  { id: "security", n: "11", t: "Security" },
  { id: "changes", n: "12", t: "Changes to this policy" },
  { id: "contact", n: "13", t: "Contact" },
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
      {/* subtle green ambience to signal the Affora sub-brand */}
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
            Affora is a behavioral finance app for Android. It is built privacy-first and
            offline-first: your money data lives on your device, transaction notifications are
            parsed <span style={{ color: A.green }}>entirely on-device</span>, and the cloud is
            only ever an optional, sign-in-gated mirror for backup and couples mode. This policy
            explains exactly what that means.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["On-device first", "Parsing and storage happen on your phone. The app works fully offline."],
              ["No READ_SMS", "We never request or read your SMS inbox. Capture uses notification access only."],
              ["You own your data", "Export it, or delete it — locally and from the cloud — whenever you want."],
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
          <Section id="what-we-access" n="01" title="Information we access — and why">
            <p>Affora only works with the information it needs to give you a clear picture of your money:</p>
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Financial notifications.</strong> If you enable Auto-capture, Affora reads incoming bank and UPI <em>notifications</em> and parses the amount, merchant, date and bank <strong style={{ color: A.green }}>on your device</strong>. The parsed draft is queued for your review.</>,
                <><strong style={{ color: "var(--text)" }}>Information you enter.</strong> Your salary and salary day, recurring bills, goals, budgets, debts, and any transactions you add or paste manually.</>,
                <><strong style={{ color: "var(--text)" }}>Account information for sync.</strong> If you choose to sign in, Google provides your email address and basic profile so we can link your data to your account for backup and restore.</>,
              ]}
            />
          </Section>

          <Section id="on-device" n="02" title="What stays on your device">
            <p>Affora is offline-first. A local SQLite database on your phone is the source of truth, and the app is fully usable with no internet connection. The following live on-device and are not uploaded unless you turn on cloud sync:</p>
            <Bullets
              items={[
                "Your transactions, accounts, categories, salary cycles, bills, goals, budgets and debts",
                "Captured drafts in the review inbox before you confirm them",
                "Receipt photos you attach to a transaction",
                "App preferences — Auto-capture and notification settings, app-lock, and the Pro toggle",
              ]}
            />
            <p style={{ color: "var(--text-3)" }}>Original notification text kept against a transaction (so you can verify a capture) also stays on the device.</p>
          </Section>

          <Section id="cloud-sync" n="03" title="What syncs to the cloud">
            <p>Cloud sync is <strong style={{ color: A.green }}>optional</strong> and only happens after you sign in with Google. Its purpose is durability — restoring your data on a new device or after a reinstall — and powering couples mode. When enabled, Affora mirrors your financial records to a secured Postgres database:</p>
            <Bullets
              items={[
                "Salary cycles, transactions, recurring bills, goals (incl. shared), budgets and debts",
                "Streaks, XP, accounts, learned merchants and net-worth snapshots",
                "For couples mode: a household, its members, and shared goals & contributions",
              ]}
            />
            <p style={{ color: "var(--text-3)" }}>Receipt photos and your in-app review queue are <strong style={{ color: "var(--text)" }}>not</strong> uploaded — they remain local to the device.</p>
          </Section>

          <Section id="what-we-dont" n="04" title="What we never do">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              <div style={{ background: A.greenTint, border: `1px solid ${A.border}`, borderRadius: 12, padding: 16 }}>
                <div className="mono" style={{ fontSize: 10, color: A.green, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>we do</div>
                <Bullets items={["Parse transactions on your device", "Keep cloud sync opt-in", "Let you delete everything", "Encrypt data in transit"]} />
              </div>
              <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: 16 }}>
                <div className="mono" style={{ fontSize: 10, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>we never</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Request the READ_SMS permission", "Sell or rent your data", "Show ads or run third-party trackers", "Read your SMS inbox"].map((t) => (
                    <li key={t} style={{ display: "flex", gap: 10 }}>
                      <span style={{ color: "#EF4444", flexShrink: 0 }}>✕</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="permissions" n="05" title="Permissions we request">
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Notification access</strong> — only if you enable Auto-capture, so Affora can read bank/UPI notifications and parse them locally. You can revoke it any time in Android settings.</>,
                <><strong style={{ color: "var(--text)" }}>Notifications</strong> — to send you bill-due and budget reminders you schedule.</>,
                <><strong style={{ color: "var(--text)" }}>Internet</strong> — used only when you opt into cloud sync or sign in.</>,
              ]}
            />
          </Section>

          <Section id="couples" n="06" title="Couples & household sharing">
            <p>If you and a partner link a household (an Affora Pro feature), you can share goals and see a combined monthly spent/saved figure. Individual transactions always stay private — only the aggregate amounts and the goals you explicitly share are visible to the other member. A household has a maximum of two members.</p>
          </Section>

          <Section id="payments" n="07" title="Affora Pro & payments">
            <p>Affora Pro is an optional subscription (₹99/month). The free app stays fully usable forever. When billing goes live, payments are handled by <strong style={{ color: "var(--text)" }}>Google Play Billing</strong> — Affora never sees or stores your card or payment details. We only store whether your account currently has a Pro entitlement.</p>
          </Section>

          <Section id="retention" n="08" title="Data retention & deletion">
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>On your device:</strong> uninstalling Affora removes the local database and all local data. Device backups are disabled, so app data is not silently retained.</>,
                <><strong style={{ color: "var(--text)" }}>In the cloud:</strong> if you used sync, you can request deletion of your account and we will remove your mirrored data from our servers.</>,
                <>To request export or deletion, email us at the address below and we will action it.</>,
              ]}
            />
          </Section>

          <Section id="third-parties" n="09" title="Third-party services">
            <p>Affora relies on a small set of providers, used only for the functions described above:</p>
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Google Sign-In</strong> — authentication for optional cloud sync.</>,
                <><strong style={{ color: "var(--text)" }}>Render</strong> — hosting for the sync API and database.</>,
                <><strong style={{ color: "var(--text)" }}>Google Play Billing</strong> — subscription payments (when enabled).</>,
              ]}
            />
            <p style={{ color: "var(--text-3)" }}>We do not integrate advertising or analytics SDKs that track you across apps.</p>
          </Section>

          <Section id="children" n="10" title="Children">
            <p>Affora is intended for adults managing their own finances and is not directed at children under 18. We do not knowingly collect data from children.</p>
          </Section>

          <Section id="security" n="11" title="Security">
            <p>Data is transmitted over encrypted HTTPS and access to your synced records is gated behind your authenticated account. While no system can be guaranteed perfectly secure, the offline-first design means the bulk of your data never has to leave your device in the first place.</p>
          </Section>

          <Section id="changes" n="12" title="Changes to this policy">
            <p>We may update this policy as Affora evolves. Material changes will be reflected here with a new effective date. Continued use of the app after an update means you accept the revised policy.</p>
          </Section>

          <Section id="contact" n="13" title="Contact">
            <p>Questions, data requests, or anything privacy-related — reach out:</p>
            <a
              href="mailto:abdul.hakeem5764@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: A.green, color: "#06120D", fontSize: 13, fontWeight: 600 }}
            >
              ✉ abdul.hakeem5764@gmail.com
            </a>
            <p style={{ marginTop: 4 }}>
              <Link href="/case/affora" style={{ color: A.green, textDecoration: "underline", textUnderlineOffset: 3 }}>Learn more about Affora →</Link>
            </p>
          </Section>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
