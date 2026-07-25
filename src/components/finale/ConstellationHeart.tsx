import { useState } from "react";
import { motion } from "framer-motion";

// Points roughly tracing a heart shape, in a 300x260 viewBox
const POINTS = [
  [150, 60], [110, 20], [60, 30], [30, 70], [35, 120],
  [80, 170], [150, 240], [220, 170], [265, 120], [270, 70],
  [240, 30], [190, 20],
];

export default function ConstellationHeart() {
  const [formed, setFormed] = useState(false);

  return (
    <button
      onClick={() => setFormed((f) => !f)}
      aria-label="Trace the stars into a heart"
      style={{ position: "absolute", left: "8%", top: "20%", width: 300, height: 260, zIndex: 2 }}
    >
      <svg viewBox="0 0 300 260" width="100%" height="100%">
        {formed &&
          POINTS.map(([x, y], i) => {
            const [nx, ny] = POINTS[(i + 1) % POINTS.length];
            return (
              <motion.line
                key={i}
                x1={x}
                y1={y}
                x2={nx}
                y2={ny}
                stroke="#ffe9c2"
                strokeWidth={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              />
            );
          })}
        {POINTS.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={formed ? 3.5 : 2.5}
            fill="#fff6e0"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity }}
          />
        ))}
      </svg>
    </button>
  );
}
