import { useState } from "react";
import { motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

export default function GiftBox() {
  const { unlock } = useAchievements();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) unlock("giftOpened", achievements.giftOpened);
    setOpen(true);
  };

  return (
    <button onClick={handleOpen} aria-label="Deschide cadoul" style={{ position: "relative", width: 150, height: 170 }}>
      {/* confetti burst */}
      {open &&
        Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
            animate={{
              x: (Math.random() - 0.5) * 220,
              y: -60 - Math.random() * 120,
              opacity: 0,
              scale: 1,
              rotate: Math.random() * 360,
            }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "50%",
              top: 30,
              width: 8,
              height: 8,
              background: ["#FF8F6B", "#FFC857", "#8FB89D", "#C68FB8"][i % 4],
              borderRadius: 2,
            }}
          />
        ))}

      {/* lid */}
      <motion.div
        animate={open ? { y: -60, rotate: -18, opacity: 0 } : { y: 0, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
        style={{
          position: "absolute",
          top: 30,
          left: -6,
          right: -6,
          height: 40,
          background: "var(--sage)",
          borderRadius: 8,
          zIndex: 3,
          boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
        }}
      />
      {/* box */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#a8cdb4",
          borderRadius: "0 0 10px 10px",
          zIndex: 1,
        }}
      />
      {open && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            position: "absolute",
            top: -10,
            left: "35%",
            transform: "translateX(-50%)",
            fontSize: "2.2rem",
            zIndex: 3,
          }}
        >
          🧁
        </motion.span>
      )}
      {/* ribbon */}
      <div
        style={{
          position: "absolute",
          top: 30,
          bottom: 0,
          left: "50%",
          width: 14,
          transform: "translateX(-50%)",
          background: "var(--coral)",
          zIndex: 4,
          opacity: open ? 0.4 : 1,
          transition: "opacity 0.4s",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: -26,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--plum)",
          opacity: 0.7,
          whiteSpace: "nowrap",
        }}
      >
        {open ? "La multi ani, multa iubire de la parinti prieteni si mine" : "Apasa sa deschizi"}
      </span>
    </button>
  );
}
