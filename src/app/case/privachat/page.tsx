import type { Metadata } from "next";
import PrivaChatClient from "./_client";

export const metadata: Metadata = {
  title: "PrivaChat Case Study",
  description:
    "How Abdul Hakeem built PrivaChat — a React Native secure messaging platform with admin-controlled communication workflows, WebSocket real-time delivery under 80ms p95, and server-side content moderation.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/privachat" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/privachat",
    title: "PrivaChat Case Study | Abdul Hakeem",
    description:
      "React Native secure messaging platform with admin-controlled communication workflows and real-time delivery under 80ms p95.",
    images: [
      {
        url: "/portfolio-images/privachat_showcase.png",
        width: 1200,
        height: 630,
        alt: "PrivaChat — secure messaging platform",
      },
    ],
  },
};

export default function PrivaChatPage() {
  return <PrivaChatClient />;
}
