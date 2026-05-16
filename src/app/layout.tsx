import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

// Fonts are loaded via globals.css
// No need to import fonts directly in layout

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: ["web developer", "AI automation", "brand design", "logo design", "packaging", "Next.js", "freelance", "remote", "Semarang"],
  authors: [{ name: siteConfig.owner }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-bg text-brand-dark font-body antialiased">
        {children}
      </body>
    </html>
  );
}
