import type { Metadata } from "next";
import AfforaPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "Affora — Privacy Policy",
  description:
    "Affora's privacy policy. Affora is fully offline — no account, no server. See exactly what stays on your device and why.",
  alternates: { canonical: "https://buildwithhakeem.dev/affora/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/affora/privacy",
    title: "Affora — Privacy Policy",
    description:
      "Affora is fully offline — no account, no server. See exactly what stays on your device and why.",
  },
};

export default function AfforaPrivacyPolicyPage() {
  return <AfforaPrivacyClient />;
}
