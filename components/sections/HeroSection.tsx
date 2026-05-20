"use client";
import { siteConfig } from "@/data/portfolio";
import { ArrowDownRight, Github, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero-gradient min-h-screen flex flex-col justify-end pb-16 pt-32 relative overflow-hidden">
      {/* Top right label */}
      <div className="absolute top-20 right-6 lg:right-8 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs text-brand-text-dim tracking-widest uppercase">Available</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Index tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="num-accent">001</span>
          <div className="h-px w-8 bg-brand-subtle" />
          <span className="section-label">Portfolio</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-bold text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight text-brand-text mb-8">
          Bagoes<br />
          Tri Anggoro<span className="text-brand-orange">.</span>
        </h1>

        {/* Tagline row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="text-brand-text-dim text-base lg:text-lg leading-relaxed">
              Web developer, AI integrator, and brand designer based in{" "}
              <span className="text-brand-text">Semarang, Indonesia</span>{" "}
              — building digital products that work for real businesses.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 lg:gap-12 shrink-0">
            {[["5+", "Years Design"], ["9+", "Projects Built"], ["6", "Happy Clients"]].map(([n, l]) => (
              <div key={l} className="text-center lg:text-right">
                <div className="font-display font-bold text-2xl lg:text-3xl text-brand-text">{n}</div>
                <div className="text-xs text-brand-text-dim mt-1 whitespace-nowrap">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <button onClick={() => go("projects")}
            className="group flex items-center gap-2 bg-brand-text text-brand-bg font-medium px-7 py-3.5 text-sm tracking-wide hover:bg-white transition-colors rounded-sm">
            View Work
            <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border border-brand-border-light text-brand-text-dim hover:text-brand-text hover:border-brand-border-light-light px-7 py-3.5 text-sm tracking-wide transition-all rounded-sm">
            <MessageCircle size={15} />
            Get in Touch
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-text-dim hover:text-brand-text-dim text-sm transition-colors">
            <Github size={15} />
            GitHub
          </a>
        </div>

        {/* Bottom scroll hint */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-brand-border max-w-xs" />
          <button onClick={() => go("projects")} className="text-xs text-brand-text-dim hover:text-brand-text-dim transition-colors tracking-widest uppercase">
            Scroll to explore
          </button>
        </div>
      </div>
    </section>
  );
}
