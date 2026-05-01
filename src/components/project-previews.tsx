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

export const PREVIEW_MAP: Record<string, React.ComponentType> = {
  privachat: PrivaChatPreview,
  lynkboard: LynkboardPreview,
  maccleaner: MacCleanerPreview,
  tradeslynk: TradesLynkPreview,
  neurosiv: NeurosivPreview,
  arvora: ArvoraPreview,
  costos: CostosPreview,
};
