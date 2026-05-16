import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/30 font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="text-white/50">{siteConfig.name}</span> —{" "}
          {siteConfig.owner}
        </p>
        <p className="text-xs text-white/20">
          {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
