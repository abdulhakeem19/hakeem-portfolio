import type { Metadata } from "next";
import AfforaPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "Affora — Privacy Policy",
  description:
    "Affora's privacy policy. Affora is an offline-first, privacy-first behavioral finance app: transaction notifications are parsed on-device, there is no READ_SMS permission, and cloud sync is optional and sign-in-gated.",
  alternates: { canonical: "https://buildwithhakeem.dev/affora/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/affora/privacy",
    title: "Affora — Privacy Policy",
    description:
      "Privacy-first, offline-first finance app. On-device parsing, no READ_SMS, optional sign-in-gated cloud sync.",
  },
};

export default function AfforaPrivacyPolicyPage() {
  return <AfforaPrivacyClient />;
}
