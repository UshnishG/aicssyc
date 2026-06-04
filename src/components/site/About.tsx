export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-ivory">
      <div className="container-editorial grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-emerald font-medium">
            <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
            About the congress
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
            The flagship <em className="italic font-normal text-emerald">national congress.</em>
          </h2>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.7] text-midnight/75 max-w-[62ch]">
            <p>
              The All India Computer Society Student & Young Professional Congress
              (AICSSYC) 2026 is a flagship initiative of the IEEE Computer Society
              SYP that brings together students, young professionals, researchers
              and industry leaders to exchange ideas, foster innovation and build
              meaningful connections.
            </p>
            <p>
              Since its inception, the Congress has evolved into a vibrant
              platform featuring technical sessions, workshops, discussions,
              networking opportunities and collaborative experiences that inspire
              growth and innovation within the computing community.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-emerald pl-5 max-w-xl">
            <p className="font-display italic text-2xl md:text-3xl text-midnight leading-snug">
              "Where Agent meets Humans."
            </p>
            <p className="mt-3 text-sm text-midnight/65 leading-relaxed">
              Exploring the cutting-edge intersections of artificial agency,
              collaborative machine intelligence and human systems.
            </p>
          </blockquote>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald">Theme</p>
              <p className="mt-3 font-display text-2xl text-midnight leading-snug">
                Where Agent Meets Humans
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald">Hosted at</p>
              <p className="mt-3 text-midnight/85 leading-relaxed">
                SRM Institute of Science and Technology, Kattankulathur — in
                partnership with the IEEE Computer Society.
              </p>
            </div>
          </div>

        </div>

        <div className="relative">
          <div className="relative bg-midnight text-ivory p-8 md:p-10 grain overflow-hidden">
            <div aria-hidden className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/15 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.22em] text-gold">At a glance</p>
            <div className="mt-6 grid grid-cols-2 gap-y-8 gap-x-6">
              {[
                { v: "4", l: "Core programme days" },
                { v: "6", l: "Curated themes" },
                { v: "5+", l: "Featured speakers" },
                { v: "3", l: "Pass tiers" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl md:text-5xl text-ivory">{s.v}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-mist mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pl-1">
            <p className="text-xs uppercase tracking-[0.22em] text-midnight/60 mb-6">Recent editions</p>
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
