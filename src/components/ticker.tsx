import { TECH_TICKER } from "@/lib/data";

export function Ticker() {
  const doubled = [...TECH_TICKER, ...TECH_TICKER];

  return (
    <div className="dev-ticker mono">
      <div className="dev-ticker-track">
        {doubled.map((t, i) => (
          <span key={i}>
            <span className="dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
