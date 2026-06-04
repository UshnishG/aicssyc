import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Generative network visualisation — calm, deliberate, gold on midnight.
function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.floor((w * h) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 140;
          if (d2 < max * max) {
            const alpha = 1 - Math.sqrt(d2) / max;
            ctx.strokeStyle = `rgba(212, 166, 60, ${alpha * 0.28})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(248, 247, 242, 0.7)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}

const stats = [
  { value: "300+", label: "Delegates" },
  { value: "10+", label: "Speakers" },
  { value: "20+", label: "States represented" },
  { value: "National", label: "IEEE CS Initiative" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-ivory grain">
      {/* subtle atmosphere overlay — lets fixed bg image bleed through */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-atmosphere)" }}
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial relative pt-32 md:pt-40 pb-20 lg:pb-32 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-mist mb-8"
          >
            <span className="h-px w-8 bg-gold" />
            IEEE Computer Society · SYP Flagship · AICSSYC 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.25rem,5.2vw,4.75rem)] leading-[1.02] tracking-tight text-balance"
          >
            All India Computer Society
            <br />
            <em className="italic font-normal text-gold">Student & Young Professional</em>
            <br />
            Congress 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mt-6 font-display italic text-xl md:text-2xl text-gold/90"
          >
            Where Agent meets Humans.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ivory/75"
          >
            India's flagship IEEE Computer Society Student & Young Professional
            Congress — bringing together students, researchers, industry leaders,
            entrepreneurs, innovators and technology professionals.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl text-gold">Oct 8</span>
              <span className="text-ivory/70 leading-tight">
                — Oct 11<br />2026
              </span>
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <p className="text-ivory">TP Ganesan Auditorium</p>
              <p className="text-ivory/75">SRM IST, Kattankulathur</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#tickets"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-medium text-ivory hover:bg-gold-soft transition"
            >
              Register now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-6 py-3.5 text-sm font-medium text-ivory hover:bg-white/5 transition"
            >
              View timeline
            </a>
          </motion.div>
        </div>


        {/* artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square w-full max-w-[560px] mx-auto"
        >
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-20 rounded-full border border-gold/30" />
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <NetworkCanvas />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Congress</p>
              <p className="font-display text-7xl text-ivory mt-1">'26</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* stats strip */}
      <div className="relative border-t border-white/8">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`py-8 ${i !== 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""} md:border-l border-white/8 px-4 md:px-8`}
            >
              <p className="font-display text-3xl md:text-4xl text-ivory">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-mist mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
