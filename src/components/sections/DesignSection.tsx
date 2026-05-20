"use client";
import { useState } from "react";
import { designProjects } from "@/data/portfolio";
import { X, ExternalLink, ImageOff } from "lucide-react";

const categories = [
  { label: "All", value: "all" },
  { label: "Logo", value: "logo" },
  { label: "Packaging", value: "packaging" },
  { label: "Apparel", value: "apparel" },
  { label: "Content", value: "content" },
];

type DP = typeof designProjects[0];

export default function DesignSection() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<DP | null>(null);
  const filtered = active === "all" ? designProjects : designProjects.filter(p => p.category === active);

  return (
    <section id="design" className="py-24 bg-brand-surface border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-6">
          <div className="flex items-center gap-3">
            <span className="num-accent">003</span>
            <div className="h-px w-8 bg-brand-subtle" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text tracking-tight">Design Work</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(c => (
              <button key={c.value} onClick={() => setActive(c.value)}
                className={`px-4 py-1.5 text-xs tracking-wide border rounded-sm transition-all ${active === c.value ? "border-brand-text text-brand-text bg-brand-card" : "border-brand-border text-brand-muted hover:border-brand-border-light hover:text-brand-text-dim"}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map((p) => (
            <div key={p.id} onClick={() => setSelected(p)}
              className="group relative bg-brand-card border border-brand-border rounded-sm overflow-hidden cursor-pointer card-lift">
              <div className="aspect-square relative">
                {p.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.src} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <div className="w-full h-full bg-brand-surface flex flex-col items-center justify-center gap-2">
                    <ImageOff size={20} className="text-brand-subtle" />
                    <span className="text-xs text-brand-muted text-center px-3 leading-tight">{p.title}</span>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-1 p-3">
                  <span className="text-white text-xs font-medium text-center leading-tight">{p.title}</span>
                  <span className="text-brand-muted text-xs">{p.year}</span>
                </div>
              </div>
              {/* Label */}
              <div className="p-2.5 border-t border-brand-border">
                <p className="text-xs text-brand-text-dim truncate">{p.title}</p>
                <p className="text-xs text-brand-muted">{p.categoryLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-brand-surface border border-brand-border-light rounded-sm max-w-lg w-full overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="aspect-video bg-brand-card relative">
              {selected.src
                ? <img src={selected.src} alt={selected.title} className="w-full h-full object-contain" />
                : <div className="w-full h-full flex items-center justify-center"><ImageOff size={32} className="text-brand-subtle" /></div>
              }
              <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/80 flex items-center justify-center rounded-sm transition-colors">
                <X size={14} className="text-white" />
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag">{selected.categoryLabel}</span>
                <span className="text-xs text-brand-muted">{selected.year}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-brand-text mb-1">{selected.title}</h3>
              <p className="text-sm text-brand-muted mb-3">{selected.client}</p>
              <p className="text-sm text-brand-text-dim leading-relaxed">{selected.desc}</p>
              {selected.canvaLink && (
                <a href={selected.canvaLink} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-brand-orange border border-brand-orange/30 px-4 py-2 rounded-sm hover:bg-brand-orange/5 transition-colors">
                  <ExternalLink size={12} /> View on Canva
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
