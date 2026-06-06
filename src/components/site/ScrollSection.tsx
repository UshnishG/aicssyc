import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function ScrollSection({ children, className = "", id }: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ opacity, scale, y, willChange: "transform, opacity" }}
      className={`relative transform-gpu ${className}`}
    >
      {children}
    </motion.section>
  );
}
