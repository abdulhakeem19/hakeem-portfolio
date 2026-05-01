"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

export default function AboutPage() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      <section className="dev-section" style={{ paddingTop: 48, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="04" label="/about" meta="chennai · ist" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="about-grid"
        >
          <motion.div variants={fadeUp}>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 24 }}>
              I&apos;m Hakeem.
              <br />
              <span style={{ color: "var(--text-3)" }}>full-stack product engineer</span>
              <br />
              <span className="serif" style={{ color: "var(--accent)" }}>web · mobile · native.</span>
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 15, color: "var(--text-2)", lineHeight: 1.6, maxWidth: 640, marginTop: 32 }}>
              <p>
                Started writing CSS in college and got hooked on the loop — idea, build, ship, watch someone use it. Two and a half years later I&apos;m a full-stack product engineer at{" "}
                <span style={{ color: "var(--text)" }}>Onexfort</span>, building scalable web apps with React and Laravel.
              </p>
              <p>
                Outside work I&apos;ve co-founded two ventures (TradesLynk, Neurosiv) and shipped three products of my own. The thread is system design — I&apos;d rather spend a week on state machines than a week debugging the wrong thing later.
              </p>
              <p style={{ color: "var(--text-3)" }}>
                Swift for native macOS and iOS. TypeScript for everything else. The stack is just the medium — what I care about is whether the thing works, feels solid, and respects the user&apos;s time.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="dev-card"
            style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden", background: "#08080a" }}
          >
            <Image
              src="/Profile_image.png"
              alt="Abdul Hakeem"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 900px) 100vw, 380px"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,10,0.7) 100%)" }} />
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", fontSize: 10, color: "rgba(255,255,255,0.5)" }} className="mono">
              <span>// initialized 2001</span>
              <span>jan 19</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="05" label="beyond code" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="interests-grid"
        >
          {[
            { t: "reading", d: "Designing Data-Intensive Applications. Working in Public. The occasional manhwa arc that goes on way too long.", icon: "◆" },
            { t: "learning", d: "CRDTs · Rust · distributed systems primitives.", icon: "◇" },
            { t: "off-screen", d: "Anime when the week earns it. PC gaming on weekends. Travelling when possible, eating well always.", icon: "◈" },
          ].map((b) => (
            <motion.div
              key={b.t}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="dev-card"
              style={{ padding: 24, minHeight: 160 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>// {b.t}</span>
                <span style={{ fontSize: 18, color: "var(--accent)" }}>{b.icon}</span>
              </div>
              <div style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.55 }}>{b.d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
