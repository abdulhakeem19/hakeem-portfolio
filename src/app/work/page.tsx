import type { Metadata } from "next";
import WorkClient from "./_client";

export const metadata: Metadata = {
  title: "Work & Projects",
  description:
    "Selected projects by Abdul Hakeem — PrivaChat secure messaging platform, Lynkboard E2EE clipboard sync, Mac Cleaner Pro native macOS cleaner, and TradesLynk B2B international trade marketplace.",
  alternates: { canonical: "https://buildwithhakeem.dev/work" },
};

export default function WorkPage() {
  return <WorkClient />;
}
