"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Design", href: "#design" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl text-brand-blue tracking-tight">
                Bicara
                <span className="text-brand-orange">.</span>
                Digital
              </span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium text-brand-muted hover:text-brand-blue transition-colors link-underline"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-brand-orange-deep text-white text-sm font-medium px-5 py-2 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-brand-blue hover:bg-brand-blue-pale transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden nav-overlay ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-brand-border">
            <span className="font-display font-bold text-lg text-brand-blue">
              Bicara<span className="text-brand-orange">.</span>Digital
            </span>
            <button onClick={() => setOpen(false)}>
              <X size={22} className="text-brand-muted" />
            </button>
          </div>
          <div className="p-5 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 rounded-xl text-brand-dark font-medium hover:bg-brand-blue-pale hover:text-brand-blue transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-brand-orange text-white text-center font-medium px-5 py-3 rounded-full transition-colors hover:bg-brand-orange-deep"
            >
              Let's Talk — WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
