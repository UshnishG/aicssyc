import { useState, useMemo } from "react";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  tagline: string;
  base: number;
  features: string[];
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Delegate",
    tagline: "Full programme access.",
    base: 1290,
    features: [
      "All keynotes, panels and tracks",
      "Proceedings volume + recordings",
      "Opening reception",
      "Daily breakfast & lunch",
    ],
  },
  {
    name: "Practitioner",
    tagline: "For the people doing the work.",
    base: 1890,
    popular: true,
    features: [
      "Everything in Delegate",
      "All hands-on workshops & hack days",
      "Curated 1:1 matchmaking (10 meetings)",
      "Gala dinner at Jerónimos",
      "Office hours with speakers",
    ],
  },
  {
    name: "Executive",
    tagline: "For leaders setting direction.",
    base: 3490,
    features: [
      "Everything in Practitioner",
      "Private leaders' breakfasts (×3)",
      "Roundtables with regulators",
      "Reserved auditorium seating",
      "Lounge access throughout",
    ],
  },
];

export function Tickets() {
  const [accommodation, setAccommodation] = useState(false);
  const [discount, setDiscount] = useState<"none" | "student" | "ieee">("none");

  const calc = useMemo(() => {
    return (base: number) => {
      let p = base;
      if (discount === "student") p = Math.round(p * 0.5);
      else if (discount === "ieee") p = Math.round(p * 0.8);
      if (accommodation) p += 780;
      return p;
    };
  }, [accommodation, discount]);

  return (
    <section id="tickets" className="relative py-24 md:py-36 bg-midnight text-ivory grain overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-atmosphere)" }} />
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 align-middle bg-gold mr-3" />
              Passes
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Three passes. <em className="italic font-normal text-gold">Pick the one</em> that fits your week.
            </h2>
          </div>
          <p className="text-ivory/65 max-w-sm">
            All passes include the full five days. Discounts and accommodation can be combined.
          </p>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap gap-4 mb-10 items-center">
          <div className="inline-flex border border-white/15 rounded-sm overflow-hidden">
            {(["none", "student", "ieee"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDiscount(d)}
                className={`px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition ${
                  discount === d ? "bg-gold text-midnight" : "text-ivory/70 hover:text-ivory"
                }`}
              >
                {d === "none" ? "Standard" : d === "student" ? "Student −50%" : "IEEE −20%"}
              </button>
            ))}
          </div>

          <label className="inline-flex items-center gap-3 cursor-pointer select-none ml-auto">
            <span className="text-sm text-ivory/75">Include 4-night accommodation</span>
            <span
              role="switch"
              aria-checked={accommodation}
              tabIndex={0}
              onClick={() => setAccommodation((v) => !v)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setAccommodation((v) => !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                accommodation ? "bg-gold" : "bg-white/15"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-ivory transition ${
                  accommodation ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </span>
          </label>
        </div>

        {/* Tiers */}
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
                  Most chosen
                </span>
              )}
              <h3 className={`font-display text-3xl ${t.popular ? "text-midnight" : "text-ivory"}`}>
                {t.name}
              </h3>
              <p className={`mt-2 text-sm ${t.popular ? "text-midnight/65" : "text-ivory/65"}`}>
                {t.tagline}
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl">€{calc(t.base).toLocaleString()}</span>
                <span className={`text-sm ${t.popular ? "text-midnight/55" : "text-ivory/55"}`}>
                  / person
                </span>
              </div>
              {discount !== "none" && (
                <p className={`text-xs mt-1 ${t.popular ? "text-emerald" : "text-gold"}`}>
                  Discount applied · was €{accommodation ? (t.base + 780).toLocaleString() : t.base.toLocaleString()}
                </p>
              )}

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${t.popular ? "text-emerald" : "text-gold"}`} />
                    <span className={t.popular ? "text-midnight/85" : "text-ivory/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-10 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition ${
                  t.popular
                    ? "bg-midnight text-ivory hover:bg-midnight-deep"
                    : "bg-gold text-midnight hover:bg-gold-soft"
                }`}
              >
                Reserve {t.name} pass →
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-ivory/55">
          Group rates available for teams of 5+. Visa invitation letters issued within 48 hours of registration.
        </p>
      </div>
    </section>
  );
}
