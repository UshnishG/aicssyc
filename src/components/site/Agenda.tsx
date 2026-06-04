import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const days = [
  {
    label: "Day 01",
    date: "Tue · Oct 14",
    title: "Opening & frontier intelligence",
    blocks: [
      { time: "08:30", title: "Registration & welcome breakfast", kind: "Reception", room: "Grand Foyer" },
      { time: "10:00", title: "Opening keynote — The post-foundation era", kind: "Keynote", room: "Auditorium A", speaker: "Dr. Amara Okafor" },
      { time: "11:30", title: "Panel — What scaling laws actually predicted", kind: "Panel", room: "Auditorium A" },
      { time: "14:00", title: "Track sessions begin", kind: "Sessions", room: "All halls" },
      { time: "19:00", title: "Opening night reception", kind: "Reception", room: "Belém Terrace" },
    ],
  },
  {
    label: "Day 02",
    date: "Wed · Oct 15",
    title: "Energy, compute & infrastructure",
    blocks: [
      { time: "09:00", title: "Keynote — The grid is the bottleneck", kind: "Keynote", room: "Auditorium A", speaker: "Marcus Wei" },
      { time: "10:30", title: "Workshop — Designing GW-scale clusters", kind: "Workshop", room: "Hall C" },
      { time: "13:00", title: "Industry showcase", kind: "Showcase", room: "Hall D" },
      { time: "16:00", title: "Panel — Photonic vs. electronic interconnect", kind: "Panel", room: "Auditorium B" },
    ],
  },
  {
    label: "Day 03",
    date: "Thu · Oct 16",
    title: "Trust, safety & governance",
    blocks: [
      { time: "09:30", title: "Keynote — Enforcing the AI Act in practice", kind: "Keynote", room: "Auditorium A", speaker: "Lena Hofmann" },
      { time: "11:00", title: "Working group — Red-teaming standards", kind: "Working group", room: "Hall B" },
      { time: "15:00", title: "Roundtable with regulators", kind: "Roundtable", room: "Hall E" },
    ],
  },
  {
    label: "Day 04",
    date: "Fri · Oct 17",
    title: "Quantum & resilient systems",
    blocks: [
      { time: "09:00", title: "Keynote — Error-corrected qubits in production", kind: "Keynote", room: "Auditorium A", speaker: "Yuki Tanaka" },
      { time: "11:00", title: "Deep dive — Post-quantum migration playbook", kind: "Workshop", room: "Hall C" },
      { time: "20:00", title: "Convergence gala dinner", kind: "Reception", room: "Jerónimos Cloister" },
    ],
  },
  {
    label: "Day 05",
    date: "Sat · Oct 18",
    title: "Climate, closing & commitments",
    blocks: [
      { time: "10:00", title: "Closing keynote — Technology that earns its electricity", kind: "Keynote", room: "Auditorium A" },
      { time: "12:00", title: "Commitments & coalition signings", kind: "Plenary", room: "Auditorium A" },
      { time: "14:00", title: "Optional venue tours", kind: "Optional", room: "Various" },
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
              Five days. One programme.
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
              The full <em className="italic font-normal text-emerald">conference timeline.</em>
            </h2>
          </div>
          <div className="text-sm text-midnight/65">
            October 14 — 18, 2026 · CET
          </div>
        </div>

        {/* Day selector — sticky */}
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
          {/* progress */}
          <div className="mt-3 h-px bg-midnight/10 relative">
            <motion.div
              className="absolute left-0 top-0 h-px bg-gold"
              animate={{ width: `${((day + 1) / days.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Schedule */}
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
                {days[day].blocks.length} programmed sessions · all times in WEST.
              </p>
            </div>

            <ol className="relative border-l border-midnight/15">
              {days[day].blocks.map((b, i) => (
                <li key={i} className="relative pl-8 pb-8 last:pb-0">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ivory" />
                  <div className="grid sm:grid-cols-[80px_1fr] gap-4 items-baseline">
                    <span className="font-display text-2xl text-midnight">{b.time}</span>
                    <div className="bg-ivory border border-midnight/10 p-5 hover:border-midnight/30 transition">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-emerald bg-emerald/10 px-2 py-0.5 rounded-sm">
                          {b.kind}
                        </span>
                        <span className="text-xs text-midnight/55">{b.room}</span>
                      </div>
                      <p className="font-display text-xl text-midnight leading-tight">{b.title}</p>
                      {b.speaker && (
                        <p className="text-sm text-midnight/65 mt-2">with {b.speaker}</p>
                      )}
                    </div>
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
