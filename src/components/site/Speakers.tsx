import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ArrowLeft, ArrowRight } from "lucide-react";
import speakersData from "@/data/speakers.json";
import andrewAsset from "@/assets/speakers/andrew.png.asset.json";
import ericAsset from "@/assets/speakers/eric.png.asset.json";
import utkarshAsset from "@/assets/speakers/utkarsh.png.asset.json";
import shivamAsset from "@/assets/speakers/shivam.png.asset.json";
import nikkyAsset from "@/assets/speakers/nikky.png.asset.json";
import { Reveal } from "./Reveal";

const photoMap: Record<string, string> = {
  andrew: andrewAsset.url,
  eric: ericAsset.url,
  utkarsh: utkarshAsset.url,
  shivam: shivamAsset.url,
  nikky: nikkyAsset.url,
};

type Category =
  | "All"
  | "Industry"
  | "Entrepreneurship"
  | "AI & Emerging Tech"
  | "Policy & Governance"
  | "IEEE Leadership";

type Speaker = {
  name: string;
  org: string;
  focus: string;
  initials: string;
  photo: string;
  linkedin: string;
  categories: Category[];
  expertise: string;
};

const featured = speakersData.featured;
const rawPool = [
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

const categoryMap: Record<string, { categories: Category[]; expertise: string }> = {
  shivam: { categories: ["AI & Emerging Tech", "Industry"], expertise: "AI Architecture" },
  utkarsh: { categories: ["Entrepreneurship", "Industry"], expertise: "Deep Tech Founder" },
  eric: { categories: ["IEEE Leadership"], expertise: "Global Community" },
  andrew: { categories: ["Policy & Governance", "IEEE Leadership"], expertise: "Public Sector AI" },
  nikky: { categories: ["Entrepreneurship", "AI & Emerging Tech"], expertise: "Climate × AI" },
};

const order = ["shivam", "eric", "utkarsh", "andrew", "nikky"];
const allSpeakers: Speaker[] = order
  .map((key) => {
    const s = rawPool.find((p) => p.photo === key);
    if (!s) return null;
    return { ...s, ...categoryMap[key] } as Speaker;
  })
  .filter((s): s is Speaker => Boolean(s));

const CATEGORIES: Category[] = [
  "All",
  "AI & Emerging Tech",
  "Industry",
  "Entrepreneurship",
  "Policy & Governance",
  "IEEE Leadership",
];

/* ---------------- Ocean / current canvas ---------------- */
function OceanCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const particles: { x: number; y: number; vx: number; r: number; a: number; hue: number }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles.length = 0;
      const count = Math.min(90, Math.floor((w * h) / 16000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: 0.15 + Math.random() * 0.4,
          r: Math.random() * 1.6 + 0.4,
          a: Math.random() * 0.5 + 0.2,
          hue: Math.random() > 0.5 ? 175 : 78,
        });
      }
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      t += 0.006;
      ctx.clearRect(0, 0, w, h);

      // Wave bands
      const bands = 4;
      for (let b = 0; b < bands; b++) {
        const yBase = h * (0.55 + b * 0.12);
        const amp = 18 + b * 10;
        const freq = 0.005 + b * 0.0015;
        const phase = t * (0.6 + b * 0.25);

        const grad = ctx.createLinearGradient(0, yBase - 60, 0, h);
        const alpha = 0.05 + b * 0.025;
        grad.addColorStop(0, `rgba(80, 200, 200, ${alpha})`);
        grad.addColorStop(0.5, `rgba(40, 130, 150, ${alpha * 0.9})`);
        grad.addColorStop(1, `rgba(10, 40, 55, 0)`);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 6) {
          const y =
            yBase +
            Math.sin(x * freq + phase) * amp +
            Math.sin(x * freq * 1.7 + phase * 1.4) * (amp * 0.3);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
      }

      // Bioluminescent particles drifting like currents
      for (const p of particles) {
        p.x += p.vx;
        p.y += Math.sin(t * 2 + p.x * 0.01) * 0.25;
        if (p.x > w + 10) {
          p.x = -10;
          p.y = Math.random() * h;
        }
        const color =
          p.hue === 78
            ? `rgba(220, 180, 90, ${p.a})`
            : `rgba(120, 220, 210, ${p.a})`;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}

