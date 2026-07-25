import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

export default function ClickableStars() {
  const { unlock } = useAchievements();
  const stars = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 4 + ((i * 37) % 92),
        top: 6 + ((i * 53) % 80),
        size: 16 + (i % 4) * 6,
      })),
    [],
  );
  const clickCount = useRef(0);
  const [secretShown, setSecretShown] = useState(false);

  const handleClick = () => {
    unlock("firstStar", achievements.firstStar);
    clickCount.current += 1;
    if (clickCount.current === 5 && !secretShown) {
      unlock("fiveClicks", achievements.fiveClicks);
      setSecretShown(true);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: 260 }}>
      {stars.map((s) => (
        <motion.button
          key={s.id}
          aria-label="A tiny star"
          onClick={handleClick}
          whileHover={{ scale: 1.4, rotate: 20 }}
          whileTap={{ scale: 0.8 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2 + (s.id % 3), repeat: Infinity }}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: s.size,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 6px rgba(255,200,87,0.6))",
          }}
        >
          ✦
        </motion.button>
      ))}
      <AnimatePresence>
        {secretShown && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--plum)",
              background: "rgba(255,255,255,0.6)",
              padding: "0.5rem 0.9rem",
              borderRadius: 10,
              whiteSpace: "nowrap",
            }}
          >
            okay you found the secret: I made this whole thing myself. no template. just you.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
