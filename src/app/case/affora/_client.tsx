"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

/* ──────────────────────────────────────────────────────────────
   Affora brand palette (from affora_theme_implementation.html)
   Used only inside this case study so it echoes the real app.
   ────────────────────────────────────────────────────────────── */
const A = {
  bg: "#07120D",
  surface: "#0D1F16",
  surfaceEl: "#102019",
  featured: "#162C20",
  green: "#27B07A",
  greenTint: "rgba(39,176,122,0.12)",
  textHero: "#F5F7F6",
  textPrimary: "#C8D8CC",
  textSecondary: "#8B9B92",
  textMuted: "#6B8A75",
  border: "rgba(39,176,122,0.16)",
  borderEm: "rgba(39,176,122,0.33)",
  warning: "#F59E0B",
};

/* ── Dummy phone screens ──────────────────────────────────────
   Placeholder mockups in the real Affora theme. Replace each
   <…Screen /> with <Image src="/affora-images/xxx.png" … /> once
   real screenshots land — the PhoneFrame already supports an
   `img` prop for that. */

function StatusBar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 14px 4px", fontSize: 9, color: A.textPrimary, fontWeight: 600 }}>
      <span>9:41</span>
      <span style={{ display: "flex", gap: 3, alignItems: "center" }}>
        <span style={{ letterSpacing: 1 }}>●●●</span>
        <span style={{ width: 14, height: 8, border: `1px solid ${A.textMuted}`, borderRadius: 2, display: "inline-block" }} />
      </span>
    </div>
  );
}

