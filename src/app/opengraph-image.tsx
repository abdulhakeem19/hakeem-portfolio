import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src="https://buildwithhakeem.dev/logo.png"
            width={80}
            height={80}
            style={{ borderRadius: 18 }}
            alt=""
          />
          <span
            style={{
              fontSize: 18,
              color: "#6a6a72",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            buildwithhakeem.dev
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#ededee",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            Abdul Hakeem
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a8a8ad",
              letterSpacing: "-0.015em",
            }}
          >
            Full-Stack Product Engineer
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#6a6a72",
              letterSpacing: "0.04em",
              marginTop: 8,
            }}
          >
            React · Swift · Node.js · Laravel
          </div>
        </div>

        <div
          style={{
            fontSize: 20,
            color: "oklch(0.72 0.17 240)",
            letterSpacing: "0.02em",
          }}
        >
          buildwithhakeem.dev
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
