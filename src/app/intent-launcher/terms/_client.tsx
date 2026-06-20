"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { fadeUp, stagger } from "@/lib/animations";

const I = {
  bg: "#0B0A1A",
  surface: "#13122A",
  featured: "#1C1A38",
  accent: "#8B7CF6",
  accentTint: "rgba(139,124,246,0.10)",
  border: "rgba(139,124,246,0.18)",
  borderEm: "rgba(139,124,246,0.30)",
  textHero: "#F5F5FA",
  textSecondary: "#9A95B5",
  ink: "#0B0A1A",
};

const EFFECTIVE = "19 June 2026";

const SECTIONS = [
  { id: "service", n: "01", t: "The service" },
  { id: "license", n: "02", t: "License" },
  { id: "permissions", n: "03", t: "Permissions & enforcement" },
  { id: "purchases", n: "04", t: "Purchases (Pro)" },
  { id: "content", n: "05", t: "Your content & backups" },
  { id: "warranties", n: "06", t: "Disclaimer of warranties" },
  { id: "liability", n: "07", t: "Limitation of liability" },
  { id: "third-party", n: "08", t: "Third-party services" },
  { id: "termination", n: "09", t: "Termination" },
  { id: "changes", n: "10", t: "Changes to these terms" },
  { id: "law", n: "11", t: "Governing law" },
  { id: "contact", n: "12", t: "Contact" },
];

function Mark() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 13,
          background: `linear-gradient(150deg, ${I.accent}, #5B4BD6)`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 24,
          color: I.ink,
          boxShadow: "0 8px 24px rgba(139,124,246,0.35)",
        }}
      >
        I
      </span>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: I.textHero }}>Intent Launcher</span>
    </span>
  );
}

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      className="dev-card"
      style={{ padding: 28, scrollMarginTop: 96 }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 14 }}>
        <span className="mono" style={{ fontSize: 12, color: I.accent, fontWeight: 600 }}>{n}</span>
        <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.025em" }}>{title}</h2>
      </div>
      <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </motion.section>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "flex", gap: 10 }}>
          <span style={{ color: I.accent, flexShrink: 0, marginTop: 1 }}>·</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const strong = (text: React.ReactNode) => <strong style={{ color: "var(--text)" }}>{text}</strong>;

