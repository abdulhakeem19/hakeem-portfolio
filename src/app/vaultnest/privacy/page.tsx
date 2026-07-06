import type { Metadata } from "next";
import VaultNestPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "VaultNest — Privacy Policy",
  description:
    "VaultNest File Vault's privacy policy. VaultNest collects nothing: no analytics, no ads, no backend. Your files stay on your device or go only to services you connect yourself.",
  alternates: { canonical: "https://buildwithhakeem.dev/vaultnest/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/vaultnest/privacy",
    title: "VaultNest — Privacy Policy",
    description:
      "VaultNest does not collect, transmit, or sell your data. Everything happens on your device or between you and services you connect.",
  },
};

export default function VaultNestPrivacyPolicyPage() {
  return <VaultNestPrivacyClient />;
}
