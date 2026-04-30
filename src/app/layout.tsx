import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buildwithhakeem.dev"),
  title: {
    template: "%s | Abdul Hakeem",
    default: "Abdul Hakeem — Full-Stack Product Engineer",
  },
  description:
    "Full-stack product engineer with 2.5+ years shipping real software across React, Swift, Node.js, and Laravel. Co-founder of two ventures. Based in Chennai, India.",
  keywords: [
    "full stack developer portfolio",
    "software engineer portfolio",
    "react native developer",
    "swift developer",
    "laravel developer",
    "product engineer chennai",
    "indie developer",
    "b2b marketplace developer",
    "mobile app developer india",
    "buildwithhakeem",
    "Abdul Hakeem developer",
  ],
  authors: [{ name: "Abdul Hakeem", url: "https://buildwithhakeem.dev" }],
  creator: "Abdul Hakeem",
  publisher: "Abdul Hakeem",
  alternates: {
    canonical: "https://buildwithhakeem.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildwithhakeem.dev",
    siteName: "Abdul Hakeem — Full-Stack Product Engineer",
    title: "Abdul Hakeem — Full-Stack Product Engineer",
    description:
      "Full-stack product engineer with 2.5+ years shipping real software across React, Swift, Node.js, and Laravel. Co-founder of two ventures. Based in Chennai, India.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abdul Hakeem — Full-Stack Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@buildwithhakeem",
    title: "Abdul Hakeem — Full-Stack Product Engineer",
    description:
      "Full-stack product engineer with 2.5+ years shipping real software across React, Swift, Node.js, and Laravel. Co-founder of two ventures. Based in Chennai, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Hakeem",
  url: "https://buildwithhakeem.dev",
  jobTitle: "Full-Stack Product Engineer",
  worksFor: { "@type": "Organization", name: "Onexfort" },
  sameAs: [
    "https://github.com/abdulhakeem19",
    "https://linkedin.com/in/abdul-hakeem",
  ],
  knowsAbout: ["React", "Swift", "Node.js", "Laravel", "React Native", "TypeScript"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <div id="main-content">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
