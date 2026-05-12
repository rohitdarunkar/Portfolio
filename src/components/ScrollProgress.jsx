import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-[3px]
        z-[9999]
        origin-left
        bg-gradient-to-r
        from-cyan-400
        via-pink-500
        to-cyan-400
        shadow-[0_0_20px_rgba(56,189,248,0.7)]
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}