import { services } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-3">
            What I Do
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight accent-bar">
            Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group bg-brand-bg border border-brand-border rounded-2xl p-6 card-hover cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-brand-primary-pale rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-accent/10 transition-colors">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base text-brand-dark mb-2">
                {service.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
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
