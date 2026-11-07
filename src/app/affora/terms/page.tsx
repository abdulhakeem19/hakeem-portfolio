import type { Metadata } from "next";
import AfforaPolicyClient from "./_client";

export const metadata: Metadata = {
  title: "Affora — Terms of Service",
  description:
    "Terms of Service for Affora, the personal-finance app. Covers local data, optional subscriptions, Google Play billing, backups, and consumer rights.",
  alternates: { canonical: "https://buildwithhakeem.dev/affora/terms" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/affora/terms",
    title: "Affora — Terms of Service",
    description:
      "Terms governing use of the Affora personal-finance app, including subscriptions, local storage, backups, and deletion.",
  },
};

export default function AfforaPolicyPage() {
  return <AfforaPolicyClient />;
}
