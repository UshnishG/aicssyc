import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe } from "lucide-react";

const featured = {
  name: "Dr. Amara Okafor",
  role: "Chief Scientist, Aether Labs",
  topic: "Keynote · The post-foundation era",
  bio: "Leads the world's longest-running research programme on neuro-symbolic systems. Author of three IEEE standards on agentic evaluation.",
  initials: "AO",
};

const speakers = [
  { name: "Henrik Lindqvist", org: "ETH Zürich", focus: "Photonic compute", initials: "HL" },
  { name: "Priya Raghavan", org: "Anthropic", focus: "Alignment research", initials: "PR" },
  { name: "Marcus Wei", org: "NVIDIA", focus: "Datacenter architecture", initials: "MW" },
  { name: "Lena Hofmann", org: "European Commission", focus: "AI Act enforcement", initials: "LH" },
  { name: "Yuki Tanaka", org: "RIKEN", focus: "Quantum error correction", initials: "YT" },
  { name: "Sofia Almeida", org: "Stripe", focus: "Distributed payments", initials: "SA" },
  { name: "Rahul Mehta", org: "OpenAI", focus: "Multi-agent systems", initials: "RM" },
  { name: "Eva Kowalski", org: "CERN", focus: "Exascale computing", initials: "EK" },
  { name: "James Mwangi", org: "Andela", focus: "Engineering at scale", initials: "JM" },
  { name: "Clara Dubois", org: "Mistral AI", focus: "Open-weight frontier", initials: "CD" },
];

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
    <section id="speakers" className="relative py-24 md:py-36 bg-ivory">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald">
              <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
              The 2026 faculty
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
              180 speakers. <em className="italic font-normal text-emerald">No filler slots.</em>
            </h2>
          </div>
          <a href="#" className="text-sm text-midnight/70 hover:text-midnight border-b border-midnight/30 hover:border-midnight pb-0.5">
            See the full faculty →
          </a>
        </div>

        {/* Featured keynote — editorial split */}
        <article className="grid md:grid-cols-[1.1fr_1fr] gap-0 mb-16 bg-midnight text-ivory">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[460px]">
            <Avatar initials={featured.initials} large />
            <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.22em] text-gold bg-midnight/60 backdrop-blur px-3 py-1.5">
              Opening keynote · Day 01
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
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Speaker link"
                  className="h-10 w-10 inline-flex items-center justify-center border border-white/15 hover:border-gold hover:text-gold transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </article>

        {/* Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-midnight/10">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 5) * 0.04 }}
              className="group relative bg-ivory cursor-pointer"
            >
              <Avatar initials={s.initials} />
              <div className="p-4">
                <p className="font-display text-base text-midnight leading-tight">{s.name}</p>
                <p className="text-xs text-midnight/60 mt-1">{s.org}</p>
              </div>
              {/* hover overlay */}
              <div className="absolute inset-0 bg-midnight/95 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">Focus</p>
                <p className="font-display text-xl mt-2">{s.focus}</p>
                <p className="text-sm text-ivory/70 mt-1">{s.org}</p>
                <div className="mt-4 flex gap-2">
                  <a href="#" aria-label="LinkedIn" className="h-8 w-8 inline-flex items-center justify-center border border-white/15 hover:bg-gold hover:text-midnight hover:border-gold transition">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" aria-label="Twitter" className="h-8 w-8 inline-flex items-center justify-center border border-white/15 hover:bg-gold hover:text-midnight hover:border-gold transition">
                    <Twitter size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
