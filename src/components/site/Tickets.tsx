import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { RevealGroup, Eyebrow, Heading, Body } from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

type Tier = {
  id: string;
  name: string;
  tagline: string;
  basePrice: number;
  requirement?: string;
  popular?: boolean;
  /** Konfhub ticket id; when omitted, the widget opens on the full ticket list. */
  ticketId?: string;
};

const tiers: Tier[] = [
  {
    id: "ieee-cs",
    name: "IEEE Computer Society Member",
    tagline: "Reserved for active IEEE Computer Society members.",
    basePrice: 1000,
    requirement:
      "Valid IEEE CS Membership ID required and verified prior to approval.",
    popular: true,
    ticketId: "104339",
  },
  {
    id: "ieee",
    name: "IEEE Member",
    tagline: "For active IEEE members who are not IEEE CS members.",
    basePrice: 1500,
    requirement:
      "Valid IEEE Membership ID required and verified prior to approval.",
  },
  {
    id: "general",
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

// Konfhub widget palette tuned to the dark midnight + gold theme.
// Konfhub widget palette. The widget itself is cross-origin so we can only
// tune what its query params expose. We use a light ivory "form card" inside
// the dark modal — it reads as a single brand object and all KonfHub-controlled
// chrome (inputs, timer bar, checkout strip) stays on a consistent surface.
// Text colors are tuned for WCAG AA on the chosen backgrounds.
const WIDGET_PARAMS =
  "desc=false" +
  "&bg=FBF7EC" + // ivory page
  "&secondaryBg=F3ECD7" + // sand panels
  "&ticketBg=FFFFFF" + // white ticket cards
  "&borderCl=E2D6B0" + // warm gold-tinted border
  "&fontColor=1A1F2C" + // near-black body text (15.6:1 on ivory)
  "&ticketCl=1A1F2C" + // ticket text
  "&btnColor=8A6A1F" + // deep gold for AA on white button text (5.4:1)
  "&fontFamily=Hind" +
  "&borderRadius=10" +
  "&widget_type=quick";


function buildWidgetUrl(ticketId?: string) {
  if (ticketId) {
    return `https://konfhub.com/widget/aicssyc-2026?${WIDGET_PARAMS}&screen=2&tickets=${ticketId}&ticketId=${ticketId}%7C1`;
  }
  return `https://konfhub.com/widget/aicssyc-2026?${WIDGET_PARAMS}&screen=1`;
}

export function Tickets() {
  const [accommodation, setAccommodation] = useState(false);
  const [activeTier, setActiveTier] = useState<Tier | null>(null);

  return (
    <section
      id="tickets"
      className="relative py-24 md:py-36 bg-midnight/60 text-ivory grain overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-atmosphere)" }}
      />
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
            aria-label="Toggle SRM IST campus accommodation add-on"
            onClick={() => setAccommodation((v) => !v)}
            className={`relative inline-flex h-9 w-[180px] items-center rounded-sm border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-deep ${
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
            <span className="relative z-10 flex-1 text-center text-xs font-medium uppercase tracking-[0.16em] text-ivory">
              No stay
            </span>
            <span
              className={`relative z-10 flex-1 text-center text-xs font-medium uppercase tracking-[0.16em] ${
                accommodation ? "text-gold" : "text-ivory/75"
              }`}
            >
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
                key={t.id}
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: tiers.indexOf(t) * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                aria-labelledby={`tier-${t.id}-title`}
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
                <h3
                  id={`tier-${t.id}-title`}
                  className="font-display text-2xl md:text-[1.7rem] leading-tight text-ivory"
                >
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-ivory/80">{t.tagline}</p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-5xl">
                    <span className="sr-only">Price: </span>₹{price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-ivory/75">/ person</span>
                </div>
                {accommodation && (
                  <p className="mt-1 text-xs text-ivory/75">
                    Includes ₹2,000 accommodation
                  </p>
                )}

                <ul className="mt-8 space-y-3 flex-1">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <Check
                        size={16}
                        aria-hidden
                        className={`mt-0.5 flex-shrink-0 ${
                          t.popular ? "text-emerald" : "text-gold"
                        }`}
                      />
                      <span className="text-ivory/85">{f}</span>
                    </li>
                  ))}
                </ul>

                {t.requirement && (
                  <p
                    className={`mt-6 text-xs leading-relaxed border-l-2 pl-3 ${
                      t.popular ? "border-emerald text-ivory/80" : "border-gold text-ivory/80"
                    }`}
                  >
                    <span className="uppercase tracking-[0.16em] block mb-1">
                      Requirement
                    </span>
                    {t.requirement}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setActiveTier(t)}
                  aria-label={`Register for ${t.name}`}
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-deep ${
                    t.popular
                      ? "bg-midnight/60 text-ivory hover:bg-midnight-deep/70"
                      : "bg-gold text-ivory hover:bg-gold-soft"
                  }`}
                >
                  Register
                  <span aria-hidden>→</span>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      <Dialog
        open={activeTier !== null}
        onOpenChange={(open) => !open && setActiveTier(null)}
      >
        <DialogContent
          className="max-w-2xl p-0 gap-0 overflow-hidden border-gold/30 bg-midnight-deep text-ivory shadow-[var(--shadow-gold)] [&>button]:hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{ background: "var(--gradient-atmosphere)" }}
          />
          <DialogHeader className="relative px-6 pt-6 pb-4 border-b border-white/10">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                  Secure registration
                </p>
                <DialogTitle className="mt-2 font-display text-xl md:text-2xl text-ivory leading-tight">
                  {activeTier?.name ?? "Register"}
                </DialogTitle>
                <DialogDescription className="mt-1 text-sm text-ivory/75">
                  {activeTier?.tagline ?? "Complete your registration via KonfHub."}
                </DialogDescription>
              </div>
              <DialogClose
                aria-label="Close registration dialog"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-ivory/80 hover:bg-white/5 hover:text-ivory transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <X size={18} aria-hidden />
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="relative bg-midnight-deep">
            {activeTier && (
              <iframe
                key={activeTier.id}
                src={buildWidgetUrl(activeTier.ticketId)}
                title={`Register for ${activeTier.name} — AICSSYC 2026`}
                width="100%"
                height="520"
                allow="payment"
                className="block w-full border-0"
              />
            )}
          </div>
          <div className="relative px-6 py-3 border-t border-white/10 text-[11px] text-ivory/60 flex items-center justify-between gap-3">
            <span>Powered by KonfHub · Secure checkout</span>
            <a
              href="https://konfhub.com/aicssyc-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-soft underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              Open full page ↗
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
