"use client";
import { useState } from "react";
import { devProjects } from "@/data/portfolio";
import { Github, Globe, Lock, ArrowUpRight } from "lucide-react";

const filters = [
  { label: "All", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "Business System", value: "business" },
  { label: "AI / Automation", value: "ai" },
];

const catColor: Record<string, string> = {
  "Web Dev": "text-blue-400 bg-blue-400/5 border-blue-400/20",
  "Business System": "text-brand-orange bg-brand-orange/5 border-brand-orange/20",
  "AI / Automation": "text-purple-400 bg-purple-400/5 border-purple-400/20",
};

export default function ProjectsSection() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? devProjects : devProjects.filter(p => p.type === active);

  return (
    <section id="projects" className="py-24 bg-brand-surface border-t border-brand-border-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="num-accent">002</span>
            <div className="h-px w-8 bg-brand-subtle" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text tracking-tight">Dev Projects</h2>
          </div>
          {/* Filter */}
          <div className="hidden sm:flex items-center gap-1 bg-brand-surface border border-brand-border-light rounded-sm p-1">
            {filters.map(f => (
              <button key={f.value} onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 text-xs tracking-wide transition-all rounded-sm ${active === f.value ? "bg-brand-card text-brand-text" : "text-brand-text-dim hover:text-brand-text-dim"}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile filter */}
        <div className="flex sm:hidden gap-2 flex-wrap mb-8">
          {filters.map(f => (
            <button key={f.value} onClick={() => setActive(f.value)}
              className={`px-4 py-1.5 text-xs border rounded-sm transition-all ${active === f.value ? "border-brand-border-light-light text-brand-text bg-brand-card" : "border-brand-border-light text-brand-text-dim"}`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Table-style list on desktop, cards on mobile */}
        <div className="hidden md:block">
          {/* Header row */}
          <div className="grid grid-cols-12 gap-4 px-4 pb-3 border-b border-brand-border-light">
            <span className="col-span-1 text-xs text-brand-text-dim">#</span>
            <span className="col-span-4 text-xs text-brand-text-dim">Project</span>
            <span className="col-span-3 text-xs text-brand-text-dim">Stack</span>
            <span className="col-span-2 text-xs text-brand-text-dim">Client</span>
            <span className="col-span-2 text-xs text-brand-text-dim text-right">Links</span>
          </div>
          {filtered.map((p, i) => (
            <div key={p.id} className="group grid grid-cols-12 gap-4 px-4 py-5 border-b border-brand-border-light hover:bg-brand-surface transition-colors">
              <div className="col-span-1 text-brand-text-dim text-xs pt-0.5 font-mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="col-span-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs px-2 py-0.5 border rounded-sm ${catColor[p.category] || "text-brand-text-dim border-brand-border-light"}`}>{p.category}</span>
                  <span className="text-xs text-brand-text-dim">{p.year}</span>
                </div>
                <p className="text-sm font-medium text-brand-text group-hover:text-white transition-colors">{p.title}</p>
                <p className="text-xs text-brand-text-dim mt-1 leading-relaxed line-clamp-2">{p.desc}</p>
              </div>
              <div className="col-span-3 flex flex-wrap gap-1 content-start">
                {p.stack.slice(0, 4).map(s => <span key={s} className="tag">{s}</span>)}
              </div>
              <div className="col-span-2 text-xs text-brand-text-dim pt-0.5 leading-relaxed">{p.client}</div>
              <div className="col-span-2 flex gap-2 justify-end items-start">
                {p.githubUrl
                  ? <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-brand-text-dim hover:text-brand-text border border-brand-border-light hover:border-brand-border-light-light px-2.5 py-1.5 rounded-sm transition-all"><Github size={11} />Code</a>
                  : <span className="flex items-center gap-1 text-xs text-brand-subtle border border-brand-border-light px-2.5 py-1.5 rounded-sm cursor-default"><Lock size={11} />Private</span>
                }
                {p.liveUrl
                  ? <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-brand-orange border border-brand-orange/30 hover:bg-brand-orange/5 px-2.5 py-1.5 rounded-sm transition-all"><Globe size={11} />Live</a>
                  : <span className="flex items-center gap-1 text-xs text-brand-subtle border border-dashed border-brand-border-light px-2.5 py-1.5 rounded-sm cursor-default"><Globe size={11} />Soon</span>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-3">
          {filtered.map((p, i) => (
            <div key={p.id} className="bg-brand-surface border border-brand-border-light rounded-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 border rounded-sm ${catColor[p.category] || "text-brand-text-dim border-brand-border-light"}`}>{p.category}</span>
                  <span className="text-xs text-brand-text-dim">{p.year}</span>
                </div>
                <span className="text-xs font-mono text-brand-subtle">{String(i+1).padStart(2,'0')}</span>
              </div>
              <p className="text-sm font-medium text-brand-text mb-1">{p.title}</p>
              <p className="text-xs text-brand-text-dim leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1 mb-4">{p.stack.slice(0,4).map(s => <span key={s} className="tag">{s}</span>)}</div>
              <div className="flex items-center justify-between pt-3 border-t border-brand-border-light">
                <span className="text-xs text-brand-text-dim">{p.client}</span>
                <div className="flex gap-2">
                  {p.githubUrl
                    ? <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-brand-text-dim hover:text-brand-text border border-brand-border-light px-2 py-1 rounded-sm transition-all"><Github size={10} />Code</a>
                    : <span className="flex items-center gap-1 text-xs text-brand-subtle border border-brand-border-light px-2 py-1 rounded-sm"><Lock size={10} />Private</span>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
