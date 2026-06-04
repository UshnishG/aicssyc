import { Check } from "lucide-react";

type Tier = {
  name: string;
  tagline: string;
  price: number;
  features: string[];
  requirement?: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "IEEE Computer Society Member",
    tagline: "Our most exclusive tier, at our lowest subsidised rate.",
    price: 1000,
    features: [
      "Full event access across all four days",
      "All standard attendee perks",
      "Catering, networking and event swag",
      "Daily lucky-draw entries",
    ],
    requirement:
      "Valid IEEE CS membership ID required and verified prior to approval.",
    popular: true,
  },
  {
    name: "IEEE Member",
    tagline: "For active IEEE members outside the Computer Society.",
    price: 1500,
    features: [
      "Complete event access",
      "Catering and networking opportunities",
      "All standard attendee perks",
      "Daily lucky-draw entries",
    ],
    requirement:
      "Valid IEEE membership ID required and verified prior to approval.",
  },
  {
    name: "General Admission",
    tagline: "Standard entry for students, professionals and tech enthusiasts.",
    price: 2000,
    features: [
      "Full access to the entire event",
      "Participation in all open sessions",
      "Networking with industry specialists",
      "Daily lucky-draw entries and event swag",
    ],
  },
];

export function Tickets() {
  return (
    <section id="tickets" className="relative py-24 md:py-36 bg-midnight text-ivory grain overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-atmosphere)" }} />
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 align-middle bg-gold mr-3" />
              Delegate pass & ticket cost
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Three passes. <em className="italic font-normal text-gold">One congress.</em>
            </h2>
          </div>
          <p className="text-ivory/65 max-w-sm">
            Every pass includes full event access, technical tracks, keynotes,
            Innovation Expo, delegate kit, meals, networking events and a
            participation certificate.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative p-8 md:p-10 border flex flex-col ${
                t.popular
                  ? "bg-ivory text-midnight border-gold"
                  : "bg-white/[0.03] border-white/10 text-ivory"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-8 bg-gold text-midnight text-[10px] uppercase tracking-[0.22em] px-3 py-1">
                  Most subsidised
                </span>
              )}
              <h3 className={`font-display text-2xl md:text-[1.7rem] leading-tight ${t.popular ? "text-midnight" : "text-ivory"}`}>
                {t.name}
              </h3>
              <p className={`mt-2 text-sm ${t.popular ? "text-midnight/65" : "text-ivory/65"}`}>
                {t.tagline}
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl">₹{t.price.toLocaleString("en-IN")}</span>
                <span className={`text-sm ${t.popular ? "text-midnight/55" : "text-ivory/55"}`}>
                  / person
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${t.popular ? "text-emerald" : "text-gold"}`} />
                    <span className={t.popular ? "text-midnight/85" : "text-ivory/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              {t.requirement && (
                <p
                  className={`mt-6 text-xs leading-relaxed border-l-2 pl-3 ${
                    t.popular ? "border-emerald text-midnight/65" : "border-gold text-ivory/65"
                  }`}
                >
                  <span className="uppercase tracking-[0.16em] block mb-1">Requirement</span>
                  {t.requirement}
                </p>
              )}

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition ${
                  t.popular
                    ? "bg-midnight text-ivory hover:bg-midnight-deep"
                    : "bg-gold text-midnight hover:bg-gold-soft"
                }`}
              >
                Register →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
