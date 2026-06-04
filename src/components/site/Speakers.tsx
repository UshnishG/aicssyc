import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import speakersData from "@/data/speakers.json";
import { RevealGroup, Eyebrow, Heading, Body, CardGrid, itemVariants, Reveal } from "./Reveal";

const featured = speakersData.featured;
const speakers = speakersData.speakers;


function Avatar({ initials, large }: { initials: string; large?: boolean }) {
  return (
    <div
      className={`relative ${large ? "h-full w-full" : "aspect-[4/5] w-full"} overflow-hidden bg-gradient-to-br from-emerald via-midnight to-midnight-deep flex items-center justify-center`}
    >
      <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-atmosphere)" }} />
      <span className="relative font-display text-5xl md:text-6xl text-gold/90 tracking-tight">
        {initials}
      </span>
    </div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="relative py-24 md:py-36 bg-transparent">
      <div className="container-editorial">
        <RevealGroup className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Eyebrow color="emerald">Distinguished speakers & industry experts</Eyebrow>
            <Heading className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ivory text-balance">
              The voices shaping <em className="italic font-normal text-emerald">AICSSYC 2026.</em>
            </Heading>
            <Body className="mt-6 text-ivory/80 max-w-xl">
              A curated line-up of researchers, engineers, architects and entrepreneurs.
              More speakers to be announced — final list subject to change.
            </Body>
          </div>
        </RevealGroup>

        {/* Featured */}
        <Reveal direction="blur" distance={40}>
        <article className="grid md:grid-cols-[1.1fr_1fr] gap-0 mb-16 bg-midnight text-ivory">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[460px]">
            <Avatar initials={featured.initials} large />
            <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.22em] text-gold bg-midnight/60 backdrop-blur px-3 py-1.5">
              Featured · Day 0
            </span>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-gold">{featured.topic}</p>
              <h3 className="mt-4 font-display text-3xl md:text-5xl leading-tight text-balance">
                {featured.name}
              </h3>
              <p className="mt-2 text-ivory/70">{featured.role}</p>
              <p className="mt-8 text-ivory/80 leading-relaxed max-w-[55ch]">{featured.bio}</p>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <a
                href={featured.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn — ${featured.name}`}
                className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-xs uppercase tracking-[0.16em] hover:border-gold hover:text-gold transition"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </article>

        {/* Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-midnight/10">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="group relative bg-transparent"
            >
              <Avatar initials={s.initials} />
              <div className="p-4">
                <p className="font-display text-base text-ivory leading-tight">{s.name}</p>
                <p className="text-xs text-ivory/75 mt-1">{s.org}</p>
              </div>

              <div className="absolute inset-0 bg-midnight/95 text-ivory opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">Focus</p>
                <p className="font-display text-xl mt-2">{s.focus}</p>
                <p className="text-sm text-ivory/70 mt-1">{s.org}</p>
                <div className="mt-4">
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn — ${s.name}`}
                    className="inline-flex items-center gap-2 border border-white/15 px-3 py-1.5 text-xs hover:bg-gold hover:text-ivory hover:border-gold transition"
                  >
                    <Linkedin size={12} /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ivory/75">
          More speakers being announced · subject to change
        </p>
      </div>
    </section>
  );
}
