import type { Metadata } from "next";
import KaasuDeleteAccountClient from "./_client";

export const metadata: Metadata = {
  title: "Kaasu — Account & Data Deletion",
  description:
    "How to delete your Kaasu data. There are no accounts — everything lives on your device. Wipe it instantly from within the app.",
  alternates: { canonical: "https://buildwithhakeem.dev/kaasu/delete-account" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/kaasu/delete-account",
    title: "Kaasu — Account & Data Deletion",
    description:
      "Kaasu has no sign-up and no servers. Your data is yours — here's how to delete it.",
  },
};

export default function KaasuDeleteAccountPage() {
  return <KaasuDeleteAccountClient />;
}
