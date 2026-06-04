import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section
      id="join"
      className="relative bg-midnight-deep/70 text-ivory grain overflow-hidden border-t border-white/8"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{ background: "var(--gradient-atmosphere)" }}
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial relative py-24 md:py-36">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 align-middle bg-gold mr-3" />
              Join the congress
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance"
            >
              Ready to join <em className="italic font-normal text-gold">AICSSYC 2026?</em>
            </motion.h2>
            <p className="mt-6 font-display italic text-xl text-ivory/80">
              Where Agent meets Humans.
            </p>
          </div>

          <div className="lg:pl-10 lg:border-l lg:border-white/10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold/80">Dates</p>
                <p className="mt-2 font-display text-xl text-ivory leading-snug">
                  8 — 11 Oct<br />2026
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold/80">Venue</p>
                <p className="mt-2 text-ivory leading-snug">
                  TP Ganesan Auditorium<br />
                  <span className="text-ivory/80 text-sm">SRM IST, Kattankulathur</span>
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#tickets"
                className="group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-medium text-ivory hover:bg-gold-soft transition"
              >
                Register now
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#sponsors"
                className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-6 py-3.5 text-sm font-medium text-ivory hover:bg-white/5 transition"
              >
                Become a sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
