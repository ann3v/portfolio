import { ImageResponse } from "next/og";

export const alt =
  "Ardit Avdiu — Full-Stack Developer focused on AI-powered products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 76px",
        background: "#111210",
        color: "#f0f0e9",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 25,
        }}
      >
        <span>
          Ardit Avdiu<span style={{ color: "#c1ed83" }}>.</span>
        </span>
        <span style={{ color: "#c1ed83", fontSize: 18 }}>FULL-STACK + AI</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 82,
          fontWeight: 700,
          letterSpacing: "-4px",
          lineHeight: 1.05,
        }}
      >
        <span>Ideas into software.</span>
        <span style={{ color: "#a2a69c" }}>Built with intent.</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #30332c",
          paddingTop: 25,
          justifyContent: "space-between",
          color: "#a2a69c",
          fontSize: 20,
        }}
      >
        <span>PRODUCTS · SYSTEMS · INTELLIGENCE</span>
        <span style={{ color: "#c1ed83" }}>Explore the work ↗</span>
      </div>
    </div>,
    { ...size },
  );
}
