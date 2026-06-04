import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import timelineData from "@/data/timeline.json";

const days = timelineData.days;


export function Agenda() {
  const [day, setDay] = useState(0);

  return (
    <section id="agenda" className="relative py-24 md:py-36 bg-[color:var(--muted)]">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald">
              <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
              Official congress roadmap
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ivory text-balance">
              The full <em className="italic font-normal text-emerald">congress timeline.</em>
            </h2>
          </div>
          <div className="text-sm text-ivory/80 max-w-xs">
            8 – 11 October 2026 · SRM IST, Kattankulathur. Schedule indicative; final agenda subject to change.
          </div>
        </div>


        <div className="sticky top-16 md:top-20 z-20 -mx-6 md:-mx-10 px-6 md:px-10 py-3 bg-[color:var(--muted)]/95 backdrop-blur border-y border-ivory/10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {days.map((d, i) => {
              const active = day === i;
              return (
                <button
                  key={d.label}
                  onClick={() => setDay(i)}
                  className={`flex-shrink-0 text-left px-5 py-3 border transition rounded-sm ${
                    active
                      ? "bg-midnight text-ivory border-ivory/20"
                      : "bg-transparent text-ivory border-ivory/15 hover:border-ivory/40"
                  }`}
                >
                  <span className={`block text-[10px] uppercase tracking-[0.18em] ${active ? "text-gold" : "text-ivory/75"}`}>
                    {d.label}
                  </span>
                  <span className="block text-sm mt-1 whitespace-nowrap">{d.date}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-3 h-px bg-midnight/10 relative">
            <motion.div
              className="absolute left-0 top-0 h-px bg-gold"
              animate={{ width: `${((day + 1) / days.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
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
