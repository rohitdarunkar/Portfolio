import { motion } from "framer-motion";

import blogspace from "../images/blogspace.png";
import financeTracker from "../images/finance-tracker.png";
import socialmedia from "../images/Screenshot (79).png";

const projects = [
  {
    title: "Full Stack Blog Application",

    description:
      "A complete MERN blogging platform with authentication, CRUD functionality, responsive UI, and MongoDB integration.",

    image: blogspace,

    tech: ["React", "Node.js", "MongoDB"],

    live: "https://mern-blogging-app-ebon.vercel.app",

    backend: "https://mern-blogging-app-8fhs.onrender.com/",

    github: "https://github.com/rohitdarunkar/MERN-blogging-app",
  },

  {
    title: "Finance Tracker Dashboard",

    description:
      "Interactive finance tracking dashboard with analytics, charts, income tracking, and expense management.",

    image: financeTracker,

    tech: ["React", "Chart.js", "Firebase"],

    live: "https://finance-tracker-dusky-two.vercel.app/login",

    github: "https://github.com/rohitdarunkar/finance-tracker",
  },

  {
    title: "Social Media Application",

    description:
      "A modern social media platform with authentication, post creation, likes, comments, user profiles, and responsive design.",

    image: socialmedia,

    tech: ["React", "Node.js", "MongoDB"],

    live: "https://social-media-app-eight-delta.vercel.app/",

    github: "https://github.com/rohitdarunkar/social-media-app",
  },
];

export default function Projects() {
  return (
    <>
      {projects.map((project, index) => (
        <section
          id={index === 0 ? "projects" : ""}
          key={index}
          className="
            min-h-screen
            snap-start
            flex
            items-center
            justify-center
            bg-[#120018]
            px-14
            overflow-hidden
          "
        >
          <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                rotateY: 10,
                rotateX: -5,
                scale: 1.03,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="perspective-[1200px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[520px]
                  object-cover
                  rounded-[30px]
                  shadow-2xl
                  transition-all
                  duration-300
                "
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="text-pink-400 tracking-[0.35em] uppercase text-sm mb-5">
                Featured Project
              </p>

              <h2 className="text-6xl font-bold leading-tight mb-8">
                {project.title}
              </h2>

              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  text-gray-300
                  text-lg
                  leading-relaxed
                  mb-8
                "
              >
                {project.description}
              </div>

              {/* TECH */}
              <div className="flex gap-4 flex-wrap mb-10">

                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-[#1E102B]
                      border
                      border-white/10
                      text-cyan-300
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex gap-5 flex-wrap">

                {/* LIVE DEMO */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    bg-pink-400
                    text-black
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  Live Demo
                </a>

                {/* BACKEND ONLY FOR BLOG APP */}
                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-cyan-400
                      text-black
                      px-8
                      py-4
                      rounded-2xl
                      font-semibold
                      hover:scale-105
                      transition
                    "
                  >
                    Backend
                  </a>
                )}

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    border
                    border-white/10
                    px-8
                    py-4
                    rounded-2xl
                    hover:border-pink-400
                    transition
                  "
                >
                  GitHub
                </a>

              </div>

            </motion.div>

          </div>
        </section>
      ))}
    </>
  );
}