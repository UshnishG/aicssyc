import { Link } from '@tanstack/react-router';
import partnersData from "@/data/partners.json";
import { Reveal, RevealGroup } from "./Reveal";

type Partner = {
  name: string;
  tier?: string;
  url?: string;
  logo?: string;
  description?: string;
};

const partners: Partner[] = partnersData.partners as Partner[];

export function Sponsors() {
  const hasPartners = partners.length > 0;

  return (
    <section id="sponsors" className="relative section-rhythm bg-transparent">
      {/* Subtle grid background to match the requested style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>

      <div className="container-editorial relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <Reveal direction="up" className="max-w-3xl mx-auto">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-tight text-ivory font-bold mb-4">
              Our <span className="text-gold">Sponsors</span>
            </h2>
            <p className="text-ivory/60 text-lg">
              Thank you to our amazing sponsors who make this event possible
            </p>
          </Reveal>
        </div>

        {hasPartners ? (
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {partners.map((p, idx) => {
              const cardContent = (
                <div className="h-full flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl bg-[#1c1c1c]/80 backdrop-blur-md border border-ivory/10 hover:border-gold/30 hover:bg-[#262626] transition-all duration-300 group">
                  <div className="h-20 md:h-24 flex items-center justify-center mb-6 w-full relative">
                    {p.logo ? (
                      <img 
                        src={p.logo} 
                        alt={p.name} 
                        className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <span className="font-display text-4xl text-ivory/40">{p.name[0]}</span>
                    )}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-ivory font-bold mb-2 text-center">{p.name}</h3>
                  {p.description && (
                    <p className="text-sm text-ivory/60 text-center leading-relaxed max-w-xs">{p.description}</p>
                  )}
                  {!p.description && p.tier && (
                    <p className="text-sm text-gold/80 text-center tracking-wider uppercase mt-1">{p.tier}</p>
                  )}
                </div>
              );

              return p.url ? (
                <a key={`${p.name}-${idx}`} href={p.url} target="_blank" rel="noopener noreferrer" className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-2xl">
                  {cardContent}
                </a>
              ) : (
                <div key={`${p.name}-${idx}`} className="h-full">
                  {cardContent}
                </div>
              );
            })}
          </RevealGroup>
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
