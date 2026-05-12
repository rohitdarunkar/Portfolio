import { motion } from "framer-motion";
import FloatingTech from "./FloatingTech";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        h-screen
        snap-start
        flex
        items-center
        px-8
        md:px-16
        overflow-hidden
        bg-[#020617]
      "
    >

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          top-[-20%]
          left-[-10%]
          w-[600px]
          h-[600px]
          bg-pink-500/10
          blur-[140px]
          rounded-full
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]
          w-[700px]
          h-[700px]
          bg-cyan-500/10
          blur-[140px]
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          w-full
          mx-auto
          grid
          md:grid-cols-2
          gap-20
          items-center
          relative
          z-10
        "
      >

        {/* LEFT SIDE */}
        <div>

          {/* TAG */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-cyan-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-6
            "
          >
            Frontend-focused MERN Developer
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              text-[72px]
              sm:text-[90px]
              md:text-[110px]
              leading-[0.9]
              font-black
              tracking-[-5px]
              text-white
            "
          >
            Rohit
            <br />

            <span className="text-pink-400">
              Darunkar.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="
              text-gray-400
              text-lg
              md:text-2xl
              leading-relaxed
              mt-8
              max-w-2xl
            "
          >
            MERN Stack Developer focused on scalable
            applications, responsive UI, modern web
            experiences and smooth animations using
            React, Node.js and MongoDB.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-5 mt-10 flex-wrap"
          >

            {/* RESUME */}
            <MagneticButton
              href="/resume.pdf"
              className="
                bg-pink-400
                text-black
                px-8
                py-4
                rounded-2xl
                font-semibold
              "
            >
              Download Resume
            </MagneticButton>

            {/* PROJECTS */}
            <MagneticButton
              href="#projects"
              className="
                border
                border-white/20
                px-8
                py-4
                rounded-2xl
                hover:border-cyan-400
                hover:text-cyan-400
              "
            >
              View Projects
            </MagneticButton>

          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-5 mt-10"
          >

            {/* GITHUB */}
            <a
              href="https://github.com/rohitdarunkar"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-pink-400
                hover:text-pink-400
                transition
              "
            >
              <span className="font-bold text-lg">
                GH
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              <span className="font-bold text-lg">
                IN
              </span>
            </a>

          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            relative
            flex
            justify-center
            items-center
          "
        >

          {/* OUTER GLOW */}
          <div
            className="
              absolute
              w-[450px]
              h-[450px]
              rounded-full
              bg-gradient-to-br
              from-pink-500
              to-cyan-400
              opacity-20
              blur-[120px]
            "
          />

          {/* MAIN CARD */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              relative
              w-[400px]
              h-[500px]
              rounded-[50px]
              bg-[#111827]
              border
              border-white/10
              overflow-hidden
              shadow-2xl
            "
          >

            <div className="relative w-full h-full bg-[#0F172A] flex items-center justify-center">

              {/* GLOW */}
              <div
                className="
                  absolute
                  w-[300px]
                  h-[300px]
                  rounded-full
                  bg-pink-500/20
                  blur-[100px]
                "
              />

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  relative
                  w-[280px]
                  h-[320px]
                  rounded-[30px]
                  bg-[#111827]
                  border
                  border-white/10
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-2xl
                "
              >

                {/* AVATAR */}
                <div
                  className="
                    w-28
                    h-28
                    rounded-full
                    bg-gradient-to-br
                    from-pink-400
                    to-cyan-400
                    mb-8
                  "
                />

                {/* LINES */}
                <div className="space-y-4 w-[70%]">

                  <div className="h-4 rounded-full bg-white/20" />

                  <div className="h-4 rounded-full bg-pink-400/50 w-[80%]" />

                  <div className="h-4 rounded-full bg-cyan-400/40 w-[60%]" />

                </div>

              </motion.div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      <FloatingTech />

    </section>
  );
}