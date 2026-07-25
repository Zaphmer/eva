import { useState } from "react";
import { motion } from "framer-motion";
import { useAchievements } from "../../hooks/useAchievements";
import { achievements } from "../../config";

export default function Envelope() {
  const { unlock } = useAchievements();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) unlock("envelopeOpened", achievements.envelopeOpened);
    setOpen((o) => !o);
  };

  return (
    <button
      onClick={handleOpen}
      aria-label={open ? "Inchide scrisoarea" : "Deschide scrisoarea"}
      style={{
        position: "relative",
        width: 220,
        height: 150,
        display: "block",
      }}
    >
      {/* letter */}
      <motion.div
        initial={false}
        animate={{ y: open ? -40 : 20, opacity: open ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 16 }}
        style={{
          position: "absolute",
          left: 14,
          right: 14,
          top: 10,
          height: 110,
          background: "var(--white)",
          borderRadius: 6,
          boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
          padding: "0.75rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--plum)",
          textAlign: "left",
          zIndex: 5,
        }}
      >
        p.s. Sometimes life blesses you with a person and for me that person is you. You mean the world to me 💌
      </motion.div>

      {/* envelope body */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--coral-soft)",
          borderRadius: 10,
          boxShadow: "0 12px 26px rgba(0,0,0,0.15)",
          zIndex: 2,
        }}
      />
      {/* flap */}
      <motion.div
        initial={false}
        animate={{ rotateX: open ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 0,
          borderLeft: "110px solid transparent",
          borderRight: "110px solid transparent",
          borderTop: "75px solid var(--coral)",
          transformOrigin: "top",
          zIndex: 3,
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: -28,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--plum)",
          opacity: 0.7,
          whiteSpace: "nowrap",
        }}
      >
        {open ? "uwu" : "click"}
      </span>
    </button>
  );
}
