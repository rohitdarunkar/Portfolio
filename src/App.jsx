import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import BackgroundScene from "./components/BackgroundScene";
import Skills from "./components/Skills";
import MouseGlow from "./components/MouseGlow";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      {/* LOADER */}
      <Loader />

      <div className="relative bg-[#020617] text-white overflow-hidden">

        {/* MOUSE GLOW */}
        <MouseGlow />

        {/* SCROLL BAR */}
        <ScrollProgress />

        {/* 3D BACKGROUND */}
        <BackgroundScene />

        {/* MAIN CONTENT */}
        <main className="relative z-10 h-screen overflow-y-scroll snap-y snap-proximity">

          <Navbar />

          <Hero />

          <About />

          <Projects />

          <Skills />

          <Contact />

        </main>

      </div>
    </>
  );
}