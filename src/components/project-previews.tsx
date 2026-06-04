import Image from "next/image";

export function PrivaChatPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08080a" }}>
      <Image
        src="/portfolio-images/privachat_showcase.png"
        alt="PrivaChat secure messaging platform"
        fill
        style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.92 }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, #08080a 100%)" }} />
    </div>
  );
}

export function LynkboardPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08080a" }}>
      <Image
        src="/portfolio-images/lynkboard_showcase.png"
        alt="Lynkboard E2EE clipboard sync app"
        fill
        style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.92 }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, #08080a 100%)" }} />
    </div>
  );
}

export function MacCleanerPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08080a" }}>
      <Image
        src="/portfolio-images/maccleanerpro_showcase.png"
        alt="Mac Cleaner Pro native macOS disk cleaner"
        fill
        style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.92 }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, #08080a 100%)" }} />
    </div>
  );
}

export function TradesLynkPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08080a" }}>
      <Image
        src="/portfolio-images/tradeslynk_showcase.png"
        alt="TradesLynk B2B international trade marketplace"
        fill
        style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.92 }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, #08080a 100%)" }} />
    </div>
  );
}

export function NeurosivPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08080a" }}>
      <Image
        src="/neurosiv_showcase.png"
        alt="Neurosiv AI engineering studio"
        fill
        style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.92 }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, #08080a 100%)" }} />
    </div>
  );
}

export function ArvoraPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08080a" }}>
      <Image
        src="/arvora_showcase.png"
        alt="Arvora e-commerce platform"
        fill
        style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.92 }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, #08080a 100%)" }} />
    </div>
  );
}

export function CostosPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08080a" }}>
      <Image
        src="/costos_showcase.png"
        alt="Costos internal startup ops dashboard"
        fill
        style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.92 }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, #08080a 100%)" }} />
    </div>
  );
}

// Affora — branded CSS placeholder (no screenshot yet). Swap for an <Image src="/portfolio-images/affora_showcase.png" /> once real assets land.
export function AfforaPreview() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "radial-gradient(circle at 50% 35%, #102019 0%, #07120D 70%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
      }}
    >
      {/* faint grid */}
      <div
        className="dev-grid-bg"
        style={{ position: "absolute", inset: 0, opacity: 0.25 }}
      />
      {/* Safe-to-Spend ring */}
      <div style={{ position: "relative", width: 132, height: 132 }}>
        <svg width="132" height="132" viewBox="0 0 132 132" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="66" cy="66" r="58" fill="none" stroke="rgba(39,176,122,0.16)" strokeWidth="9" />
          <circle
            cx="66"
            cy="66"
            r="58"
            fill="none"
            stroke="#27B07A"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 58 * 0.62} ${2 * Math.PI * 58}`}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 600, color: "#F5F7F6", letterSpacing: "-0.03em" }}>₹398</div>
          <div
            className="mono"
            style={{ fontSize: 8, color: "#8B9B92", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 2 }}
          >
            safe today
          </div>
        </div>
      </div>
      {/* trio */}
      <div style={{ display: "flex", gap: 10 }}>
        {[
          ["₹11,958", "reality", "#27B07A"],
          ["13", "days left", "#F5F7F6"],
          ["₹2,140", "spent", "#F59E0B"],
        ].map(([v, l, c]) => (
          <div
            key={l}
            style={{
              background: "rgba(13,31,22,0.9)",
              border: "0.5px solid rgba(39,176,122,0.2)",
              borderRadius: 10,
              padding: "8px 12px",
              textAlign: "center",
              minWidth: 70,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: c as string, letterSpacing: "-0.02em" }}>{v}</div>
            <div className="mono" style={{ fontSize: 8, color: "#6B8A75", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 3 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, #08080a 100%)" }} />
    </div>
  );
}

export const PREVIEW_MAP: Record<string, React.ComponentType> = {
  affora: AfforaPreview,
  privachat: PrivaChatPreview,
  lynkboard: LynkboardPreview,
  maccleaner: MacCleanerPreview,
  tradeslynk: TradesLynkPreview,
  neurosiv: NeurosivPreview,
  arvora: ArvoraPreview,
  costos: CostosPreview,
};
