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

const EFFECTIVE = "6 September 2026";

const SECTIONS = [
  { id: "what-we-collect", n: "01", t: "Information the app collects" },
  { id: "how-stored", n: "02", t: "How your data is stored" },
  { id: "how-we-use", n: "03", t: "How we use your data" },
  { id: "backup", n: "04", t: "Backup & restore" },
  { id: "payments", n: "05", t: "In-app purchase" },
  { id: "sharing", n: "06", t: "Sharing" },
  { id: "retention", n: "07", t: "Data retention & deletion" },
  { id: "permissions", n: "08", t: "Permissions" },
  { id: "children", n: "09", t: "Children" },
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
            Affora is a fully offline expense tracker. There is no account, no backend, and no
            server — this policy is short because there is almost nothing for us to say: your data
            never leaves your phone.
          </motion.p>

          {/* promise cards */}
          <motion.div
            variants={fadeUp}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 36 }}
          >
            {[
              ["100% offline", "No account, no sign-in, no server. Nothing the app knows about you can be transmitted anywhere."],
              ["Backup is yours to hold", "There's no cloud. Export a backup file from the app and keep it wherever you choose — we never see it."],
              ["One-time purchase", "Affora Lifetime is a single purchase through Google Play Billing, not a subscription. We never see your payment details."],
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

          <Section id="what-we-collect" n="01" title="Information the app collects">
            <p><strong style={{ color: A.green }}>Nothing is sent to us.</strong> Affora has no account, no sign-in, and no server to send data to. Everything below is stored only on your device, in a local database this app cannot transmit anywhere.</p>
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Financial information you enter.</strong> Salary, committed expenses (bills, EMIs), transactions, savings goals, notes, categories, and budgets. You type this in directly; nothing is imported from your bank.</>,
                <><strong style={{ color: "var(--text)" }}>Transaction messages (optional, Android).</strong> If you turn on Auto-capture and grant notification access, Affora reads bank/UPI transaction notifications <strong style={{ color: "var(--text)" }}>on your device</strong> to draft transactions for your review. This is parsed entirely on-device and never uploaded anywhere — there is no server to upload it to. You choose exactly which apps it looks at, and you review every draft before it&apos;s saved.</>,
                <><strong style={{ color: "var(--text)" }}>Account balances shown in those messages.</strong> When a message you received already states a balance (for example &ldquo;Avl Bal: Rs.44,874&rdquo;), Affora remembers that figure against the matching account so you can see it in one place, along with the time it was seen. Affora never connects to your bank and cannot fetch a balance — it only ever keeps what a message you already had said, on your device.</>,
                <><strong style={{ color: "var(--text)" }}>A profile name and photo, if you add one.</strong> Stored locally only.</>,
              ]}
            />
          </Section>

          <Section id="how-stored" n="02" title="How your data is stored">
            <p>Everything lives in a local database on your device. Nothing is encrypted in transit, because nothing is ever transmitted.</p>
          </Section>

          <Section id="how-we-use" n="03" title="How we use your data">
            <p>We don&apos;t. There is no backend to use it — the app reads and writes only to its own local database to run its features (Safe-to-Spend, budgets, goals, insights). We do not sell your data, share it, or use it for advertising, because we never receive it in the first place.</p>
          </Section>

          <Section id="backup" n="04" title="Backup & restore">
            <p>Affora has no cloud, so <strong style={{ color: "var(--text)" }}>you</strong> are responsible for your own backup. Profile → Backup &amp; restore lets you export everything to a single file you control. We never see this file — it goes directly from your device to wherever you choose to put it.</p>
          </Section>

          <Section id="payments" n="05" title="In-app purchase">
            <p>Affora Lifetime is a one-time purchase handled entirely by <strong style={{ color: "var(--text)" }}>Google Play Billing</strong>. We do not receive or store your payment details.</p>
          </Section>

          <Section id="sharing" n="06" title="Sharing">
            <p>We share nothing, because we never receive anything. The one exception: buying Affora Lifetime goes through Google Play Billing, governed by Google&apos;s own privacy policy.</p>
          </Section>

          <Section id="retention" n="07" title="Data retention & deletion">
            <p>Everything is already only on your device — deleting the app deletes everything. You can also wipe it without uninstalling: <strong style={{ color: "var(--text)" }}>Profile → Clear all data</strong>. There is no server-side account to separately delete.</p>
          </Section>

          <Section id="permissions" n="08" title="Permissions">
            <Bullets
              items={[
                <><strong style={{ color: "var(--text)" }}>Notifications</strong> — the optional daily Safe-to-Spend reminder and spend nudges, generated entirely on-device.</>,
                <><strong style={{ color: "var(--text)" }}>Notification access (optional, Android)</strong> — only if you enable Auto-capture, as described above. Never transmitted anywhere.</>,
                <><strong style={{ color: "var(--text)" }}>Internet</strong> — used only for Google Play&apos;s own purchase check when you buy Affora Lifetime. The app makes no other network request.</>,
              ]}
            />
          </Section>

          <Section id="children" n="09" title="Children">
            <p>Affora is not directed at children under 13 and we do not knowingly collect their data — and since we don&apos;t collect anyone&apos;s data, there is nothing to collect from anyone.</p>
          </Section>

          <Section id="changes" n="10" title="Changes to this policy">
            <p>We may update this policy as Affora evolves. Material changes will be reflected here with a new effective date.</p>
          </Section>

          <Section id="contact" n="11" title="Contact">
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
