import { motion } from "framer-motion";
import { Reveal, CardGrid, itemVariants } from "./Reveal";

const benefits = [
  {
    n: "01",
    title: "Career advancement",
    body: "Direct conversations with hiring leaders, recruiters and senior engineers from across India.",
  },
  {
    n: "02",
    title: "Research opportunities",
    body: "Publication-ready feedback, mentorship pathways and lab introductions for student researchers.",
  },
  {
    n: "03",
    title: "Industry exposure",
    body: "First-look access to what shipping teams at top product companies are actually building.",
  },
  {
    n: "04",
    title: "Entrepreneurship pathways",
    body: "Founder Q&As, investor introductions and co-founder matchmaking through the Startup Showcase.",
  },
  {
    n: "05",
    title: "Leadership development",
    body: "Engineering-management tracks and chapter-leadership sessions for office-bearers.",
  },
  {
    n: "06",
    title: "National IEEE network",
    body: "A four-day window into the IEEE Computer Society ecosystem and chapters from every region.",
  },
];

export function WhyAttend() {
  return (
    <section className="relative section-rhythm bg-transparent">
      <div className="container-editorial">
        <Reveal direction="up" distance={32} className="max-w-3xl mb-20">
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
            Six reasons delegates fly in
            <span className="editorial-italic text-emerald"> from every corner of the country.</span>
          </h2>
        </Reveal>

        <CardGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12 md:gap-x-16" stagger={0.08}>
          {benefits.map((b) => (
            <motion.article key={b.title} variants={itemVariants} className="group">
              <p className="font-mono text-xs tracking-widest text-gold/80">{b.n}</p>
              <h3 className="mt-5 font-display text-2xl md:text-[1.65rem] text-ivory leading-tight text-balance">
                {b.title}
              </h3>
              <p className="mt-4 text-ivory/65 text-[15px] leading-[1.7] prose-narrow">
                {b.body}
              </p>
              <div className="mt-6 h-px w-12 bg-ivory/15 group-hover:w-24 group-hover:bg-gold transition-all duration-500" />
            </motion.article>
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
