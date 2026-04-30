import type { Metadata } from "next";
import HomeClient from "./_home-client";

export const metadata: Metadata = {
  title: "Abdul Hakeem — Full-Stack Product Engineer",
  description:
    "Full-stack product engineer building real software across React, Swift, Node.js, and Laravel. Co-founder of two ventures. Based in Chennai, India.",
  alternates: { canonical: "https://buildwithhakeem.dev" },
};

export default function HomePage() {
  return <HomeClient />;
}
