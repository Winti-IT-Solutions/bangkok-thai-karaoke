import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = { themeColor: "#0ea5e9", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL("https://bangkok-thai-karaoke.example"),
  title: { default: "Bangkok Thai Karaoke – Winterthur", template: "%s | Bangkok Thai Karaoke" },
  description: "Moderner Karaoke-Floor in Winterthur. Offener Zugang, großer Screen & einfacher Eintritt (als Getränkegutschein).",
  keywords: ["Karaoke Winterthur", "Thai Karaoke", "Karaoke Bar", "Event Winterthur"],
  openGraph: {
    title: "Bangkok Thai Karaoke – Winterthur",
    description: "Moderner Karaoke-Floor in Winterthur. Offener Zugang, großer Screen & einfacher Eintritt.",
    url: "https://bangkok-thai-karaoke.example",
    siteName: "Bangkok Thai Karaoke",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Bangkok Thai Karaoke" }],
    locale: "de_CH",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@bangkokthaikaraoke" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="text-slate-900">{children}</body>
    </html>
  );
}
