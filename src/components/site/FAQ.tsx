import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How is IEEE membership verified for subsidised passes?",
    a: "A valid IEEE membership ID — or an IEEE Computer Society membership ID for the lowest tier — must be entered at registration. Verification happens before your pass is approved; please use the same name as on your IEEE profile.",
  },
  {
    q: "Is accommodation included with the pass?",
    a: "Accommodation is an optional ₹2,000 add-on that can be toggled on at checkout. It covers SRM IST campus accommodation for the core programme nights.",
  },
  {
    q: "What's covered for delegates travelling from outside Tamil Nadu?",
    a: "Travel to Chennai is at the delegate's own arrangement. Once on campus, transport between programme venues is provided. The team can help coordinate group arrivals from major IEEE chapters — write in advance.",
  },
  {
    q: "Are meals included across all four days?",
    a: "Lunch, dinner and tea breaks are included across the core programme. Day 2 dinner is provided as optional packets. Day 3 (heritage visit) includes lunch only.",
  },
  {
    q: "What about the Day 3 heritage visit — is it optional?",
    a: "It is part of every pass. Day 3 is a guided heritage and cultural exploration off-site, with lunch included and breakfast on your own.",
  },
  {
    q: "Will I get a participation certificate?",
    a: "Yes. Every delegate receives a digital participation certificate after the congress. Speakers, panelists and competition winners receive separate recognition.",
  },
  {
    q: "What is the refund policy?",
    a: "Passes are non-refundable once approved, but transferable to another verified delegate of the same tier up to fourteen days before the congress. Write to the organisers to request a transfer.",
  },
  {
    q: "I have a dietary or accessibility requirement — what should I do?",
    a: "Email the organisers as soon as you've registered with the specifics. The venue is wheelchair-accessible and we accommodate dietary preferences when notified in advance.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative section-rhythm bg-transparent">
      <div className="container-editorial grid lg:grid-cols-[0.7fr_1.3fr] gap-16 lg:gap-24">
        <Reveal direction="up" distance={32}>
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
            Practical
            <br />
            <span className="editorial-italic text-emerald">questions, answered.</span>
          </h2>
          <p className="mt-8 text-sm text-ivory/70 leading-relaxed prose-narrow">
            Anything else? Email{" "}
            <a
              href="mailto:ieeecomputersocietysrmist@gmail.com"
              className="text-ivory border-b border-ivory/30 hover:border-gold pb-0.5"
            >
              the organising team
            </a>
            .
          </p>
        </Reveal>

        <div className="hairline-top border-b border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/8 last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl text-ivory leading-snug text-balance pr-2">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-9 w-9 inline-flex items-center justify-center border border-ivory/20 transition-all ${
                      isOpen ? "bg-gold text-midnight border-gold rotate-45" : "text-ivory group-hover:border-gold/60"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-16 text-ivory/70 leading-[1.75] prose-measure">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
