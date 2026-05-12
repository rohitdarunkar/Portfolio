import { motion } from "framer-motion";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Firebase",
  "Git & GitHub",
  "REST APIs",
  "Responsive Design",
];

const moreProjects = [
  {
    name: "Pincode Lookup App",
    github: "https://github.com/rohitdarunkar/pincode-lookup-app",
    live: "https://pincode-lookup-app-mauve.vercel.app/",
  },

  {
    name: "Signup Profile",
    github: "https://github.com/rohitdarunkar/Signup-Profile",
    live: "https://signup-profile-zeta.vercel.app/",
  },

  {
    name: "Crypto Table",
    github: "https://github.com/rohitdarunkar/crypto-table",
    live: "https://crypto-table-sage.vercel.app/",
  },

  {
    name: "Signup Form",
    github: "https://github.com/rohitdarunkar/signup-form",
    live: "https://signup-form-inky-tau.vercel.app/",
  },

  {
    name: "Movie App",
    github: "https://github.com/rohitdarunkar/movie-app",
    live: "https://movie-app-alpha-three-18.vercel.app/",
  },

  {
    name: "NASA APOD",
    github: "https://github.com/rohitdarunkar/NASA",
    live: "https://nasa-3hv.pages.dev/",
  },

  {
    name: "Time Zone App",
    github: "https://github.com/rohitdarunkar/Time-Zone",
    live: "https://time-zone.pages.dev/",
  },

  {
    name: "Searching Post Offices",
    github: "https://github.com/rohitdarunkar/Searching-Post-Offices",
    live: "https://searching-post-offices.pages.dev/",
  },

  {
    name: "Todo List",
    github: "https://github.com/rohitdarunkar/Todo-list",
    live: "https://displayarrayfetchedfromapi.pages.dev/",
  },

  {
    name: "Display Array From API",
    github: "https://github.com/rohitdarunkar/displayarrayfetchedfromAPI",
    live: "https://displayarrayfetchedfromapi.pages.dev/",
  },

  {
    name: "Coin Tracker",
    github: "https://github.com/rohitdarunkar/Coin-tracker",
    live: "https://coin-tracker-e32.pages.dev/",
  },

  {
    name: "Sports Day",
    github: "https://github.com/rohitdarunkar/Sports-day",
    live: "https://sports-day.pages.dev/",
  },

  {
    name: "Signup Page HTML CSS JS",
    github: "https://github.com/rohitdarunkar/Signup-page-HTML-CSS-JS-",
    live: "https://signup-page-html-css-js.pages.dev/",
  },

  {
    name: "Counter App",
    github: "https://github.com/rohitdarunkar/counter",
    live: "https://counter-4lf.pages.dev/",
  },

  {
    name: "John And Friends",
    github: "https://github.com/rohitdarunkar/John_and_friends",
    live: "https://john-and-friends.pages.dev/",
  },

  {
    name: "Instagram Clone",
    github: "https://github.com/rohitdarunkar/Instagram_clone",
    live: "https://admirable-entremet-64b2bf.netlify.app/",
  },
];

export default function Skills() {
  return (
    <div id="skills">

      {/* SKILLS PAGE */}
      <section
        className="
          min-h-screen
          snap-start
          bg-[#070014]
          px-14
          flex
          items-center
        "
      >

        <div className="max-w-7xl w-full mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-cyan-400
              tracking-[0.35em]
              uppercase
              text-sm
              mb-6
            "
          >
            Skills & Technologies
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-7xl
              font-bold
              leading-tight
              mb-16
            "
          >
            Technologies I{" "}
            <span className="text-cyan-400">
              work with.
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  px-8
                  py-10
                  text-center
                  text-xl
                  font-semibold
                  backdrop-blur-md
                  hover:border-cyan-400
                  transition
                "
              >
                {skill}
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* MORE PROJECTS PAGE */}
      <section
        className="
          h-screen
          snap-start
          bg-[#120018]
          px-14
          py-24
          overflow-hidden
          flex
          flex-col
        "
      >

        <div className="mb-12">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-pink-400
              tracking-[0.35em]
              uppercase
              text-sm
              mb-5
            "
          >
            More Projects
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-7xl
              font-bold
              leading-tight
            "
          >
            Additional{" "}
            <span className="text-pink-400">
              Work.
            </span>
          </motion.h2>

        </div>

        {/* SCROLLABLE PROJECT LIST */}
        <div
          className="
            flex-1
            overflow-y-auto
            pr-4
            space-y-8
            custom-scroll
          "
        >

          {moreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.01,
              }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                px-10
                py-8
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-6
                backdrop-blur-md
              "
            >

              <h3 className="text-3xl font-semibold">
                {project.name}
              </h3>

              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    bg-pink-400
                    text-black
                    px-6
                    py-3
                    rounded-2xl
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  View
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    border
                    border-white/10
                    px-6
                    py-3
                    rounded-2xl
                    hover:border-pink-400
                    transition
                  "
                >
                  GitHub
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}