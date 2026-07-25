import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAchievements } from "../hooks/useAchievements";
import { achievements } from "../config";

const CANDLE_COUNT = 5;

function Candle({ lit, index }: { lit: boolean; index: number }) {
  return (
    <div style={{ position: "relative", width: 10, height: 46, margin: "0 6px" }}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(180deg, #fff, ${["#FF8F6B", "#FFC857", "#8FB89D", "#C68FB8", "#7EC1D6"][index % 5]})`,
          borderRadius: 4,
        }}
      />
      <AnimatePresence>
        {lit && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.3 }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)" }}
          >
            <motion.div
              animate={{ scaleY: [1, 1.15, 0.95, 1], scaleX: [1, 0.9, 1.05, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              style={{
                width: 10,
                height: 16,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                background: "radial-gradient(circle at 50% 70%, #fff59a, #ffb347 70%, transparent)",
                filter: "blur(0.3px)",
                boxShadow: "0 0 10px 3px rgba(255,180,60,0.6)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Cake({ onCelebrated }: { onCelebrated: () => void }) {
  const { unlock } = useAchievements();
  const [litCount, setLitCount] = useState(CANDLE_COUNT);
  const [celebrating, setCelebrating] = useState(false);

  const blow = () => {
    if (litCount === 0) return;
    setLitCount(0);
    unlock("candlesBlown", achievements.candlesBlown);
    setCelebrating(true);
    window.setTimeout(() => {
      onCelebrated();
    }, 2400);
  };

  return (
    <section className="section" style={{ background: "linear-gradient(180deg, var(--cream-deep) 0%, #ffd9b8 100%)" }}>
      <p className="eyebrow">Pune-ti o dorinta</p>
      <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", color: "var(--plum-deep)", margin: "1rem 0 3rem", textAlign: "center" }}>
        Sufla in lumanari iubire
      </h2>

      <div style={{ position: "relative" }}>
        {/* confetti */}
        <AnimatePresence>
          {celebrating &&
            Array.from({ length: 40 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 500,
                  y: -200 - Math.random() * 260,
                  opacity: 0,
                  rotate: Math.random() * 500,
                }}
                transition={{ duration: 1.6 + Math.random(), ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "30%",
                  width: 9,
                  height: 9,
                  background: ["#FF8F6B", "#FFC857", "#8FB89D", "#C68FB8", "#7EC1D6"][i % 5],
                  borderRadius: i % 2 ? "50%" : 2,
                  zIndex: 5,
                }}
              />
            ))}
        </AnimatePresence>

        {/* candles */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: -8, top:37,zIndex: 2, position: "relative" }}>
          {Array.from({ length: CANDLE_COUNT }).map((_, i) => (
            <Candle key={i} lit={litCount > 0} index={i} />
          ))}
        </div>

        {/* cake */}
        <motion.button
          onClick={blow}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Blow out the candles"
          style={{ display: "block", position: "relative", zIndex: 1 }}
        >
         <svg width="280" height="190" viewBox="0 0 280 190">
 
  <ellipse cx="140" cy="175" rx="130" ry="15" fill="rgba(91,55,88,0.08)" />


  <rect x="30" y="110" width="220" height="55" rx="14" fill="#FFF0DE"/>
  <rect x="30" y="110" width="220" height="14" rx="7" fill="#FFB08A"/>

  <circle cx="48" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="70" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="92" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="114" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="136" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="158" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="180" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="202" cy="123" r="5" fill="#C68FB8"/>
  <circle cx="224" cy="123" r="5" fill="#C68FB8"/>


  <rect x="55" y="75" width="170" height="45" rx="12" fill="#FFF7ED"/>
  <rect x="55" y="75" width="170" height="12" rx="6" fill="#FFD36B"/>

  <circle cx="72" cy="87" r="4" fill="#FF8F6B"/>
  <circle cx="92" cy="87" r="4" fill="#7EC1D6"/>
  <circle cx="112" cy="87" r="4" fill="#8FB89D"/>
  <circle cx="132" cy="87" r="4" fill="#C68FB8"/>
  <circle cx="152" cy="87" r="4" fill="#FF8F6B"/>
  <circle cx="172" cy="87" r="4" fill="#7EC1D6"/>
  <circle cx="192" cy="87" r="4" fill="#8FB89D"/>
  <circle cx="212" cy="87" r="4" fill="#C68FB8"/>


  <rect x="90" y="40" width="100" height="38" rx="10" fill="#FFFDF7"/>
  <rect x="90" y="40" width="100" height="10" rx="5" fill="#FFE28A"/>

  <circle cx="108" cy="50" r="3" fill="#FF6B6B"/>
  <circle cx="124" cy="50" r="3" fill="#8FB89D"/>
  <circle cx="140" cy="50" r="3" fill="#C68FB8"/>
  <circle cx="156" cy="50" r="3" fill="#7EC1D6"/>
  <circle cx="172" cy="50" r="3" fill="#FF8F6B"/>

 
  <circle cx="110" cy="35" r="4" fill="#FF6B6B"/>
  <circle cx="140" cy="30" r="4" fill="#FF6B6B"/>
  <circle cx="170" cy="35" r="4" fill="#FF6B6B"/>

  <line x1="110" y1="35" x2="114" y2="28" stroke="#5A8F5A" stroke-width="2"/>
  <line x1="140" y1="30" x2="144" y2="23" stroke="#5A8F5A" stroke-width="2"/>
  <line x1="170" y1="35" x2="174" y2="28" stroke="#5A8F5A" stroke-width="2"/>
</svg>
        </motion.button>
      </div>

      <p style={{ marginTop: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", opacity: 0.6 }}>
        {litCount > 0 ? "Apasa" : "Bravooo"}
      </p>
    </section>
  );
}
