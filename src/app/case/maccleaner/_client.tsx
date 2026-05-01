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

export default function MacCleanerCasePage() {
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
          <span style={{ color: "var(--text)" }}>mac cleaner pro</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent)" }}>#</span> case · 03 / 04 · 2024
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
          <span className="dev-chip green mono">● shipping</span>
          <span className="dev-chip mono">macOS</span>
          <span className="dev-chip mono">indie</span>
          <span className="dev-chip mono">pay-once</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          Mac Cleaner Pro —{" "}
          <span style={{ color: "var(--text-3)" }}>native macOS cleaner that</span>{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>breaks down System Data</span>{" "}
          <span style={{ color: "var(--text-3)" }}>without a subscription.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="dev-card case-meta-grid"
          style={{ padding: 0, marginTop: 48 }}
        >
          {[
            ["role", "sole engineer · product design"],
            ["stack", "swift 5.9 · swiftui · xpc · next.js"],
            ["timeline", "q2 — q4 2024"],
            ["pricing", "$39 personal · $69 family (5 Macs)"],
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
            src="/portfolio-images/maccleanerpro_showcase.png"
            alt="Mac Cleaner Pro — native macOS disk cleaner"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #08080a 100%)" }} />
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "var(--accent)" }}>●</span> mac cleaner pro · v1.0
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            macOS 13 Ventura+ · universal binary
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
              Apple's{" "}
              <span className="serif" style={{ color: "var(--accent)" }}>System Data bucket</span>{" "}
              is a black box — and subscription cleaners exploit that opacity.
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
              CleanMyMac charges $40/year to do what a transparent, auditable utility should do for a one-time price. Users want to understand what they're deleting, not just click "Clean".
            </p>
            <p style={{ fontSize: 14, color: "var(--text-3)" }}>
              Staged deletion to Trash, 30-day undo, and a signed rule pack mean nothing gets permanently removed without intent.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// product requirements</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["full disk access", "non-sandboxed for deep scan capability"],
                ["privileged helper", "xpc daemon for protected directory access"],
                ["staged deletion", "all cleanups go to ~/.Trash/MacCleanerPro/"],
                ["signed rules", "ed25519 rule pack, verified at runtime"],
                ["zero telemetry", "fully offline, no usage tracking ever"],
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
                Three targets.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>XPC boundary</span>{" "}
                between app and daemon.
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
            <ArchBlock title="app shell" items={["swiftui views", "hardened runtime", "full disk access"]} accent />
            <div className="case-arch-arrow"><ArchArrow label="xpc · ipc" /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="core framework" items={["14 scan rules", "taskgroup parallel", "rules engine"]} compact />
              <ArchBlock title="privileged helper" items={["smappservice daemon", "protected directories", "xpc contract"]} compact warm />
            </div>
            <div className="case-arch-arrow"><ArchArrow label="ed25519 verify" /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="rule pack" items={["signed rule definitions", "updateable separately", "runtime verification"]} compact />
              <ArchBlock title="deletion" items={["~/.trash/maccleanerpro/", "30-day undo window", "permanent removal opt-in"]} compact />
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
            ["01", "smart scan", "14 cleanup categories run in parallel Swift TaskGroups — user caches, Xcode artifacts, browser caches, app leftovers, logs. Results grouped and ranked by reclaimed size."],
            ["02", "app uninstaller", "Finds leftover support files across 18 system locations per app. Preference plists, application support, launch agents, caches — nothing orphaned behind."],
            ["03", "large & old files", "Walk any folder by size or age with Quick Look preview. Move directly to the staged Trash with one click — no permanent deletion without explicit confirmation."],
          ].map(([n, t, d]) => (
            <motion.div key={n} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>module · {n}</span>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)", display: "inline-block" }} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* code highlight */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="engineering detail"
            title={
              <>
                14 rules.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>All parallel.</span>{" "}
                One TaskGroup.
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
          <motion.div variants={fadeUp} className="dev-term" style={{ minHeight: 340 }}>
            <div className="dev-term-bar">
              <div className="lights">
                <span style={{ background: "#f87171" }} />
                <span style={{ background: "#fbbf24" }} />
                <span style={{ background: "#4ade80" }} />
              </div>
              <span>SmartScan.swift</span>
            </div>
            <div className="dev-term-body mono">
              <div><span className="ln">1</span><span className="com">// all rules run concurrently</span></div>
              <div><span className="ln">2</span><span className="kw">func</span> <span className="vr">runSmartScan</span>() <span className="kw">async throws</span> -&gt; [<span className="str">ScanResult</span>] &#123;</div>
              <div><span className="ln">3</span>  <span className="kw">try await</span> <span className="vr">withThrowingTaskGroup</span>(of: <span className="str">ScanResult</span>.self) &#123; g <span className="kw">in</span></div>
              <div><span className="ln">4</span>    <span className="kw">for</span> rule <span className="kw">in</span> <span className="vr">RulesEngine</span>.verified &#123;</div>
              <div><span className="ln">5</span>      g.addTask &#123; <span className="kw">try await</span> rule.<span className="vr">scan</span>() &#125;</div>
              <div><span className="ln">6</span>    &#125;</div>
              <div><span className="ln">7</span>    <span className="kw">return try await</span> g.<span className="vr">reduce</span>(into: []) &#123; $0.append($1) &#125;</div>
              <div><span className="ln">8</span>  &#125;</div>
              <div><span className="ln">9</span>&#125;</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// rule categories</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                "user caches", "xcode artifacts", "browser caches",
                "app leftovers", "system logs", "derived data",
                "simulator runtimes", "crash reports", "mail attachments",
                "language support", "duplicate fonts", "old ios backups",
                "unused dmg", "stale pkg files",
              ].map((rule) => (
                <div key={rule} className="mono" style={{ fontSize: 11, color: "var(--text-2)", padding: "4px 0", borderBottom: "1px solid var(--line)" }}>
                  · {rule}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* outcomes */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="04" label="the product" />
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
            ["24.6GB", "avg space reclaimed"],
            ["14", "parallel scan rules"],
            ["33", "core unit tests"],
            ["$39", "pay-once · no subscription"],
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

      {/* prev / next */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <div className="case-2col">
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/lynkboard" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← prev case</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Lynkboard</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/tradeslynk" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>next case →</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>TradesLynk</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
