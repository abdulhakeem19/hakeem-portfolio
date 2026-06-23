"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const K = {
  accent: "#34D399",
  accentTint: "rgba(52,211,153,0.10)",
  border: "rgba(52,211,153,0.18)",
  textHero: "#F0FDF9",
  ink: "#081210",
};

const EFFECTIVE = "23 June 2026";

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

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span
        style={{
          flexShrink: 0,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: K.accentTint,
          border: `1px solid ${K.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: K.accent,
          marginTop: 1,
        }}
      >
        {n}
      </span>
      <span>{children}</span>
    </li>
  );
}

const strong = (text: React.ReactNode) => <strong style={{ color: "var(--text)" }}>{text}</strong>;

export default function KaasuDeleteAccountClient() {
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
            style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.1, marginTop: 32, maxWidth: 900 }}
          >
            Account &amp;{" "}
            <span className="serif" style={{ color: K.accent }}>data deletion</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 660, marginTop: 20, lineHeight: 1.65 }}>
            Kaasu has {strong("no sign-up, no login, and no servers")}. You never create an account,
            and nothing about you is ever uploaded — every transaction, category, budget, and setting
            is stored {strong("only in a local database on your device")}.
          </motion.p>
        </motion.div>
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

          <Section id="no-account" n="01" title="There is no account to delete">
            <p>Because there is {strong("no cloud account and no server-side data")}, there is nothing for us to hold or delete on our side, and no request or email is required. You are always in full control, and deletion is instant and self-service.</p>
          </Section>

          <Section id="how-to-delete" n="02" title="How to delete your data (in the app)">
            <p>Everything Kaasu stores can be permanently erased from inside the app:</p>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <Step n={1}>
                <strong style={{ color: "var(--text)" }}>Delete everything</strong> — Open Kaasu →{" "}
                <span className="mono" style={{ fontSize: 12 }}>Settings → Danger Zone → &quot;Delete account &amp; wipe device&quot;</span> → confirm.
                This permanently deletes all transactions, categories, accounts, budgets, rules, merchant labels, and personalization settings from your device.
              </Step>
              <Step n={2}>
                <strong style={{ color: "var(--text)" }}>Delete transactions only</strong> —{" "}
                <span className="mono" style={{ fontSize: 12 }}>Settings → Danger Zone → &quot;Clear all transactions&quot;</span> removes your transaction history while keeping your default categories.
              </Step>
              <Step n={3}>
                <strong style={{ color: "var(--text)" }}>Uninstall the app</strong> — Removing Kaasu from your device deletes its entire local database along with it.
              </Step>
            </ol>
            <p>All of the above are {strong("immediate and permanent")} — there is no soft delete and no recovery.</p>
          </Section>

          <Section id="what-gets-deleted" n="03" title="What gets deleted">
            <p>A full wipe removes everything Kaasu has stored on your device:</p>
            <div style={{ background: K.accentTint, border: `1px solid ${K.border}`, borderRadius: 12, padding: "16px 20px" }}>
              <Bullets
                items={[
                  "Transactions (captured and manually added)",
                  "Categories, rules, and merchant labels",
                  "Accounts and budgets",
                  "Profile name, currency, and app settings",
                  "App lock PIN",
                ]}
              />
            </div>
          </Section>

          <Section id="backups" n="04" title="Backups you created">
            <p>If you used <span className="mono" style={{ fontSize: 12 }}>Settings → Back up data</span> to export a backup file (JSON) or Export transactions (CSV), those files were saved by you, to a location you chose (e.g. your Files or Drive). They live outside the app — to delete them, remove those files yourself. Kaasu has no access to them.</p>
          </Section>

          <Section id="retention" n="05" title="Data retention">
            <p>Kaasu retains {strong("no data on any server")} because it never stores any there. On-device data is kept only until you delete it or uninstall the app.</p>
          </Section>

          <Section id="contact" n="06" title="Contact">
            <p>Questions about data deletion? Reach out:</p>
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
              <Link href="/kaasu/terms" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Terms of Service →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
