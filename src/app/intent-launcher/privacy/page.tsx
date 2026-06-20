import type { Metadata } from "next";
import IntentLauncherPrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "Intent Launcher — Privacy Policy",
  description:
    "Intent Launcher's privacy policy. Your screen-time and app-usage data never leaves your device. Anonymous analytics only, and you can turn it off.",
  alternates: { canonical: "https://buildwithhakeem.dev/intent-launcher/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/intent-launcher/privacy",
    title: "Intent Launcher — Privacy Policy",
    description:
      "What Intent Launcher collects — and what it deliberately doesn't. Your usage data stays on your device.",
  },
};

export default function IntentLauncherPrivacyPolicyPage() {
  return <IntentLauncherPrivacyClient />;
}
