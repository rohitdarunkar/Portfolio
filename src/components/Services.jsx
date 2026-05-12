import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Laptop() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y =
      state.mouse.x * 0.5;

    mesh.current.rotation.x =
      state.mouse.y * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>

      <mesh ref={mesh}>

        <boxGeometry args={[3, 2, 0.2]} />

        <meshStandardMaterial color="#38BDF8" />

      </mesh>

    </Float>
  );
}

export default function Services() {
  return (
    <section className="min-h-screen snap-start flex items-center px-10 md:px-24 py-32">

      <div className="grid md:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-6xl font-bold mb-12">
            What I Build
          </h2>

          <div className="space-y-6">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">

              <h3 className="text-2xl font-bold">
                MERN Stack Applications
              </h3>

              <p className="text-gray-400 mt-2">
                12+ Projects
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">

              <h3 className="text-2xl font-bold">
                React Frontend Systems
              </h3>

              <p className="text-gray-400 mt-2">
                8+ Projects
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">

              <h3 className="text-2xl font-bold">
                Backend APIs & Auth
              </h3>

              <p className="text-gray-400 mt-2">
                6+ Systems Built
              </p>

            </div>

          </div>

          <div className="flex gap-16 mt-14">

            <div>
              <h1 className="text-5xl font-bold text-[#38BDF8]">
                25+
              </h1>

              <p className="text-gray-400 mt-2">
                Total Projects
              </p>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-[#38BDF8]">
                10+
              </h1>

              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[500px]"
        >

          <Canvas camera={{ position: [0, 0, 5] }}>

            <ambientLight intensity={1.5} />

            <directionalLight position={[2, 2, 2]} />

            <pointLight
              position={[0, 0, 0]}
              intensity={4}
              color="#38BDF8"
            />

            <Laptop />

          </Canvas>

        </motion.div>

      </div>

    </section>
  );
}