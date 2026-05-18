import { skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-brand-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-3">
            Tech Stack
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Skills & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.group}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-4">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-sm px-3 py-1.5 rounded-full font-medium hover:bg-brand-accent/20 hover:text-brand-accent transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full opacity-70" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
