import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Bicara Digital — Bagoes Tri Anggoro | Web, AI & Brand",
  description: "I build digital products that work — web apps, business systems, AI automation, and brand design. Based in Semarang, working globally.",
  keywords: ["web developer", "AI automation", "brand design", "logo", "packaging", "Next.js", "freelance", "remote", "Semarang"],
  authors: [{ name: "Bagoes Tri Anggoro" }],
  openGraph: {
    title: "Bicara Digital — Web, AI & Brand",
    description: "Digital products that work. Based in Semarang, working globally.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-brand-surface text-brand-text font-body antialiased">{children}</body>
    </html>
  );
}
