import { motion } from "framer-motion";
import { Sparkles, Hammer, Users, Rocket, PartyPopper, Award } from "lucide-react";
import { RevealGroup, Eyebrow, Heading, CardGrid, itemVariants } from "./Reveal";

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
    <section className="relative py-24 md:py-36 bg-transparent">
      <div className="container-editorial">
        <RevealGroup className="max-w-3xl mb-16">
          <Eyebrow color="emerald">Why attend</Eyebrow>
          <Heading className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ivory text-balance">
            Why you should attend.
          </Heading>
        </RevealGroup>

        <CardGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight/10 border border-ivory/10" stagger={0.1}>
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative bg-transparent p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.span
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex h-12 w-12 items-center justify-center bg-midnight text-gold"
                  >
                    <Icon size={20} />
                  </motion.span>
                  <span className="text-xs uppercase tracking-[0.22em] text-ivory/70">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-[1.7rem] text-ivory leading-[1.15] text-balance">
                  {c.title}
                </h3>

                <p className="mt-6 text-ivory/70 text-sm leading-relaxed">
                  {c.body}
                </p>
              </motion.article>
            );
          })}
        </CardGrid>
      </div>
    </section>
  );
}
