import type { Metadata } from "next";
import VaultNestPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "VaultNest — Privacy Policy",
  description:
    "VaultNest File Vault's privacy policy. No ads or developer file-storage backend. Learn about local files, connected storage, and Google Play subscriptions.",
  alternates: { canonical: "https://buildwithhakeem.dev/vaultnest/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/vaultnest/privacy",
    title: "VaultNest — Privacy Policy",
    description:
      "Privacy for local files, optional connected storage, and Google Play subscription billing.",
  },
};

export default function VaultNestPrivacyPolicyPage() {
  return <VaultNestPrivacyClient />;
}
