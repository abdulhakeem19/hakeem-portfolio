import type { Metadata } from "next";
import SaveHimPrivacyClient from "./_client";

const description = "Privacy for Save Him! on Android: local progress, Google AdMob advertising, consent choices, Google Play purchases, and feedback.";
export const metadata: Metadata = {
  title: "Save Him! — Privacy Policy", description,
  alternates: { canonical: "https://buildwithhakeem.dev/save-him/privacy" },
  openGraph: { type: "article", url: "https://buildwithhakeem.dev/save-him/privacy", title: "Save Him! — Privacy Policy", description },
};
export default function SaveHimPrivacyPolicyPage() { return <SaveHimPrivacyClient />; }
