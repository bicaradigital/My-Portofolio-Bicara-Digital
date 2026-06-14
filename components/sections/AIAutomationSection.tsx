"use client";
import {
  Search, Cpu, Code2, FileCheck, Rocket,
  TrendingDown, Clock, ShieldCheck, ExternalLink
} from "lucide-react"

const aiTools = [
  { name: "Claude API", accent: true },
  { name: "ChatGPT / GPT-4", accent: false },
  { name: "Gemini", accent: false },
  { name: "Python", accent: false },
  { name: "Streamlit", accent: false },
  { name: "REST API", accent: false },
  { name: "PDF Automation", accent: false },
  { name: "Prompt Engineering", accent: false },
]

const workflowSteps = [
  { icon: Search, label: "Identify manual process", variant: "neutral" },
  { icon: Cpu, label: "Design AI workflow", variant: "accent" },
  { icon: Code2, label: "Build & integrate", variant: "neutral" },
  { icon: FileCheck, label: "Test & document", variant: "neutral" },
  { icon: Rocket, label: "Deploy & measure", variant: "success" },
]

const aiProjects = [
  {
    featured: true,
    title: "Portfolio Generator — AI Powered",
    year: "2025",
    description:
      "Integrates Anthropic Claude API for real-time portfolio description generation. User fills a form → Claude generates professional descriptions → PDF export. Full Claude API in production.",
    stack: ["Next.js 16", "Claude API", "React 19", "shadcn/ui"],
    client: "Bicara Digital (SaaS Tool)",
    impact: "Portfolio creation: 2–3 hours → under 10 minutes",
    ImpactIcon: TrendingDown,
    github: "https://github.com/bicaradigital/portfoliogenerator",
  },
  {
    featured: false,
    title: "HPP Retort Calculator",
    year: "2024",
    description:
      "Automated cost calculation for PT Rumah Retort Bersama — auto-compute water, gas, electricity, tax, margin. CSV & PDF export.",
    stack: ["Python", "Streamlit", "PDF Export", "CSV"],
    client: "PT Rumah Retort Bersama",
    impact: "30 min → 2 min per order",
    ImpactIcon: Clock,
    github: null,
  },
  {
    featured: false,
    title: "F₀ Sterilization Recorder",
    year: "2024",
    description:
      "Real-time retort process recording with automatic F₀ value calculation, watermarked PDF reports, multi-user login.",
    stack: ["Python", "Streamlit", "F₀ Algorithm", "PDF Report"],
    client: "PT Rumah Retort Bersama",
    impact: "Zero manual error — fully automated",
    ImpactIcon: ShieldCheck,
    github: null,
  },
]

const metrics = [
  { value: "-93%", label: "HPP calculation time saved", sub: "PT Rumah Retort Bersama" },
  { value: "<10 min", label: "AI portfolio generation", sub: "was 2–3 hours manual" },
  { value: "5.0★", label: "avg client rating", sub: "6 clients · 100% satisfied" },
]

