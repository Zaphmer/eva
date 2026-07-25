import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

const COLORS = ["#FF8F6B", "#FFC857", "#8FB89D", "#C68FB8", "#7EC1D6"];

export default function Balloons() {
  const { unlock } = useAchievements();
  const [popped, setPopped] = useState<Record<number, boolean>>({});

  const pop = (i: number) => {
    setPopped((p) => ({ ...p, [i]: true }));
    unlock("firstBalloon", achievements.firstBalloon);
  };

  return (
    <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
      {COLORS.map((color, i) => (
        <div key={i} style={{ width: 70, height: 140, position: "relative" }}>
          <AnimatePresence mode="wait">
            {!popped[i] ? (
              <motion.button
                key="balloon"
                aria-label="Pop the balloon"
                onClick={() => pop(i)}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.85 }}
                style={{
                  width: 70,
                  height: 90,
                  borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%",
                  background: `radial-gradient(circle at 30% 30%, ${color}, ${color}cc)`,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: -34,
                    left: "50%",
                    width: 1,
                    height: 34,
                    background: "rgba(91,55,88,0.35)",
                  }}
                />
              </motion.button>
            ) : (
              <motion.div
                key="pop"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                💥
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
