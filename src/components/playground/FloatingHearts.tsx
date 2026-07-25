import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

export default function FloatingHearts() {
  const { unlock } = useAchievements();
  const hearts = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        id: i,
        left: 6 + Math.random() * 88,
        delay: Math.random() * 5,
        duration: 7 + Math.random() * 5,
        size: 22 + Math.random() * 20,
      })),
    [],
  );
  const [caught, setCaught] = useState<Record<number, boolean>>({});

  const catchHeart = (id: number) => {
    setCaught((c) => ({ ...c, [id]: true }));
    unlock("heartCaught", achievements.heartCaught);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: 320, overflow: "hidden" }}>
      {hearts.map((h) =>
        caught[h.id] ? null : (
          <motion.button
            key={h.id}
            aria-label="Catch the heart"
            onClick={() => catchHeart(h.id)}
            initial={{ y: 320, opacity: 0 }}
            animate={{ y: -40, opacity: [0, 1, 1, 0] }}
            transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.3 }}
            style={{
              position: "absolute",
              left: `${h.left}%`,
              fontSize: h.size,
              lineHeight: 1,
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.12))",
            }}
          >
            ❤️
          </motion.button>
        ),
      )}
      <AnimatePresence>
        {Object.keys(caught).length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--plum)",
              opacity: 0.7,
            }}
          >
            caught {Object.keys(caught).length} / {hearts.length}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
