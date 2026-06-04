import { motion } from "framer-motion";

const tiers = [
  {
    label: "Founding partners",
    size: "text-3xl md:text-4xl",
    names: ["AETHER LABS", "NVIDIA", "STRIPE"],
  },
  {
    label: "Principal sponsors",
    size: "text-xl md:text-2xl",
    names: ["RIKEN", "ETH ZÜRICH", "MISTRAL", "ANTHROPIC", "OPENAI"],
  },
  {
    label: "Programme partners",
    size: "text-base md:text-lg",
    names: ["CERN", "ESA", "MAX PLANCK", "ANDELA", "DEEPMIND", "ARM", "TSMC", "EQUINIX"],
  },
];

const marquee = [...tiers[2].names, ...tiers[1].names, ...tiers[2].names];

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 md:py-36 bg-ivory overflow-hidden">
      <div className="container-editorial">
        <div className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald">
              <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
              Partners & sponsors
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-midnight text-balance">
              Built with the organisations <em className="italic font-normal text-emerald">our delegates already work with.</em>
            </h2>
          </div>
          <a href="#" className="text-sm text-midnight border-b border-midnight/30 hover:border-midnight pb-0.5">
            Partnership prospectus →
          </a>
        </div>

        {/* Tiered editorial layout */}
        <div className="space-y-12">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 items-center border-t border-midnight/15 pt-8"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-midnight/60">{tier.label}</p>
              <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
                {tier.names.map((n) => (
                  <span
                    key={n}
                    className={`font-display tracking-[0.06em] text-midnight/85 hover:text-emerald transition ${tier.size}`}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 border-y border-midnight/15 py-8 overflow-hidden relative">
          <div
            className="flex gap-16 whitespace-nowrap"
            style={{ animation: "marquee 40s linear infinite" }}
          >
            {[...marquee, ...marquee].map((n, i) => (
              <span key={i} className="font-display text-2xl text-midnight/40">
                {n}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ivory to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ivory to-transparent" />
        </div>
      </div>
    </section>
  );
}
