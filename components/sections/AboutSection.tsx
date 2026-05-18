import Image from "next/image";
import { siteConfig } from "@/data/portfolio";
import { MapPin, Briefcase, Palette } from "lucide-react";

const experience = [
  {
    period: "2022 – Present",
    role: "Freelance Developer & AI Consultant",
    company: "Bicara Digital — Remote, Global",
    icon: <Briefcase size={16} className="text-brand-orange" />,
  },
  {
    period: "Previous",
    role: "Support System Operational",
    company: "Corporate — Semarang",
    icon: <Briefcase size={16} className="text-brand-blue-light" />,
  },
  {
    period: "2019 – Present",
    role: "Graphic Designer",
    company: "Freelance — 5+ Years",
    icon: <Palette size={16} className="text-brand-orange" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Who I Am
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight accent-bar">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Avatar + Experience */}
          <div>
            {/* Avatar */}
            <div className="flex items-center gap-5 mb-8">
              <Image
                src="/images/bagoes-profile.jpg"
                alt={siteConfig.owner}
                width={80}
                height={80}
                className="w-20 h-20 rounded-2xl object-cover shadow-lg flex-shrink-0"
              />
              <div>
                <h3 className="font-display font-bold text-2xl text-brand-dark">
                  {siteConfig.owner}
                </h3>
                <p className="text-brand-muted text-sm flex items-center gap-1.5 mt-1">
                  <MapPin size={14} className="text-brand-orange" />
                  {siteConfig.location} — Remote Worldwide
                </p>
              </div>
            </div>

            {/* Experience timeline */}
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white border border-brand-border rounded-2xl p-4 card-hover"
                >
                  <div className="w-9 h-9 bg-brand-bg rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    {exp.icon}
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted mb-0.5">{exp.period}</p>
                    <p className="text-sm font-semibold text-brand-dark">{exp.role}</p>
                    <p className="text-xs text-brand-muted">{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-5 text-brand-muted leading-relaxed">
            <p>
              I'm a developer and creative professional from Semarang, Indonesia
              with a background spanning corporate operational support, graphic
              design, and modern web development.
            </p>
            <p>
              Through{" "}
              <span className="text-brand-blue font-semibold">Bicara Digital</span>,
              I help businesses — from local UMKM to growing startups — build
              practical digital products: web applications, business systems,
              AI-powered tools, and brand identities that actually solve problems.
            </p>
            <p>
              My approach combines technical depth with a designer's eye. I don't
              just build what's asked — I think about the user, the business
              context, and the outcome. That means cleaner systems, better
              interfaces, and products people actually use.
            </p>
            <p>
              Currently open to{" "}
              <span className="text-brand-orange font-semibold">
                remote project collaborations
              </span>{" "}
              and long-term client partnerships.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: "Location", value: "Semarang, Indonesia" },
                { label: "Languages", value: "Bahasa, English" },
                { label: "Availability", value: "Open to Remote" },
                { label: "Response Time", value: "< 24 hours" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white border border-brand-border rounded-xl p-4"
                >
                  <p className="text-xs text-brand-muted mb-1">{fact.label}</p>
                  <p className="text-sm font-semibold text-brand-dark">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
