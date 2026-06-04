import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { RevealGroup, Eyebrow, Heading, Body } from "./Reveal";

type Tier = {
  name: string;
  tagline: string;
  basePrice: number;
  requirement?: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "IEEE Computer Society Member",
    tagline: "Reserved for active IEEE Computer Society members.",
    basePrice: 1000,
    requirement:
      "Valid IEEE CS Membership ID required and verified prior to approval.",
    popular: true,
  },
  {
    name: "IEEE Member",
    tagline: "For active IEEE members who are not IEEE CS members.",
    basePrice: 1500,
    requirement:
      "Valid IEEE Membership ID required and verified prior to approval.",
  },
  {
    name: "General Admission",
    tagline: "Open to students, professionals, researchers and technology enthusiasts.",
    basePrice: 2000,
  },
];

const baseFeatures = [
  "Full event access",
  "Technical tracks, keynotes & Innovation Expo",
  "Delegate kit, meals & networking events",
  "Participation certificate",
];

const ACCOMMODATION_FEE = 2000;

export function Tickets() {
  const [accommodation, setAccommodation] = useState(false);
  const [showWidget, setShowWidget] = useState(false);


  return (
    <section id="tickets" className="relative py-24 md:py-36 bg-midnight/60 text-ivory grain overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-atmosphere)" }} />
      <div className="container-editorial relative">
        <RevealGroup className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <Eyebrow color="gold">Delegate pass & ticket cost</Eyebrow>
            <Heading className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Three passes. <em className="italic font-normal text-gold">One congress.</em>
            </Heading>
          </div>
          <Body className="text-ivory/80 max-w-sm">
            <p>
              Every pass includes full event access, technical tracks, keynotes,
              Innovation Expo, delegate kit, meals, networking events and a
              participation certificate.
            </p>
          </Body>
        </RevealGroup>

        {/* Accommodation toggle */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10 bg-midnight-deep/55 p-5 md:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Optional add-on</p>
            <p className="mt-2 font-display text-xl text-ivory">
              SRM IST campus accommodation
              <span className="text-ivory/75 text-base ml-2">+ ₹2,000</span>
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={accommodation}
            onClick={() => setAccommodation((v) => !v)}
            className={`relative inline-flex h-9 w-[180px] items-center rounded-sm border transition ${
              accommodation
                ? "bg-gold border-gold text-ivory"
                : "bg-transparent border-white/20 text-ivory"
            }`}
          >
            <span
              className={`absolute top-1 bottom-1 w-[86px] rounded-sm transition-all ${
                accommodation ? "left-[90px] bg-midnight/60" : "left-1 bg-white/15"
              }`}
            />
            <span className={`relative z-10 flex-1 text-center text-xs font-medium uppercase tracking-[0.16em] ${accommodation ? "text-ivory" : "text-ivory"}`}>
              No stay
            </span>
            <span className={`relative z-10 flex-1 text-center text-xs font-medium uppercase tracking-[0.16em] ${accommodation ? "text-gold" : "text-ivory/75"}`}>
              + Stay
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const price = t.basePrice + (accommodation ? ACCOMMODATION_FEE : 0);
            const features = accommodation
              ? [...baseFeatures, "SRM IST campus accommodation included"]
              : baseFeatures;
            return (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: tiers.indexOf(t) * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative p-8 md:p-10 border flex flex-col ${
                  t.popular
                    ? "bg-transparent text-ivory border-gold shadow-[var(--shadow-gold)]"
                    : "bg-midnight-deep/55 border-white/10 text-ivory"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-8 bg-gold text-ivory text-[10px] uppercase tracking-[0.22em] px-3 py-1">
                    Most subsidised
                  </span>
                )}
                <h3 className={`font-display text-2xl md:text-[1.7rem] leading-tight ${t.popular ? "text-ivory" : "text-ivory"}`}>
                  {t.name}
                </h3>
                <p className={`mt-2 text-sm ${t.popular ? "text-ivory/80" : "text-ivory/80"}`}>
                  {t.tagline}
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-5xl">₹{price.toLocaleString("en-IN")}</span>
                  <span className={`text-sm ${t.popular ? "text-ivory/75" : "text-ivory/75"}`}>
                    / person
                  </span>
                </div>
                {accommodation && (
                  <p className={`mt-1 text-xs ${t.popular ? "text-ivory/75" : "text-ivory/75"}`}>
                    Includes ₹2,000 accommodation
                  </p>
                )}

                <ul className="mt-8 space-y-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${t.popular ? "text-emerald" : "text-gold"}`} />
                      <span className={t.popular ? "text-ivory/85" : "text-ivory/85"}>{f}</span>
                    </li>
                  ))}
                </ul>

                {t.requirement && (
                  <p
                    className={`mt-6 text-xs leading-relaxed border-l-2 pl-3 ${
                      t.popular ? "border-emerald text-ivory/80" : "border-gold text-ivory/80"
                    }`}
                  >
                    <span className="uppercase tracking-[0.16em] block mb-1">Requirement</span>
                    {t.requirement}
                  </p>
                )}

                {t.popular && !accommodation ? (
                  <button
                    type="button"
                    onClick={() => setShowWidget(true)}
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition ${
                      t.popular
                        ? "bg-midnight/60 text-ivory hover:bg-midnight-deep/70"
                        : "bg-gold text-ivory hover:bg-gold-soft"
                    }`}
                  >
                    Register →
                  </button>
                ) : (
                  <a
                    href="https://konfhub.com/aicssyc-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition ${
                      t.popular
                        ? "bg-midnight/60 text-ivory hover:bg-midnight-deep/70"
                        : "bg-gold text-ivory hover:bg-gold-soft"
                    }`}
                  >
                    Register →
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>

      {showWidget && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowWidget(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowWidget(false)}
              aria-label="Close"
              className="absolute top-2 right-2 z-10 w-8 h-8 inline-flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            >
              ×
            </button>
            <iframe
              src="https://konfhub.com/widget/aicssyc-2026?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=quick&screen=2&tickets=104339&ticketId=104339%7C1"
              id="konfhub-widget"
              title="Register for AICSSYC 2026 — IEEE CS Member Pass"
              width="100%"
              height="500"
              allow="payment"
            />
          </div>
        </div>
      )}
    </section>
  );
}

