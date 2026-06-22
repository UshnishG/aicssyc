import { Link } from '@tanstack/react-router';
import partnersData from "@/data/partners.json";
import { Reveal } from "./Reveal";

type Partner = {
  name: string;
  tier?: string;
  url?: string;
  logo?: string;
};

const partners: Partner[] = partnersData.partners as Partner[];

export function Sponsors() {
  const hasPartners = partners.length > 0;

  return (
    <section id="sponsors" className="relative section-rhythm bg-transparent">
      <div className="container-editorial">
        <Reveal direction="up" distance={32} className="max-w-3xl">
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
            Partners &amp;
            <span className="editorial-italic text-emerald"> sponsor lineup.</span>
          </h2>
        </Reveal>

        {hasPartners ? (
          <div className="mt-16 relative flex overflow-hidden border-y border-ivory/15 py-12 md:py-16 bg-ivory/5 group">
            <div className="flex w-max animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, halfIdx) => (
                <div key={halfIdx} className="flex gap-24 px-12 items-center">
                  {[...Array(5)].map((_, copyIdx) => (
                    partners.map((p) => {
                      const inner = (
                        <div className="flex items-center gap-6 md:gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                          {p.logo && (
                            <img src={p.logo} alt={p.name} className="h-20 md:h-28 w-auto object-contain" />
                          )}
                          <div className="flex flex-col justify-center text-left">
                            <span className="font-display text-3xl md:text-5xl text-ivory tracking-wider uppercase">{p.name}</span>
                            {p.tier && (
                              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold mt-1 md:mt-2">{p.tier}</span>
                            )}
                          </div>
                        </div>
                      );
                      return p.url ? (
                        <a key={`${p.name}-${copyIdx}`} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name}>
                          {inner}
                        </a>
                      ) : (
                        <div key={`${p.name}-${copyIdx}`}>{inner}</div>
                      );
                    })
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16 grid md:grid-cols-[1fr_auto] items-end gap-10 hairline-top pt-12">
            <p className="font-editorial italic text-2xl md:text-3xl text-ivory/85 leading-snug prose-measure">
              Founding partners, principal sponsors and programme partners for the
              2026 edition will be unveiled in the coming weeks.
            </p>
            <Link
              to="/sponsor"
              className="group inline-flex items-center gap-2 rounded-sm bg-ivory/10 border border-ivory/20 px-6 py-3 text-sm font-medium text-ivory hover:bg-ivory/20 hover:border-gold/50 transition whitespace-nowrap"
            >
              Become a sponsor
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
