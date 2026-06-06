import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Target Date: October 8, 2026
const TARGET_DATE = new Date("2026-10-08T00:00:00").getTime();

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

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

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;
    
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-start gap-2 md:gap-4 mt-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <Separator />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}

function Separator() {
  return (
    <motion.span 
      animate={{ opacity: [1, 0.4, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="text-white/20 font-display text-2xl md:text-3xl mt-4"
    >
      :
    </motion.span>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const paddedValue = value.toString().padStart(2, "0");
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[60px] w-[52px] md:h-[80px] md:w-[72px] overflow-hidden rounded-lg bg-gradient-to-b from-white/[0.05] to-transparent ring-1 ring-white/10 ring-inset backdrop-blur-md flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_30px_rgba(0,0,0,0.4)] perspective-[1000px]">
        {/* Subtle glass reflection */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-lg z-0" />
        
        {/* Split-flap mechanical line */}
        <div className="absolute top-1/2 inset-x-0 h-[1px] bg-black/60 z-10" />
        <div className="absolute top-1/2 inset-x-0 h-[1px] bg-white/10 translate-y-[1px] z-10" />
        
        <AnimatePresence mode="popLayout">
          <motion.span
            key={paddedValue}
            initial={{ y: "45%", rotateX: -60, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: "0%", rotateX: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-45%", rotateX: 60, opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute font-display tabular-nums text-3xl md:text-[2.75rem] text-gold drop-shadow-[0_0_12px_rgba(212,166,60,0.3)] z-0"
          >
            {paddedValue}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-ivory/50">
        {label}
      </span>
    </div>
  );
}
