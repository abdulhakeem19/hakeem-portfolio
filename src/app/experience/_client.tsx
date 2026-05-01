"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { ROLES } from "@/lib/data";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

export default function ExperiencePage() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      <section className="dev-section" style={{ paddingTop: 48, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="05"
            label="/experience · resume"
            title={
              <>
                Three roles.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>One practice.</span>
              </>
            }
            meta="↓ download pdf"
            metaHref="/abdul-hakeem-resume.pdf"
            metaDownload="abdul-hakeem-resume.pdf"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="dev-card"
          style={{ padding: 0, overflow: "hidden" }}
        >
          {ROLES.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="exp-roles-row"
              style={{
                borderBottom: i < ROLES.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div>
                <div className="mono" style={{ fontSize: 12, color: "var(--text)" }}>{r.year}</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4 }}>{r.dur}</div>
                {r.current && (
                  <span className="dev-chip green mono" style={{ marginTop: 12, display: "inline-flex" }}>● current</span>
                )}
              </div>
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.025em", marginBottom: 4 }}>{r.role}</h3>
                <div style={{ fontSize: 14, color: "var(--text-3)", marginBottom: 16 }}>
                  <span className="serif" style={{ color: "var(--accent)", fontSize: 16 }}>{r.org}</span> · {r.where}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {r.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 13, color: "var(--text-2)", display: "flex", gap: 12 }}>
                      <span className="mono" style={{ color: "var(--text-4)", fontSize: 11, marginTop: 3 }}>
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span style={{ flex: 1 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignContent: "flex-start" }}>
                {r.tech.map((t) => (
                  <span key={t} className="dev-chip mono">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="06" label="education" />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="exp-edu-grid"
        >
          {[
            ["2023", "M.Sc. computer science"],
            ["2021", "B.Sc. computer science"],
          ].map(([y, d], i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -3 }} className="dev-card" style={{ padding: 24 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 10 }}>{y}</div>
              <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 6 }}>{d}</div>
              <div style={{ fontSize: 13, color: "var(--text-3)" }}>annai violet college · chennai</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="07" label="skills · grouped" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card exp-skills-grid"
        >
          {[
            ["frontend", ["react", "next.js", "react native", "angular", "typescript", "tailwind"]],
            ["backend", ["laravel", "node.js", "express", "rest apis"]],
            ["native", ["swift", "swiftui", "cryptokit", "storekit", "grdb"]],
            ["concepts", ["system design", "clean arch", "real-time", "secure comms"]],
          ].map(([k, list]) => (
            <div key={k as string}>
              <div className="mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>// {k}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {(list as string[]).map((s) => (
                  <motion.div
                    key={s}
                    whileHover={{ x: 4, color: "var(--text)" }}
                    style={{ fontSize: 13, color: "var(--text-2)", padding: "6px 0", borderBottom: "1px dashed var(--line)" }}
                  >
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
