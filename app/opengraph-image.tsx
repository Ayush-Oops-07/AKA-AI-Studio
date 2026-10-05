import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AKA AI Studio — Websites and Apps for Local Businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBF6EE",
          backgroundImage:
            "radial-gradient(circle at 90% 15%, rgba(184, 75, 35, 0.12) 0%, transparent 45%), radial-gradient(circle at 10% 85%, rgba(11, 61, 46, 0.08) 0%, transparent 45%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#B84B23",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              A
            </div>
            <span style={{ fontSize: "28px", fontWeight: "700", color: "#1F2A44" }}>
              AKA AI Studio
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2DDD5",
              color: "#B84B23",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#B84B23",
              }}
            />
            <span>Direct Founder Support</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              lineHeight: 1.15,
              color: "#1F2A44",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Websites &amp; Software for Local Businesses
          </h1>
          <p
            style={{
              fontSize: "24px",
              lineHeight: 1.4,
              color: "#4A5370",
              margin: 0,
            }}
          >
            Built by three MCA students in Bihar &amp; UP. Fast, clean, mobile-friendly websites with direct WhatsApp booking.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E2DDD5",
            paddingTop: "24px",
            color: "#8B91A5",
            fontSize: "18px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <span>• Sub-second 4G load</span>
            <span>• Fair student pricing</span>
            <span>• Verified live projects</span>
          </div>
          <span style={{ color: "#B84B23", fontWeight: "600" }}>akaaistudio.in</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
