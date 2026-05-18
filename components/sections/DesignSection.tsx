"use client";
import { useState } from "react";
import { designProjects } from "@/data/portfolio";
import { X, ExternalLink, ImageOff } from "lucide-react";

const categories = [
  { label: "All", value: "all" },
  { label: "Logo Design", value: "logo" },
  { label: "Packaging", value: "packaging" },
  { label: "Apparel", value: "apparel" },
  { label: "Content Design", value: "content" },
];

const categoryColors: Record<string, string> = {
  logo: "bg-brand-primary-pale text-brand-primary",
  packaging: "bg-orange-50 text-brand-accent",
  apparel: "bg-green-50 text-green-700",
  content: "bg-purple-50 text-purple-700",
};

type DesignProject = typeof designProjects[0];

export default function DesignSection() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<DesignProject | null>(null);

  const filtered =
    active === "all"
      ? designProjects
      : designProjects.filter((p) => p.category === active);

  return (
    <section id="design" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-3">
            Creative Work
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight accent-bar">
            Design Portfolio
          </h2>
          <p className="text-brand-muted mt-3 text-sm max-w-xl">
            5+ years of brand design — logos, packaging, and apparel for businesses across Indonesia.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setActive(c.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                active === c.value
                  ? "bg-brand-accent text-white border-brand-accent shadow-sm"
                  : "bg-white text-brand-muted border-brand-border hover:border-brand-accent hover:text-brand-accent"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="group relative bg-brand-bg border border-brand-border rounded-2xl overflow-hidden cursor-pointer card-hover"
            >
              {/* Image or placeholder */}
              <div className="aspect-square relative">
                {project.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full img-placeholder flex flex-col items-center justify-center gap-2">
                    <ImageOff size={28} className="text-brand-accent opacity-40" />
                    <span className="text-xs text-brand-muted text-center px-4 leading-tight">
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
                  <span className="text-white text-xs font-semibold text-center">
                    {project.title}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    categoryColors[project.category] || "bg-white text-brand-primary"
                  }`}>
                    {project.categoryLabel}
                  </span>
                  {project.canvaLink && (
                    <a
                      href={project.canvaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1 flex items-center gap-1 text-white/80 hover:text-white text-xs underline"
                    >
                      <ExternalLink size={12} /> View on Canva
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom label */}
              <div className="p-3">
                <p className="text-xs font-medium text-brand-dark truncate">
                  {project.title}
                </p>
                <p className="text-xs text-brand-muted">{project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="aspect-video bg-brand-bg relative">
              {selected.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full img-placeholder flex items-center justify-center">
                  <ImageOff size={40} className="text-brand-accent opacity-30" />
                </div>
              )}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-bg transition-colors"
              >
                <X size={16} className="text-brand-dark" />
              </button>
            </div>
            {/* Info */}
            <div className="p-6">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                categoryColors[selected.category] || "bg-brand-primary-pale text-brand-primary"
              }`}>
                {selected.categoryLabel}
              </span>
              <h3 className="font-display font-bold text-xl text-brand-dark mt-3 mb-1">
                {selected.title}
              </h3>
              <p className="text-brand-muted text-sm mb-1">{selected.client} · {selected.year}</p>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">{selected.desc}</p>
              {selected.canvaLink && (
                <a
                  href={selected.canvaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-accent text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brand-accent transition-colors"
                >
                  <ExternalLink size={15} /> View on Canva
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
