import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleField from "../components/ParticleField";
import { loadingJokes, site } from "../config";

export default function Intro({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<"loading" | "ready">("loading");
  const [jokeIndex, setJokeIndex] = useState(0);

  useEffect(() => {
    const jokeTimer = window.setInterval(() => {
      setJokeIndex((i) => (i + 1) % loadingJokes.length);
    }, 900);
    const doneTimer = window.setTimeout(() => setPhase("ready"), 2700);
    return () => {
      window.clearInterval(jokeTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(180deg, #2b2050 0%, #4a2f5c 45%, #ff8f6b 100%)",
        color: "var(--white)",
      }}
    >
      <ParticleField count={40} variant="star" color="#ffe9c2" />

      {/* drifting clouds */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ x: "-20vw" }}
          animate={{ x: "120vw" }}
          transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear", delay: i * 6 }}
          style={{
            position: "absolute",
            top: `${15 + i * 22}%`,
            width: 160,
            height: 60,
            opacity: 0.12,
            background: "white",
            borderRadius: 999,
            filter: "blur(6px)",
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 640 }}>
        {phase === "loading" ? (
          <motion.p
            key={jokeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
              opacity: 0.85,
            }}
          >
            {loadingJokes[jokeIndex]}
          </motion.p>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="eyebrow"
              style={{ background: "rgba(255,255,255,0.14)", color: "var(--gold)" }}
            >
              La multi ani
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              style={{ fontSize: "clamp(2.4rem, 7vw, 4.2rem)", margin: "1rem 0 0.5rem" }}
            >
              {site.introGreeting}
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2.5rem" }}
            >
              {site.introSubtitle}
            </motion.p>
            <motion.button
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="btn"
              onClick={onEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: "var(--coral)", fontSize: "1.05rem" }}
            >
              {site.ctaLabel}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
