"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/case/privachat", label: "case" },
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/now", label: "now" },
  { href: "/contact", label: "contact" },
];

export function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
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
        {/* buildwithhakeem.dev */}
      </Link>

      <div className="dev-nav-links">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link href="/contact" className="dev-nav-cta mono">
        <span className="dot" />
        available
      </Link>
    </nav>
  );
}
