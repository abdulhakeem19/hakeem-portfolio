import type { Metadata } from "next";
import AfforaClient from "./_client";

export const metadata: Metadata = {
  title: "Affora Case Study",
  description:
    "How Abdul Hakeem built Affora — an offline-first behavioral finance app in Flutter. Reality Balance, daily Safe-to-Spend, and bank/UPI notifications parsed on-device with no READ_SMS, backed by a NestJS + Postgres cloud mirror.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/affora" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/affora",
    title: "Affora Case Study | Abdul Hakeem",
    description:
      "Offline-first behavioral finance app in Flutter — Reality Balance, daily Safe-to-Spend, on-device transaction parsing with no READ_SMS.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affora — your daily spending reality",
      },
    ],
  },
};

export default function AfforaPage() {
  return <AfforaClient />;
}
