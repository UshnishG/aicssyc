import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AntiGravityEasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  // Disable on mobile/low performance
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) {
      setIsSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    // Elements to float
    const selectors = 'h1, h2, h3, p, button, .rounded-3xl, .rounded-2xl, .bg-background\\/40, span.text-transparent';
    const elements = document.querySelectorAll(selectors);
    
    const originals = new Map();

    elements.forEach((el, index) => {
      const htmlEl = el as HTMLElement;
      // Skip navigation or form modals to avoid breaking them
      if (htmlEl.closest('header') || htmlEl.closest('[role="dialog"]')) return;
      
      const rect = htmlEl.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(htmlEl);
      
      originals.set(htmlEl, {
        transition: htmlEl.style.transition,
        transform: htmlEl.style.transform,
        position: computedStyle.position === 'static' ? 'relative' : computedStyle.position,
      });

      // Apply physics-like random float
      const randomX = (Math.random() - 0.5) * 100;
      const randomY = - (Math.random() * 150) - 50; // Float upwards
      const randomRot = (Math.random() - 0.5) * 45;

      htmlEl.style.transition = 'transform 3s cubic-bezier(0.25, 1, 0.5, 1)';
      htmlEl.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg) scale(0.9)`;
    });

    // Revert after 4 seconds
    const timeout = setTimeout(() => {
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (!originals.has(htmlEl)) return;
        
        // Smooth return
        htmlEl.style.transition = 'transform 2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        htmlEl.style.transform = originals.get(htmlEl).transform;
        
        // Clean up transition after reverting
        setTimeout(() => {
          if (!isActive) { // only clean if still inactive/finished
            htmlEl.style.transition = originals.get(htmlEl).transition;
          }
        }, 2000);
      });
      setIsActive(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [isActive]);

  if (!isSupported) return null;

  return (
    <>
      <button
        onClick={() => !isActive && setIsActive(true)}
        className="fixed bottom-4 right-4 z-40 opacity-20 hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-mono text-cyan bg-midnight-deep/50 px-3 py-1.5 rounded-full border border-cyan/20 backdrop-blur-sm"
        aria-label="Toggle Anti-Gravity Mode"
        title="Anti-Gravity Mode"
      >
        <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
        Zero-G
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-cyan/5 backdrop-blur-[2px]"
          >
            <motion.h2 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.8 }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ duration: 3 }}
              className="font-display text-6xl text-cyan/50 uppercase tracking-widest mix-blend-screen"
            >
              Anti-Gravity Engaged
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
