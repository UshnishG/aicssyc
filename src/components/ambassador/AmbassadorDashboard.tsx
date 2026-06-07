import { useEffect, useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeIzPzS0WsLFpOAWtqLflseAa7FprCy33iAkgShp5vAESH5gA/viewform";

/* ─── Interactive Mouse-Reactive Network Background ─── */
function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    const onMouseMove = (e: globalThis.MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };
    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        // Connect to mouse
        const dxMouse = nodes[i].x - mouseX;
        const dyMouse = nodes[i].y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 200) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 * (1 - distMouse / 200)})`; // Vibrant cyan glow to mouse
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Connect to other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

/* ─── 3D Tilt Card Component ─── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)",
            left: glareX,
            top: glareY,
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
      </div>
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

/* ─── Expandable Accordion Card ─── */
function ExpandableReason({ reason, index }: { reason: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      className="group relative rounded-2xl bg-[#0f172a]/60 backdrop-blur-md border border-white/10 hover:border-gold/50 transition-colors cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.div layout className="p-6 relative z-10 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          {reason.emoji}
        </div>
        <div className="flex-1">
          <motion.h3 layout="position" className="text-lg font-bold text-ivory group-hover:text-gold transition-colors">
            {reason.title}
          </motion.h3>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3"
              >
                <p className="text-ivory/70 text-sm leading-relaxed pr-4">
                  {reason.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="hidden sm:block text-ivory/30 group-hover:text-gold/80 transition-colors">
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            ↓
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Data ─── */
const steps = [
  { emoji: "📝", title: "Register your interest", desc: "Start your journey by filling out the official Campus Ambassador application form. Tell us about your background, your involvement in student communities, and why you are the perfect fit to represent your institution at this prestigious national congress." },
  { emoji: "✉️", title: "Get selected", desc: "Our team will review your application. If shortlisted, you will receive an official confirmation email outlining your role, responsibilities, and the exciting opportunities that await you as an AICSSYC 2026 Campus Ambassador." },
  { emoji: "🎟️", title: "Register for AICSSYC", desc: "To officially secure your position as an ambassador, you must complete your own registration for the event, including accommodation. This ensures you are fully committed to attending and experiencing the congress firsthand." },
  { emoji: "👥", title: "Join the community", desc: "Gain exclusive access to our dedicated ambassador communication channels. Connect with fellow ambassadors from across the country, access promotional resources, and participate in training sessions to help you succeed." },
  { emoji: "🔗", title: "Get your referral code", desc: "Once onboarded, you will receive a unique, personalized referral code. When students from your campus or network use this code during their registration, they will instantly receive a 10% discount on their ticket, and you will get the credit." },
  { emoji: "🚀", title: "Promote & earn", desc: "Use your network and the provided marketing materials to spread the word about AICSSYC 2026. As your referrals accumulate, you will unlock exciting milestones, including full refunds for your registration and accommodation fees." },
];

const eligibility = [
  "Undergraduate Students",
  "Postgraduate Students",
  "Research Scholars",
  "IEEE Members & Volunteers",
  "Student Leaders",
  "Technical Club Reps",
  "Community Builders",
  "Anyone passionate about tech",
];

const reasons = [
  { emoji: "🎯", title: "Leadership & Skill Development", desc: "Step out of your comfort zone and take charge. As an ambassador, you will develop crucial real-world skills in marketing, public speaking, event promotion, and community organization that will make your resume stand out to future employers." },
  { emoji: "🌐", title: "Nationwide Networking", desc: "Break out of your local bubble and connect with thousands of like-minded students, distinguished researchers, industry professionals, and top IEEE leaders from all corners of the country. Build a professional network that will last a lifetime." },
  { emoji: "🏅", title: "Official IEEE Recognition", desc: "Your hard work won't go unnoticed. Earn official certificates, exclusive badges, and formal recognition from the IEEE Computer Society for your contributions to making this flagship congress a massive success." },
  { emoji: "💡", title: "Create Real Impact", desc: "Be the bridge between your institution and a world of technological innovation. By bringing the AICSSYC experience to your campus, you are directly helping your peers discover new opportunities, learn new skills, and advance their careers." },
  { emoji: "🤝", title: "Join an Exclusive Community", desc: "You won't be doing this alone. Become part of an elite, passionate group of student leaders who share your drive and ambition. Collaborate, share strategies, and forge lifelong friendships within the ambassador program." },
];

const notices = [
  "Selection is not guaranteed — only shortlisted applicants are onboarded.",
  "Selected ambassadors must register for AICSSYC 2026 including accommodation.",
  "Fees are paid initially and refunded only after milestones are verified.",
  "Only completed, verified registrations count toward rewards.",
];

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */
export function AmbassadorDashboard() {
  return (
    <div className="relative bg-[#020617] min-h-screen text-ivory font-sans selection:bg-gold/30 selection:text-gold overflow-hidden pb-32">
      <InteractiveCanvas />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Campus Ambassador Program
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-tight"
        >
          Lead the charge.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
            Own your campus.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-xl text-ivory/70 max-w-2xl mx-auto font-light"
        >
          Become the official representative of India's flagship IEEE Computer Society congress. Build your network, unlock exclusive rewards, and make an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6 relative"
        >
          <div className="absolute inset-0 bg-gold/20 blur-[80px] rounded-full z-0" />
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-10 py-5 rounded-full bg-gold text-[#020617] font-bold text-lg hover:bg-yellow-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] transition-all duration-300 flex items-center justify-center gap-3"
          >
            Apply Now <span className="text-2xl leading-none">🚀</span>
          </a>
        </motion.div>
      </section>

      {/* ── WHO CAN APPLY ── */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-transparent p-px shadow-2xl">
          <div className="rounded-3xl bg-[#0f172a]/90 backdrop-blur-xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Who can apply?
              </h2>
              <p className="mt-4 text-emerald-400 text-lg font-medium drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                If you care about tech & community — you're in.
              </p>
              <p className="mt-4 text-ivory/60">No prior ambassador experience needed.</p>
            </div>
            <div className="flex-1 flex flex-wrap justify-center lg:justify-start gap-3">
              {eligibility.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-ivory/80 font-medium hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-default hover:shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE TIMELINE (HOW IT WORKS) ── */}
      <section id="how-it-works" className="relative z-10 px-6 py-24 max-w-5xl mx-auto scroll-mt-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            The Journey
          </h2>
          <p className="mt-6 text-cyan-400 text-xl font-medium tracking-wide drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            Six steps. That's it.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 pl-10 md:pl-16 space-y-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[41px] md:-left-[65px] top-1 w-6 h-6 rounded-full bg-[#0f172a] border-4 border-white/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-300 z-10" />
              
              <div className="bg-[#0f172a]/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl group-hover:bg-white/5 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-4xl mb-4 block">{s.emoji}</span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-ivory/60 text-lg leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3D REWARDS CARDS ── */}
      <section className="relative z-10 px-6 py-24 w-full bg-[#0b1121] border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Rewards & Recognition
            </h2>
            <p className="mt-6 text-ivory/70 text-xl font-medium tracking-wide">
              The more you bring, the more you earn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
            {/* 10 Milestone */}
            <TiltCard className="h-full rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 p-10 shadow-2xl">
              <div className="flex flex-col h-full">
                <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Milestone</p>
                <p className="text-7xl font-black text-white drop-shadow-lg">10</p>
                <p className="text-ivory/50 font-medium uppercase tracking-widest mt-2">Registrations</p>
                <div className="mt-auto pt-10">
                  <div className="h-px bg-white/10 mb-6" />
                  <p className="flex gap-4 items-start text-ivory/80 text-lg font-medium">
                    <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] text-xl">✓</span>
                    Full event registration fee refund
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* 20 Milestone */}
            <TiltCard className="h-full rounded-2xl bg-gradient-to-br from-gold/20 to-[#0f172a] border border-gold/40 p-10 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <div className="flex flex-col h-full">
                <p className="text-gold font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">Milestone</p>
                <p className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gold drop-shadow-lg">20</p>
                <p className="text-gold/60 font-medium uppercase tracking-widest mt-2">Registrations</p>
                <div className="mt-auto pt-10">
                  <div className="h-px bg-gold/20 mb-6" />
                  <div className="space-y-4">
                    <p className="flex gap-4 items-start text-ivory text-lg font-medium">
                      <span className="text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] text-xl">✓</span>
                      Full event registration fee refund
                    </p>
                    <p className="flex gap-4 items-start text-ivory text-lg font-medium">
                      <span className="text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] text-xl">✓</span>
                      Full accommodation fee refund
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Top 20 */}
            <TiltCard className="h-full rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 p-10 shadow-2xl">
              <div className="flex flex-col h-full">
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Excellence</p>
                <p className="text-5xl font-black text-white drop-shadow-lg leading-tight mb-2">Top 20</p>
                <p className="text-ivory/50 font-medium uppercase tracking-widest">Ambassadors</p>
                <div className="mt-auto pt-10">
                  <div className="h-px bg-white/10 mb-6" />
                  <div className="space-y-4">
                    {["Recognition during event", "Featured on official platforms", "Excellence Certificate", "Special Congress Recognition"].map((p) => (
                      <p key={p} className="flex gap-3 items-start text-ivory/80 font-medium">
                        <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] text-lg mt-0.5">✓</span>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── EXPANDABLE REASONS & IMPORTANT INFO ── */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Why Join */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Why join? <br />
              <span className="text-2xl text-emerald-400 font-medium tracking-wide mt-4 inline-block drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">
                It's way more than a referral program.
              </span>
            </h2>
            <div className="flex flex-col gap-4">
              {reasons.map((r, i) => (
                <ExpandableReason key={r.title} reason={r} index={i} />
              ))}
            </div>
          </div>

          {/* Good to Know & Final CTA */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="rounded-3xl bg-[#0f172a]/80 backdrop-blur-xl border border-rose-500/30 p-10 shadow-[0_0_30px_rgba(244,63,94,0.1)]">
              <p className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-3 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]">
                <span className="text-xl">⚠️</span> Good to know
              </p>
              <ul className="space-y-5">
                {notices.map((n, i) => (
                  <li key={i} className="flex items-start gap-4 text-ivory/70 text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-rose-500/60 shrink-0 mt-2 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 p-10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
                Ready to rep your campus?
              </h3>
              <p className="text-ivory/60 mb-8 relative z-10">
                Applications are open. Start your journey today.
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gold text-[#020617] font-bold text-lg hover:bg-yellow-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] transition-all duration-300 w-full"
              >
                Apply Now →
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
