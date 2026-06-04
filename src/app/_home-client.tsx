"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { DevStatus } from "@/components/dev-status";
import { SectionHead } from "@/components/section-head";
import { AnimatedTerminal } from "@/components/terminal";
import { Ticker } from "@/components/ticker";
import { SpotlightCard } from "@/components/spotlight-card";
import {
  AfforaPreview,
  PrivaChatPreview,
  LynkboardPreview,
  NeurosivPreview,
  ArvoraPreview,
  CostosPreview,
} from "@/components/project-previews";
import { PRINCIPLES, HOME_ACTIVITY } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/animations";
import { useState, useEffect } from "react";

function useISTTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).toLowerCase();
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 10000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function FeatureCard({
  label,
  badge,
  title,
  kind,
  tagline,
  tech,
  children,
  tall,
  href = "/case/privachat",
}: {
  label: string;
  badge: React.ReactNode;
  title: string;
  kind: string;
  tagline: string;
  tech: string[];
  children: React.ReactNode;
  tall?: boolean;
  href?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.008 }}
      transition={{ duration: 0.2 }}
      style={{ gridRow: tall ? "span 2" : "span 1", height: "100%" }}
    >
      <SpotlightCard
        href={href}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: tall ? 600 : 290,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            flex: 1,
            position: "relative",
            background: "#08080a",
            borderBottom: "1px solid var(--line)",
            overflow: "hidden",
            minHeight: tall ? 360 : 160,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 16,
              zIndex: 2,
              display: "flex",
              gap: 6,
              alignItems: "center",
            }}
          >
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
              /{label}
            </span>
            {badge}
          </div>
          {children}
        </div>
        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.025em" }}>
              {title}
            </h3>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
              {kind}
            </span>
          </div>
          <div style={{ fontSize: 13, color: "var(--text-2)" }}>{tagline}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 4,
            }}
          >
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {tech.map((t) => (
                <span key={t} className="dev-chip mono">
                  {t}
                </span>
              ))}
            </div>
            <span style={{ fontSize: 12, color: "var(--accent-2)" }}>case study →</span>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function HomePage() {
  const istTime = useISTTime();
  const now = new Date();
  const currentMonth = now.toLocaleDateString("en-IN", { month: "long", timeZone: "Asia/Kolkata" }).toLowerCase();
  const currentYear = now.getFullYear();
  return (
    <main className="dev-page page-top">
      {/* dot grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* HERO */}
      <motion.section
        className="dev-section"
        style={{ paddingTop: 48, paddingBottom: 32, position: "relative", zIndex: 1 }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className="hero-grid">
          {/* main hero */}
          <motion.div variants={fadeUp} style={{ gridRow: "span 2" }}>
            <SpotlightCard style={{ padding: 48, minHeight: 520, position: "relative", height: "100%" }}>
              <div
                className="dev-grid-bg"
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.4,
                  maskImage: "radial-gradient(circle at 30% 20%, black, transparent 70%)",
                }}
              />
              <div className="corner" />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <DevStatus>available · {currentMonth} {currentYear}</DevStatus>
                  <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
                    chennai · tamilnadu · {istTime}
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: "clamp(48px, 5vw, 76px)",
                    fontWeight: 500,
                    lineHeight: 0.98,
                    letterSpacing: "-0.04em",
                    marginTop: 24,
                  }}
                >
                  Abdul Hakeem.
                  <br />
                  <span style={{ color: "var(--text-3)" }}>full-stack product engineer</span>
                  <br />
                  <span className="serif" style={{ color: "var(--accent)" }}>
                    shipping real software.
                  </span>
                </h1>

                <p style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 580, lineHeight: 1.55, marginTop: 8 }}>
                  2.5+ yrs building production systems across{" "}
                  <span style={{ color: "var(--text)" }}>react · swift · node</span>. co-founder of two
                  ventures. obsessed with system design, real-time architectures, and the boring details
                  that make software feel solid.
                </p>

                <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                  <Link href="/work" className="dev-btn accent-btn">
                    selected work <span style={{ marginLeft: 4 }}>→</span>
                  </Link>
                  <Link href="/contact" className="dev-btn ghost">
                    abdul.hakeem5764@gmail.com
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* terminal */}
          <motion.div variants={fadeUp}>
            <div className="dev-card" style={{ padding: 0, minHeight: 252 }}>
              <AnimatedTerminal />
            </div>
          </motion.div>

          {/* metrics */}
          <motion.div variants={fadeUp}>
            <div className="dev-card" style={{ padding: 24, minHeight: 252, display: "flex", flexDirection: "column" }}>
              <div className="dev-eyebrow mono">
                <span className="line" />
                // stats
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 16, flex: 1 }}>
                {[
                  ["2.5+", "years"],
                  ["07", "shipped"],
                  ["02", "co-founded"],
                  ["12+", "stacks"],
                ].map(([n, l]) => (
                  <motion.div
                    key={l}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      background: "var(--bg-2)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      padding: 14,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.03em", color: "var(--text)" }}>
                      {n}
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}
                    >
                      {l}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* TICKER */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Ticker />
      </div>

      {/* FEATURED WORK */}
      <section className="dev-section" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            anchor="01"
            label="selected work"
            title={
              <>
                Production systems,{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>
                  shipped
                </span>
                .
              </>
            }
            meta="08 / 08"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="work-featured-grid"
        >
          <motion.div variants={fadeUp} style={{ gridRow: "span 2" }}>
            <FeatureCard
              label="01"
              badge={
                <>
                  <span className="dev-chip amber mono">● beta</span>
                  <span className="dev-chip mono">2026</span>
                </>
              }
              title="Affora"
              kind="mobile · fintech · offline-first"
              tagline="Behavioral finance app — your Reality Balance and a daily Safe-to-Spend number, with bank & UPI notifications parsed on-device. No READ_SMS."
              tech={["flutter", "drift / sqlite", "riverpod", "nestjs"]}
              href="/case/affora"
              tall
            >
              <AfforaPreview />
            </FeatureCard>
          </motion.div>

          <motion.div variants={fadeUp}>
            <FeatureCard
              label="02"
              badge={
                <>
                  <span className="dev-chip green mono">● live</span>
                  <span className="dev-chip mono">2025</span>
                </>
              }
              title="PrivaChat"
              kind="mobile · real-time · security"
              tagline="Secure messaging & call platform with admin-controlled communication workflows."
              tech={["react native", "node", "websockets", "postgres"]}
              href="/case/privachat"
            >
              <PrivaChatPreview />
            </FeatureCard>
          </motion.div>

          <motion.div variants={fadeUp}>
            <FeatureCard
              label="03"
              badge={
                <>
                  <span className="dev-chip amber mono">● beta</span>
                  <span className="dev-chip mono">2024</span>
                </>
              }
              title="Lynkboard"
              kind="macOS · iOS · sync"
              tagline="Cross-device clipboard with hybrid LAN + cloud sync, end-to-end encrypted."
              tech={["swift", "supabase", "cryptokit"]}
              href="/work"
            >
              <LynkboardPreview />
            </FeatureCard>
          </motion.div>
        </motion.div>

        {/* secondary row — neurosiv · arvora · costos */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="work-3col"
          style={{ marginTop: 16 }}
        >
          {[
            { label: "05", badge: <span className="dev-chip amber mono">● active</span>, title: "Neurosiv", kind: "ai studio · co-founder", tagline: "AI-first innovation studio — 4+ clients, 2 live AI products, 8 service lines.", tech: ["react", "typescript", "gsap"], href: "/case/neurosiv", Preview: NeurosivPreview },
            { label: "06", badge: <span className="dev-chip mono">● demo</span>, title: "Arvora", kind: "e-commerce · full-stack", tagline: "Production-grade e-commerce — real Razorpay/Stripe payments, admin analytics, 7-state orders.", tech: ["next.js 16", "supabase", "razorpay"], href: "/case/arvora", Preview: ArvoraPreview },
            { label: "07", badge: <span className="dev-chip amber mono">● active</span>, title: "Costos", kind: "internal tool · startup ops", tagline: "Startup ops dashboard replacing spreadsheets — expenses, clients, P&L, RBAC.", tech: ["react 18", "supabase", "recharts"], href: "/case/costos", Preview: CostosPreview },
          ].map((p) => (
            <motion.div key={p.label} variants={fadeUp}>
              <FeatureCard label={p.label} badge={p.badge} title={p.title} kind={p.kind} tagline={p.tagline} tech={p.tech} href={p.href}>
                <p.Preview />
              </FeatureCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRINCIPLES */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            anchor="02"
            label="approach"
            title={
              <>
                How I{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>
                  actually
                </span>{" "}
                build.
              </>
            }
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="principles-grid"
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.n}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="dev-card"
              style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, minHeight: 220 }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>{p.n}</span>
                <span style={{ fontSize: 22, color: "var(--accent)" }}>{p.icon}</span>
              </div>
              <div style={{ fontSize: 17, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.015em" }}>
                {p.t}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-3)", lineHeight: 1.55 }}>{p.d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ACTIVITY */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            anchor="03"
            label="recent activity"
            title={
              <>
                Latest{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>
                  commits
                </span>{" "}
                &amp; ships.
              </>
            }
            meta="auto-synced from github"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 0, overflow: "hidden" }}
        >
          {HOME_ACTIVITY.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              whileHover={{ background: "rgba(255,255,255,0.02)" }}
              className="activity-row"
              style={{
                borderBottom: i < HOME_ACTIVITY.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>{row.d}</div>
              <span className="dev-chip accent mono" style={{ justifySelf: "flex-start" }}>{row.kind}</span>
              <div className="mono hide-mobile" style={{ fontSize: 12, color: "var(--text-2)" }}>{row.repo}</div>
              <div style={{ color: "var(--text)" }}>{row.msg}</div>
              <div className="mono hide-mobile" style={{ fontSize: 11, color: "var(--text-4)", textAlign: "right" }}>{row.sha}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
