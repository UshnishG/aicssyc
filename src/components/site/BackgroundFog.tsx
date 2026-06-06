import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundFog() {
  const { scrollYProgress } = useScroll();

  // Use x/y (transforms) instead of top/left (layout) for 60fps hardware acceleration
  const yellowY = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);
  const yellowX = useTransform(scrollYProgress, [0, 1], ["-20vw", "30vw"]);
  
  const midnightY = useTransform(scrollYProgress, [0, 1], ["80vh", "0vh"]);
  const midnightX = useTransform(scrollYProgress, [0, 1], ["60vw", "0vw"]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#04080e]">
      {/* Yellow/Gold Glow using radial gradients instead of expensive blur filters */}
      <motion.div
        style={{ y: yellowY, x: yellowX }}
        className="absolute -top-[400px] -left-[400px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(212,166,60,0.15)_0%,_rgba(212,166,60,0)_60%)] mix-blend-screen will-change-transform"
      />
      
      {/* Midnight/Deep Blue Glow */}
      <motion.div
        style={{ y: midnightY, x: midnightX }}
        className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1)_0%,_rgba(37,99,235,0)_60%)] mix-blend-screen will-change-transform"
      />

      {/* Center ambient glow */}
      <motion.div
        style={{ scale }}
        className="absolute top-1/2 left-1/2 -mt-[450px] -ml-[450px] w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_rgba(16,185,129,0)_60%)] mix-blend-screen will-change-transform"
      />
      {/* Light Rays of Yellow/Gold stretching down */}
      <div className="absolute inset-0 flex justify-center opacity-40 mix-blend-screen">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0vh", "-30vh"]) }}
          className="absolute -top-[20vh] w-[150vw] h-[150vh] bg-[conic-gradient(from_180deg_at_50%_-20%,rgba(212,166,60,0.1)_0deg,transparent_40deg,transparent_320deg,rgba(212,166,60,0.1)_360deg)]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]) }}
          className="absolute -top-[10vh] w-[80vw] h-[150vh] bg-[conic-gradient(from_180deg_at_50%_-10%,rgba(212,166,60,0.15)_0deg,transparent_20deg,transparent_340deg,rgba(212,166,60,0.15)_360deg)]"
        />
      </div>
    </div>
  );
}
