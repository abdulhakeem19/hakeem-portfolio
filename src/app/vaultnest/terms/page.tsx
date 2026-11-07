import type { Metadata } from "next";
import VaultNestTermsClient from "./_client";
const description = "Terms for VaultNest File Vault on Android: file operations, connected storage, subscriptions, billing, and consumer rights.";
export const metadata: Metadata = {
  title: "VaultNest — Terms of Service", description,
  alternates: { canonical: "https://buildwithhakeem.dev/vaultnest/terms" },
  openGraph: { type: "article", url: "https://buildwithhakeem.dev/vaultnest/terms", title: "VaultNest — Terms of Service", description },
};
export default function VaultNestTermsPage() { return <VaultNestTermsClient />; }
