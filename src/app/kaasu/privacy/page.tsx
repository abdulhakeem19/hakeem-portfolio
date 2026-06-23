import type { Metadata } from "next";
import KaasuPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "Kaasu — Privacy Policy",
  description:
    "Kaasu's privacy policy. No accounts, no servers, no analytics. Your transactions and settings never leave your device.",
  alternates: { canonical: "https://buildwithhakeem.dev/kaasu/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/kaasu/privacy",
    title: "Kaasu — Privacy Policy",
    description:
      "Kaasu collects nothing. Everything the app records stays on your device.",
  },
};

export default function KaasuPrivacyPage() {
  return <KaasuPrivacyClient />;
}
