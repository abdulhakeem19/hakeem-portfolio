"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/case/privachat", label: "case", activePrefix: "/case" },
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/now", label: "now" },
  { href: "/contact", label: "contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string, activePrefix?: string) => {
    if (href === "/") return pathname === "/";
    if (activePrefix) return pathname.startsWith(activePrefix);
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="dev-nav mono" aria-label="Main navigation">
        <Link href="/" className="dev-nav-mark mono">
          <Image
            src="/logo.png"
            alt="AH"
            width={50}
            height={50}
            style={{ borderRadius: 14 }}
            priority
          />
        </Link>

        <div className="dev-nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={isActive(link.href, link.activePrefix) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="dev-nav-cta mono">
          <span className="dot" />
          available
        </Link>

        <button
          className={`dev-nav-mobile-btn${open ? " is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="ham-line top" />
          <span className="ham-line mid" />
          <span className="ham-line bot" />
        </button>
      </nav>

      <div className={`dev-nav-mobile-menu mono${open ? " open" : ""}`} role="dialog" aria-modal="true">
        <button
          className="dev-nav-mobile-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={isActive(link.href, link.activePrefix) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          style={{
            marginTop: 16,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 24px",
            borderRadius: 999,
            background: "var(--text)",
            color: "var(--bg)",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)", display: "inline-block" }} />
          available
        </Link>
      </div>
    </>
  );
}
