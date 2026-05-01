"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

export default function NeurosivCasePage() {
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
          <span style={{ color: "var(--text)" }}>neurosiv</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent)" }}>#</span> case · 05 / 07 · 2023
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
          <span className="dev-chip amber mono">● active · client work</span>
          <span className="dev-chip mono">ai studio</span>
          <span className="dev-chip mono">co-founder</span>
          <span className="dev-chip mono">saas</span>
          <span className="dev-chip mono">healthtech</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          Neurosiv —{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>architecting</span>{" "}
          <span style={{ color: "var(--text-3)" }}>the intelligent future.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="dev-card case-meta-grid"
          style={{ padding: 0, marginTop: 48 }}
        >
          {[
            ["role", "co-founder · engineer · site builder"],
            ["stack", "react · typescript · vite · gsap"],
            ["since", "2023 — present · 1+ yr"],
            ["status", "active · 4+ clients · 2 live products"],
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
          style={{ padding: 0, height: 520, position: "relative", overflow: "hidden", background: "#08080a" }}
        >
          <Image
            src="/neurosiv_showcase.png"
            alt="Neurosiv — AI & software development studio"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #08080a 100%)" }} />
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "var(--accent)" }}>●</span> neurosiv · studio
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <a href="https://neurosiv.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>neurosiv.com ↗</a>
          </div>
        </motion.div>
      </section>

      {/* what is neurosiv */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="01" label="the studio" />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-2col"
        >
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// positioning</div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16 }}>
              Not just a software agency —{" "}
              <span className="serif" style={{ color: "var(--accent)" }}>a product studio</span>{" "}
              where every engagement is AI-first.
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
              Neurosiv is an AI-first innovation studio that designs, engineers, and deploys transformative digital products. Strategy → design → deployment, no outsourcing, end-to-end.
            </p>
            <p style={{ fontSize: 14, color: "var(--text-3)" }}>
              I co-founded it and handle engineering across the full stack — from the marketing site and product architecture to individual client deliverables.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// by the numbers</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                ["4+", "clients served"],
                ["4+", "projects delivered"],
                ["99%", "client satisfaction"],
                ["1+yr", "in operation"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1 }}>{n}</div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* services */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="02"
            label="services · 8 lines"
            title={
              <>
                Full-spectrum.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>AI at every layer.</span>
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
            ["01", "AI Development", "Custom AI models, ML pipelines, NLP, computer vision, intelligent automation"],
            ["02", "Web Applications", "Scalable web platforms, modern frameworks, AI-integrated from the ground up"],
            ["03", "Mobile Applications", "Cross-platform iOS & Android apps with real-time AI capabilities"],
            ["04", "Chatbot & AI Agents", "Conversational agents for customer support, sales, and internal ops automation"],
            ["05", "Data & Analytics", "AI dashboards, predictive analytics, BI tools"],
            ["06", "Cloud & DevOps", "Cloud infrastructure, CI/CD pipelines, MLOps"],
            ["07", "Digital Marketing", "AI-driven SEO, content strategy, paid media, multi-channel campaigns"],
            ["08", "Business Launch", "End-to-end launch — registration, branding, website, app, digital presence"],
          ].map(([n, t, d], i, a) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ background: "rgba(255,255,255,0.02)" }}
              style={{ display: "grid", gridTemplateColumns: "48px 200px 1fr", gap: 24, padding: "20px 28px", borderBottom: i < a.length - 1 ? "1px solid var(--line)" : "none", alignItems: "center" }}
            >
              <span className="mono" style={{ fontSize: 11, color: "var(--text-4)" }}>{n}</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text)" }}>{t}</span>
              <span style={{ fontSize: 13, color: "var(--text-3)" }}>{d}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* products */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="products · live"
            title={
              <>
                Two AI products.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Both in production.</span>
              </>
            }
          />
        </motion.div>

        {/* NeuroMed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card dev-spotlight"
          style={{ padding: 40, marginBottom: 16, background: "linear-gradient(135deg, var(--accent-soft), transparent 60%), var(--bg-1)", borderColor: "var(--accent)", position: "relative", overflow: "hidden" }}
        >
          <div className="dev-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div className="mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>product 01 · healthcare ai</div>
                <h3 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.03em" }}>NeuroMed Billing AI</h3>
              </div>
              <span className="dev-chip green mono">● live</span>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-2)", maxWidth: 680, marginBottom: 28, lineHeight: 1.6 }}>
              End-to-end AI automation for medical revenue cycle management. Translates clinical notes into billing codes, predicts claim denials before submission, and automates AR follow-up. HIPAA compliant, EHR integrated.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, paddingTop: 24, borderTop: "1px dashed var(--line-2)" }}>
              {[["95%", "clean claim rate"], ["2×", "faster reimbursement"], ["30%", "revenue lift"], ["99.8%", "ICD-10 accuracy"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1 }}>{n}</div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["smart claims processing", "denial prevention engine", "automated AR follow-up", "hipaa dashboards"].map((t) => (
                <span key={t} className="dev-chip mono">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* NeuroGrowth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 40, marginBottom: 32 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>product 02 · ai marketing saas</div>
              <h3 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.03em" }}>NeuroGrowth AI</h3>
            </div>
            <span className="dev-chip green mono">● live</span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-2)", maxWidth: 680, marginBottom: 28, lineHeight: 1.6 }}>
            Autonomous AI agent for digital marketing and SEO. Handles keyword strategy, content creation, paid campaign optimization, and outbound lead generation — all without manual oversight.
          </p>

          <div className="case-2col" style={{ marginBottom: 28 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>// capabilities</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["AI-powered SEO engine — keywords, meta, schema, content briefs", "Digital content generation — blogs, ad copy, email, social posts", "Multi-channel campaign intelligence — Google, Meta, LinkedIn, TikTok", "Autonomous outreach & lead gen — ICP discovery, sequences, CRM sync"].map((c) => (
                  <div key={c} style={{ fontSize: 13, color: "var(--text-2)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>{c}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>// results</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[["3×", "organic traffic (90 days)"], ["90%", "time saved on content"], ["40%", "lower CAC"], ["12×", "more leads by month 6"]].map(([n, l]) => (
                  <div key={l} style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                    <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)", minWidth: 52 }}>{n}</span>
                    <span style={{ fontSize: 12, color: "var(--text-3)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ paddingTop: 24, borderTop: "1px dashed var(--line-2)" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>// pricing</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                ["Starter", "₹2,999/mo", "$50/mo", "freelancers"],
                ["Pro", "₹5,999/mo", "$99/mo", "smbs & teams"],
                ["Agency", "₹12,999/mo", "$199/mo", "white-label"],
              ].map(([plan, inr, usd, who]) => (
                <div key={plan} style={{ background: "var(--bg-2)", border: "1px solid var(--line-2)", borderRadius: 8, padding: 16 }}>
                  <div className="mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{plan}</div>
                  <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em" }}>{inr}</div>
                  <div style={{ fontSize: 12, color: "var(--text-4)" }}>{usd}</div>
                  <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 6 }}>{who}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* site engineering */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="04"
            label="site engineering"
            title={
              <>
                Lighthouse 100.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Across all four.</span>
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
              <span>neurosiv/src/App.tsx</span>
            </div>
            <div className="dev-term-body mono">
              <div><span className="ln">1</span><span className="com">// lazy-loaded routes + gsap scroll</span></div>
              <div><span className="ln">2</span><span className="kw">const</span> <span className="vr">Home</span> = lazy(() =&gt; <span className="kw">import</span>(<span className="str">"./pages/Home"</span>))</div>
              <div><span className="ln">3</span><span className="kw">const</span> <span className="vr">NeuroMed</span> = lazy(() =&gt; <span className="kw">import</span>(<span className="str">"./pages/NeuroMed"</span>))</div>
              <div><span className="ln">4</span><span className="kw">const</span> <span className="vr">NeuroGrowth</span> = lazy(() =&gt; <span className="kw">import</span>(<span className="str">"./pages/NeuroGrowth"</span>))</div>
              <div><span className="ln">5</span></div>
              <div><span className="ln">6</span><span className="com">// gsap scroll-trigger on every section</span></div>
              <div><span className="ln">7</span><span className="vr">gsap</span>.<span className="vr">registerPlugin</span>(<span className="str">ScrollTrigger</span>)</div>
              <div><span className="ln">8</span><span className="vr">ScrollTrigger</span>.<span className="vr">defaults</span>(&#123;</div>
              <div><span className="ln">9</span>  <span className="vr">start</span>: <span className="str">"top 85%"</span>,</div>
              <div><span className="ln">10</span>  <span className="vr">toggleActions</span>: <span className="str">"play none none none"</span></div>
              <div><span className="ln">11</span>&#125;)</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// engineering decisions</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["react + vite + typescript", "Strict mode, full type coverage. Vite for sub-second HMR during development."],
                ["gsap + scrolltrigger", "Scroll-driven animations on every section — no jank, no reflows. Custom ease curves throughout."],
                ["lazy-loaded pages", "Each page is a separate chunk. First-paint is the landing only — everything else loads on demand."],
                ["structured data (json-ld)", "Product page schema on every route. Rich search results in Google for both AI products."],
                ["lighthouse 100 × 4", "Performance, Accessibility, Best Practices, and SEO — all 100. CDN-level redirects for canonical enforcement."],
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
          <SectionHead anchor="05" label="studio · at a glance" />
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
            ["4+", "clients served"],
            ["2", "live ai products"],
            ["99%", "client satisfaction"],
            ["100", "lighthouse score"],
          ].map(([n, l], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ padding: 32, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}
            >
              <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1 }}>{n}</div>
              <div className="mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)", marginTop: 12 }}>{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* live link CTA */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dev-card dev-spotlight"
          style={{ padding: 40, textAlign: "center" }}
        >
          <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}># live · visit the studio</div>
          <a
            href="https://neurosiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em",
              color: "var(--accent)", textDecoration: "none",
              border: "1px solid var(--accent)", borderRadius: 8,
              padding: "14px 32px",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)"; (e.currentTarget as HTMLAnchorElement).style.color = "#08080a"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"; }}
          >
            neurosiv.com ↗
          </a>
          <div style={{ marginTop: 16, fontSize: 13, color: "var(--text-3)" }}>
            AI engineering studio · enterprise automation · product development
          </div>
        </motion.div>
      </section>

      {/* prev / next */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <div className="case-2col">
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/tradeslynk" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← prev case</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>TradesLynk</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/arvora" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>next case →</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Arvora</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
