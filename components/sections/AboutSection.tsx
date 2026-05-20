import { siteConfig } from "@/data/portfolio";
import { MapPin } from "lucide-react";

const exp = [
  { period: "2022 – Present", role: "Freelance Developer & AI Consultant", company: "Bicara Digital — Remote, Global" },
  { period: "Previous", role: "Support System Operational", company: "Corporate — Semarang" },
  { period: "2019 – Present", role: "Graphic Designer", company: "Freelance — 5+ Years" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-brand-surface border-t border-brand-border-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="num-accent">007</span>
          <div className="h-px w-8 bg-brand-subtle" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text tracking-tight">About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-surface border border-brand-border-light rounded-sm flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-xl text-brand-orange">BT</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-text">{siteConfig.owner}</h3>
                <p className="text-sm text-brand-text-dim flex items-center gap-1.5 mt-1">
                  <MapPin size={12} className="text-brand-orange" />
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="section-label mb-3">Experience</p>
              {exp.map((e, i) => (
                <div key={i} className="flex gap-4 py-4 border-b border-brand-border-light last:border-0">
                  <span className="text-xs text-brand-text-dim min-w-[110px] pt-0.5 font-mono">{e.period}</span>
                  <div>
                    <p className="text-sm text-brand-text font-medium">{e.role}</p>
                    <p className="text-xs text-brand-text-dim mt-0.5">{e.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5 text-brand-text-dim text-sm leading-relaxed">
            <p>Developer and creative professional from Semarang, Indonesia with a background spanning corporate operational support, graphic design, and modern web development.</p>
            <p>Through <span className="text-brand-text font-medium">Bicara Digital</span>, I help businesses build practical digital products — web applications, business systems, AI-powered tools, and brand identities that solve real problems.</p>
            <p>My approach combines technical depth with a designer's eye. I don't just build what's asked — I think about the user, the business context, and the outcome.</p>
            <p>Currently open to <span className="text-brand-orange">remote project collaborations</span> and long-term client partnerships.</p>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-brand-border-light">
              {[
                ["Location", "Semarang, Indonesia"],
                ["Languages", "Bahasa, English"],
                ["Availability", "Open to Remote"],
                ["Response", "< 24 hours"],
              ].map(([k, v]) => (
                <div key={k} className="bg-brand-surface border border-brand-border-light rounded-sm p-4">
                  <p className="text-xs text-brand-text-dim mb-1">{k}</p>
                  <p className="text-sm text-brand-text font-medium">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
