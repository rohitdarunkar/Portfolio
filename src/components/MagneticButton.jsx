import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
  href,
  className,
}) {

  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const element = ref.current;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
      }}
      className={`
        relative
        overflow-hidden
        transition-all
        duration-300
        ${className}
      `}
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition
          duration-300
          bg-white/10
          blur-xl
        "
      />

      <span className="relative z-10">
        {children}
      </span>

    </motion.a>
  );
}