import { Link } from '@tanstack/react-router';
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section
      id="join"
      className="relative bg-transparent text-ivory grain overflow-hidden border-t border-white/8"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-atmosphere)" }}
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial relative py-32 md:py-48 text-center">
        <Reveal direction="up" distance={32}>
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">8 — 11 October 2026 · Kattankulathur</p>
          <h2 className="mt-10 font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.02em] text-balance">
            Where <em className="editorial-italic font-normal text-gold">Agents</em>
            <br />
            Meet Humans.
          </h2>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://dashboard.eqvento.in/aicssyc26-lM0m3B"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium text-midnight-deep hover:bg-gold-soft transition"
            >
              Register now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <Link
              to="/sponsor"
              className="group inline-flex items-center gap-2 rounded-sm border border-ivory/20 bg-ivory/5 px-8 py-4 text-sm font-medium text-ivory hover:bg-ivory/10 hover:border-ivory/40 transition"
            >
              Become a sponsor
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
