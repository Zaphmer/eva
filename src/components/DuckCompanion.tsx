import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAchievements } from "../hooks/useAchievements";
import { achievements } from "../config";

const QUACK_LINES = [
  "quack. (that means 'happy birthday' in duck)",
  "I have no notes. This site is great.",
  "just here for the cake, honestly.",
  "10/10 waddle, would cross screen again.",
];

/**
 * A small duck that randomly waddles across the bottom of the
 * screen every so often. Click it before it leaves!
 */
export default function DuckCompanion() {
  const { unlock } = useAchievements();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    let timeout: number;
    const schedule = () => {
      const delay = 18000 + Math.random() * 22000;
      timeout = window.setTimeout(() => {
        setDirection(Math.random() > 0.5 ? 1 : -1);
        setVisible(true);
        window.setTimeout(() => setVisible(false), 7000);
        schedule();
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    unlock("duckFound", achievements.duckFound);
    setMessage(QUACK_LINES[Math.floor(Math.random() * QUACK_LINES.length)]);
    window.setTimeout(() => setMessage(null), 2200);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="A small duck. Click it."
          onClick={handleClick}
          initial={{ x: direction === 1 ? "-8vw" : "108vw" }}
          animate={{ x: direction === 1 ? "108vw" : "-8vw" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 7, ease: "linear" }}
          style={{
            position: "fixed",
            bottom: "4%",
            zIndex: 400,
            fontSize: "2.4rem",
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.15))",
            transform: direction === 1 ? "scaleX(1)" : "scaleX(-1)",
            lineHeight: 1,
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
        >
          🦆
          <AnimatePresence>
            {message && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  bottom: "120%",
                  left: "50%",
                  transform: direction === 1 ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(-1)",
                  background: "var(--plum-deep)",
                  color: "var(--white)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  padding: "0.4rem 0.6rem",
                  borderRadius: 10,
                  whiteSpace: "nowrap",
                }}
              >
                {message}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
