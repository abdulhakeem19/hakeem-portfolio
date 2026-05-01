interface SectionHeadProps {
  anchor: string;
  label: string;
  title?: React.ReactNode;
  meta?: string;
  metaHref?: string;
  metaDownload?: boolean | string;
}

export function SectionHead({ anchor, label, title, meta, metaHref, metaDownload }: SectionHeadProps) {
  return (
    <div className="dev-section-head">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div className="anchor mono">
          <span className="hash">#</span>
          {anchor} · {label}
        </div>
        {title && (
          <h2
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              marginTop: 4,
            }}
          >
            {title}
          </h2>
        )}
      </div>
      {meta && metaHref ? (
        <a
          href={metaHref}
          target="_blank"
          rel="noopener noreferrer"
          download={metaDownload}
          className="mono"
          style={{ fontSize: 11, color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          {meta}
        </a>
      ) : meta ? (
        <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
          {meta}
        </div>
      ) : null}
    </div>
  );
}
