import { RevealGroup, Eyebrow, Heading, Body, CardGrid, RevealItem } from "./Reveal";

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
          <RevealGroup>
            <Eyebrow color="gold">Join the congress</Eyebrow>
            <Heading className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Ready to join <em className="italic font-normal text-gold">AICSSYC 2026?</em>
            </Heading>
            <Body className="mt-6 font-display italic text-xl text-ivory/80">
              <p>Where Agent meets Humans.</p>
            </Body>
          </RevealGroup>

          <RevealGroup className="lg:pl-10 lg:border-l lg:border-white/10">
            <CardGrid className="grid grid-cols-2 gap-x-8 gap-y-6" stagger={0.1}>
              <RevealItem>
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold/80">Dates</p>
                <p className="mt-2 font-display text-xl text-ivory leading-snug">
                  8 — 11 Oct<br />2026
                </p>
              </RevealItem>
              <RevealItem>
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold/80">Venue</p>
                <p className="mt-2 text-ivory leading-snug">
                  TP Ganesan Auditorium<br />
                  <span className="text-ivory/80 text-sm">SRM IST, Kattankulathur</span>
                </p>
              </RevealItem>
            </CardGrid>

            <Body className="mt-10 flex flex-wrap gap-3">
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
            </Body>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
