import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cinematic loading screen.
 * Sequence: rotating wireframe globe → zoom to India → ping Chennai (Tamil Nadu)
 * → reveal SRM IST label → fade out to site.
 *
 * Persists across the session via sessionStorage so it only plays once per visit.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState(0); // 0 globe, 1 zoom, 2 pin, 3 label

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("aicssyc-loaded") === "1") return;

    setVisible(true);
    sessionStorage.setItem("aicssyc-loaded", "1");

    const t1 = setTimeout(() => setStage(1), 1400);
    const t2 = setTimeout(() => setStage(2), 2400);
    const t3 = setTimeout(() => setStage(3), 3000);
    const t4 = setTimeout(() => setVisible(false), 4200);
    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0b1414] flex items-center justify-center overflow-hidden"
        >
          {/* ambient radial */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(196,154,88,0.10), transparent 60%)",
            }}
          />

          <motion.div
            className="relative"
            initial={{ scale: 1 }}
            animate={{ scale: stage >= 1 ? 2.6 : 1 }}
            transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "62% 44%" /* near India on the globe */ }}
          >
            <Globe stage={stage} />
          </motion.div>

          {/* label appears under the globe before fade-out */}
          <AnimatePresence>
            {stage >= 3 && (
              <motion.div
                key="label"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-[14%] left-1/2 -translate-x-1/2 text-center px-6"
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#c49a58]">
                  Chennai · Tamil Nadu · India
                </p>
                <p className="mt-3 font-display text-xl md:text-2xl text-[#e8e0d0]">
                  SRM Institute of Science and Technology
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Wireframe SVG globe with rotating meridians and a pin near Chennai. */
function Globe({ stage }: { stage: number }) {
  // Chennai ≈ 13°N, 80°E. On a 200-radius sphere centred at (200,200):
  // viewing rotation pre-roll (-30°) reveals India centred. Pin coords precomputed:
  const pin = { x: 274, y: 152 }; // approx Chennai on our projection

  return (
    <svg
      width="380"
      height="380"
      viewBox="0 0 400 400"
      className="block drop-shadow-[0_0_40px_rgba(196,154,88,0.25)]"
    >
      <defs>
        <radialGradient id="globeFill" cx="40%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#1a2a2a" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#0b1414" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.95" />
        </radialGradient>
        <radialGradient id="pinPulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c49a58" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c49a58" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* outer sphere */}
      <circle cx="200" cy="200" r="160" fill="url(#globeFill)" stroke="#c49a58" strokeOpacity="0.35" />

      {/* rotating wireframe */}
      <motion.g
        animate={{ rotate: stage >= 1 ? 0 : 360 }}
        transition={{
          duration: 14,
          repeat: stage >= 1 ? 0 : Infinity,
          ease: "linear",
        }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {/* meridians */}
        {[-60, -30, 0, 30, 60].map((rx) => (
          <ellipse
            key={`m${rx}`}
            cx="200"
            cy="200"
            rx={Math.max(8, 160 * Math.cos((rx * Math.PI) / 180))}
            ry="160"
            fill="none"
            stroke="#c49a58"
            strokeOpacity="0.22"
            strokeWidth="0.8"
          />
        ))}
        {/* parallels */}
        {[-60, -30, 0, 30, 60].map((ry) => (
          <ellipse
            key={`p${ry}`}
            cx="200"
            cy={200 + ry * 1.6}
            rx={160 * Math.cos((ry * Math.PI) / 180)}
            ry="3"
            fill="none"
            stroke="#c49a58"
            strokeOpacity="0.16"
            strokeWidth="0.6"
          />
        ))}
        {/* scattered nodes */}
        {Array.from({ length: 28 }).map((_, i) => {
          const a = (i / 28) * Math.PI * 2;
          const r = 60 + ((i * 53) % 100);
          return (
            <circle
              key={`n${i}`}
              cx={200 + Math.cos(a) * r * 0.9}
              cy={200 + Math.sin(a) * r * 0.6}
              r="1.2"
              fill="#e8e0d0"
              opacity="0.6"
            />
          );
        })}
      </motion.g>

      {/* equator highlight */}
      <ellipse cx="200" cy="200" rx="160" ry="12" fill="none" stroke="#c49a58" strokeOpacity="0.18" />

      {/* pin */}
      <AnimatePresence>
        {stage >= 2 && (
          <motion.g
            key="pin"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: `${pin.x}px ${pin.y}px` }}
          >
            {/* pulsing halo */}
            <motion.circle
              cx={pin.x}
              cy={pin.y}
              r="22"
              fill="url(#pinPulse)"
              animate={{ scale: [0.6, 1.4, 0.6], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${pin.x}px ${pin.y}px` }}
            />
            <circle cx={pin.x} cy={pin.y} r="4" fill="#c49a58" />
            <circle cx={pin.x} cy={pin.y} r="1.6" fill="#e8e0d0" />
            {/* connector line to label */}
            <line
              x1={pin.x}
              y1={pin.y}
              x2={pin.x + 40}
              y2={pin.y - 30}
              stroke="#c49a58"
              strokeOpacity="0.7"
              strokeWidth="0.8"
            />
            <text
              x={pin.x + 44}
              y={pin.y - 30}
              fill="#e8e0d0"
              fontSize="9"
              letterSpacing="2"
              style={{ textTransform: "uppercase" }}
            >
              Chennai
            </text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}
