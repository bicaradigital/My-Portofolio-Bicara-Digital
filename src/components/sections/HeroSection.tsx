"use client";
import { siteConfig } from "@/data/portfolio";
import { ArrowDown, Github, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-pattern">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-pale rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-brand-border rounded-full px-4 py-2 mb-8 shadow-sm animate-fade-up">
          <span className="w-2 h-2 bg-green-500 rounded-full pulse-dot" />
          <span className="text-sm font-medium text-brand-muted">
            Available for remote work
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight text-brand-dark mb-6 animate-fade-up stagger-1">
          Tech &amp; Creative —{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">Web, AI, and Brand</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-brand-muted max-w-2xl leading-relaxed mb-10 animate-fade-up stagger-2">
          I build digital products that work — from business systems and web
          apps to AI automation and brand design.{" "}
          <span className="text-brand-blue font-medium">
            Based in Semarang, working globally.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 animate-fade-up stagger-3">
          <button
            onClick={() => scroll("projects")}
            className="bg-brand-blue hover:bg-brand-blue-mid text-white font-medium px-7 py-3.5 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg shadow-brand-blue/20"
          >
            View Projects
          </button>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-brand-border hover:border-brand-orange text-brand-dark hover:text-brand-orange font-medium px-7 py-3.5 rounded-full transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <MessageCircle size={18} />
            Get in Touch
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-muted hover:text-brand-blue font-medium px-7 py-3.5 rounded-full border border-brand-border hover:border-brand-blue transition-all bg-white hover:-translate-y-1"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up stagger-4">
          {[
            { num: "5+", label: "Years Design" },
            { num: "2+", label: "Years Dev & AI" },
            { num: "8+", label: "Projects Built" },
            { num: "3+", label: "Industries" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-brand-border rounded-2xl p-5 text-center card-hover"
            >
              <div className="font-display font-bold text-3xl text-brand-blue leading-none mb-1">
                {stat.num}
              </div>
              <div className="text-xs text-brand-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scroll("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted hover:text-brand-blue transition-colors animate-bounce"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