/* ---------------- Card ---------------- */
function SpeakerCard({ s }: { s: Speaker }) {
  const photoUrl = photoMap[s.photo];
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative shrink-0 snap-center w-[78vw] max-w-[320px] sm:w-[300px] md:w-[320px]"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 70%)",
        }}
      />
      <div
        className="relative rounded-2xl overflow-hidden border border-ivory/10 backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in oklab, var(--ivory) 6%, transparent), color-mix(in oklab, var(--midnight) 35%, transparent))",
          boxShadow:
            "inset 0 1px 0 color-mix(in oklab, var(--ivory) 12%, transparent), 0 30px 60px -30px rgba(0,0,0,0.6)",
        }}
      >
        {/* Portrait */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 35%, color-mix(in oklab, var(--emerald) 45%, transparent), color-mix(in oklab, var(--midnight-deep) 90%, transparent) 75%)",
            }}
          />
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`Portrait of ${s.name}`}
              loading="lazy"
              className="relative h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-[1.06]"
              style={{
                mixBlendMode: "luminosity",
                filter: "contrast(1.08) brightness(1.05)",
              }}
            />
          ) : (
            <span className="absolute inset-0 grid place-items-center font-display text-6xl text-gold/90">
              {s.initials}
            </span>
          )}
          {photoUrl && (
            <img
              src={photoUrl}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          )}
          {/* Vignette */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--midnight-deep) 90%, transparent))",
            }}
          />
          {/* Expertise pill */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-midnight-deep/60 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-gold border border-gold/30">
              <span className="h-1 w-1 rounded-full bg-gold animate-pulse" />
              {s.expertise}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="relative p-5 pt-4">
          <p className="font-display text-xl text-ivory leading-tight">{s.name}</p>
          <p className="mt-1 text-xs text-emerald uppercase tracking-[0.15em]">{s.org}</p>
          <p className="mt-2 text-xs text-ivory/60 leading-relaxed">{s.focus}</p>

          <div className="mt-4 flex items-center justify-between hairline-top pt-3">
            <a
              href={s.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-ivory/70 hover:text-gold transition"
            >
              <Linkedin size={12} /> Connect
            </a>
            <div className="flex gap-1">
              {s.categories.slice(0, 1).map((c) => (
                <span
                  key={c}
                  className="text-[9px] uppercase tracking-[0.2em] text-ivory/40"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Section ---------------- */
export function Speakers() {
  const [active, setActive] = useState<Category>("All");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? allSpeakers
        : allSpeakers.filter((s) => s.categories.includes(active)),
    [active],
  );

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="speakers" className="relative section-rhythm overflow-hidden">
      {/* Background — ocean of ideas */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, color-mix(in oklab, var(--emerald) 22%, transparent), transparent 60%), radial-gradient(ellipse at 80% 100%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 55%), linear-gradient(180deg, var(--midnight-deep), color-mix(in oklab, var(--midnight-deep) 90%, #001820))",
          }}
        />
        <OceanCanvas />
        {/* Top + bottom fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-midnight-deep to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-midnight-deep to-transparent" />
      </div>

      <div className="container-editorial relative">
        {/* Header */}
        <Reveal direction="up" distance={28} className="max-w-3xl mb-12">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            <span className="inline-block h-px w-8 align-middle mr-3 bg-gold" />
            The Voices
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02] tracking-tight text-ivory text-balance">
            Minds that build.
            <br />
            <span className="editorial-italic text-emerald">Voices that inspire.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-ivory/70 leading-relaxed">
            From research labs to startups, from classrooms to boardrooms — meet the people
            shaping the future of computing, technology and the global IEEE community.
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal direction="up" distance={16} className="mb-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all border ${
                    isActive
                      ? "text-midnight-deep border-gold"
                      : "text-ivory/60 border-ivory/15 hover:text-ivory hover:border-ivory/30"
                  }`}
                  style={
                    isActive
                      ? { background: "var(--gradient-gold)" }
                      : { background: "color-mix(in oklab, var(--ivory) 4%, transparent)" }
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 -mx-6 px-6 md:-mx-10 md:px-10 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((s, i) => (
                <motion.div
                  key={s.name}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SpeakerCard s={s} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-midnight-deep to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-midnight-deep to-transparent" />

          {/* Arrows */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ivory/50">
              Drag · Scroll · Explore
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="h-10 w-10 grid place-items-center rounded-full border border-ivory/15 text-ivory/70 hover:text-gold hover:border-gold/40 transition"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="h-10 w-10 grid place-items-center rounded-full border border-ivory/15 text-ivory/70 hover:text-gold hover:border-gold/40 transition"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* More soon */}
        <Reveal direction="up" distance={24} className="mt-24">
          <div
            className="relative mx-auto max-w-2xl rounded-2xl border border-ivory/10 p-8 md:p-10 text-center backdrop-blur-xl overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, color-mix(in oklab, var(--ivory) 5%, transparent), color-mix(in oklab, var(--emerald) 8%, transparent))",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                Lineup expanding
              </span>
            </div>
            <p className="font-display text-2xl md:text-3xl text-ivory leading-tight">
              More voices <span className="editorial-italic text-emerald">joining soon.</span>
            </p>
            <p className="mt-3 text-sm text-ivory/65 max-w-md mx-auto leading-relaxed">
              The AICSSYC 2026 lineup continues to grow with leaders from academia, industry,
              startups, government and the global IEEE community.
            </p>
          </div>
        </Reveal>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