function Ring({ pct, amount, label }: { pct: number; amount: string; label: string }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: 128, height: 128, margin: "0 auto" }}>
      <svg width="128" height="128" viewBox="0 0 128 128" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="64" cy="64" r={r} fill="none" stroke={A.greenTint} strokeWidth="8" />
        <circle cx="64" cy="64" r={r} fill="none" stroke={A.green} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${circ * pct} ${circ}`} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: 28, fontWeight: 600, color: A.textHero, letterSpacing: "-0.03em" }}>{amount}</div>
        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 7.5, color: A.textSecondary, textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 2 }}>{label}</div>
      </div>
    </div>
  );
}

function Trio() {
  return (
    <div style={{ display: "flex", gap: 6, padding: "0 12px" }}>
      {[
        ["₹11,958", "reality", A.green],
        ["13", "days left", A.textHero],
        ["₹2,140", "spent", A.warning],
      ].map(([v, l, c]) => (
        <div key={l} style={{ flex: 1, background: A.surface, border: `0.5px solid ${A.border}`, borderRadius: 9, padding: "8px 6px", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: c, letterSpacing: "-0.02em" }}>{v}</div>
          <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 7, color: A.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 3 }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

function HomeScreen() {
  return (
    <div style={{ height: "100%", background: A.bg, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ padding: "6px 14px 2px" }}>
        <div style={{ fontSize: 10, color: A.textSecondary }}>Good morning, Hakeem</div>
        <div style={{ fontSize: 11, color: A.textMuted, fontFamily: "var(--font-geist-mono)" }}>thu · 18th · 13 days left</div>
      </div>
      <div style={{ padding: "12px 0 14px" }}>
        <Ring pct={0.62} amount="₹398" label="safe to spend today" />
      </div>
      <Trio />
      <div style={{ margin: "12px 12px 0", background: A.featured, border: `0.5px solid ${A.borderEm}`, borderRadius: 11, padding: 11 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 7.5, color: A.green, textTransform: "uppercase", letterSpacing: "0.12em" }}>● turning point</span>
          <span style={{ fontSize: 8, color: A.textMuted }}>74 days</span>
        </div>
        <div style={{ fontSize: 12, color: A.textHero, fontWeight: 500, lineHeight: 1.3 }}>SBI EMI ends Aug 2026</div>
        <div style={{ marginTop: 6, display: "inline-flex", background: A.greenTint, color: A.green, fontSize: 9, fontWeight: 600, padding: "3px 8px", borderRadius: 6 }}>+₹7,938 / mo freed</div>
      </div>
      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-around", padding: "10px 0 8px", borderTop: `0.5px solid ${A.border}`, background: A.surface }}>
        {["⌂", "≣", "◎", "♦", "☺"].map((g, i) => (
          <span key={i} style={{ fontSize: 14, color: i === 0 ? A.green : A.textMuted }}>{g}</span>
        ))}
      </div>
    </div>
  );
}

function BuyScreen() {
  return (
    <div style={{ height: "100%", background: A.bg, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ padding: "10px 14px 4px" }}>
        <div style={{ fontSize: 13, color: A.textHero, fontWeight: 600 }}>Can I buy this?</div>
        <div style={{ fontSize: 9, color: A.textSecondary, marginTop: 2 }}>What happens if I spend this.</div>
      </div>
      <div style={{ margin: "14px 14px 0", textAlign: "center", padding: "14px 0", background: A.surface, border: `0.5px solid ${A.border}`, borderRadius: 12 }}>
        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 8, color: A.textMuted, textTransform: "uppercase", letterSpacing: "0.12em" }}>amount</div>
        <div style={{ fontSize: 34, fontWeight: 600, color: A.textHero, letterSpacing: "-0.03em", marginTop: 2 }}>₹4,500</div>
        <div style={{ fontSize: 9, color: A.textSecondary }}>wireless headphones</div>
      </div>
      <div style={{ margin: "12px 14px 0", background: A.surface, border: `0.5px solid ${A.border}`, borderRadius: 11, padding: 12 }}>
        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 7.5, color: A.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>safe-to-spend</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: A.textPrimary }}>₹812</span>
          <span style={{ color: A.green, fontSize: 14 }}>→</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: A.green }}>₹655</span>
        </div>
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: `0.5px dashed ${A.border}`, fontSize: 9.5, color: A.textSecondary, display: "flex", justifyContent: "space-between" }}>
          <span>Emergency Fund</span><span style={{ color: A.warning }}>delayed ~5 days</span>
        </div>
      </div>
      <div style={{ margin: "auto 14px 16px", background: A.greenTint, border: `0.5px solid ${A.borderEm}`, borderRadius: 11, padding: "12px", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: A.green }}>✓ Safe purchase</div>
        <div style={{ fontSize: 8.5, color: A.textSecondary, marginTop: 3 }}>Reality Score 78 · within today&apos;s budget</div>
      </div>
    </div>
  );
}

function TurningScreen() {
  return (
    <div style={{ height: "100%", background: A.bg, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ padding: "10px 14px 4px" }}>
        <div style={{ fontSize: 13, color: A.textHero, fontWeight: 600 }}>Upcoming Freedom</div>
        <div style={{ fontSize: 9, color: A.textSecondary, marginTop: 2 }}>When does this end?</div>
      </div>
      <div style={{ margin: "14px 14px 0", background: A.featured, border: `0.5px solid ${A.borderEm}`, borderRadius: 13, padding: 14 }}>
        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 7.5, color: A.green, textTransform: "uppercase", letterSpacing: "0.12em" }}>● soonest payoff</div>
        <div style={{ fontSize: 17, fontWeight: 600, color: A.textHero, marginTop: 8, letterSpacing: "-0.02em" }}>SBI EMI</div>
        <div style={{ fontSize: 10, color: A.textSecondary }}>ends in 74 days · Aug 2026</div>
        <div style={{ marginTop: 12, background: A.greenTint, borderRadius: 9, padding: "10px 12px", textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 600, color: A.green, letterSpacing: "-0.02em" }}>+₹7,938</div>
          <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 7, color: A.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>freed per month</div>
        </div>
      </div>
      <div style={{ margin: "12px 14px 0", background: A.surface, border: `0.5px solid ${A.border}`, borderRadius: 11, padding: 12 }}>
        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 7.5, color: A.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>safe-to-spend uplift</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 44 }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ height: 22, background: "rgba(39,176,122,0.25)", borderRadius: "4px 4px 0 0" }} />
            <div style={{ fontSize: 9, color: A.textSecondary, marginTop: 4 }}>₹398</div>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ height: 40, background: A.green, borderRadius: "4px 4px 0 0" }} />
            <div style={{ fontSize: 9, color: A.green, fontWeight: 600, marginTop: 4 }}>₹663</div>
          </div>
        </div>
        <div style={{ marginTop: 8, fontSize: 8.5, color: A.textSecondary, textAlign: "center" }}>per day, once the EMI clears</div>
      </div>
    </div>
  );
}

function PhoneFrame({
  children,
  label,
  primary,
}: {
  children: React.ReactNode;
  label: string;
  primary?: boolean;
}) {
  const scale = primary ? 1 : 0.85;
  return (
    <motion.div
      whileHover={{ y: -8, scale: primary ? 1.03 : scale * 1.03 }}
      transition={{ duration: 0.3 }}
      style={{
        width: 220,
        height: 460,
        borderRadius: 36,
        background: "#000",
        padding: 7,
        transform: `scale(${scale})`,
        boxShadow: primary
          ? "0 32px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(39,176,122,0.18)"
          : "0 16px 40px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
        filter: primary ? "none" : "brightness(0.82)",
        flexShrink: 0,
      }}
    >
      <div style={{ width: "100%", height: "100%", borderRadius: 30, background: A.bg, overflow: "hidden", position: "relative" }}>
        {children}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "5px 10px",
            background: "rgba(7,18,13,0.7)",
            backdropFilter: "blur(6px)",
            fontFamily: "var(--font-geist-mono)",
            fontSize: 9,
            color: "rgba(245,247,246,0.55)",
            textAlign: "center",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
}

function ArchBlock({ title, items, accent, warm, compact }: { title: string; items: string[]; accent?: boolean; warm?: boolean; compact?: boolean }) {
  return (
    <div style={{ border: "1px solid var(--line-2)", borderRadius: 8, background: accent ? "var(--accent-soft)" : warm ? "rgba(251,191,36,0.06)" : "var(--bg-2)", padding: compact ? 12 : 16, flex: 1 }}>
      <div className="mono" style={{ fontSize: 10, color: accent ? "var(--accent-2)" : warm ? "var(--amber)" : "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontWeight: 600 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {items.map((it) => (
          <div key={it} className="mono" style={{ fontSize: 11, color: "var(--text-2)" }}>· {it}</div>
        ))}
      </div>
    </div>
  );
}

function ArchArrow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 14px", minWidth: 80 }}>
      <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6 }}>{label}</div>
      <div style={{ width: "100%", height: 1, background: "var(--accent)", position: "relative", boxShadow: "0 0 6px var(--accent-glow)" }}>
        <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderLeft: "6px solid var(--accent)", borderTop: "3px solid transparent", borderBottom: "3px solid transparent" }} />
      </div>
    </div>
  );
}

export default function AfforaCasePage() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      {/* breadcrumb */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ padding: "32px 56px 0", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}
      >
        <div className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>
          <Link href="/work" style={{ color: "var(--text-3)" }}>← /work</Link>
          <span style={{ margin: "0 8px", color: "var(--text-4)" }}>/</span>
          <span style={{ color: "var(--text)" }}>affora</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: A.green }}>#</span> case · 01 / 08 · 2026
        </div>
      </motion.section>

      {/* hero */}
      <motion.section
        className="dev-section"
        style={{ paddingTop: 40, position: "relative", zIndex: 1 }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          <span className="dev-chip amber mono">● beta · closed testing</span>
          <span className="dev-chip mono">mobile</span>
          <span className="dev-chip mono">fintech</span>
          <span className="dev-chip mono">offline-first</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          Affora —{" "}
          <span style={{ color: "var(--text-3)" }}>a money app that shows what&apos;s</span>{" "}
          <span className="serif" style={{ color: A.green }}>actually yours to spend</span>{" "}
          <span style={{ color: "var(--text-3)" }}>today.</span>
        </motion.h1>

        <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 24, lineHeight: 1.6 }}>
          Most finance apps show your account balance. Affora shows your{" "}
          <span style={{ color: A.green }}>Reality Balance</span> — income minus every committed
          obligation — then divides what&apos;s left by the days remaining to give you one
          honest number: <span style={{ color: "var(--text)" }}>Safe-to-Spend Today</span>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="dev-card case-meta-grid"
          style={{ padding: 0, marginTop: 48 }}
        >
          {[
            ["role", "solo · product + full-stack"],
            ["stack", "flutter · nestjs · postgres"],
            ["timeline", "2026 · in development"],
            ["status", "android · closed testing"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: 24, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{k}</div>
              <div style={{ fontSize: 14, color: "var(--text)" }}>{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* phone showcase */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 0, height: 600, position: "relative", overflow: "hidden", background: "radial-gradient(circle at 50% 30%, rgba(39,176,122,0.16), #08080a 62%)" }}
        >
          <div className="dev-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", gap: 28 }}>
            <PhoneFrame label="can i buy this?"><BuyScreen /></PhoneFrame>
            <PhoneFrame label="home · safe-to-spend" primary><HomeScreen /></PhoneFrame>
            <PhoneFrame label="turning points"><TurningScreen /></PhoneFrame>
          </div>
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: A.green }}>●</span> affora · v1.0 · android
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 10, color: "var(--text-3)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            placeholder ui · real screenshots soon
          </div>
        </motion.div>
      </section>

      {/* problem */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="01" label="the problem" />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-2col"
        >
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: A.green, marginBottom: 12 }}>// the insight</div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16 }}>
              People don&apos;t overspend because they don&apos;t know.{" "}
              <span className="serif" style={{ color: A.green }}>They don&apos;t feel the consequence</span>{" "}
              until it&apos;s too late.
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
              The goal is to move the user from{" "}
              <span className="mono" style={{ color: "var(--text-3)" }}>salary → spend → regret</span> to{" "}
              <span className="mono" style={{ color: A.green }}>salary → allocate → track → save → grow</span>.
            </p>
            <p style={{ fontSize: 14, color: "var(--text-3)" }}>
              One honest number, refreshed daily — not a monthly report that arrives after the damage is done.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: A.green, marginBottom: 12 }}>// constraints</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["offline-first", "full functionality with no internet"],
                ["no READ_SMS", "notification listener, parsed on-device"],
                ["privacy-first", "data lives on the device by default"],
                ["android-first", "india's UPI-heavy market"],
                ["additive pro", "nothing free ever becomes paid"],
              ].map(([k, v]) => (
                <li key={k} style={{ display: "flex", gap: 14, fontSize: 13 }}>
                  <span className="mono" style={{ color: A.green, minWidth: 110 }}>{k}</span>
                  <span style={{ color: "var(--text-2)" }}>{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* signature loop */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="02"
            label="the core loop"
            title={
              <>
                Three questions.{" "}
                <span className="serif" style={{ color: A.green }}>Answered before you spend.</span>
              </>
            }
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-3col"
        >
          {[
            ["what can I spend today?", "Safe-to-Spend", "Free money remaining ÷ days left in the month, shrinking ₹1-for-₹1 as you spend. A daily anchor instead of monthly regret."],
            ["what happens if I spend this?", "Purchase Consequences", "Leads with the consequence: Safe-to-Spend before → after, the goal it delays, debt impact, and a plain verdict — backed by a Reality Score."],
            ["when does this end?", "Turning Points", "Surfaces the soonest debt payoff, the monthly money it frees, and your projected Safe-to-Spend uplift. The emotional hook of the app."],
          ].map(([q, t, d], i) => (
            <motion.div key={t} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>0{i + 1}</span>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: A.green, boxShadow: `0 0 8px ${A.green}`, display: "inline-block" }} />
              </div>
              <div className="mono" style={{ fontSize: 11, color: A.green, marginBottom: 8 }}>“{q}”</div>
              <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* architecture */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="system design"
            title={
              <>
                Offline-first.{" "}
                <span className="serif" style={{ color: A.green }}>The device is the source of truth.</span>
              </>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 40, position: "relative" }}
        >
          <div className="dev-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
          <div className="case-arch-diagram" style={{ position: "relative" }}>
            <ArchBlock title="flutter client" items={["go_router · riverpod", "drift / sqlite (truth)", "material-3 theme"]} accent />
            <div className="case-arch-arrow"><ArchArrow label="on-device" /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="capture" items={["notification listener", "message parser", "merchant normalizer"]} compact warm />
              <ArchBlock title="logic" items={["reality balance", "safe-to-spend", "reality score"]} compact />
            </div>
            <div className="case-arch-arrow"><ArchArrow label="https · jwt" /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="nestjs api" items={["auth · sync", "household / couples", "render-hosted"]} compact />
              <ArchBlock title="postgres" items={["prisma · cloud mirror", "uid-based upsert", "restore on reinstall"]} compact />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-3col"
          style={{ marginTop: 32 }}
        >
          {[
            ["on-device parsing", "Bank & UPI notifications are read on-device and parsed locally — amount, merchant, date, bank. No READ_SMS, no message contents leave the phone."],
            ["local-first sync", "SQLite is the source of truth; the UI never blocks on network. A debounced SyncService mirrors to Postgres for durability and cross-device restore."],
            ["multi-user where it counts", "Couples mode is the one genuinely multi-user feature — households, shared goals and a joint dashboard reconcile by uid so edits survive a reinstall."],
          ].map(([t, d]) => (
            <motion.div key={t} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* privacy + monetization */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="04" label="privacy & monetization" />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-2col"
        >
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32, background: "rgba(39,176,122,0.05)", borderColor: A.border }}>
            <div className="mono" style={{ fontSize: 11, color: A.green, marginBottom: 12 }}>// privacy-first by design</div>
            <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
              Your money data lives on your device.
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "No READ_SMS permission, ever",
                "Notifications parsed locally — contents never leave the phone",
                "Cloud sync is opt-in, tied to your own Google login",
                "No ads, no data selling, no third-party trackers",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--text-2)" }}>
                  <span style={{ color: A.green }}>✓</span>{t}
                </li>
              ))}
            </ul>
            <Link href="/affora/policy" className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, fontSize: 12, color: A.green, textDecoration: "underline", textUnderlineOffset: 3 }}>
              read the full privacy policy →
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: A.green, marginBottom: 12 }}>// additive, never extractive</div>
            <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 8 }}>
              Affora Pro · <span style={{ color: A.green }}>₹99</span>/mo
            </h3>
            <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 18 }}>
              The free app is fully usable, forever. Pro only adds new capability — it never locks away the core.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                ["free forever", ["reality balance", "safe-to-spend", "auto-capture", "smart coach"], "var(--text-2)"],
                ["pro adds", ["couples mode", "cashflow forecast", "net-worth tracker", "ai coach · soon"], A.green],
              ].map(([title, items, color]) => (
                <div key={title as string} style={{ border: "1px solid var(--line)", borderRadius: 10, padding: 14 }}>
                  <div className="mono" style={{ fontSize: 10, color: color as string, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{title as string}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {(items as string[]).map((it) => (
                      <div key={it} className="mono" style={{ fontSize: 11, color: "var(--text-2)" }}>· {it}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* by the numbers */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="05" label="by the numbers" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card case-meta-grid"
          style={{ padding: 0 }}
        >
          {[
            ["32", "shipped features"],
            ["14", "local sqlite tables"],
            ["0", "READ_SMS permissions"],
            ["100%", "offline-capable"],
          ].map(([n, l], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ padding: 32, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}
            >
              <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>{n}</div>
              <div className="mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)", marginTop: 12 }}>{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* prev / next */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <div className="case-2col">
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href="/work" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← /work</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>all projects</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/privachat" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>next case →</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>PrivaChat</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
