import { motion } from "framer-motion";
import { Sparkles, Hammer, Users, Rocket, PartyPopper, Award } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "Discover emerging technologies & future trends",
    body: "Keynotes and technical sessions across six curated themes spanning AI, agents, FinTech and beyond.",
  },
  {
    icon: Hammer,
    title: "Participate in hands-on workshops & leadership experiences",
    body: "Practical workshops, competitions and leadership tracks designed for students and young professionals.",
  },
  {
    icon: Users,
    title: "Connect with students, researchers, professionals & IEEE leaders",
    body: "Meet peers from across India and engage with IEEE Computer Society leadership face-to-face.",
  },
  {
    icon: Rocket,
    title: "Explore innovation, entrepreneurship & career opportunities",
    body: "Innovation Expo, Startup Showcase and Industrial Showcase opening pathways into research and industry.",
  },
  {
    icon: PartyPopper,
    title: "Experience cultural events & meaningful networking",
    body: "A cultural evening, heritage visit and curated networking moments built into every day of the congress.",
  },
  {
    icon: Award,
    title: "Be part of India's flagship IEEE CS SYP congress",
    body: "Join a national-scale gathering convened by the IEEE Computer Society Student & Young Professional programme.",
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
            Why you should attend.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight/10 border border-midnight/10">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.08 }}
                className="relative bg-ivory p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex h-12 w-12 items-center justify-center bg-midnight text-gold">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-midnight/50">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-[1.7rem] text-midnight leading-[1.15] text-balance">
                  {c.title}
                </h3>

                <p className="mt-6 text-midnight/70 text-sm leading-relaxed">
                  {c.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
