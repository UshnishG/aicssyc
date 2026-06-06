import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import speakersData from "@/data/speakers.json";
import { Reveal, CardGrid, itemVariants } from "./Reveal";

const photoMap: Record<string, string> = {
  andrew: "/andrew.jpeg",
  eric: "/eric.jpeg",
  utkarsh: "/utkarsh.jpeg",
  shivam: "/shivam.jpeg",
  nikky: "/nikky.jpeg",
};

const featured = speakersData.featured;
const speakerPool = [
  {
    name: featured.name,
    org: featured.role,
    focus: featured.topic,
    initials: featured.initials,
    photo: featured.photo,
    linkedin: featured.linkedin,
  },
  ...speakersData.speakers,
];

const displayOrder = ["eric", "andrew", "shivam", "utkarsh", "nikky"];
const allSpeakers = displayOrder
  .map((key) => speakerPool.find((s) => s.photo === key))
  .filter((s): s is (typeof speakerPool)[number] => Boolean(s));

function Avatar({ initials, photo, name }: { initials: string; photo?: string; name: string }) {
  const photoUrl = photo ? photoMap[photo] : undefined;
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-emerald via-midnight to-midnight-deep flex items-center justify-center">
      <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-atmosphere)" }} />
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={`Portrait of ${name}`}
          loading="lazy"
          className="relative h-full w-full object-cover object-center grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
      ) : (
        <span className="relative font-display text-5xl md:text-6xl text-gold/90 tracking-tight">
          {initials}
        </span>
      )}
    </div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="relative section-rhythm bg-transparent">
      <div className="container-editorial">
        <Reveal direction="up" distance={32} className="max-w-3xl mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-emerald">The voices</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
            Researchers, founders &amp; engineers
            <span className="editorial-italic text-emerald"> shaping the conversation.</span>
          </h2>
        </Reveal>

        <CardGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 md:gap-x-10" stagger={0.08}>
          {allSpeakers.map((s) => (
            <motion.div
              key={s.name}
              variants={itemVariants}
              className="group relative"
            >
              <Avatar initials={s.initials} photo={s.photo} name={s.name} />
              <div className="pt-5">
                <p className="font-display text-lg text-ivory leading-tight">{s.name}</p>
                <p className="text-xs text-ivory/65 mt-1.5 leading-snug">{s.org}</p>
                <a
                  href={s.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn — ${s.name}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-ivory/55 hover:text-gold transition"
                >
                  <Linkedin size={11} /> Profile
                </a>
              </div>
            </motion.div>
          ))}
        </CardGrid>

        <Reveal direction="up" distance={24} className="mt-24">
          <div className="relative mx-auto max-w-3xl rounded-2xl border border-ivory/10 bg-midnight-deep/40 backdrop-blur-sm px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden">
            <div aria-hidden className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "var(--gradient-atmosphere)" }} />
            <div className="relative">
              <p className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-gold">
                <span className="relative inline-flex h-2 w-2 items-center justify-center">
                  <motion.span
                    aria-hidden
                    className="absolute inline-flex h-2 w-2 rounded-full bg-gold"
                    animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.span
                    className="relative inline-flex h-2 w-2 rounded-full bg-gold"
                    animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
                Lineup expanding
              </p>
              <h3 className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] tracking-tight text-ivory">
                The stage is still being set.
                <span className="block editorial-italic text-emerald mt-1">More voices, soon revealed.</span>
              </h3>
              <p className="mt-6 text-sm md:text-base text-ivory/70 prose-measure mx-auto leading-relaxed">
                Each week, new names join the AICSSYC 2026 stage — researchers, founders,
                policymakers and IEEE leaders shaping the next decade of computing.
              </p>
              <a
                href="#tickets"
                className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ivory border-b border-ivory/30 hover:border-gold hover:text-gold pb-1 transition"
              >
                Be first to know
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
