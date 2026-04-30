import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="dev-footer mono">
      <div>
        <div style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 16, lineHeight: 1.6 }}>
          Full-stack product engineer based in Chennai.
          <br />
          Building real software across web, mobile, and native.
        </div>
        <div style={{ fontSize: 12, color: "var(--text-3)" }}>
          abdul.hakeem5764@gmail.com
        </div>
      </div>

      <div>
        <h4>navigation</h4>
        <ul>
          {[
            ["/", "home"],
            ["/work", "work"],
            ["/about", "about"],
            ["/now", "/now"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} style={{ color: "var(--text-3)" }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>projects</h4>
        <ul>
          {[
            ["/case/privachat", "privachat"],
            ["/case/lynkboard", "lynkboard"],
            ["/case/maccleaner", "mac cleaner"],
            ["/case/tradeslynk", "tradeslynk"],
          ].map(([href, label]) => (
            <li key={label}>
              <Link href={href} style={{ color: "var(--text-3)" }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>elsewhere</h4>
        <ul>
          {[
            ["https://github.com/abdulhakeem19", "github"],
            ["https://linkedin.com/in/abdul-hakeem19", "linkedin"],
            // ["https://x.com/buildwithhakeem", "x / twitter"],
            ["/contact", "contact"],
          ].map(([href, label]) => (
            <li key={label}>
              <Link href={href} style={{ color: "var(--text-3)" }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="signature">
        <div style={{ display: "flex", alignItems: "flex-end", gap: 20 }}>
          <Image src="/logo.png" alt="AH" width={52} height={52} style={{ borderRadius: 10, opacity: 0.85 }} />
          <div className="big">Hakeem</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 4,
          }}
        >
          <div>buildwithhakeem.dev</div>
          <div>chennai · india · 2026</div>
          <div style={{ marginTop: 8, color: "var(--text-4)" }}>
            built with next.js · framer motion
          </div>
        </div>
      </div>
    </footer>
  );
}
