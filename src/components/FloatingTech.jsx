import { motion } from "framer-motion";

const techStack = [
  {
    name: "React",
    color: "from-cyan-400 to-blue-500",
    position: "top-10 left-10",
  },
  {
    name: "Node.js",
    color: "from-green-400 to-emerald-600",
    position: "top-20 right-16",
  },
  {
    name: "MongoDB",
    color: "from-green-500 to-lime-500",
    position: "bottom-20 left-16",
  },
  {
    name: "Express",
    color: "from-gray-300 to-gray-500",
    position: "bottom-10 right-10",
  },
];

export default function FloatingTech() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            absolute
            ${tech.position}
          `}
        >
          <div
            className={`
              px-5
              py-3
              rounded-2xl
              text-white
              font-semibold
              backdrop-blur-xl
              border
              border-white/10
              bg-gradient-to-r
              ${tech.color}
              shadow-2xl
            `}
          >
            {tech.name}
          </div>
        </motion.div>
      ))}

    </div>
  );
}