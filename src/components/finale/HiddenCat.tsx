import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

export default function HiddenCat() {
  const { unlock } = useAchievements();
  const [found, setFound] = useState(false);

  const reveal = () => {
    unlock("catFound", achievements.catFound);
    setFound(true);
  };

  return (
    <div style={{ position: "absolute", bottom: "6%", left: "6%", zIndex: 3 }}>
      {!found ? (
        <button
          onClick={reveal}
          aria-label="Something is hiding in the bushes"
          style={{ fontSize: "1.6rem", opacity: 0.35 }}
          title="hm, what's that?"
        >
          🌿
        </button>
      ) : (
        <AnimatePresence>
          <motion.span
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            style={{ fontSize: "2.2rem", display: "inline-block" }}
          >
            🐱
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  );
}
