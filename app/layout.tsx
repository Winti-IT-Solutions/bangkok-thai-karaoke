import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Amatic_SC, Patrick_Hand } from "next/font/google";

const amatic = Amatic_SC({ subsets: ["latin"], weight: ["700"] });
const patrick = Patrick_Hand({ subsets: ["latin"], weight: ["400"] });

export const viewport: Viewport = { themeColor: "#0ea5e9", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  title: { default: "Bangkok Thai Karaoke – Winterthur", template: "%s | Bangkok Thai Karaoke" },
  description: "Karaoke-Party in Winterthur – bunte Vibes, großer Screen & Eintritt als Getränkegutschein.",
  openGraph: { title: "Bangkok Thai Karaoke", description: "Verspielte Karaoke-Vibes in Winterthur", images: [{ url: "/og.jpg", width: 1200, height: 630 }]},
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${patrick.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
