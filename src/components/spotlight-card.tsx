"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  as?: "div" | "a" | "section";
}

export function SpotlightCard({
  children,
  className = "",
  style,
  href,
  as: Tag = "div",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const props = {
    ref,
    className: `dev-card dev-spotlight ${className}`,
    style,
    onMouseMove: handleMouseMove,
    ...(href ? { href } : {}),
  };

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={`dev-card dev-spotlight ${className}`}
        style={style}
        onMouseMove={handleMouseMove}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref}
      className={`dev-card dev-spotlight ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
