import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import speakersData from "@/data/speakers.json";
import andrewAsset from "@/assets/speakers/andrew.png.asset.json";
import ericAsset from "@/assets/speakers/eric.png.asset.json";
import utkarshAsset from "@/assets/speakers/utkarsh.png.asset.json";
import shivamAsset from "@/assets/speakers/shivam.png.asset.json";
import nikkyAsset from "@/assets/speakers/nikky.png.asset.json";
import { RevealGroup, Eyebrow, Heading, Body, CardGrid, itemVariants } from "./Reveal";

const photoMap: Record<string, string> = {
  andrew: andrewAsset.url,
  eric: ericAsset.url,
  utkarsh: utkarshAsset.url,
  shivam: shivamAsset.url,
  nikky: nikkyAsset.url,
};

// Treat every speaker (including the previously "featured" one) as equal.
const featured = speakersData.featured;
const allSpeakers = [
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
          className="relative h-full w-full object-cover object-center"
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

        <CardGrid className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-midnight/10" stagger={0.08}>
          {allSpeakers.map((s) => (
            <motion.div
              key={s.name}
              variants={itemVariants}
              className="group relative bg-transparent"
            >
              <Avatar initials={s.initials} photo={s.photo} name={s.name} />
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
        </CardGrid>
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ivory/75">
          More speakers being announced · subject to change
        </p>
      </div>
    </section>
  );
}
