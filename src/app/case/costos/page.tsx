import type { Metadata } from "next";
import CostosClient from "./_client";

export const metadata: Metadata = {
  title: "Costos Case Study",
  description:
    "Costos — internal finance & operations dashboard built for startup co-founders. Expense tracking, client pipeline, founder P&L, and role-based access. React + Supabase.",
  alternates: { canonical: "https://buildwithhakeem.dev/case/costos" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/case/costos",
    title: "Costos Case Study | Abdul Hakeem",
    description:
      "Full-stack startup ops dashboard — expense ledger, client pipeline, founder P&L, and RBAC. Built in React 18 + Supabase.",
  },
};

export default function CostosPage() {
  return <CostosClient />;
}
