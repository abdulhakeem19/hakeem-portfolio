import type { Metadata } from "next";
import IntentLauncherTermsClient from "./_client";

export const metadata: Metadata = {
  title: "Intent Launcher — Terms & Conditions",
  description:
    "Terms & Conditions for Intent Launcher, the Android home-screen launcher with screen-time insights, app limits, and focus tools.",
  alternates: { canonical: "https://buildwithhakeem.dev/intent-launcher/terms" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/intent-launcher/terms",
    title: "Intent Launcher — Terms & Conditions",
    description:
      "Terms governing use of the Intent Launcher app, including Intent Launcher Pro and limit-enforcement features.",
  },
};

export default function IntentLauncherTermsPage() {
  return <IntentLauncherTermsClient />;
}
