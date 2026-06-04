import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const days = [
  {
    label: "Day 0",
    date: "Wed · Oct 8",
    title: "Inauguration & opening keynotes",
    venue: "Mini Hall 1",
    blocks: [
      { title: "Inauguration Ceremony", kind: "Ceremony", room: "Mini Hall 1" },
      { title: "Keynote Session", kind: "Keynote", room: "Mini Hall 1" },
      { title: "Keynote Session", kind: "Keynote", room: "Mini Hall 1" },
      { title: "Panel Discussion", kind: "Panel", room: "Mini Hall 1" },
      { title: "Dinner", kind: "Reception", room: "On site" },
    ],
  },
  {
    label: "Day 1",
    date: "Thu · Oct 9",
    title: "Technical tracks, expo & cultural evening",
    venue: "Multiple halls",
    blocks: [
      { title: "Reporting", kind: "Logistics", room: "Mini Hall 1" },
      { title: "Lucky Draw", kind: "Engagement", room: "Mini Hall 1" },
      { title: "Technical Talks — 4 parallel tracks", kind: "Sessions", room: "Tracks A–D" },
      { title: "Tea Break", kind: "Break", room: "Foyer" },
      { title: "Innovation Expo", kind: "Showcase", room: "Expo Hall" },
      { title: "Lunch", kind: "Reception", room: "On site" },
      { title: "Chapter Presentations", kind: "Plenary", room: "Mini Hall 1" },
      { title: "Tea Break", kind: "Break", room: "Foyer" },
      { title: "Event Space", kind: "Open programme", room: "TBA" },
      { title: "Cultural Evening & Networking", kind: "Reception", room: "Open lawns" },
      { title: "Dinner", kind: "Reception", room: "On site" },
    ],
  },
  {
    label: "Day 2",
    date: "Fri · Oct 10",
    title: "Showcases, technical tracks & valedictory",
    venue: "Multiple halls",
    blocks: [
      { title: "Reporting", kind: "Logistics", room: "Mini Hall 1" },
      { title: "Lucky Draw — winner announcement", kind: "Engagement", room: "Mini Hall 1" },
      { title: "Startup Showcase / Industrial Showcase (parallel)", kind: "Showcase", room: "Halls B & C" },
      { title: "Technical Talks — divided into tracks", kind: "Sessions", room: "Tracks A–D" },
      { title: "Lunch", kind: "Reception", room: "On site" },
      { title: "Event Space", kind: "Open programme", room: "TBA" },
      { title: "Tea Break", kind: "Break", room: "Foyer" },
      { title: "Valedictory Ceremony — certificate distribution", kind: "Ceremony", room: "Mini Hall 1" },
      { title: "Dinner packets (optional)", kind: "Reception", room: "On site" },
    ],
  },
  {
    label: "Day 3",
    date: "Sat · Oct 11",
    title: "Heritage visit",
    venue: "Off-site",
    blocks: [
      { title: "Reporting", kind: "Logistics", room: "Meeting point" },
      { title: "Heritage Visit — guided programme", kind: "Excursion", room: "Off-site" },
      { title: "Lunch provided (breakfast not provided)", kind: "Reception", room: "Off-site" },
    ],
  },
];

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
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
              The full <em className="italic font-normal text-emerald">congress timeline.</em>
            </h2>
          </div>
          <div className="text-sm text-midnight/65 max-w-xs">
            8 October – 2 November 2026 · SRM IST, Kattankulathur. Schedule indicative; final agenda subject to change.
          </div>
        </div>


        <div className="sticky top-16 md:top-20 z-20 -mx-6 md:-mx-10 px-6 md:px-10 py-3 bg-[color:var(--muted)]/95 backdrop-blur border-y border-midnight/10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {days.map((d, i) => {
              const active = day === i;
              return (
                <button
                  key={d.label}
                  onClick={() => setDay(i)}
                  className={`flex-shrink-0 text-left px-5 py-3 border transition rounded-sm ${
                    active
                      ? "bg-midnight text-ivory border-midnight"
                      : "bg-ivory text-midnight border-midnight/15 hover:border-midnight/40"
                  }`}
                >
                  <span className={`block text-[10px] uppercase tracking-[0.18em] ${active ? "text-gold" : "text-midnight/55"}`}>
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
              <h3 className="mt-3 font-display text-3xl text-midnight leading-tight text-balance">
                {days[day].title}
              </h3>
              <p className="mt-4 text-midnight/65 text-sm">
                {days[day].blocks.length} programmed blocks · Venue: {days[day].venue}.
              </p>
            </div>

            <ol className="relative border-l border-midnight/15">
              {days[day].blocks.map((b, i) => (
                <li key={i} className="relative pl-8 pb-6 last:pb-0">
                  <span className="absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ivory" />
                  <div className="bg-ivory border border-midnight/10 p-5 hover:border-midnight/30 transition">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-emerald bg-emerald/10 px-2 py-0.5 rounded-sm">
                        {b.kind}
                      </span>
                      <span className="text-xs text-midnight/55">{b.room}</span>
                    </div>
                    <p className="font-display text-xl text-midnight leading-tight">{b.title}</p>
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
