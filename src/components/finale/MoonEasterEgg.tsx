import { useState } from "react";
import { motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

const FACES = ["🌕", "💙", "🫶🏻", "💜", "🥹","🙃","🥺"];

export default function MoonEasterEgg() {
  const { unlock } = useAchievements();
  const [faceIndex, setFaceIndex] = useState(0);

  const handleClick = () => {
    unlock("moonClicked", achievements.moonClicked);
    setFaceIndex((i) => (i + 1) % FACES.length);
  };

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Nu ti se pare ca ceva e ciudat la luna?"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      style={{
        position: "absolute",
        top: "8%",
        right: "10%",
        fontSize: "4.5rem",
        filter: "drop-shadow(0 0 30px rgba(255,240,200,0.5))",
        zIndex: 2,
      }}
    >
      {faceIndex === 0 ? "🌕" : FACES[faceIndex]}
    </motion.button>
  );
}
