import { motion } from "framer-motion";
import { BookOpen, Users, Hammer } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    name: "Learn",
    line: "Discover emerging technologies and future trends.",
    benefits: [
      "Keynote talks and expert technical sessions",
      "Discussions across six curated themes",
      "Hands-on workshops and competitions",
    ],
    outcomes: [
      "Practical and leadership skills",
      "Exposure to live research and industry work",
    ],
  },
  {
    icon: Users,
    name: "Connect",
    line: "Collaborate with students, professionals and leaders.",
    benefits: [
      "Network with researchers and entrepreneurs",
      "Meet IEEE Computer Society leaders from across India",
      "Cultural evening and community interactions",
    ],
    outcomes: [
      "Lasting peer and mentor relationships",
      "Cross-chapter and cross-industry introductions",
    ],
  },
  {
    icon: Hammer,
    name: "Build",
    line: "Explore innovation, research and entrepreneurship.",
    benefits: [
      "Innovation Expo and Startup Showcase",
      "Industrial Showcase and chapter presentations",
      "Be part of a flagship IEEE CS SYP gathering",
    ],
    outcomes: [
      "Visibility for your work",
      "Pathways into research, startups and industry",
    ],
  },
];

export function WhyAttend() {
  return (
    <section className="relative py-24 md:py-36 bg-ivory">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald">
            <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
            Why attend
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
            Three things you will leave with.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-midnight/10 border border-midnight/10">
          {categories.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-ivory p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex h-12 w-12 items-center justify-center bg-midnight text-gold">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-midnight/50">
                    0{idx + 1} — {c.name}
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-midnight leading-[1.05] text-balance">
                  {c.line}
                </h3>

                <div className="mt-10 pt-8 border-t border-midnight/10 space-y-6 flex-1">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-emerald mb-3">Benefits</p>
                    <ul className="space-y-2">
                      {c.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-midnight/80 text-sm leading-relaxed">
                          <span className="mt-2 h-1 w-1 rounded-full bg-emerald flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Outcomes</p>
                    <ul className="space-y-2">
                      {c.outcomes.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-midnight/80 text-sm leading-relaxed">
                          <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
