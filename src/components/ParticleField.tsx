import { useMemo } from "react";
import { motion } from "framer-motion";

type Props = {
  count?: number;
  variant?: "sparkle" | "star" | "petal";
  color?: string;
};

/**
 * A lightweight ambient layer of floating sparkles / stars / petals.
 * Pure CSS/SVG + Framer Motion — no canvas, so it's cheap and
 * plays nicely with GitHub Pages / static hosting.
 */
export default function ParticleField({ count = 18, variant = "sparkle", color }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 10,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 60,
      })),
    [count],
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110%", x: 0, opacity: 0 }}
          animate={{
            y: "-20%",
            x: [0, p.drift, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
          }}
        >
          {variant === "star" && (
            <svg viewBox="0 0 24 24" fill={color ?? "#FFC857"}>
              <path d="M12 0l2.6 8.4L23 11l-8.4 2.6L12 22l-2.6-8.4L1 11l8.4-2.6L12 0z" />
            </svg>
          )}
          {variant === "sparkle" && (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: color ?? "rgba(255,255,255,0.9)",
                boxShadow: `0 0 ${p.size * 1.5}px ${color ?? "rgba(255,255,255,0.8)"}`,
              }}
            />
          )}
          {variant === "petal" && (
            <svg viewBox="0 0 24 24" fill={color ?? "#FFB199"}>
              <ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(45 12 12)" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
