"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

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

export default function TradesLynkCasePage() {
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
          <span style={{ color: "var(--text)" }}>tradeslynk</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent)" }}>#</span> case · 04 / 04 · 2023
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
        <motion.div variants={fadeUp} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <span className="dev-chip green mono">● live · pre-launch</span>
          <span className="dev-chip mono">b2b</span>
          <span className="dev-chip mono">marketplace</span>
          <span className="dev-chip mono">laravel</span>
          <span className="dev-chip mono">co-founder</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          TradesLynk —{" "}
          <span style={{ color: "var(--text-3)" }}>B2B trade across</span>{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>82 countries</span>{" "}
          <span style={{ color: "var(--text-3)" }}>without the intermediaries.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="dev-card case-meta-grid"
          style={{ padding: 0, marginTop: 48 }}
        >
          {[
            ["role", "co-founder · lead engineer"],
            ["stack", "laravel 12 · php 8.2 · tailwind 4"],
            ["timeline", "q3 2023 — present"],
            ["status", "pre-launch · onboarding exporters"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: 24, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{k}</div>
              <div style={{ fontSize: 14, color: "var(--text)" }}>{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* showcase image */}
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
            src="/portfolio-images/tradeslynk_showcase.png"
            alt="TradesLynk — B2B international trade marketplace"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #08080a 100%)" }} />
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "var(--accent)" }}>●</span> tradeslynk · platform
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            laravel 12 · blade · tailwind 4
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
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// brief</div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16 }}>
              International trade still runs through{" "}
              <span className="serif" style={{ color: "var(--accent)" }}>layers of middlemen</span>{" "}
              with opaque pricing and zero trust signals.
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
              Small manufacturers in emerging markets can't access global buyers directly. Existing B2B directories are outdated, unverified, and charge recurring fees for basic visibility.
            </p>
            <p style={{ fontSize: 14, color: "var(--text-3)" }}>
              TradesLynk removes the broker layer — verified exporter profiles, direct RFQ flow, tiered trust signals.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// what was built</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["rfq matching", "scoring engine matches buyer requests to relevant exporters"],
                ["verification tiers", "unverified → business → premium → trade"],
                ["trust score", "TrustScoreService calculates seller reputation"],
                ["3d globe", "three.js globe visualizes buyer/exporter locations"],
                ["blog + cms", "trix editor · scheduled publishing · seo slugs"],
              ].map(([k, v]) => (
                <li key={k} style={{ display: "flex", gap: 14, fontSize: 13 }}>
                  <span className="mono" style={{ color: "var(--accent)", minWidth: 120 }}>{k}</span>
                  <span style={{ color: "var(--text-2)" }}>{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* architecture */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="02"
            label="system design"
            title={
              <>
                Laravel monolith.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Right tool</span>{" "}
                for the build stage.
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
            <ArchBlock title="public surface" items={["126+ blade templates", "4 route files", "seo · sitemap · robots"]} accent />
            <div className="case-arch-arrow"><ArchArrow label="eloquent orm" /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="domain" items={["35 eloquent models", "58 migrations", "rfqmatchingservice"]} compact />
              <ArchBlock title="trust engine" items={["trustscoreservice", "verificationservice", "locationservice"]} compact warm />
            </div>
            <div className="case-arch-arrow"><ArchArrow label="queue · cache" /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="infrastructure" items={["mysql production", "sqlite local dev", "smtp transactional"]} compact />
              <ArchBlock title="admin" items={["user suspension", "category crud", "content moderation"]} compact />
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
            ["01", "rfq system", "Buyers post RFQs and an RFQMatchingService scoring engine matches them to relevant exporters by category, country, and verification tier."],
            ["02", "inquiry lifecycle", "Direct buyer→exporter inquiries with full status pipeline: pending → viewed → replied → closed. Transactional emails at every state change."],
            ["03", "profile strength", "SVG ring gauge + checklist widget shows exporters how complete their profile is. Completeness directly affects search ranking position."],
          ].map(([n, t, d]) => (
            <motion.div key={n} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>feature · {n}</span>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)", display: "inline-block" }} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* auth + seo */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="authentication · seo"
            title={
              <>
                Passwordless OTP.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Database-driven</span>{" "}
                redirects.
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
          <motion.div variants={fadeUp} className="dev-term" style={{ minHeight: 320 }}>
            <div className="dev-term-bar">
              <div className="lights">
                <span style={{ background: "#f87171" }} />
                <span style={{ background: "#fbbf24" }} />
                <span style={{ background: "#4ade80" }} />
              </div>
              <span>OtpController.php</span>
            </div>
            <div className="dev-term-body mono">
              <div><span className="ln">1</span><span className="com">// passwordless 4-digit email OTP</span></div>
              <div><span className="ln">2</span><span className="kw">public function</span> <span className="vr">send</span>(Request $request) &#123;</div>
              <div><span className="ln">3</span>  $otp = <span className="vr">str_pad</span>(rand(1000,9999), 4, '0');</div>
              <div><span className="ln">4</span>  <span className="vr">Cache</span>::<span className="vr">put</span>("otp:&#123;$email&#125;", $otp, 300);</div>
              <div><span className="ln">5</span>  <span className="vr">Mail</span>::<span className="vr">to</span>($email)-&gt;<span className="vr">send</span>(<span className="kw">new</span> <span className="str">OtpMail</span>($otp));</div>
              <div><span className="ln">6</span>  <span className="kw">return</span> <span className="vr">back</span>()-&gt;<span className="vr">with</span>('sent', <span className="kw">true</span>);</div>
              <div><span className="ln">7</span>&#125;</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// seo surface</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["dynamic sitemap", "Auto-generated sitemap.xml covering product listings, exporter profiles, and category pages — updated on every publish."],
                ["db-driven redirects", "URL redirect management in the database — marketing can move pages without a deploy. No broken links during restructuring."],
                ["per-page meta", "Each product, exporter, and category page carries unique title, description, and og: tags derived from the database record."],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* scale indicators */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="04" label="scale · what was built" />
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
            ["82", "supported countries"],
            ["35", "eloquent models"],
            ["126+", "blade templates"],
            ["58", "db migrations"],
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
            <Link href="/case/maccleaner" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← prev case</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Mac Cleaner Pro</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/neurosiv" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>next case →</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Neurosiv</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
