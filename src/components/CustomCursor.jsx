import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [trailPosition, setTrailPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const follow = setInterval(() => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    }, 16);

    return () => clearInterval(follow);
  }, [position]);

  return (
    <>
      {/* OUTER CURSOR */}
      <div
        style={{
          left: trailPosition.x - 20,
          top: trailPosition.y - 20,
        }}
        className="
          fixed
          z-[99999]
          w-10
          h-10
          rounded-full
          border
          border-cyan-400/40
          pointer-events-none
          backdrop-blur-sm
          transition-transform
          duration-150
        "
      />

      {/* INNER DOT */}
      <div
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
        className="
          fixed
          z-[99999]
          w-2
          h-2
          rounded-full
          bg-pink-400
          pointer-events-none
        "
      />
    </>
  );
}