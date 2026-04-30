"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { DevStatus } from "@/components/dev-status";
import { NOW_ACTIVITY } from "@/lib/data";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

export default function NowPage() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      <section className="dev-section" style={{ paddingTop: 48, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="06"
            label="/now"
            title={
              <>
                What I&apos;m building{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>right now</span>.
              </>
            }
            meta="updated 27 apr 2026"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}
        >
          {/* primary focus card */}
          <motion.div
            variants={fadeUp}
            className="dev-card dev-spotlight"
            style={{ padding: 40, background: "linear-gradient(135deg, var(--accent-soft), transparent 60%), var(--bg-1)", borderColor: "var(--accent)", position: "relative", overflow: "hidden" }}
          >
            <div className="dev-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <span className="dev-chip accent mono">// primary focus</span>
                <DevStatus>active</DevStatus>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>
                <span className="serif" style={{ color: "var(--accent)" }}>Lynkboard 2.0</span>
                <br />
                <span style={{ color: "var(--text-3)" }}>rewriting the sync core in rust</span>
                <br />
                for sub-20ms lan latency.
              </h2>
              <p style={{ fontSize: 14, color: "var(--text-2)", maxWidth: 540, marginBottom: 28 }}>
                The Swift implementation works but the framing layer does too much. New core is a single binary,
                FFI&apos;d into both apps, with deterministic conflict resolution via CRDTs.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, paddingTop: 20, borderTop: "1px dashed var(--line-2)" }}>
                {[["started", "mar 2026"], ["target", "q3 2026"], ["progress", "34%"]].map(([k, v]) => (
                  <div key={k}>
                    <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{k}</div>
                    <div style={{ fontSize: 16, color: "var(--text)", marginTop: 4 }}>{v}</div>
                  </div>
                ))}
              </div>
              {/* animated progress bar */}
              <div style={{ height: 4, background: "var(--bg-3)", borderRadius: 2, marginTop: 14, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "34%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  style={{ height: "100%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="dev-card" style={{ padding: 24 }}>
              <span className="dev-chip mono" style={{ marginBottom: 12 }}>// side</span>
              <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 12 }}>PrivaChat v1.3</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 8 }}>
                Group calls with admin-side mute &amp; per-participant approval revocation.
              </p>
            </div>
            <div className="dev-card" style={{ padding: 24 }}>
              <span className="dev-chip mono" style={{ marginBottom: 12 }}>// learning</span>
              <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 12 }}>distributed systems</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 8 }}>
                DDIA + Martin Kleppmann&apos;s lecture series.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* activity log */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="07" label="activity log · last 30d" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="dev-card"
          style={{ padding: 0, overflow: "hidden" }}
        >
          {NOW_ACTIVITY.map(([d, kind, t], i, a) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              whileHover={{ background: "rgba(255,255,255,0.02)" }}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 110px 1fr",
                gap: 24,
                padding: "16px 24px",
                borderBottom: i < a.length - 1 ? "1px solid var(--line)" : "none",
                alignItems: "center",
                fontSize: 13,
              }}
            >
              <div className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>{d}</div>
              <span className="dev-chip accent mono" style={{ justifySelf: "flex-start" }}>{kind}</span>
              <div style={{ color: "var(--text-2)" }}>{t}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
