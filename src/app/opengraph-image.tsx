import { ImageResponse } from "next/og";
export const alt = "Hasan Itani — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 70,
        background: "#0A0C10",
        color: "#F3F1EA",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#9CA6B4",
        }}
      >
        <span>FULL-STACK SOFTWARE ENGINEER</span>
        <span>WEB / INTERACTIVE / GAMES</span>
      </div>
      <div style={{ display: "flex", fontSize: 150, letterSpacing: -9 }}>
        Hasan Itani<span style={{ color: "#BDF47B" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #39414a",
          paddingTop: 30,
          fontSize: 24,
        }}
      >
        <span>Thoughtful products. Interactive experiences.</span>
        <span style={{ color: "#BDF47B" }}>dev.itanigames.com</span>
      </div>
    </div>,
    size,
  );
}
