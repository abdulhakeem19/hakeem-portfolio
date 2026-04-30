import type { Metadata } from "next";
import LynkboardClient from "./_client";

export const metadata: Metadata = {
  title: "Lynkboard Case Study",
  description:
    "How Abdul Hakeem built Lynkboard — a macOS/iOS end-to-end encrypted clipboard sync app in Swift 5.9 with LAN-first sync under 1 second and ChaChaPoly AEAD encryption.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/lynkboard" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/lynkboard",
    title: "Lynkboard Case Study | Abdul Hakeem",
    description:
      "macOS/iOS E2EE clipboard sync app in Swift 5.9 with LAN-first architecture and sub-1-second sync latency.",
    images: [
      {
        url: "/portfolio-images/lynkboard_showcase.png",
        width: 1200,
        height: 630,
        alt: "Lynkboard — E2EE clipboard sync for macOS and iOS",
      },
    ],
  },
};

export default function LynkboardPage() {
  return <LynkboardClient />;
}
