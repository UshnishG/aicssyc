import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

import faqs from "@/data/faqs.json";

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
