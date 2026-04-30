"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { DevStatus } from "@/components/dev-status";
import { fadeUp, stagger } from "@/lib/animations";

const CONTACTS = [
  { k: "email", v: "abdul.hakeem5764@gmail.com", big: true, href: "mailto:abdul.hakeem5764@gmail.com" },
  { k: "phone", v: "+91 9025203285", href: "tel:+919025203285" },
  { k: "github", v: "github.com/abdulhakeem19", href: "https://github.com/abdulhakeem19" },
  { k: "linkedin", v: "in/abdul-hakeem", href: "https://linkedin.com/in/abdul-hakeem19" },
];

export default function ContactPage() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      <section className="dev-section" style={{ paddingTop: 48, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}
        >
          <div className="dev-eyebrow mono">
            <span className="num">07</span>
            <span className="line" />
            /contact
          </div>
          <DevStatus>available · may 2026</DevStatus>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 500, letterSpacing: "-0.045em", lineHeight: 0.96, marginBottom: 56, maxWidth: 1100 }}
        >
          Let&apos;s{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>build</span>{" "}
          something{" "}
          <span style={{ color: "var(--text-3)" }}>that</span> actually ships.
        </motion.h1>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}
        >
          {/* contact links */}
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 0, overflow: "hidden" }}>
            {CONTACTS.map((item, i) => (
              <motion.a
                key={item.k}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ background: "rgba(255,255,255,0.03)" }}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  padding: item.big ? "28px 28px" : "20px 28px",
                  borderBottom: i < CONTACTS.length - 1 ? "1px solid var(--line)" : "none",
                  transition: "background 0.15s",
                }}
              >
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", minWidth: 90 }}>// {item.k}</span>
                <span style={{ flex: 1, fontSize: item.big ? 32 : 18, fontWeight: item.big ? 500 : 400, letterSpacing: "-0.02em", color: "var(--text)" }}>{item.v}</span>
                <span style={{ color: "var(--accent)", fontSize: 14 }}>↗</span>
              </motion.a>
            ))}
          </motion.div>

          {/* sidebar */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="dev-card" style={{ padding: 24 }}>
              <span className="dev-chip mono" style={{ marginBottom: 12 }}>// response</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 14 }}>
                <span style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1 }}>
                  ~12<span style={{ color: "var(--text-3)", fontSize: 28 }}>h</span>
                </span>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-3)", marginTop: 12 }}>
                I read every message. Reply same business day with concrete next steps.
              </p>
            </div>

            <div className="dev-card" style={{ padding: 24 }}>
              <span className="dev-chip mono" style={{ marginBottom: 12 }}>// interested in</span>
              <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {["real-time / collab products", "native macOS or iOS", "security & privacy-first systems", "early-stage co-founder roles"].map((t) => (
                  <li key={t} style={{ fontSize: 13, color: "var(--text-2)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)" }}>+</span>{t}
                  </li>
                ))}
                {["crypto / web3", "pure agency work"].map((t) => (
                  <li key={t} style={{ fontSize: 13, color: "var(--text-4)", display: "flex", gap: 10, textDecoration: "line-through" }}>
                    <span>−</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
