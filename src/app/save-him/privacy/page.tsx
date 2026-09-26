import type { Metadata } from "next";
import SaveHimPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "Save Him! — Privacy Policy",
  description:
    "Save Him!'s privacy policy. The game collects nothing: no account, no ads, no analytics, and no internet access. Your progress stays on your device.",
  alternates: { canonical: "https://buildwithhakeem.dev/save-him/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/save-him/privacy",
    title: "Save Him! — Privacy Policy",
    description:
      "Save Him! does not collect, transmit, or sell any data. It has no internet access; everything stays on your device.",
  },
};

export default function SaveHimPrivacyPolicyPage() {
  return <SaveHimPrivacyClient />;
}
