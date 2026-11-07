import type { Metadata } from "next";
import AfforaDeleteAccountClient from "./_client";

export const metadata: Metadata = {
  title: "Affora — Delete your data",
  description:
    "How to clear Affora local data, manage backup copies, and cancel subscriptions separately.",
  alternates: { canonical: "https://buildwithhakeem.dev/affora/delete-account" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/affora/delete-account",
    title: "Affora — Delete your data",
    description:
      "Clear local Affora data, manage backups, and keep subscription cancellation separate.",
  },
};

export default function AfforaDeleteAccountPage() {
  return <AfforaDeleteAccountClient />;
}
