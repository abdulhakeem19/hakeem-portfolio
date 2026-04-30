import type { Metadata } from "next";
import ContactClient from "./_client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdul Hakeem — available for full-stack, mobile, and native projects. Replies within 12 hours with concrete next steps.",
  alternates: { canonical: "https://buildwithhakeem.dev/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
