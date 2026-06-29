import type { Metadata } from "next";
import SnapPipeTermsClient from "./_client";

export const metadata: Metadata = {
  title: "SnapPipe — Terms of Service",
  description:
    "Terms of Service for SnapPipe, an on-device screenshot organizer by Vunexo Labs that helps you organize, compress, blur, export, and clean up screenshots.",
  alternates: { canonical: "https://buildwithhakeem.dev/snappipe/terms" },
  openGraph: {
    type: "article",
    url: "https://buildwithhakeem.dev/snappipe/terms",
    title: "SnapPipe — Terms of Service",
    description:
      "Terms governing your use of SnapPipe. The app operates locally and stores nothing on our side — your screenshots and data remain yours.",
  },
};

export default function SnapPipeTermsPage() {
  return <SnapPipeTermsClient />;
}
