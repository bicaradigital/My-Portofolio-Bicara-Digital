import { testimonials } from "@/data/portfolio";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
            What Clients Say
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight accent-bar">
            Testimonials
          </h2>
          <p className="text-brand-muted mt-4 max-w-2xl">
            Real feedback from businesses and clients I've worked with. From startups to established UMKM, here's what they say about the projects we built together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand-bg border border-brand-border rounded-3xl p-6 card-hover flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-dark text-sm leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-brand-border pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-white text-xs">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-brand-muted">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-brand-orange text-white px-2.5 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  <span className="text-xs text-brand-muted">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "5/5", label: "Average Rating" },
            { number: "6+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-brand-border rounded-2xl p-4 text-center"
            >
              <p className="font-display font-bold text-2xl text-brand-blue mb-1">
                {stat.number}
              </p>
              <p className="text-xs text-brand-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
