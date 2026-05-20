"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Design", href: "#design" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-brand-surface/95 backdrop-blur-md border-b border-brand-border-light" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-lg text-brand-text tracking-tight">
            Bicara<span className="text-brand-orange">.</span>Digital
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="text-sm text-brand-text-dim hover:text-brand-text transition-colors tracking-wide">
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
              className="text-sm text-brand-text-dim hover:text-brand-text transition-colors">
              GitHub
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium bg-brand-orange hover:bg-brand-orange-dim text-white px-5 py-2 rounded-sm transition-colors tracking-wide">
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-brand-text-dim hover:text-brand-text">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-brand-surface border-l border-brand-border-light transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-brand-border-light">
            <span className="font-display font-bold text-brand-text">Bicara<span className="text-brand-orange">.</span>Digital</span>
            <button onClick={() => setOpen(false)}><X size={18} className="text-brand-text-dim" /></button>
          </div>
          <div className="p-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="text-left px-3 py-3 text-brand-text-dim hover:text-brand-text hover:bg-brand-card rounded-sm transition-all text-sm tracking-wide">
                {l.label}
              </button>
            ))}
            <div className="mt-6 pt-6 border-t border-brand-border-light flex flex-col gap-3">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                className="text-center py-2.5 border border-brand-border-light text-brand-text-dim text-sm rounded-sm hover:border-brand-border-light-light hover:text-brand-text transition-all">
                GitHub
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="text-center bg-brand-orange text-white font-medium py-3 rounded-sm text-sm hover:bg-brand-orange-dim transition-colors">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
