"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { SpotlightCard } from "@/components/spotlight-card";
import { ALL_PROJECTS, STATUS_COLOR, type Project } from "@/lib/data";
import { PREVIEW_MAP } from "@/components/project-previews";
import { fadeUp, stagger } from "@/lib/animations";

const CASE_HREFS: Record<string, string> = {
  affora: "/case/affora",
  privachat: "/case/privachat",
  lynkboard: "/case/lynkboard",
  maccleaner: "/case/maccleaner",
  tradeslynk: "/case/tradeslynk",
  neurosiv: "/case/neurosiv",
  arvora: "/case/arvora",
  costos: "/case/costos",
};

function BigProject({ project: p }: { project: Project }) {
  const Preview = PREVIEW_MAP[p.id];
  const href = CASE_HREFS[p.id] ?? "#";
  return (
    <motion.div variants={fadeUp} whileHover={{ scale: 1.008 }} transition={{ duration: 0.2 }}>
      <SpotlightCard
        href={href}
        style={{ display: "flex", flexDirection: "column", minHeight: 540, cursor: "pointer", height: "100%" }}
      >
        <div style={{ flex: 1, position: "relative", minHeight: 320, background: "#08080a", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
          {Preview && <Preview />}
          <div style={{ position: "absolute", bottom: 14, left: 16, display: "flex", gap: 6, zIndex: 2 }}>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>/{p.label}</span>
            <span className={`dev-chip ${STATUS_COLOR[p.status] || ""} mono`}>● {p.status}</span>
            <span className="dev-chip mono">{p.year}</span>
          </div>
        </div>
        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em" }}>{p.name}</h3>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>{p.kind}</span>
          </div>
          <div style={{ fontSize: 14, color: "var(--text-2)", maxWidth: 520 }}>{p.tagline}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {p.tech.map((t) => (
              <span key={t} className="dev-chip mono">{t}</span>
            ))}
          </div>
          {p.metrics && (
            <div style={{ display: "flex", gap: 28, marginTop: 8, paddingTop: 16, borderTop: "1px dashed var(--line-2)" }}>
              {p.metrics.map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>{n}</div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

function SmallProject({ project: p }: { project: Project }) {
  const Preview = PREVIEW_MAP[p.id];
  const href = CASE_HREFS[p.id] ?? "#";
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <SpotlightCard
        href={href}
        style={{ display: "flex", flexDirection: "column", minHeight: 380, cursor: "pointer", height: "100%" }}
      >
        <div style={{ height: 180, position: "relative", background: "#08080a", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
          {Preview && <Preview />}
          <div style={{ position: "absolute", bottom: 10, left: 12, display: "flex", gap: 6, zIndex: 2 }}>
            <span className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>/{p.label}</span>
            <span className={`dev-chip ${STATUS_COLOR[p.status] || ""} mono`} style={{ fontSize: 10 }}>● {p.status}</span>
          </div>
        </div>
        <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <h4 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em" }}>{p.name}</h4>
            <span className="mono" style={{ fontSize: 10, color: "var(--text-4)" }}>{p.year}</span>
          </div>
          <div className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>{p.kind}</div>
          <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.5, flex: 1 }}>{p.tagline}</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 4 }}>
            {p.tech.slice(0, 3).map((t) => (
              <span key={t} className="dev-chip mono" style={{ fontSize: 10, padding: "3px 8px" }}>{t}</span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function WorkPage() {
  const featured = ALL_PROJECTS.slice(0, 4);
  const rest = ALL_PROJECTS.slice(4);

  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      <section className="dev-section" style={{ paddingTop: 48, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="02"
            label="/work · selected projects"
            title={
              <>
                Eight projects.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>
                  Three platforms
                </span>
                . One thread.
              </>
            }
            meta="2023 — 2026"
          />
        </motion.div>

        {/* filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}
        >
          <div style={{ display: "flex", gap: 4 }}>
            {["all", "mobile", "macOS", "web", "co-founded"].map((t, i) => (
              <button key={t} className={`dev-chip mono ${i === 0 ? "accent" : ""}`} style={{ cursor: "pointer" }}>
                {t}
              </button>
            ))}
          </div>
          <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
            sort: recent · {ALL_PROJECTS.length} projects
          </div>
        </motion.div>

        {/* featured top row 2-up */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px" }}
          className="work-2col"
          style={{ marginBottom: 16 }}
        >
          {featured.slice(0, 2).map((p) => (
            <BigProject key={p.id} project={p} />
          ))}
        </motion.div>

        {/* featured bottom row 2-up */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="work-2col"
          style={{ marginBottom: 16 }}
        >
          {featured.slice(2, 4).map((p) => (
            <BigProject key={p.id} project={p} />
          ))}
        </motion.div>

        {/* bottom 3-col for rest */}
        {rest.length > 0 && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="work-3col"
          >
            {rest.map((p) => (
              <BigProject key={p.id} project={p} />
            ))}
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  );
}