export default function AIAutomationSection() {
  return (
    <section id="ai-automation" className="py-24 bg-brand-surface border-t border-brand-border-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="num-accent">004</span>
          <div className="h-px w-8 bg-brand-subtle" />
          <p className="text-xs tracking-widest text-brand-text-dim uppercase">
            AI & Automation
          </p>
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text mb-3 tracking-tight">
          Systems that think.<br />
          Workflows that run themselves.
        </h2>
        <p className="text-brand-text-dim text-base max-w-xl mb-12 leading-relaxed">
          I integrate AI into real business processes — from Claude API to Python
          automation tools used in production.
        </p>

        {/* Tools Strip */}
        <div className="flex flex-wrap gap-2 mb-14">
          {aiTools.map((tool) => (
            <span
              key={tool.name}
              className={`px-3 py-1.5 rounded-sm text-sm border transition-all ${
                tool.accent
                  ? "bg-blue-950 border-blue-900/50 text-blue-400"
                  : "bg-brand-card border-brand-border-light text-brand-text-dim hover:border-brand-border-light-light"
              }`}
            >
              {tool.name}
            </span>
          ))}
        </div>

        {/* Workflow */}
        <div className="mb-14">
          <p className="text-xs text-brand-text-dim uppercase tracking-widest mb-5 font-medium">
            How I build AI solutions
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-4">
            {workflowSteps.map((step, i) => {
              const Icon = step.icon
              const variantClass =
                step.variant === "accent"
                  ? "bg-blue-950 border-blue-900/50 text-blue-400"
                  : step.variant === "success"
                  ? "bg-emerald-950 border-emerald-900/50 text-emerald-400"
                  : "bg-brand-card border-brand-border-light text-brand-text-dim"
              return (
                <div key={i} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-sm border text-center min-w-[110px] transition-all ${variantClass}`}
                  >
                    <Icon size={18} />
                    <span className="text-xs leading-tight">{step.label}</span>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <span className="text-brand-subtle text-lg flex-shrink-0">→</span>
                  )}
                </div>
              )
            })}
          </div>
          <p className="text-xs text-brand-text-dim mt-3">
            Every system delivered with SOP documentation and client training.
          </p>
        </div>

        {/* Projects */}
        <div className="mb-14">
          <p className="text-xs text-brand-text-dim uppercase tracking-widest mb-5 font-medium">
            Featured AI projects
          </p>

          {/* Featured card */}
          {aiProjects
            .filter((p) => p.featured)
            .map((p) => {
              const Icon = p.ImpactIcon
              return (
                <div
                  key={p.title}
                  className="rounded-sm border border-brand-border-light bg-brand-card overflow-hidden mb-4"
                >
                  <div className="h-[3px] bg-blue-600 w-full" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-xs px-2.5 py-1 rounded-sm bg-blue-950 text-blue-400 border border-blue-900/50">
                        AI / Automation
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-sm bg-brand-card text-brand-orange border border-brand-border-light-light">
                        Featured
                      </span>
                      <span className="text-xs text-brand-text-dim">{p.year}</span>
                    </div>
                    <h3 className="text-lg font-medium text-brand-text mb-2">{p.title}</h3>
                    <p className="text-sm text-brand-text-dim leading-relaxed mb-4">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-brand-text-dim mb-4 pb-4 border-b border-brand-border-light">
                      <span className="font-medium text-brand-text">Client:</span> {p.client}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-400 text-sm">
                        <Icon size={15} />
                        <span>{p.impact}</span>
                      </div>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-brand-text-dim hover:text-brand-text border border-brand-border-light hover:border-brand-border-light-light px-3 py-1.5 rounded-sm transition-all"
                        >
                          <ExternalLink size={12} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

          {/* 2-col cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiProjects
              .filter((p) => !p.featured)
              .map((p) => {
                const Icon = p.ImpactIcon
                return (
                  <div
                    key={p.title}
                    className="rounded-sm border border-brand-border-light bg-brand-card overflow-hidden"
                  >
                    <div className="h-[3px] bg-blue-600 w-full" />
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs px-2.5 py-1 rounded-sm bg-blue-950 text-blue-400 border border-blue-900/50">
                          AI / Automation
                        </span>
                        <span className="text-xs text-brand-text-dim">{p.year}</span>
                      </div>
                      <h3 className="text-base font-medium text-brand-text mb-2">{p.title}</h3>
                      <p className="text-sm text-brand-text-dim leading-relaxed mb-4">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="tag"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-brand-text-dim mb-4 pb-4 border-b border-brand-border-light">
                        <span className="font-medium text-brand-text">Client:</span> {p.client}
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm">
                        <Icon size={14} />
                        <span>{p.impact}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {metrics.map((m) => (
            <div
              key={m.value}
              className="rounded-sm bg-brand-card border border-brand-border-light p-5 text-center"
            >
              <div className="text-2xl font-semibold text-blue-400 mb-1">{m.value}</div>
              <div className="text-sm text-brand-text">{m.label}</div>
              <div className="text-xs text-brand-text-dim mt-1">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="border-l-4 border-blue-600 bg-brand-card rounded-r-sm px-6 py-5 border border-l-4 border-l-blue-600 border-brand-border-light">
          <p className="text-sm text-brand-text-dim italic leading-relaxed mb-4">
            &quot;Dulu hitung HPP jasa retort manual dan sering ada selisih. Setelah pakai
            aplikasi dari Bicara Digital, semuanya otomatis dan akurat. Ini investasi
            digital paling worth it untuk R2B!&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-blue-950 border border-blue-900/50 flex items-center justify-center text-xs font-medium text-blue-400">
              IP
            </div>
            <div>
              <div className="text-sm font-medium text-brand-text">Iwan Permana</div>
              <div className="text-xs text-brand-text-dim">Owner, Rumah Retort Bersama · 2024</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
