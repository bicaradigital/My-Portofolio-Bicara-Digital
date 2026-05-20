import { siteConfig } from "@/data/portfolio";
import { MessageCircle, Github, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-surface border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-16">
          <span className="num-accent">008</span>
          <div className="h-px w-8 bg-brand-subtle" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text tracking-tight">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h3 className="font-display font-bold text-4xl sm:text-5xl text-brand-text leading-tight tracking-tight mb-6">
              Let's build<br />something<span className="text-brand-orange">.</span>
            </h3>
            <p className="text-brand-text-dim text-sm leading-relaxed mb-8 max-w-sm">
              Whether you need a web app, a business system, AI automation, or a fresh brand identity — I'd love to hear about your project.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-brand-muted tracking-wider">Open to remote work</span>
            </div>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dim text-white font-medium px-8 py-4 text-sm tracking-wide transition-colors rounded-sm">
              <MessageCircle size={16} />
              Chat on WhatsApp
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right */}
          <div className="space-y-3">
            {[
              { icon: <MessageCircle size={15} />, label: "WhatsApp", value: siteConfig.whatsapp, href: `https://wa.me/${siteConfig.whatsapp}` },
              { icon: <Mail size={15} />, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: <Github size={15} />, label: "GitHub", value: "github.com/bicaradigital", href: siteConfig.github },
              { icon: <MapPin size={15} />, label: "Location", value: "Semarang, Indonesia — Remote Worldwide", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 border border-brand-border rounded-sm hover:border-brand-border-light hover:bg-brand-card transition-all group">
                <div className="w-9 h-9 bg-brand-card border border-brand-border rounded-sm flex items-center justify-center shrink-0 text-brand-orange">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-brand-muted mb-0.5">{item.label}</p>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-text-dim hover:text-brand-text transition-colors truncate block">{item.value}</a>
                    : <p className="text-sm text-brand-text-dim truncate">{item.value}</p>
                  }
                </div>
                {item.href && <ArrowUpRight size={14} className="text-brand-subtle group-hover:text-brand-muted transition-colors shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
