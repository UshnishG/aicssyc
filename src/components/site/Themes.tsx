import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { ScrollSection } from "./ScrollSection";

import themesData from "@/data/themes.json";

const themes = themesData;

export function Themes() {
  const [active, setActive] = useState(0);

  return (
    <ScrollSection id="themes" className="relative section-rhythm bg-transparent text-ivory grain overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-atmosphere)" }}
      />
      {/* Background oversize type */}
      <p
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 right-0 text-center display-mega text-ivory/[0.04] select-none whitespace-nowrap"
      >
        PROGRAMME
      </p>

      <div className="container-editorial relative">
        <Reveal direction="up" distance={32} className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Programme · Six tracks</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-balance">
            One coherent argument
            <span className="editorial-italic text-gold"> about what to build,</span>
            <br />
            told across six tracks.
          </h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          {/* Editorial list */}
          <ol className="hairline-top">
            {themes.map((t, i) => {
              const isActive = active === i;
              return (
                <li key={t.title} className="border-b border-white/8">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="group w-full flex items-baseline gap-6 py-6 md:py-7 text-left transition-colors"
                  >
                    <span
                      className={`font-mono text-xs tracking-widest w-8 transition-colors ${
                        isActive ? "text-gold" : "text-ivory/40"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-1 font-display text-2xl md:text-[1.9rem] leading-tight tracking-tight transition-all ${
                        isActive ? "text-ivory translate-x-1" : "text-ivory/55 group-hover:text-ivory/85"
                      }`}
                    >
                      {t.title}
                    </span>
                    <span
                      aria-hidden
                      className={`hidden md:inline-block h-px transition-all duration-500 ${
                        isActive ? "w-12 bg-gold" : "w-4 bg-ivory/20"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Detail panel — no extra border, breathes */}
          <div className="relative lg:pt-2">
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">Track 0{active + 1}</p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-ivory leading-tight text-balance">
                  {themes[active].title}
                </h3>
                <p className="mt-6 font-editorial italic text-xl text-ivory/85 leading-snug prose-narrow">
                  {themes[active].blurb}
                </p>

                <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 prose-measure">
                  {themes[active].topics.map((tp) => (
                    <li key={tp} className="flex items-start gap-3 text-ivory/85 text-sm leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                      {tp}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}
