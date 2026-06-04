import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search } from "lucide-react";

const faqs = [
  { q: "What is AICSSYC 2026?", a: "The All India Computer Society Student & Young Professional Congress — a flagship initiative of the IEEE Computer Society SYP that brings together students, young professionals, researchers and industry leaders for technical sessions, workshops, discussions and networking." },
  { q: "When and where is it happening?", a: "October 8 to November 2, 2026, at the TP Ganesan Auditorium, SRM Institute of Science and Technology, Kattankulathur. The core programme runs from October 8 to 11, followed by extended activities." },
  { q: "What is the theme of the 2026 edition?", a: "‘Where Agent Meets Humans’ — exploring the design, behaviour and impact of intelligent agents working alongside people across research, industry and everyday life." },
  { q: "Which themes are covered?", a: "Six tracks: Research & Academia, Management & Strategy, Agents & Human Interaction, AI & Intelligent Systems, Entrepreneurship & Innovation, and Finance & Digital Economy. Final tracks are subject to change." },
  { q: "Who should attend?", a: "Students, young professionals, researchers, faculty, entrepreneurs and industry practitioners — particularly IEEE and IEEE Computer Society members and chapter office-bearers from across India." },
  { q: "What's the difference between the three pass tiers?", a: "The IEEE CS Member pass (₹1,000) is the most subsidised tier for verified IEEE Computer Society members. The IEEE Member pass (₹1,500) is for IEEE members outside the Computer Society. The General Admission pass (₹2,000) is the standard ticket for non-IEEE attendees. All three include full event access, catering and networking." },
  { q: "How is IEEE membership verified?", a: "A valid IEEE membership ID (or IEEE CS membership ID for the lowest tier) must be provided at registration. Verification happens before your pass is approved." },
  { q: "Is the Day 3 heritage visit included?", a: "Yes. October 11 is a guided heritage visit. Lunch is provided; breakfast is not provided that day." },
  { q: "Are meals included?", a: "Yes — lunch, dinner and tea breaks are included across the core programme. Day 2 dinner is provided as optional dinner packets. Day 3 includes lunch only." },
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
    <section id="faq" className="relative py-24 md:py-36 bg-transparent">
      <div className="container-editorial grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-emerald">
            <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
            Questions
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ivory text-balance">
            Everything you'd ask <em className="italic font-normal text-emerald">at the door.</em>
          </h2>

          <div className="mt-10 relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/45" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search FAQs…"
              aria-label="Search frequently asked questions"
              className="w-full bg-transparent border border-ivory/20 pl-11 pr-4 py-3.5 text-sm placeholder:text-ivory/45 focus:outline-none focus:border-ivory/20 rounded-sm"
            />
          </div>

          <p className="mt-8 text-sm text-ivory/65 max-w-sm">
            Can't find your answer? Email{" "}
            <a href="mailto:contact@aicssyc2026.in" className="text-ivory border-b border-ivory/30 hover:border-ivory/20">
              contact@aicssyc2026.in
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-midnight/15 border-y border-ivory/15">
          {filtered.length === 0 && (
            <p className="py-8 text-ivory/55">No questions match "{q}".</p>
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
                  <span className="font-display text-xl md:text-2xl text-ivory leading-snug text-balance">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-8 w-8 inline-flex items-center justify-center border border-ivory/25 transition ${
                      isOpen ? "bg-midnight text-ivory border-ivory/20 rotate-45" : "text-ivory"
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
                      <p className="pb-6 pr-12 text-ivory/75 leading-relaxed max-w-[62ch]">{f.a}</p>
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
