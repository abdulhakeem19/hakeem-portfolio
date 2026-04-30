import type { Metadata } from "next";
import ExperienceClient from "./_client";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work history and skills for Abdul Hakeem — full-stack product engineer at Onexfort with expertise in React, Laravel, Swift, and system design.",
  alternates: { canonical: "https://buildwithhakeem.dev/experience" },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
