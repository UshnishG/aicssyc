import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search } from "lucide-react";

const faqs = [
  { q: "Is Convergence open to anyone, or invite-only?", a: "Open to anyone who registers, until we sell out. Roughly 40% of seats are held for academic and student delegates, and ~10% are issued by invitation to programme alumni and committee guests." },
  { q: "What's included in the price of a pass?", a: "All five days of programming, daily breakfast and lunch, the opening reception, the printed proceedings volume, and lifetime access to session recordings. The Practitioner and Executive tiers add curated meetings, gala dinner and roundtables." },
  { q: "Do you offer student or IEEE member discounts?", a: "Yes — students attend at 50% off with valid academic ID, and IEEE members receive a 20% discount. Both are stackable with group rates for 5+ attendees." },
  { q: "Will sessions be recorded?", a: "Every keynote, panel and main-track session is recorded in 4K. Workshops, roundtables and Chatham House sessions are deliberately off the record." },
  { q: "Can I get a visa invitation letter?", a: "Yes. Once registration is complete, our delegate office issues a formal invitation letter within 48 hours, addressed for your local consulate." },
  { q: "What's the cancellation policy?", a: "Full refunds until 60 days before the event. 50% refunds until 30 days before. After that, passes are transferable to a colleague at no cost." },
  { q: "Is the venue accessible?", a: "Yes. The Lisbon Congress Centre is fully wheelchair accessible, with live captioning on all main stages and induction loops in every auditorium. Specific accommodations can be requested during registration." },
  { q: "Are there opportunities to sponsor or exhibit?", a: "Yes — partnership packages range from programme sponsorship through to founding partner status. Request the prospectus from our partnerships team." },
];

export function FAQ() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return faqs;
    return faqs.filter((f) => f.q.toLowerCase().includes(t) || f.a.toLowerCase().includes(t));
  }, [q]);

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-ivory">
      <div className="container-editorial grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-emerald">
            <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
            Questions
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
            Everything you'd ask <em className="italic font-normal text-emerald">at the door.</em>
          </h2>

          <div className="mt-10 relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-midnight/45" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search FAQs…"
              aria-label="Search frequently asked questions"
              className="w-full bg-transparent border border-midnight/20 pl-11 pr-4 py-3.5 text-sm placeholder:text-midnight/45 focus:outline-none focus:border-midnight rounded-sm"
            />
          </div>

          <p className="mt-8 text-sm text-midnight/65 max-w-sm">
            Can't find your answer? Email{" "}
            <a href="mailto:delegates@convergence.org" className="text-midnight border-b border-midnight/30 hover:border-midnight">
              delegates@convergence.org
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-midnight/15 border-y border-midnight/15">
          {filtered.length === 0 && (
            <p className="py-8 text-midnight/55">No questions match "{q}".</p>
          )}
          {filtered.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl text-midnight leading-snug text-balance">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-8 w-8 inline-flex items-center justify-center border border-midnight/25 transition ${
                      isOpen ? "bg-midnight text-ivory border-midnight rotate-45" : "text-midnight"
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
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-midnight/75 leading-relaxed max-w-[62ch]">{f.a}</p>
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
