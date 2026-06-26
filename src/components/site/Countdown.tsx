import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Target Date: October 8, 2026
const TARGET_DATE = new Date("2026-10-08T00:00:00").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days,    label: "Days" },
    { value: timeLeft.hours,   label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div className="mt-8 w-full max-w-sm">
      {/* Header label */}
      <p className="text-[9px] uppercase tracking-[0.28em] text-gold/60 mb-3 flex items-center gap-2">
        <span className="h-px w-5 bg-gold/40 inline-block" />
        Countdown to Congress
        <span className="h-px flex-1 bg-gold/10 inline-block" />
      </p>

      {/* Pill container */}
      <div className="relative flex items-stretch rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm shadow-[0_0_0_1px_rgba(212,166,60,0.06),0_8px_32px_rgba(0,0,0,0.45)]">
        {/* Subtle top glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

        {units.map((unit, i) => (
          <div key={unit.label} className="flex-1 flex items-center">
            {/* Divider */}
            {i > 0 && (
              <div className="relative self-stretch flex items-center">
                <div className="w-px self-stretch bg-white/[0.07]" />
                <motion.span
                  animate={{ opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
                  className="absolute -translate-x-1/2 text-white/20 text-lg font-display leading-none select-none"
                >
                  :
                </motion.span>
              </div>
            )}

            {/* Unit cell */}
            <div className="flex-1 flex flex-col items-center justify-center py-4 px-1 gap-1.5 group">
              {/* Number flip */}
              <div className="relative h-10 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ y: "60%", opacity: 0, filter: "blur(4px)", scale: 0.9 }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ y: "-60%", opacity: 0, filter: "blur(4px)", scale: 0.9 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display tabular-nums text-[2rem] leading-none font-bold text-gold drop-shadow-[0_0_14px_rgba(212,166,60,0.45)]"
                  >
                    {unit.value.toString().padStart(unit.label === "Days" ? 3 : 2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Label */}
              <span className="text-[8px] uppercase tracking-[0.2em] text-ivory/35 font-medium">
                {unit.label}
              </span>
            </div>
          </div>
        ))}

        {/* Bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      </div>

      {/* Event date badge */}
      <div className="mt-2.5 flex items-center justify-end gap-1.5">
        <span className="text-[9px] uppercase tracking-[0.2em] text-ivory/30">8 – 11 Oct 2026</span>
        <span className="h-1 w-1 rounded-full bg-gold/40 inline-block" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-ivory/30">SRM IST, Kattankulathur</span>
      </div>
    </div>
  );
}
