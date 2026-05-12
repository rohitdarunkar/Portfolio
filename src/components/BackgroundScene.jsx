import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Shape() {
  return (
    <mesh>
      <torusKnotGeometry args={[1.5, 0.5, 200, 32]} />

      <meshStandardMaterial
        color="#38BDF8"
        wireframe
      />
    </mesh>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 opacity-30">

      <Canvas camera={{ position: [0, 0, 8] }}>

        <ambientLight intensity={1.5} />

        <directionalLight position={[2, 2, 2]} />

        <pointLight
          position={[0, 0, 0]}
          intensity={4}
          color="#38BDF8"
        />

        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Shape />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />

      </Canvas>

    </div>
  );
}