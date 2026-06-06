import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import timelineData from "@/data/timeline.json";
import { RevealGroup, Heading, Body } from "./Reveal";

const days = timelineData.days;

// Compact pill date: "8 October 2026 · Inaugural Day" → "8 Oct"
function shortDate(raw: string) {
  const datePart = raw.split("·")[0].trim();
  const [dayNum, month] = datePart.split(" ");
  return `${dayNum} ${month ? month.slice(0, 3) : ""}`.trim();
}

// Theme/subtitle after the "·" — "Inaugural Day", "Innovation & Knowledge Exchange", …
function dayTheme(raw: string) {
  const parts = raw.split("·");
  return parts.length > 1 ? parts.slice(1).join("·").trim() : "";
}




export function Agenda() {
  const [day, setDay] = useState(0);

  return (
    <section id="agenda" className="relative section-rhythm bg-[color:var(--muted)]">
      <div className="container-editorial">
        <RevealGroup className="grid md:grid-cols-[1.4fr_1fr] items-end gap-10 mb-16">
          <div className="max-w-2xl">
            <Heading className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
              The delegate
              <span className="editorial-italic text-emerald"> journey,</span>
              <br />
              day by day.
            </Heading>
          </div>
          <Body className="text-sm text-ivory/65 md:justify-self-end max-w-xs">
            Indicative schedule — final agenda subject to change.
          </Body>
        </RevealGroup>



        <div className="sticky top-16 md:top-20 z-20 -mx-6 md:-mx-10 px-6 md:px-10 py-4 bg-[color:var(--muted)]/95 backdrop-blur border-y border-ivory/10">
          <div
            role="tablist"
            aria-label="Select congress day"
            className="relative mx-auto grid w-full max-w-2xl grid-cols-4 gap-1 p-1 rounded-full border border-ivory/15 bg-midnight/40"
          >
            {days.map((d, i) => {
              const active = day === i;
              return (
                <button
                  key={d.label}
                  role="tab"
                  aria-selected={active}
                  aria-label={`${d.label} — ${d.date}`}
                  onClick={() => setDay(i)}
                  className={`relative z-10 flex min-w-0 flex-col items-center justify-center text-center px-2 sm:px-3 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    active ? "text-midnight" : "text-ivory/80 hover:text-ivory"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="agenda-day-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gold shadow-[var(--shadow-gold)]"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    />
                  )}
                  <span
                    className={`block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium leading-none ${
                      active ? "text-midnight/70" : "text-gold/80"
                    }`}
                  >
                    {d.label}
                  </span>
                  <span className="block text-[11px] sm:text-sm mt-1 font-medium whitespace-nowrap">
                    {shortDate(d.date)}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-center text-xs sm:text-sm text-ivory/70">
            <span className="text-gold">{days[day].label}</span>
            <span className="mx-2 text-ivory/40">·</span>
            <span>{dayTheme(days[day].date)}</span>
          </p>
        </div>



        <AnimatePresence mode="wait">
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid lg:grid-cols-[280px_1fr] gap-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald">{days[day].label}</p>
              <h3 className="mt-3 font-display text-3xl text-ivory leading-tight text-balance">
                {days[day].title}
              </h3>
              <p className="mt-4 text-ivory/80 text-sm">
                {days[day].blocks.length} programmed blocks · Venue: {days[day].venue}.
              </p>
            </div>

            <ol className="relative border-l border-ivory/15">
              {days[day].blocks.map((b, i) => (
                <li key={i} className="relative pl-8 pb-6 last:pb-0">
                  <span className="absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ivory" />
                  <div className="bg-transparent border border-ivory/10 p-5 hover:border-ivory/30 transition">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-emerald bg-emerald/10 px-2 py-0.5 rounded-sm">
                        {b.kind}
                      </span>
                      <span className="text-xs text-ivory/75">{b.room}</span>
                    </div>
                    <p className="font-display text-xl text-ivory leading-tight">{b.title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
