import { motion } from "framer-motion";
import { site } from "../config";

export default function Ending() {
  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(180deg, var(--night-deep) 0%, var(--plum-deep) 55%, var(--coral) 130%)",
        color: "var(--white)",
        minHeight: "80vh",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 600, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {site.endingLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: i * 0.3 }}
            style={{
              fontFamily: i === 0 ? "var(--font-display)" : "var(--font-body)",
              fontSize: i === 0 ? "clamp(1.8rem, 6vw, 3rem)" : "1.1rem",
              opacity: i === 0 ? 1 : 0.85,
            }}
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", marginTop: "2rem" }}
        >
          (Promit ca rata nu judeca, insa tu vei judeca pe viitor)
        </motion.p>
      </div>
    </section>
  );
}
