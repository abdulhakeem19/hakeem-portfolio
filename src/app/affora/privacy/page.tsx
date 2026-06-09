import type { Metadata } from "next";
import AfforaPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "Affora — Privacy Policy",
  description:
    "Affora's privacy policy. Learn what data Affora collects, how it's stored, and how to delete your account.",
  alternates: { canonical: "https://buildwithhakeem.dev/affora/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/affora/privacy",
    title: "Affora — Privacy Policy",
    description:
      "Affora privacy policy — what we collect, how it's stored, and your deletion options.",
  },
};

export default function AfforaPrivacyPolicyPage() {
  return <AfforaPrivacyClient />;
}
