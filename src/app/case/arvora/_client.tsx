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

export default function ArvoraCasePage() {
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
          <span style={{ color: "var(--text)" }}>arvora</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent)" }}>#</span> case · 06 / 07 · 2024
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
        <motion.div variants={fadeUp} style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          <span className="dev-chip green mono">● live demo</span>
          <span className="dev-chip mono">e-commerce</span>
          <span className="dev-chip mono">next.js 16</span>
          <span className="dev-chip mono">supabase</span>
          <span className="dev-chip mono">razorpay</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1100 }}
        >
          Arvora —{" "}
          <span style={{ color: "var(--text-3)" }}>production-grade</span>{" "}
          <span className="serif" style={{ color: "var(--accent)" }}>full-stack e-commerce</span>{" "}
          <span style={{ color: "var(--text-3)" }}>with real payments.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="dev-card case-meta-grid"
          style={{ padding: 0, marginTop: 48 }}
        >
          {[
            ["role", "sole engineer · product design"],
            ["stack", "next.js 16 · supabase · razorpay · stripe"],
            ["purpose", "client demo · e-commerce blueprint"],
            ["status", "live · arvora-ecommerce.netlify.app"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: 24, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{k}</div>
              <div style={{ fontSize: 14, color: "var(--text)" }}>{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* showcase */}
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
            src="/arvora_showcase.png"
            alt="Arvora e-commerce platform"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #08080a 100%)" }} />
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.12em", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "var(--accent)" }}>●</span> arvora · live
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--text-2)", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px" }}>
            <a href="https://arvora-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>arvora-ecommerce.netlify.app ↗</a>
          </div>
        </motion.div>
      </section>

      {/* stack */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="01" label="tech stack" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 0, overflow: "hidden" }}
        >
          {[
            ["Framework", "Next.js 16 — App Router, server + client components"],
            ["Language", "TypeScript 5 — strict, fully typed throughout"],
            ["Backend / DB", "Supabase — PostgreSQL, Auth, Storage"],
            ["State", "Zustand — cart + auth, localStorage-persisted across reloads"],
            ["Styling", "Tailwind CSS v4 + shadcn/ui + Radix UI"],
            ["Animation", "Framer Motion 12 — unified ease [0.22, 1, 0.36, 1] across all transitions"],
            ["Charts", "Recharts — admin analytics dashboard"],
            ["Payments", "Razorpay (UPI · cards · wallets) + Stripe + Cash on Delivery"],
            ["Deployment", "Netlify"],
          ].map(([k, v], i, a) => (
            <div key={k} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, padding: "16px 28px", borderBottom: i < a.length - 1 ? "1px solid var(--line)" : "none", alignItems: "center" }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</span>
              <span style={{ fontSize: 13, color: "var(--text-2)" }}>{v}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* architecture */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="02"
            label="architecture"
            title={
              <>
                Supabase-first.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>No API layer for reads.</span>
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
          style={{ padding: 40, position: "relative", marginBottom: 16 }}
        >
          <div className="dev-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
          <div className="case-arch-diagram" style={{ position: "relative" }}>
            <ArchBlock title="storefront" items={["next.js app router", "server components", "client cart (zustand)"]} accent />
            <div className="case-arch-arrow">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 14px" }}>
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6 }}>supabase js sdk</div>
                <div style={{ width: "100%", height: 1, background: "var(--accent)", position: "relative", boxShadow: "0 0 6px var(--accent-glow)" }}>
                  <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderLeft: "6px solid var(--accent)", borderTop: "3px solid transparent", borderBottom: "3px solid transparent" }} />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="supabase" items={["postgresql · rls", "auth (email/pass)", "storage (images)"]} compact />
              <ArchBlock title="payments" items={["razorpay webhook", "hmac-sha256 verify", "stripe + cod"]} compact warm />
            </div>
            <div className="case-arch-arrow">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 14px" }}>
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6 }}>api routes only</div>
                <div style={{ width: "100%", height: 1, background: "var(--accent)", position: "relative", boxShadow: "0 0 6px var(--accent-glow)" }}>
                  <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderLeft: "6px solid var(--accent)", borderTop: "3px solid transparent", borderBottom: "3px solid transparent" }} />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ArchBlock title="admin" items={["full crud", "recharts analytics", "order lifecycle"]} compact />
              <ArchBlock title="schema" items={["9 core tables", "jsonb addresses", "nested categories"]} compact />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-3col"
        >
          {[
            ["01", "supabase-first reads", "100% client-side data fetching via Supabase JS SDK — no traditional API layer for queries. Only payment webhooks use Next.js API routes. Keeps the architecture simple and fast."],
            ["02", "payment verification", "Razorpay HMAC-SHA256 signature validated server-side before any order is created. Payment gateway flows are the only thing behind an API route."],
            ["03", "self-referencing categories", "parent_id FK supports unlimited nesting depth. A single categories table handles flat and nested hierarchies without schema changes."],
          ].map(([n, t, d]) => (
            <motion.div key={n} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>detail · {n}</span>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)", display: "inline-block" }} />
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* storefront features */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="03"
            label="storefront · customer-facing"
            title={
              <>
                Everything a real store{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>actually needs.</span>
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
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// shopping experience</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Product catalogue — category filters, rating filters, sort, pagination",
                "Product detail pages — image galleries, verified review system (1–5★)",
                "Smart cart — free shipping progress bar (₹2,999+), quantity controls, auto 18% GST",
                "Multi-step checkout — shipping form → payment → order confirmation",
                "Multi-gateway payments — Razorpay (UPI, cards, netbanking, wallets), Stripe, COD",
                "Order tracking — post-purchase order detail and history",
              ].map((f) => (
                <div key={f} style={{ fontSize: 13, color: "var(--text-2)", display: "flex", gap: 10, lineHeight: 1.5 }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>{f}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="dev-card" style={{ padding: 32 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16 }}>// account & loyalty</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Supabase Auth — email/password, profile management, address book",
                "Order history and real-time delivery tracking",
                "Loyalty program — earn rewards, exclusive member offers, early drops",
                "Newsletter subscription with email capture",
                "Customer testimonials from verified purchasers",
                "India-first — INR, 18% GST, ₹2,999 free-shipping, COD as default",
              ].map((f) => (
                <div key={f} style={{ fontSize: 13, color: "var(--text-2)", display: "flex", gap: 10, lineHeight: 1.5 }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>{f}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* admin dashboard */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead
            anchor="04"
            label="admin dashboard"
            title={
              <>
                Production-quality.{" "}
                <span className="serif" style={{ color: "var(--accent)" }}>Not a toy panel.</span>
              </>
            }
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="case-3col"
        >
          {[
            ["analytics", "Revenue trends, orders by status, revenue by category, AOV, KPI cards. Period filters: 7d / 30d / 90d / 1yr. Powered by Recharts."],
            ["product management", "Full CRUD — multi-image upload (Supabase Storage), SKU, inventory tracking, featured toggle, draft/active/archived status."],
            ["order lifecycle", "7-state workflow: pending → paid → processing → shipped → delivered (+ cancelled / refunded). Full status history per order."],
            ["category management", "Nested parent/child categories with images. Self-referencing schema supports unlimited depth."],
            ["customer management", "Profiles with lifetime value, order count, role filtering, bulk CSV export."],
            ["store settings", "Toggle payment methods on/off, set announcement bar copy, configure free-shipping threshold — no redeploy needed."],
          ].map(([t, d], i) => (
            <motion.div key={t} variants={fadeUp} className="dev-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>// {t}</span>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: "var(--accent)", boxShadow: "0 0 6px var(--accent-glow)", display: "inline-block" }} />
              </div>
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>{d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* database schema */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="05" label="database schema" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="dev-card"
          style={{ padding: 32 }}
        >
          <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>// core tables</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {["products", "categories", "orders", "order_items", "profiles", "reviews", "coupons", "store_settings"].map((t) => (
              <span key={t} className="dev-chip mono" style={{ fontSize: 12 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, borderTop: "1px dashed var(--line-2)", paddingTop: 20 }}>
            Orders carry full denormalized shipping/billing address as <span className="mono" style={{ color: "var(--accent)" }}>JSONB</span>, payment method, gateway transaction ID, and tax/shipping breakdown — no joins needed to reconstruct an order. Categories use a <span className="mono" style={{ color: "var(--accent)" }}>parent_id</span> self-reference for unlimited nesting. File attachments stored via Supabase Storage with public CDN URLs.
          </div>
        </motion.div>
      </section>

      {/* metrics */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <SectionHead anchor="06" label="by the numbers" />
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
            ["3", "payment gateways"],
            ["7", "order states"],
            ["9", "core db tables"],
            ["<1.2s", "lcp · lighthouse"],
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

      {/* cta */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dev-card dev-spotlight"
          style={{ padding: 40, textAlign: "center", background: "linear-gradient(135deg, var(--accent-soft), transparent 60%), var(--bg-1)", borderColor: "var(--accent)", position: "relative", overflow: "hidden" }}
        >
          <div className="dev-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
          <div style={{ position: "relative" }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.12em" }}>// live demo</div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", marginBottom: 12 }}>Want an e-commerce build like this?</h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Arvora is the blueprint — real payments, real admin, real data. Your brand and products on top.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://arvora-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer" className="dev-btn accent-btn">
                view live demo ↗
              </a>
              <Link href="/contact" className="dev-btn ghost">get in touch</Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* prev / next */}
      <section className="dev-section" style={{ paddingTop: 0, position: "relative", zIndex: 1 }}>
        <div className="case-2col">
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/neurosiv" className="dev-card dev-spotlight" style={{ display: "block", padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>← prev case</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Neurosiv</div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/case/costos" className="dev-card dev-spotlight" style={{ display: "block", padding: 28, textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>next case →</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 6 }}>Costos</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
