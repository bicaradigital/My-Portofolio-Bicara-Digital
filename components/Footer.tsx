import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border-light py-6">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display font-bold text-brand-text text-sm">
          Bicara<span className="text-brand-orange">.</span>Digital
        </span>
        <p className="text-xs text-brand-text-dim">© {new Date().getFullYear()} {siteConfig.owner} — {siteConfig.location}</p>
        <p className="text-xs text-brand-subtle">{siteConfig.email}</p>
      </div>
    </footer>
  );
}
