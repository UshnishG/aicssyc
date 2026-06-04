import { motion } from "framer-motion";

const editions = [
  { year: "2015", note: "Inaugural · 600 delegates" },
  { year: "2018", note: "Expanded to 3 tracks" },
  { year: "2021", note: "Hybrid edition · 78 countries" },
  { year: "2024", note: "Record 3,800 delegates" },
  { year: "2026", note: "Lisbon · Edition XII", current: true },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-ivory">
      <div className="container-editorial grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24">
        {/* Left — storytelling */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-emerald font-medium">
            <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
            About the congress
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
            A five-day gathering for the people <em className="italic font-normal text-emerald">building the systems</em> that everything else runs on.
          </h2>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.7] text-midnight/75 max-w-[62ch]">
            <p>
              Convergence is not a trade show. It is a working congress — convened by
              IEEE and a coalition of research institutions — where the people defining
              the next decade of computing, energy and intelligence meet, present and
              disagree in the open.
            </p>
            <p>
              Every track is curated by a programme committee of practising researchers
              and senior engineers. Every keynote is a first showing. Every conversation
              is on the record.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald">Mission</p>
              <p className="mt-3 text-midnight/80 leading-relaxed">
                Move applied research from journal to deployment by giving it a stage
                worth the work.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald">Vision</p>
              <p className="mt-3 text-midnight/80 leading-relaxed">
                The world's most consequential annual gathering for technology that
                matters at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Right — stat block + timeline */}
        <div className="relative">
          <div className="relative bg-midnight text-ivory p-8 md:p-10 grain overflow-hidden">
            <div aria-hidden className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/15 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.22em] text-gold">By the numbers</p>
            <div className="mt-6 grid grid-cols-2 gap-y-8 gap-x-6">
              {[
                { v: "12", l: "Editions delivered" },
                { v: "94%", l: "Return attendance" },
                { v: "$2.1B", l: "Funded post-event" },
                { v: "640", l: "Papers presented" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl md:text-5xl text-ivory">{s.v}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-mist mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-10 pl-1">
            <p className="text-xs uppercase tracking-[0.22em] text-midnight/60 mb-6">Editions</p>
            <ol className="relative border-l border-midnight/15 ml-2">
              {editions.map((e, i) => (
                <motion.li
                  key={e.year}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative pl-6 pb-5 last:pb-0"
                >
                  <span
                    className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                      e.current ? "bg-gold ring-4 ring-gold/20" : "bg-midnight/30"
                    }`}
                  />
                  <div className="flex items-baseline gap-4">
                    <span className={`font-display text-lg ${e.current ? "text-emerald" : "text-midnight"}`}>
                      {e.year}
                    </span>
                    <span className="text-sm text-midnight/65">{e.note}</span>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
