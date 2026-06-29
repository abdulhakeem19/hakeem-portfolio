import type { Metadata } from "next";
import SnapPipePrivacyClient from "./_client";

export const metadata: Metadata = {
  title: "SnapPipe — Privacy Policy",
  description:
    "SnapPipe's privacy policy. No servers, no accounts, no analytics. Your screenshots and everything you create stay on your device.",
  alternates: { canonical: "https://buildwithhakeem.dev/snappipe/privacy" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/snappipe/privacy",
    title: "SnapPipe — Privacy Policy",
    description:
      "SnapPipe runs entirely on your device. It collects nothing — your screenshots never leave your phone unless you share them.",
  },
};

export default function SnapPipePrivacyPage() {
  return <SnapPipePrivacyClient />;
}
