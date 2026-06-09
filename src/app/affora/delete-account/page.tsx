import type { Metadata } from "next";
import AfforaDeleteAccountClient from "./_client";

export const metadata: Metadata = {
  title: "Affora — Delete your account & data",
  description:
    "How to delete your Affora account and all associated data — instantly in the app or by emailing us.",
  alternates: { canonical: "https://buildwithhakeem.dev/affora/delete-account" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/affora/delete-account",
    title: "Affora — Delete your account & data",
    description:
      "Delete your Affora account instantly from Profile → Delete account, or request deletion by email within 7 days.",
  },
};

export default function AfforaDeleteAccountPage() {
  return <AfforaDeleteAccountClient />;
}
