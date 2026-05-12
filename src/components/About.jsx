import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="h-screen snap-start relative overflow-hidden bg-[#020617] px-8 md:px-16 pt-24"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >

    {/* SUBTLE BACKGROUND */}
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-0 left-0 w-full h-full bg-[#020617]" />

  {/* subtle center glow */}
  <div className="absolute top-[20%] left-[40%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />

</div>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1600px] mx-auto h-full grid lg:grid-cols-[58%_42%] items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center pr-6 -mt-6">

          {/* SMALL TAG */}
          <p className="text-cyan-400 uppercase tracking-[8px] text-sm font-semibold mb-5">
            About Me
          </p>

          {/* HUGE TITLE */}
          <h1 className="text-[58px] md:text-[74px] lg:text-[88px] font-black leading-[0.92] tracking-[-4px] text-white max-w-[850px]">

            Building scalable
            <br />

            & immersive digital
            <br />

            <span className="text-cyan-400">
              experiences.
            </span>

          </h1>

          {/* DESCRIPTION */}
          <div className="mt-7 max-w-[760px]">

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">

              I’m Rohit Darunkar — a Frontend-focused MERN Developer passionate about crafting modern, responsive, and high-performance web applications.

              <br />
              <br />

              My experience includes building scalable full-stack systems using React.js, Node.js, Express.js, and MongoDB while focusing heavily on UI quality, smooth interactions, and clean architecture.

              <br />
              <br />

              I enjoy blending engineering with design to create applications that feel premium, immersive, and visually polished.

            </p>

          </div>

          {/* STATS */}
          <div className="flex gap-16 mt-10">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >

              <h2 className="text-5xl font-black text-cyan-400">
                25+
              </h2>

              <p className="text-gray-400 mt-2">
                Projects Built
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >

              <h2 className="text-5xl font-black text-cyan-400">
                10+
              </h2>

              <p className="text-gray-400 mt-2">
                Technologies
              </p>

            </motion.div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center overflow-hidden h-full">

          {/* SOFT CYAN GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

          {/* ROTATING ORBIT */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/10"
          >

            {/* REACT */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#081229]/80 backdrop-blur-xl border border-cyan-400/20 px-5 py-2 rounded-full text-cyan-300 text-sm font-semibold shadow-xl">
              React.js
            </div>

            {/* NODE */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#081229]/80 backdrop-blur-xl border border-cyan-400/20 px-5 py-2 rounded-full text-cyan-300 text-sm font-semibold shadow-xl">
              Node.js
            </div>

            {/* EXPRESS */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#081229]/80 backdrop-blur-xl border border-cyan-400/20 px-5 py-2 rounded-full text-cyan-300 text-sm font-semibold shadow-xl">
              Express
            </div>

            {/* MONGO */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#081229]/80 backdrop-blur-xl border border-cyan-400/20 px-5 py-2 rounded-full text-cyan-300 text-sm font-semibold shadow-xl">
              MongoDB
            </div>

          </motion.div>

          {/* CENTER CORE */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[250px] h-[250px] rounded-full bg-white/5 border border-cyan-400/20 backdrop-blur-2xl flex flex-col items-center justify-center shadow-2xl"
          >

            {/* PULSE */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/10 animate-ping" />

            <h1 className="text-6xl font-black text-cyan-400">
              MERN
            </h1>

            <p className="text-gray-400 text-lg mt-3">
              Full Stack Developer
            </p>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}