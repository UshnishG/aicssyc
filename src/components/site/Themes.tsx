import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Globe2, Atom, Network } from "lucide-react";

const themes = [
  {
    icon: Atom,
    title: "Research & Academia",
    blurb: "Advancing research methodologies, publication excellence, collaborative innovation and academic impact.",
    topics: ["Applied research showcases", "Paper presentations", "Academic collaborations", "Student research tracks"],
    outcomes: ["Publication-ready feedback", "Research partner introductions", "Mentorship pathways"],
    speakers: "Research track",
  },
  {
    icon: ShieldCheck,
    title: "AI & Intelligent Systems",
    blurb: "Exploring LLMs, machine learning, computer vision, reinforcement learning, neural architectures and AI infrastructure.",
    topics: ["LLMs & multimodal models", "Computer vision & RL", "Neural architectures", "AI infrastructure"],
    outcomes: ["Production-ready patterns", "Open benchmarks", "Hands-on workshop output"],
    speakers: "AI track",
  },
  {
    icon: Cpu,
    title: "Agents & Human Interaction",
    blurb: "Human–AI collaboration, multi-agent systems, intelligent interfaces, alignment and interaction design.",
    topics: ["Agentic workflows", "Multi-agent systems", "Intelligent interfaces", "Alignment & trust"],
    outcomes: ["Working interaction patterns", "Live demos", "Design-research collaborations"],
    speakers: "Flagship track",
  },
  {
    icon: Zap,
    title: "Entrepreneurship & Innovation",
    blurb: "Startups, venture creation, product-market fit, scaling technology ventures and innovation ecosystems.",
    topics: ["Startup showcase", "Founder Q&A", "Product-market fit", "Scaling ventures"],
    outcomes: ["Investor & accelerator introductions", "Pitch feedback", "Co-founder matchmaking"],
    speakers: "Startup track",
  },
  {
    icon: Network,
    title: "Management & Strategy",
    blurb: "Technology leadership, operational excellence, organisational growth and engineering management.",
    topics: ["Tech leadership", "Operational excellence", "Engineering management", "Organisational growth"],
    outcomes: ["Leadership playbooks", "Strategic decision tools", "Mentor connections"],
    speakers: "Strategy track",
  },
  {
    icon: Globe2,
    title: "Finance & Digital Economy",
    blurb: "FinTech, digital assets, Web3, digital economy and the future of financial infrastructure.",
    topics: ["FinTech architecture", "Digital assets & Web3", "Digital payments", "Future financial infrastructure"],
    outcomes: ["Industry case studies", "Career pathways into fintech", "Cross-sector introductions"],
    speakers: "Finance track",
  },
];


export function Themes() {
  const [active, setActive] = useState(0);

  return (
    <section id="themes" className="relative py-24 md:py-36 bg-midnight text-ivory grain overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-atmosphere)" }}
      />
      <div className="container-editorial relative">
        <div className="grid md:grid-cols-[auto_1fr] md:items-end gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 align-middle bg-gold mr-3" />
              Core engineering & innovation themes
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Six tracks. <em className="italic font-normal text-gold">One coherent argument</em> about what to build.
            </h2>
          </div>
          <p className="md:max-w-sm md:justify-self-end text-ivory/65 leading-relaxed">
            Hover or tap a track to expand. Each is curated end-to-end by a dedicated
            programme committee.
            <span className="block mt-3 text-[10px] uppercase tracking-[0.22em] text-gold/80">Final themes subject to change</span>
          </p>
        </div>


        <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
          {/* Track list */}
          <div className="flex flex-col">
            {themes.map((t, i) => {
              const Icon = t.icon;
              const isActive = active === i;
              return (
                <button
                  key={t.title}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group text-left border-b border-white/10 py-5 flex items-center gap-4 transition-colors ${
                    isActive ? "text-ivory" : "text-ivory/55 hover:text-ivory/85"
                  }`}
                  aria-expanded={isActive}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-sm transition ${
                      isActive
                        ? "bg-gold text-midnight"
                        : "bg-white/5 text-ivory/70 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg leading-tight">{t.title}</span>
                    <span className="block text-xs text-ivory/45 mt-0.5">{t.speakers}</span>
                  </span>
                  <span
                    className={`text-2xl font-display transition-transform ${
                      isActive ? "text-gold rotate-0" : "rotate-[-45deg]"
                    }`}
                    aria-hidden
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full p-8 md:p-10 border border-white/10 bg-white/[0.02]"
              >
                <div aria-hidden className="absolute top-0 left-0 h-1 w-16 bg-gold" />
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  Track 0{active + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl text-balance">
                  {themes[active].title}
                </h3>
                <p className="mt-4 text-ivory/75 text-lg leading-relaxed max-w-[60ch]">
                  {themes[active].blurb}
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-ivory/55 mb-4">
                      Key topics
                    </p>
                    <ul className="space-y-2">
                      {themes[active].topics.map((tp) => (
                        <li key={tp} className="flex items-start gap-3 text-ivory/85">
                          <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                          {tp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-ivory/55 mb-4">
                      Expected outcomes
                    </p>
                    <ul className="space-y-2">
                      {themes[active].outcomes.map((tp) => (
                        <li key={tp} className="flex items-start gap-3 text-ivory/85">
                          <span className="mt-2 h-1 w-1 rounded-full bg-emerald flex-shrink-0" />
                          {tp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
