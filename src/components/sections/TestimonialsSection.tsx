"use client";
import { useState } from "react";
import { testimonials } from "@/data/portfolio";

export default function TestimonialsSection() {
  const [lang, setLang] = useState<"id"|"en">("id");

  return (
    <section id="testimonials" className="py-24 bg-brand-bg border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span className="num-accent">005</span>
            <div className="h-px w-8 bg-brand-subtle" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text tracking-tight">Client Reviews</h2>
          </div>
          <div className="flex items-center gap-1 border border-brand-border rounded-sm p-1 self-start">
            {(["id","en"] as const).map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-4 py-1.5 text-xs tracking-wide rounded-sm transition-all ${lang === l ? "bg-brand-card text-brand-text" : "text-brand-muted hover:text-brand-text-dim"}`}>
                {l === "id" ? "🇮🇩 Bahasa" : "🇬🇧 English"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-surface border border-brand-border rounded-sm p-6 card-lift flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-brand-orange text-xs">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-brand-text-dim leading-relaxed flex-1 mb-6">
                &ldquo;{lang === "id" ? t.text : t.textEn}&rdquo;
              </p>

              {/* Project tag */}
              <span className="tag-orange text-xs self-start mb-4">{t.project}</span>

              {/* Client */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className="w-9 h-9 rounded-sm bg-brand-card border border-brand-border flex items-center justify-center shrink-0">
                  <span className="text-brand-orange text-sm font-bold font-display">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-text">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.role}, {t.company}</p>
                  <p className="text-xs text-brand-subtle">{t.location} · {t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 grid grid-cols-3 border border-brand-border divide-x divide-brand-border">
          {[["6", "Happy Clients"], ["5.0 ★", "Avg Rating"], ["100%", "Satisfaction"]].map(([n, l]) => (
            <div key={l} className="py-6 text-center hover:bg-brand-surface transition-colors">
              <div className="font-display font-bold text-2xl text-brand-text">{n}</div>
              <div className="text-xs text-brand-muted mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
