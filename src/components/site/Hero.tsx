import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Countdown } from "./Countdown";
import heroData from "@/data/hero.json";
import siteConfig from "@/data/site-config.json";

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

export function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yOrbit = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityBg = useTransform(scrollY, [0, 500], [0.3, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden text-ivory grain">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-atmosphere)", y: yBg, opacity: opacityBg }}
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial relative pt-32 md:pt-40 pb-20 lg:pb-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-slate-mist mb-10"
          >
            <span className="h-px w-10 bg-gold" />
            {heroData.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-balance"
          >
            All India<br />
            Computer Society
            <br />
            <span className="editorial-italic text-gold">Student &amp; Young<br />Professional</span>
            <br />
            Congress 2026
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold/80">Dates</p>
              <p className="mt-2 font-display text-2xl text-ivory leading-tight">
                {heroData.dates} <span className="text-ivory/60">{heroData.year}</span>
              </p>
            </div>
            <div className="h-12 w-px bg-white/15" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold/80">Venue</p>
              <p className="mt-2 text-ivory leading-tight">{heroData.venueName}</p>
              <p className="text-ivory/70 text-sm">{heroData.venueLocation}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Countdown />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://dashboard.eqvento.in/aicssyc26-lM0m3B"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-medium text-midnight-deep hover:bg-gold-soft transition"
            >
              Register now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-ivory transition border-b border-ivory/20 hover:border-gold pb-1"
            >
              View congress timeline →
            </a>
          </motion.div>
        </div>

        {/* orbit artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: yOrbit }}
          className="relative aspect-square w-full max-w-[560px] mx-auto"
        >
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-20 rounded-full border border-gold/30" />
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <NetworkCanvas />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Theme · 2026</p>
              <p className="font-display text-3xl md:text-4xl text-ivory mt-3 leading-[1.05]">
                Where <em className="editorial-italic font-normal text-gold">{heroData.themeLine1.replace("Where ", "")}</em>
                <br />
                {heroData.themeLine2}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