export default function IntentLauncherTermsClient() {
  return (
    <main className="dev-page page-top">
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(900px circle at 50% -5%, rgba(139,124,246,0.12), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none", zIndex: 0 }} />

      {/* hero */}
      <section className="dev-section" style={{ paddingTop: 48, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Mark />
            <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
              last updated <span style={{ color: I.accent }}>{EFFECTIVE}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginTop: 32, maxWidth: 900 }}
          >
            Terms &amp;{" "}
            <span className="serif" style={{ color: I.accent }}>Conditions</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 680, marginTop: 20, lineHeight: 1.65 }}>
            These Terms govern your use of the Intent Launcher Android application. By downloading,
            installing, or using the app, you agree to these Terms. If you do not agree, please do not
            use the app. Your use is also governed by our{" "}
            <Link href="/intent-launcher/privacy" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>.
          </motion.p>
        </motion.div>
      </section>

      {/* TOC */}
      <section className="dev-section" style={{ paddingTop: 40, paddingBottom: 0, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="dev-chip mono" style={{ cursor: "pointer", fontSize: 11 }}>
              <span style={{ color: I.accent }}>{s.n}</span> {s.t.toLowerCase()}
            </a>
          ))}
        </div>
      </section>

      {/* content */}
      <motion.section
        className="dev-section"
        style={{ paddingTop: 32, position: "relative", zIndex: 1 }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 860, margin: "0 auto" }}>

          <Section id="service" n="01" title="The service">
            <p>Intent Launcher is a freemium Android home-screen launcher that helps you open apps with intent, view on-device screen-time insights, and reduce distraction through modes, app limits, and focus tools. Some features are free; others require the paid {strong("Intent Launcher Pro")} upgrade (see Section 4).</p>
            <p>The app is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We may add, change, or remove features at any time.</p>
          </Section>

          <Section id="license" n="02" title="License">
            <p>We grant you a personal, non-exclusive, non-transferable, revocable license to install and use the app on devices you own or control, for your own personal, non-commercial use, in accordance with these Terms and the Google Play Terms of Service.</p>
            <p>You may {strong("not")}:</p>
            <Bullets
              items={[
                "copy, modify, reverse-engineer, decompile, or disassemble the app, except to the extent this restriction is prohibited by applicable law;",
                "rent, lease, lend, sell, redistribute, or sublicense the app;",
                "remove or alter any proprietary notices; or",
                "use the app for any unlawful purpose or in any way that could harm, disable, or impair the app or interfere with another user's use of it.",
              ]}
            />
            <p>We retain all rights, title, and interest in and to the app, including all intellectual property rights. These Terms do not grant you any rights to our trademarks or branding.</p>
          </Section>

          <Section id="permissions" n="03" title="Device permissions and how features work">
            <p>Intent Launcher requests certain Android permissions to function — including Usage Access, display-over-other-apps, a foreground service, notifications, and run-after-restart. These are described in the{" "}
              <Link href="/intent-launcher/privacy" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>. You control these permissions in your device settings and may revoke them at any time, but doing so may disable related features (for example, revoking Usage Access disables screen-time insights and limit enforcement).
            </p>
            <p>{strong("About limits and focus enforcement.")} Features such as daily app limits and focus/mode-based blocking are tools to support your own intentions. They rely on Android system behavior, the foreground monitor, and the permissions you grant, and may be affected by factors outside our control — including device manufacturer battery optimizations, system updates, the device being restarted, or the user disabling the relevant permissions or the app itself. {strong("We do not guarantee that any app will be blocked or limited in all circumstances, and the enforcement features are not a substitute for your own judgment.")} You remain responsible for how you use your device.</p>
          </Section>

          <Section id="purchases" n="04" title="Purchases and subscriptions (Intent Launcher Pro)">
            <p>Some features require purchasing {strong("Intent Launcher Pro")}. Purchases are made through {strong("Google Play Billing")} and are subject to the{" "}
              <a href="https://play.google/intl/en_us/about/play-terms/" target="_blank" rel="noopener noreferrer" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Google Play Terms of Service</a>.
            </p>
            <Bullets
              items={[
                "Pricing, the nature of the purchase (one-time or subscription), and any free trial are shown at the point of purchase within Google Play.",
                "If Pro is offered as a subscription, it renews automatically unless cancelled through your Google Play account before the renewal date. You can manage or cancel subscriptions in the Google Play Store.",
                <>{strong("Refunds")} are handled by Google in accordance with Google Play&apos;s refund policies. We do not separately process payments and cannot issue refunds directly.</>,
                "We never receive or store your payment details.",
              ]}
            />
            <p>We may change the features included in the free and Pro tiers over time. We will not remove a paid feature you have already purchased without offering a reasonable alternative or, where required, a refund through Google Play.</p>
          </Section>

          <Section id="content" n="05" title="Your content and backups">
            <p>Your launcher configuration, app limits, focus settings, and usage data are stored on your device. The app lets you export and import backup files. You are responsible for your backup files and for any location to which you choose to save or share them. We are not responsible for backup files once they leave the app, nor for any data lost due to device failure, uninstalling the app, or an import you perform.</p>
          </Section>

          <Section id="warranties" n="06" title="Disclaimer of warranties">
            <p>To the maximum extent permitted by law, the app is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the app will be uninterrupted, error-free, secure, or that defects will be corrected, or that the enforcement and screen-time features will be accurate or effective in every situation.</p>
            <p>Some jurisdictions do not allow the exclusion of certain warranties, so some of the above may not apply to you.</p>
          </Section>

          <Section id="liability" n="07" title="Limitation of liability">
            <p>To the maximum extent permitted by law, in no event will we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or goodwill, arising out of or in connection with your use of (or inability to use) the app, even if we have been advised of the possibility of such damages.</p>
            <p>To the extent any liability cannot be excluded, our total liability to you for all claims relating to the app is limited to the amount you paid us (if any) for the app in the twelve (12) months preceding the claim. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.</p>
          </Section>

          <Section id="third-party" n="08" title="Third-party services">
            <p>The app uses Google Firebase Analytics and Firebase Crashlytics for anonymous analytics and crash reporting (see the{" "}
              <Link href="/intent-launcher/privacy" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy</Link>), and Google Play Billing for purchases. Your use of these services through the app is also subject to the relevant Google terms and policies. We are not responsible for the practices of third-party services.
            </p>
          </Section>

          <Section id="termination" n="09" title="Termination">
            <p>These Terms apply until terminated. You may terminate them at any time by uninstalling the app. We may suspend or terminate your access if you breach these Terms. Upon termination, the license in Section 2 ends; provisions that by their nature should survive (including ownership, disclaimers, limitation of liability, and governing law) will survive.</p>
          </Section>

          <Section id="changes" n="10" title="Changes to these Terms">
            <p>We may update these Terms from time to time. When we do, we will revise the &quot;Last updated&quot; date above and, where appropriate, surface the change in the app or on this page. Your continued use of the app after an update means you accept the revised Terms.</p>
          </Section>

          <Section id="law" n="11" title="Governing law">
            <p>These Terms are governed by the laws of your country of residence to the extent required by applicable consumer-protection law; otherwise, any disputes will be resolved in accordance with the laws applicable where the developer is established. Nothing in these Terms affects your statutory rights as a consumer.</p>
          </Section>

          <Section id="contact" n="12" title="Contact us">
            <p>If you have any questions about these Terms, reach out:</p>
            <a
              href="mailto:buildwithhakeem@gmail.com"
              className="mono"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "10px 16px", borderRadius: 10, background: I.accent, color: I.ink, fontSize: 13, fontWeight: 600 }}
            >
              ✉ buildwithhakeem@gmail.com
            </a>
            <p className="mono" style={{ marginTop: 4, fontSize: 12, color: "var(--text-3)" }}>app package — com.intentlauncher.app</p>
            <p style={{ marginTop: 4, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/intent-launcher/privacy" style={{ color: I.accent, textDecoration: "underline", textUnderlineOffset: 3 }}>Privacy Policy →</Link>
              <Link href="/intent-launcher/delete-data" style={{ color: "var(--text-3)", textDecoration: "underline", textUnderlineOffset: 3 }}>Delete your data →</Link>
            </p>
          </Section>

        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
