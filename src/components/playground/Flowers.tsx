import { useState } from "react";
import { motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

const PETAL_COLORS = ["#FF8F6B", "#FFC857", "#C68FB8", "#8FB89D"];

function Flower({ onBloom }: { onBloom: () => void }) {
  const [bloomed, setBloomed] = useState(false);
  const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];

  const handleClick = () => {
    if (!bloomed) onBloom();
    setBloomed(true);
  };

  return (
    <button onClick={handleClick} aria-label="Click to bloom" style={{ width: 60, height: 90, position: "relative" }}>
      <div style={{ position: "absolute", bottom: 0, left: "87%", width: 3, height: 50, background: "var(--sage)", transform: "translateX(-50%)" }} />
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: bloomed ? 1 : 0.3, rotate: bloomed ? 0 : -10 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 44, height: 44 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: 22,
              height: 30,
              background: color,
              borderRadius: "50%",
              opacity: 0.9,
              transformOrigin: "center 22px",
              transform: `rotate(${i * 60}deg) translateY(-10px)`,
            }}
          />
        ))}
        <div style={{ position: "absolute", inset: 0, margin: "auto", width: 14, height: 14, borderRadius: "50%", background: "var(--gold)" }} />
      </motion.div>
    </button>
  );
}

export default function Flowers() {
  const { unlock } = useAchievements();
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Flower key={i} onBloom={() => unlock("flowerBloomed", achievements.flowerBloomed)} />
      ))}
    </div>
  );
}
