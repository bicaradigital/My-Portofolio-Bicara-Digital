import { skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-brand-surface border-t border-brand-border-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="num-accent">006</span>
          <div className="h-px w-8 bg-brand-subtle" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text tracking-tight">Skills & Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.group} className="border border-brand-border-light rounded-sm p-5 hover:border-brand-border-light-light transition-colors">
              <h3 className="section-label mb-4">{g.group}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map(s => (
                  <span key={s} className="tag hover:border-brand-border-light-light hover:text-brand-text-dim cursor-default transition-colors">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
