import type { Metadata } from "next";
import IntentLauncherDeleteDataClient from "./_client";

export const metadata: Metadata = {
  title: "Intent Launcher — Data Deletion",
  description:
    "How to delete your Intent Launcher data. There are no accounts — your data lives on your device. Clear it any time, and request deletion of anonymous diagnostics.",
  alternates: { canonical: "https://buildwithhakeem.dev/intent-launcher/delete-data" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/intent-launcher/delete-data",
    title: "Intent Launcher — Data Deletion",
    description:
      "Intent Launcher has no accounts. Your data stays on your device — here's how to delete it.",
  },
};

export default function IntentLauncherDeleteDataPage() {
  return <IntentLauncherDeleteDataClient />;
}
