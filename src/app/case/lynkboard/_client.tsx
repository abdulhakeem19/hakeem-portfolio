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

export default function LynkboardCasePage() {
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
          <span style={{ color: "var(--text)" }}>lynkboard</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent)" }}>#</span> case · 02 / 04 · 2024
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
          <span className="dev-chip amber mono">● beta</span>
          <span className="dev-chip mono">macOS</span>
          <span className="dev-chip mono">iOS</span>
          <span className="dev-chip mono">e2ee</span>
          <span className="dev-chip mono">swift</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          Lynkboard —{" "}
          <span style={{ color: "var(--text-3)" }}>copy on your Mac,</span>{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>paste on your iPhone</span>{" "}
          <span style={{ color: "var(--text-3)" }}>in under one second.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="dev-card"
          style={{ padding: 0, marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {[
            ["role", "sole engineer · all platforms"],
            ["stack", "swift 5.9 · supabase · cryptokit"],
            ["timeline", "q2 — q4 2024"],
            ["status", "beta · phases 0–5 complete"],
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
            src="/portfolio-images/lynkboard_showcase.png"
            alt="Lynkboard E2EE clipboard sync app — macOS and iOS"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #08080a 100%)" }} />
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "var(--accent)" }}>●</span> lynkboard · beta
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            macOS 13+ · iOS 16+
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
              Universal Clipboard is{" "}
              <span className="serif" style={{ color: "var(--accent)" }}>iCloud-only</span>{" "}
              and sends your clipboard to Apple's servers.
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
              Developers copy API keys, tokens, and sensitive snippets constantly. Routing those through a cloud server — even Apple's — is a non-starter when you care about operational security.
            </p>
            <p style={{ fontSize: 14, color: "var(--text-3)" }}>
              LAN-first sync with E2EE fallback was the only acceptable architecture.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 12 }}>// constraints</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["< 1s lan", "clipboard syncs on local network instantly"],
                ["e2ee always", "server stores only opaque ciphertext"],
                ["qr pairing", "key exchange via physical proximity only"],
                ["offline-ok", "full history works without internet"],
                ["share ext", "ios share extension reuses same grdb stack"],
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
                LAN-first.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Cloud fallback.</span>{" "}
                Always encrypted.
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
            <ArchBlock title="clients" items={["macOS menu bar", "iOS app", "iOS share extension"]} accent />
            <ArchArrow label="encrypt · seal" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="lan transport" items={["multipeer connectivity", "bonjour discovery", "200ms timeout"]} compact />
              <ArchBlock title="cryptography" items={["chacha20poly aead", "curve25519 keypairs", "qr key exchange"]} compact warm />
            </div>
            <ArchArrow label="relay fallback" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="supabase relay" items={["postgrest http post", "realtime websocket", "phoenix protocol"]} compact />
              <ArchBlock title="storage" items={["grdb · sqlite", "keychain keypairs", "app group container"]} compact />
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
            ["01", "transport", "MultipeerConnectivity for LAN — symmetric advertise+browse, sub-200ms pairing. Supabase relay as automatic fallback on cellular."],
            ["02", "cryptography", "ChaChaPoly AEAD seals payloads before leaving the device. Server stores ciphertext+nonce only. Group key never touches the wire in plaintext."],
            ["03", "shared core", "ClipboardCore Swift Package shared across Mac, iOS app, and Share Extension — zero duplication. Port/adapter pattern behind protocol interfaces."],
          ].map(([n, t, d]) => (
            <motion.div key={n} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>layer · {n}</span>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)", display: "inline-block" }} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* engineering highlights */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="engineering highlights"
            title={
              <>
                Zero-SDK realtime.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Phoenix over URLSession.</span>
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
          <motion.div variants={fadeUp} className="dev-term" style={{ minHeight: 340 }}>
            <div className="dev-term-bar">
              <div className="lights">
                <span style={{ background: "#f87171" }} />
                <span style={{ background: "#fbbf24" }} />
                <span style={{ background: "#4ade80" }} />
              </div>
              <span>SyncCoordinator.swift</span>
            </div>
            <div className="dev-term-body mono">
              <div><span className="ln">1</span><span className="com">// LAN-first, relay fallback actor</span></div>
              <div><span className="ln">2</span><span className="kw">actor</span> <span className="vr">SyncCoordinator</span> &#123;</div>
              <div><span className="ln">3</span>  <span className="kw">func</span> <span className="vr">sync</span>(_ entry: <span className="str">ClipEntry</span>) <span className="kw">async</span> &#123;</div>
              <div><span className="ln">4</span>    <span className="kw">let</span> sealed = <span className="kw">try</span> <span className="vr">box</span>.seal(entry)</div>
              <div><span className="ln">5</span>    <span className="kw">if</span> <span className="kw">await</span> <span className="vr">lan</span>.isReachable &#123;</div>
              <div><span className="ln">6</span>      <span className="kw">try await</span> <span className="vr">lan</span>.send(sealed)</div>
              <div><span className="ln">7</span>    &#125; <span className="kw">else</span> &#123;</div>
              <div><span className="ln">8</span>      <span className="kw">try await</span> <span className="vr">relay</span>.post(sealed)</div>
              <div><span className="ln">9</span>    &#125;</div>
              <div><span className="ln">10</span>  &#125;</div>
              <div><span className="ln">11</span>&#125;</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// what makes it different</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["phoenix ws — no sdk", "Supabase Realtime WebSocket implemented natively over URLSessionWebSocketTask. Zero SDK dependency on the client."],
                ["qr pairing", "Curve25519 keypair exchange via QR code — secure channel established by physical device proximity alone."],
                ["share extension", "iOS Share Extension writes directly to the shared SQLite via app group, reusing the same GRDB stack with zero duplication."],
                ["menu bar native", "macOS LSUIElement process — no Dock icon. NSPasteboard polling at 0.5s, global Shift+Cmd+V hotkey."],
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

      {/* outcomes */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="04" label="where it stands" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {[
            ["<1s", "lan sync latency"],
            ["e2ee", "chacha20poly aead"],
            ["3 targets", "mac · ios · share ext"],
            ["phases 0–5", "complete · storekit next"],
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/privachat" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← prev case</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>PrivaChat</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/maccleaner" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>next case →</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Mac Cleaner Pro</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
