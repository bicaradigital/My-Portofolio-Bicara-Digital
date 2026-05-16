import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-brand-bg text-brand-dark font-body antialiased">
        {children}
      </body>
    </html>
  );
}
