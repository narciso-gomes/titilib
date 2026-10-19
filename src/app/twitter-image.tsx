import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "TITILIB — Biblioteca digital de Thifanny Vitória";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#f7f3eb", color: "#342820", padding: "64px 78px" }}>
      <div style={{ position: "absolute", width: 570, height: 760, right: -115, top: -90, background: "#e8dfd2", transform: "rotate(17deg)" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "serif", fontSize: 92, letterSpacing: 13, fontWeight: 600, lineHeight: 0.9 }}>TITILIB</div>
          <div style={{ width: 290, height: 2, background: "#b49a6c", marginTop: 22 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ fontSize: 22, letterSpacing: 5, color: "#77695a", textTransform: "uppercase" }}>Biblioteca digital autoral</div>
          <div style={{ fontFamily: "serif", fontSize: 70, lineHeight: 1, marginTop: 22 }}>Histórias para permanecer.</div>
          <div style={{ fontSize: 28, marginTop: 22, color: "#594b41" }}>Por Thifanny Vitória</div>
        </div>
      </div>
    </div>,
    size,
  );
}
