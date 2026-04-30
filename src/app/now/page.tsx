import type { Metadata } from "next";
import NowClient from "./_client";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Abdul Hakeem is building right now — Lynkboard 2.0 with a Rust sync core, PrivaChat v1.3 group calls, and studying distributed systems.",
  alternates: { canonical: "https://buildwithhakeem.dev/now" },
};

export default function NowPage() {
  return <NowClient />;
}
