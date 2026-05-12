import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: "400px",
          height: "400px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(34,211,238,0) 70%)",
          filter: "blur(40px)",
          transition: "all 0.15s linear",
        }}
      />
    </div>
  );
}