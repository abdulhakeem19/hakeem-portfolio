import type { Metadata } from "next";
import SnapFlowPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "SnapFlow — Privacy Policy",
  description:
    "SnapFlow's privacy policy. The game collects nothing: no account, no ads, no analytics, and no internet access. Your progress stays on your device.",
  alternates: { canonical: "https://buildwithhakeem.dev/snapflow/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/snapflow/privacy",
    title: "SnapFlow — Privacy Policy",
    description:
      "SnapFlow does not collect, transmit, or sell any data. It has no internet access; everything stays on your device.",
  },
};

export default function SnapFlowPrivacyPolicyPage() {
  return <SnapFlowPrivacyClient />;
}
