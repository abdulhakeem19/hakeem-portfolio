import type { Metadata } from "next";
import KaasuTermsClient from "./_client";

export const metadata: Metadata = {
  title: "Kaasu — Terms of Service",
  description:
    "Terms of Service for Kaasu, a privacy-first expense tracker for Android that reads payment notifications and turns them into a local spending log.",
  alternates: { canonical: "https://buildwithhakeem.dev/kaasu/terms" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/kaasu/terms",
    title: "Kaasu — Terms of Service",
    description:
      "Terms governing your use of the Kaasu app. Your data stays on your device — Kaasu is a tracking aid, not a bank or financial advisor.",
  },
};

export default function KaasuTermsPage() {
  return <KaasuTermsClient />;
}
