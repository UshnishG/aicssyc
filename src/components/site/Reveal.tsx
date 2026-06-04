import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur";

const variantsFor = (dir: Direction, distance: number): Variants => {
  const base = { opacity: 0 };
  switch (dir) {
    case "up":
      return { hidden: { ...base, y: distance }, show: { opacity: 1, y: 0 } };
    case "down":
      return { hidden: { ...base, y: -distance }, show: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { ...base, x: distance }, show: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { ...base, x: -distance }, show: { opacity: 1, x: 0 } };
    case "scale":
      return { hidden: { ...base, scale: 0.86 }, show: { opacity: 1, scale: 1 } };
    case "blur":
      return {
        hidden: { ...base, filter: "blur(14px)", y: distance },
        show: { opacity: 1, filter: "blur(0px)", y: 0 },
      };
  }
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 48,
  once = true,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      variants={variantsFor(direction, distance)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
