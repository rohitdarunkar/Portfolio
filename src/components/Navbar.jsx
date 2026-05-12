import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#020617]/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-24 py-5">

        {/* LOGO */}
        <a
          href="#home"
          className="text-4xl font-black tracking-tight"
        >
          Rohit<span className="text-pink-500">.</span>
        </a>

        {/* NAV LINKS */}
        <div className="flex gap-10 text-sm uppercase tracking-[0.2em]">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`
                relative
                transition
                duration-300
                ${
                  active === link.id
                    ? "text-pink-400"
                    : "text-gray-300 hover:text-cyan-400"
                }
              `}
            >
              {link.label}

              {active === link.id && (
                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-[2px]
                    bg-pink-400
                    rounded-full
                  "
                />
              )}
            </a>
          ))}

        </div>

      </div>
    </nav>
  );
}