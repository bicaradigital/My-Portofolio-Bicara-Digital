import { siteConfig } from "@/data/portfolio";
import { MessageCircle, Github, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Let's build something together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
              Open to remote work
            </div>
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">
              Whether you need a web app, a business system, AI automation, or a
              fresh brand identity — I'd love to hear about your project. Let's
              talk about how I can help.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange-deep text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/30 text-sm"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: contact cards */}
          <div className="space-y-3">
            {[
              {
                icon: <MessageCircle size={18} className="text-brand-orange" />,
                label: "WhatsApp",
                value: siteConfig.whatsapp,
                href: `https://wa.me/${siteConfig.whatsapp}`,
              },
              {
                icon: <Mail size={18} className="text-brand-orange" />,
                label: "Email",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: <Github size={18} className="text-brand-orange" />,
                label: "GitHub",
                value: "github.com/bicaradigital",
                href: siteConfig.github,
              },
              {
                icon: <MapPin size={18} className="text-brand-orange" />,
                label: "Location",
                value: "Semarang, Indonesia — Remote Worldwide",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/80">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
