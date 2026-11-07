import type { Metadata } from "next";
import SnapPipePrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "SnapPipe — Privacy Policy",
  description:
    "SnapPipe's privacy policy. No ads, no developer accounts, and no cloud screenshot storage. Covers local processing and Google Play subscriptions.",
  alternates: { canonical: "https://buildwithhakeem.dev/snappipe/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/snappipe/privacy",
    title: "SnapPipe — Privacy Policy",
    description:
      "Screenshots are processed on-device; Google Play separately handles subscription billing.",
  },
};

export default function SnapPipePrivacyPage() {
  return <SnapPipePrivacyClient />;
}
