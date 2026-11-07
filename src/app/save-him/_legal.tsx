import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";

export type LegalSection = { id: string; title: string; content: ReactNode };

export default function SaveHimLegal({ title, intro, sections }: {
  title: string; intro: string; sections: LegalSection[];
}) {
  return (
    <main className="dev-page page-top">
      <section className="dev-section" style={{ paddingTop: 48, maxWidth: 920 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/save-him/icon.png" alt="" width={44} height={44} style={{ borderRadius: 13 }} />
          <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.12em" }}>SAVE HIM!</span>
        </div>
        <p className="mono" style={{ marginTop: 24, color: "#22D3EE", fontSize: 12 }}>Last updated: 7 November 2026</p>
        <h1 style={{ fontSize: "clamp(34px, 6vw, 60px)", lineHeight: 1.1, marginTop: 16 }}>{title}</h1>
        <p style={{ color: "var(--text-2)", lineHeight: 1.7, marginTop: 20 }}>{intro}</p>
        <nav aria-label="Save Him legal pages" style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 24, color: "#22D3EE" }}>
          <Link href="/save-him/privacy">Privacy Policy</Link>
          <Link href="/save-him/terms">Terms of Service</Link>
        </nav>
        <nav aria-label="On this page" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
          {sections.map(s => <a className="dev-chip" key={s.id} href={`#${s.id}`}>{s.title}</a>)}
        </nav>
        <div style={{ display: "grid", gap: 16, marginTop: 28 }}>
          {sections.map(s => (
            <section id={s.id} key={s.id} className="dev-card" style={{ padding: 24, scrollMarginTop: 96 }}>
              <h2 style={{ fontSize: 22, marginBottom: 14 }}>{s.title}</h2>
              <div style={{ display: "grid", gap: 14, color: "var(--text-2)", lineHeight: 1.8, overflowWrap: "anywhere" }}>{s.content}</div>
            </section>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
