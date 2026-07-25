import { motion } from "framer-motion";
import ParticleField from "../components/ParticleField";
import MoonEasterEgg from "../components/finale/MoonEasterEgg";
import ConstellationHeart from "../components/finale/ConstellationHeart";
import HiddenCat from "../components/finale/HiddenCat";
import MusicPlayer from "../components/finale/MusicPlayer";

export default function Finale() {
  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(180deg, var(--night) 0%, var(--night-deep) 100%)",
        color: "var(--white)",
      }}
    >
      <ParticleField count={30} variant="star" color="#fff6e0" />
      <ParticleField count={16} variant="petal" color="#ffb199" />
      <MoonEasterEgg />
      <ConstellationHeart />
      <HiddenCat />
      <MusicPlayer />

      <div style={{ position: "relative", zIndex: 4, textAlign: "center", maxWidth: 560 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="eyebrow"
          style={{ background: "rgba(255,255,255,0.12)", color: "var(--gold)" }}
        >
          Momentul culminant haha
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", margin: "1rem 0" }}
        >
          Uita-te la cer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ opacity: 0.75, fontSize: "0.95rem" }}
        >
         
        </motion.p>
      </div>
    </section>
  );
}
