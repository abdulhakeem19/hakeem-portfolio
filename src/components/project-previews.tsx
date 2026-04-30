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
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 50% 50%, oklch(0.72 0.17 240 / 0.15), #08080a 60%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        className="serif"
        style={{ fontSize: 56, color: "var(--text)", letterSpacing: "-0.04em" }}
      >
        n.
      </div>
      <div
        className="mono"
        style={{
          fontSize: 9,
          color: "var(--text-3)",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        ai engineering studio
      </div>
    </div>
  );
}

export function ArvoraPreview() {
  return (
    <div
      style={{ position: "absolute", inset: 0, background: "#08080a", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          right: 12,
          fontSize: 9,
          color: "var(--text-3)",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="mono"
      >
        <span>ARVORA</span>
        <span>cart (2)</span>
      </div>
      <div
        style={{
          position: "absolute",
          inset: "32px 12px 12px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 5,
        }}
      >
        {[34, 89, 42, 156].map((p, i) => (
          <div
            key={i}
            style={{
              background: ["var(--bg-2)", "var(--bg-3)"][i % 2],
              border: "1px solid var(--line)",
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              padding: 5,
              fontSize: 8,
              color: "var(--text-3)",
            }}
            className="mono"
          >
            ${p}
          </div>
        ))}
      </div>
    </div>
  );
}

export const PREVIEW_MAP: Record<string, React.ComponentType> = {
  privachat: PrivaChatPreview,
  lynkboard: LynkboardPreview,
  maccleaner: MacCleanerPreview,
  tradeslynk: TradesLynkPreview,
  neurosiv: NeurosivPreview,
  arvora: ArvoraPreview,
};
