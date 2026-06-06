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
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ivory/10 border border-ivory/15">
            {partners.map((p) => {
              const inner = (
                <div className="aspect-[3/2] flex flex-col items-center justify-center gap-2 bg-midnight-deep/55 hover:bg-midnight-deep/75 transition p-6 text-center">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="max-h-12 w-auto object-contain opacity-90" />
                  ) : (
                    <span className="font-display text-xl text-ivory leading-tight">{p.name}</span>
                  )}
                  {p.tier && (
                    <span className="text-[10px] uppercase tracking-[0.22em] text-gold">{p.tier}</span>
                  )}
                </div>
              );
              return p.url ? (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name}>
                  {inner}
                </a>
              ) : (
                <div key={p.name}>{inner}</div>
              );
            })}
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
