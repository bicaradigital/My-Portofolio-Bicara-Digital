import { services } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-surface border-t border-brand-border-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="num-accent">004</span>
          <div className="h-px w-8 bg-brand-subtle" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-text tracking-tight">Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">
          {services.map((s, i) => (
            <div key={s.id} className="bg-brand-surface p-8 hover:bg-brand-surface transition-colors group">
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{s.icon}</span>
                <span className="num-accent opacity-40">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-sm font-semibold text-brand-text mb-3 tracking-wide">{s.title}</h3>
              <p className="text-xs text-brand-text-dim leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
