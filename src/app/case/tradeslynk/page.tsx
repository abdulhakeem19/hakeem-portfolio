import type { Metadata } from "next";
import TradesLynkClient from "./_client";

export const metadata: Metadata = {
  title: "TradesLynk Case Study",
  description:
    "How Abdul Hakeem co-founded and built TradesLynk — a B2B international trade marketplace in Laravel 12 connecting exporters and importers across 82 countries.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/tradeslynk" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/tradeslynk",
    title: "TradesLynk Case Study | Abdul Hakeem",
    description:
      "B2B international trade marketplace built in Laravel 12 — covering 82 countries with RFQ matching, trust scoring, and exporter verification tiers.",
    images: [
      {
        url: "/portfolio-images/tradeslynk_showcase.png",
        width: 1200,
        height: 630,
        alt: "TradesLynk — B2B international trade marketplace",
      },
    ],
  },
};

export default function TradesLynkPage() {
  return <TradesLynkClient />;
}
