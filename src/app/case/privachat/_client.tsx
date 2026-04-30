"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SectionHead } from "@/components/section-head";
import { fadeUp, staggerSlow as stagger } from "@/lib/animations";

function PhoneFrame({
  src,
  alt,
  label,
  primary,
}: {
  src: string;
  alt: string;
  label: string;
  primary?: boolean;
}) {
  const scale = primary ? 1 : 0.85;
  return (
    <motion.div
      whileHover={{ y: -8, scale: primary ? 1.03 : scale * 1.03 }}
      transition={{ duration: 0.3 }}
      style={{
        width: 220,
        height: 460,
        borderRadius: 36,
        background: "#000",
        padding: 7,
        transform: `scale(${scale})`,
        boxShadow: primary
          ? "0 32px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)"
          : "0 16px 40px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
        filter: primary ? "none" : "brightness(0.8)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 30,
          background: "#0a0a0b",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, bottom: 0 }}>
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="220px"
            priority={primary}
          />
        </div>
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "6px 10px",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          fontFamily: "var(--font-geist-mono)",
          fontSize: 9,
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

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

export default function PrivaChatCasePage() {
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
          <span style={{ color: "var(--text)" }}>privachat</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent)" }}>#</span> case · 01 / 06 · 2025
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
          <span className="dev-chip green mono">● live in production</span>
          <span className="dev-chip mono">mobile</span>
          <span className="dev-chip mono">real-time</span>
          <span className="dev-chip mono">security</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          PrivaChat —{" "}
          <span style={{ color: "var(--text-3)" }}>a messaging platform where the operator</span>{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>stays in control</span>{" "}
          <span style={{ color: "var(--text-3)" }}>of every conversation.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="dev-card"
          style={{ padding: 0, marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {[
            ["role", "sole engineer · system design"],
            ["stack", "react native · node · ws"],
            ["timeline", "q1 — q3 2025"],
            ["status", "production · mvp shipped"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: 24, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{k}</div>
              <div style={{ fontSize: 14, color: "var(--text)" }}>{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* phone showcase */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 0, height: 600, position: "relative", overflow: "hidden", background: "radial-gradient(circle at 50% 30%, oklch(0.72 0.17 240 / 0.15), #08080a 60%)" }}
        >
          <div className="dev-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", gap: 28 }}>
            <PhoneFrame
              src="/privachat-images/login_page.png"
              alt="PrivaChat login screen"
              label="login"
            />
            <PhoneFrame
              src="/privachat-images/projects_page.png"
              alt="PrivaChat projects list"
              label="projects"
              primary
            />
            <PhoneFrame
              src="/privachat-images/voicecall_page.png"
              alt="PrivaChat voice call with admin monitoring"
              label="voice call"
            />
          </div>
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "var(--accent)" }}>●</span> privachat · v1.2
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            iphone 15 pro · ios 17
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
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// brief</div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16 }}>
              Operators wanted to{" "}
              <span className="serif" style={{ color: "var(--accent)" }}>moderate every interaction</span>{" "}
              without rebuilding chat from scratch.
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
              No phone numbers in DMs. No off-platform calls. No back-channel coordination between users on the platform.
            </p>
            <p style={{ fontSize: 14, color: "var(--text-3)" }}>
              Consumer chat assumes good actors. This product couldn&apos;t.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// constraints</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["p95 < 100ms", "message delivery globally"],
                ["admin-gated", "every call requires approval"],
                ["server-side", "moderation, never client-trusted"],
                ["auditable", "every state change logged"],
                ["mobile-first", "rn for ios + android, single codebase"],
              ].map(([k, v]) => (
                <li key={k} style={{ display: "flex", gap: 14, fontSize: 13 }}>
                  <span className="mono" style={{ color: "var(--accent)", minWidth: 100 }}>{k}</span>
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
                Three planes.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Each one auditable.</span>
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
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", alignItems: "stretch", gap: 0 }}>
            <ArchBlock title="clients" items={["react native ios", "react native android", "admin web (next.js)"]} accent />
            <ArchArrow label="wss · tls 1.3" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="edge" items={["auth · jwt", "rate limit", "schema validation"]} compact />
              <ArchBlock title="moderation" items={["phone · email regex", "handle detection", "obfuscation scorer"]} compact warm />
            </div>
            <ArchArrow label="pub/sub" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="control" items={["postgres (supabase)", "approval state machine", "audit log"]} compact />
              <ArchBlock title="realtime" items={["redis pub/sub", "websocket fanout", "sfu (mediasoup)"]} compact />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 32 }}
        >
          {[
            ["01", "control", "admin queue, role assignments, approval state. postgres source of truth, every state change audited."],
            ["02", "signaling", "websocket fanout for presence, typing, call invites. server validates approvals before forwarding."],
            ["03", "media", "webrtc routed through sfu. calls drop instantly if approval is revoked mid-session."],
          ].map(([n, t, d]) => (
            <motion.div key={n} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>plane · {n}</span>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)", display: "inline-block" }} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* moderation */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="content moderation"
            title={
              <>
                Detection runs{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>before</span>{" "}
                the message ships.
              </>
            }
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          <motion.div variants={fadeUp} className="dev-term" style={{ minHeight: 360 }}>
            <div className="dev-term-bar">
              <div className="lights">
                <span style={{ background: "#f87171" }} />
                <span style={{ background: "#fbbf24" }} />
                <span style={{ background: "#4ade80" }} />
              </div>
              <span>moderation/pipeline.ts</span>
            </div>
            <div className="dev-term-body mono">
              <div><span className="ln">1</span><span className="com">// composable rule engine</span></div>
              <div><span className="ln">2</span><span className="kw">export const</span> <span className="vr">moderate</span> = <span className="kw">async</span> (msg) =&gt; &#123;</div>
              <div><span className="ln">3</span>  <span className="kw">const</span> r = <span className="kw">await</span> <span className="vr">pipe</span>(msg)</div>
              <div><span className="ln">4</span>    .<span className="vr">then</span>(<span className="str">detectPhone</span>)</div>
              <div><span className="ln">5</span>    .<span className="vr">then</span>(<span className="str">detectEmail</span>)</div>
              <div><span className="ln">6</span>    .<span className="vr">then</span>(<span className="str">detectHandle</span>)</div>
              <div><span className="ln">7</span>    .<span className="vr">then</span>(<span className="str">scoreObfuscated</span>);</div>
              <div><span className="ln">8</span></div>
              <div><span className="ln">9</span>  <span className="kw">if</span> (r.score &gt; <span className="str">0.7</span>)</div>
              <div><span className="ln">10</span>    <span className="kw">return</span> <span className="vr">redact</span>(r.spans);</div>
              <div><span className="ln">11</span>  <span className="kw">return</span> msg;</div>
              <div><span className="ln">12</span>&#125;;</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// what recipients see</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { who: "sender", t: "reach me at +91 98765 43210 after the call." },
                { who: "sys", t: "ⓘ contact info auto-redacted by platform" },
                { who: "recv", t: "reach me at ███ ████ ████ after the call." },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: m.who === "sender" ? "flex-end" : m.who === "recv" ? "flex-start" : "center",
                    maxWidth: "85%",
                    padding: m.who === "sys" ? "6px 12px" : "10px 14px",
                    borderRadius: m.who === "sys" ? 999 : 12,
                    background: m.who === "sender" ? "var(--accent)" : m.who === "recv" ? "var(--bg-2)" : "transparent",
                    color: m.who === "sender" ? "#06121f" : m.who === "sys" ? "var(--text-3)" : "var(--text)",
                    fontSize: m.who === "sys" ? 11 : 13,
                    border: m.who === "sys" ? "1px dashed var(--line-2)" : "none",
                    fontFamily: m.who === "sys" ? "var(--font-geist-mono)" : "inherit",
                  }}
                >
                  {m.t}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px dashed var(--line-2)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[["regex", "phone · email · handle"], ["heuristic", "obfuscated forms"], ["threshold", "score > 0.7"]].map(([k, v]) => (
                <div key={k}>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</div>
                  <div style={{ fontSize: 12, color: "var(--text-2)", marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* outcomes */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="04" label="outcomes · 90-day window" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {[
            ["<80ms", "p95 message delivery"],
            ["12K+", "msgs / day at mvp"],
            ["100%", "admin-gated calls"],
            ["0", "platform bypasses observed"],
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href="/work" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← /work</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>all projects</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/lynkboard" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>next case →</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Lynkboard</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
