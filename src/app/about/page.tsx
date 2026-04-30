import type { Metadata } from "next";
import AboutClient from "./_client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abdul Hakeem — full-stack product engineer from Chennai, India. Co-founder of TradesLynk and Neurosiv. Building across web, mobile, and native with React, Swift, and Node.js.",
  alternates: { canonical: "https://buildwithhakeem.dev/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
