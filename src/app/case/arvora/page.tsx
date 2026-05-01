import type { Metadata } from "next";
import ArvoraClient from "./_client";

export const metadata: Metadata = {
  title: "Arvora Case Study",
  description:
    "Arvora — a full-featured e-commerce demo built by Abdul Hakeem to show clients what a production-ready store looks like. Next.js, loyalty system, promo engine, and full account dashboard.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/arvora" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/arvora",
    title: "Arvora Case Study | Abdul Hakeem",
    description:
      "Full-featured e-commerce client demo — loyalty program, promo codes, account dashboard, and premium product browsing. Built in Next.js.",
    images: [
      {
        url: "/arvora_showcase.png",
        width: 1200,
        height: 630,
        alt: "Arvora — premium e-commerce platform",
      },
    ],
  },
};

export default function ArvoraPage() {
  return <ArvoraClient />;
}
