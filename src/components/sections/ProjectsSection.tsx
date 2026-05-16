"use client";
import { useState } from "react";
import { devProjects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const filters = [
  { label: "All", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "Business System", value: "business" },
  { label: "AI / Automation", value: "ai" },
];

const categoryColors: Record<string, string> = {
  "Web Dev": "bg-brand-blue-pale text-brand-blue-mid",
  "Business System": "bg-orange-50 text-brand-orange-deep",
  "AI / Automation": "bg-purple-50 text-purple-700",
};

export default function ProjectsSection() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? devProjects
      : devProjects.filter((p) => p.type === active);

  return (
    <section id="projects" className="py-20 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Case Studies
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight accent-bar">
            Dev Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                active === f.value
                  ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                  : "bg-white text-brand-muted border-brand-border hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-brand-border rounded-2xl p-6 card-hover group"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    categoryColors[project.category] ||
                    "bg-brand-blue-pale text-brand-blue"
                  }`}
                >
                  {project.category}
                </span>
                <span className="text-xs text-brand-muted">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base text-brand-dark mb-1 group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>

              {/* Highlight */}
              <p className="text-xs text-brand-orange font-medium mb-3">
                ✦ {project.highlight}
              </p>

              {/* Desc */}
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((s) => (
                  <span key={s} className="tag-chip">
                    {s}
                  </span>
                ))}
              </div>

              {/* Client */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                <p className="text-xs text-brand-muted">
                  <span className="font-medium text-brand-dark">Client: </span>
                  {project.client}
                </p>
                <ExternalLink
                  size={14}
                  className="text-brand-muted group-hover:text-brand-orange transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
