import type { Metadata } from "next";
import MacCleanerClient from "./_client";

export const metadata: Metadata = {
  title: "Mac Cleaner Pro Case Study",
  description:
    "How Abdul Hakeem built Mac Cleaner Pro — a native macOS disk cleaner with 14 parallel scan rules, XPC privilege separation, staged deletion, and a pay-once $39 price.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/maccleaner" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/maccleaner",
    title: "Mac Cleaner Pro Case Study | Abdul Hakeem",
    description:
      "Native macOS disk cleaner with 14 parallel scan rules, XPC privilege separation, and staged deletion. Pay-once $39 — no subscription.",
    images: [
      {
        url: "/portfolio-images/maccleanerpro_showcase.png",
        width: 1200,
        height: 630,
        alt: "Mac Cleaner Pro — native macOS disk cleaner",
      },
    ],
  },
};

export default function MacCleanerPage() {
  return <MacCleanerClient />;
}
