"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

export default function CostosCasePage() {
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
          <span style={{ color: "var(--text)" }}>costos</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent)" }}>#</span> case · 07 / 07 · 2024
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
          <span className="dev-chip amber mono">● active · internal</span>
          <span className="dev-chip mono">react 18</span>
          <span className="dev-chip mono">supabase</span>
          <span className="dev-chip mono">rbac</span>
          <span className="dev-chip mono">startup ops</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          Costos —{" "}
          <span style={{ color: "var(--text-3)" }}>the spreadsheet killer</span>{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>for startup founders.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="dev-card case-meta-grid"
          style={{ padding: 0, marginTop: 48 }}
        >
          {[
            ["role", "sole engineer · product design"],
            ["stack", "react 18 · vite · supabase · recharts"],
            ["type", "internal tool · startup ops dashboard"],
            ["status", "active · in use at neurosiv"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: 24, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{k}</div>
              <div style={{ fontSize: 14, color: "var(--text)" }}>{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* showcase */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 0, height: 560, position: "relative", overflow: "hidden", background: "#08080a" }}
        >
          <Image
            src="/costos_showcase.png"
            alt="Costos — internal finance & operations dashboard"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #08080a 100%)" }} />
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "var(--accent)" }}>●</span> costos · internal dashboard
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            react 18 · supabase · recharts
          </div>
        </motion.div>
      </section>

      {/* what it is */}
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
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// why we built it</div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16 }}>
              Running a startup out of{" "}
              <span className="serif" style={{ color: "var(--accent)" }}>spreadsheets</span>{" "}
              is how things fall through the cracks.
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
              Costos is a private, role-gated operations hub built to replace spreadsheets for early-stage startup management. Real-time view of expenses, clients, financials, and tasks — without the overhead of enterprise tools.
            </p>
            <p style={{ fontSize: 14, color: "var(--text-3)" }}>
              Built for Neurosiv first, designed to be white-labelled for any early-stage team.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// stack</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["frontend", "React 18, Vite, Tailwind CSS — strict mode, fast HMR"],
                ["charts", "Recharts — spend curves, KPI cards, burn rate at a glance"],
                ["backend / db", "Supabase — PostgreSQL + Auth, versioned migrations"],
                ["icons", "Lucide React — consistent iconography throughout"],
                ["auth", "Supabase Auth + custom tab permission map (no third-party library)"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="mono" style={{ fontSize: 10, color: "var(--accent)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 9 modules */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="02"
            label="modules · 9 total"
            title={
              <>
                One dashboard.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Everything in view.</span>
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
          style={{ padding: 0, overflow: "hidden" }}
        >
          {[
            ["overview", "KPI cards with month-over-month trend indicators. Recharts spend curve showing burn rate at a glance."],
            ["expenses", "Full ledger with categories (Infra, Tooling, Marketing, Legal, Design), payment status (Paid / Pending / Overdue), payer attribution, proof-of-payment upload, date-range filtering, column sorting, and CSV export."],
            ["clients", "Pipeline management with stage progression: Confirmed → Paid Advance → Paid Half → Handover Completed. Multi-currency (INR / USD / GBP), lead source tracking, deal value estimates."],
            ["founders", "Financial health view per co-founder — total revenue vs expenses, net P&L, and individual withdrawal logs."],
            ["contracts", "Contract records with co-founder attribution fields and status tracking."],
            ["products", "Internal product/service catalog with variant support — what the company offers, at what price."],
            ["tasks", "Lightweight task tracker with priority levels, assignees, due dates, and follow-up threads. Jira-style without the overhead."],
            ["activities", "Audit log of all team actions and historical records — full traceability."],
            ["users", "Role-based access control — different roles see different tabs. No third-party auth library."],
          ].map(([t, d], i, a) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              whileHover={{ background: "rgba(255,255,255,0.02)" }}
              style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, padding: "18px 28px", borderBottom: i < a.length - 1 ? "1px solid var(--line)" : "none", alignItems: "start" }}
            >
              <span className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", paddingTop: 2 }}>// {t}</span>
              <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{d}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* engineering highlights */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="engineering highlights"
            title={
              <>
                Simple stack.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Clever where it counts.</span>
              </>
            }
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-2col"
        >
          <motion.div variants={fadeUp} className="dev-term" style={{ minHeight: 300 }}>
            <div className="dev-term-bar">
              <div className="lights">
                <span style={{ background: "#f87171" }} />
                <span style={{ background: "#fbbf24" }} />
                <span style={{ background: "#4ade80" }} />
              </div>
              <span>src/lib/permissions.ts</span>
            </div>
            <div className="dev-term-body mono">
              <div><span className="ln">1</span><span className="com">// role → visible tabs map</span></div>
              <div><span className="ln">2</span><span className="kw">export const</span> <span className="vr">TAB_PERMISSIONS</span> = &#123;</div>
              <div><span className="ln">3</span>  <span className="str">founder</span>: [<span className="str">"overview"</span>, <span className="str">"expenses"</span>,</div>
              <div><span className="ln">4</span>           <span className="str">"clients"</span>, <span className="str">"founders"</span>,</div>
              <div><span className="ln">5</span>           <span className="str">"contracts"</span>, <span className="str">"tasks"</span>,</div>
              <div><span className="ln">6</span>           <span className="str">"users"</span>],</div>
              <div><span className="ln">7</span>  <span className="str">member</span>: [<span className="str">"overview"</span>, <span className="str">"tasks"</span>,</div>
              <div><span className="ln">8</span>           <span className="str">"activities"</span>],</div>
              <div><span className="ln">9</span>&#125; <span className="kw">as const</span></div>
              <div><span className="ln">10</span></div>
              <div><span className="ln">11</span><span className="com">// tabs render only what the role can see</span></div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// technical highlights</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["rbac without a library", "Pure Supabase Auth + a custom tab permission map. Role is stored in the user profile; the nav renders only what that role can access."],
                ["file attachments in postgres", "Payment proof uploads stored as base64 data URLs directly in Postgres — no separate file storage bucket required. Keeps the schema self-contained."],
                ["offline-tolerant design", "Graceful empty states and toast notifications throughout. The UI degrades cleanly when Supabase is unreachable rather than showing blank screens."],
                ["versioned migrations", "Supabase migrations checked in alongside the code — schema changes are reproducible across environments with zero manual steps."],
                ["no component library", "Clean, minimal dark-mode UI built from scratch with CSS custom properties. Consistent design system without the weight of shadcn or MUI."],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 3 }}>{k}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* metrics */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="04" label="at a glance" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dev-card case-meta-grid"
          style={{ padding: 0 }}
        >
          {[
            ["9", "modules"],
            ["rbac", "no third-party lib"],
            ["0", "spreadsheets needed"],
            ["active", "in use at neurosiv"],
          ].map(([n, l], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ padding: 32, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}
            >
              <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>{n}</div>
              <div className="mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)", marginTop: 12 }}>{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* prev / next */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <div className="case-2col">
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/arvora" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← prev case</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Arvora</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/work" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← /work</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>all projects</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
