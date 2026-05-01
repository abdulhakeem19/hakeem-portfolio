import type { Metadata } from "next";
import NeurosivClient from "./_client";

export const metadata: Metadata = {
  title: "Neurosiv Case Study",
  description:
    "Neurosiv — AI & software development studio co-founded by Abdul Hakeem. Two AI products in the pipeline, currently active on client work.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/neurosiv" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/neurosiv",
    title: "Neurosiv Case Study | Abdul Hakeem",
    description:
      "AI & software development studio. Two AI products pending funding, currently shipping client work.",
    images: [
      {
        url: "/neurosiv_showcase.png",
        width: 1200,
        height: 630,
        alt: "Neurosiv — AI & software development studio",
      },
    ],
  },
};

export default function NeurosivPage() {
  return <NeurosivClient />;
}
