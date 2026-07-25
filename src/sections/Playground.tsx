import { motion } from "framer-motion";
import ClickableStars from "../components/playground/ClickableStars";
import Balloons from "../components/playground/Balloons";
import Envelope from "../components/playground/Envelope";
import GiftBox from "../components/playground/GiftBox";
import FloatingHearts from "../components/playground/FloatingHearts";
import Flowers from "../components/playground/Flowers";
import { tooltipJokes } from "../config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Block({ title, tip, children }: { title: string; tip: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="glass"
      style={{
        borderRadius: 24,
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontSize: "1.3rem", color: "var(--plum-deep)" }}>{title}</h3>
      <div style={{ width: "100%" }}>{children}</div>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", opacity: 0.55 }}>{tip}</p>
    </motion.div>
  );
}

export default function Playground() {
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--cream-deep) 100%)" }}
    >
      <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="eyebrow">
        Have fun
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", color: "var(--plum-deep)", margin: "1rem 0 3rem", textAlign: "center" }}
      >
        Fii curioasa
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          maxWidth: 1100,
          width: "100%",
        }}
      >
        <Block title="Pune o dorinta si apasa" tip={tooltipJokes[0]}>
          <ClickableStars />
        </Block>
        <Block title="Sparge-le (merita)" tip={tooltipJokes[1]}>
          <Balloons />
        </Block>
        <Block title="O mica scrisoare(cea reala cand ne vedem)" tip={tooltipJokes[2]}>
          <Envelope />
        </Block>
        <Block title="Pentru tine" tip={tooltipJokes[3]}>
          <GiftBox />
        </Block>
        <Block title="Prinde inimile" tip={tooltipJokes[4]}>
          <FloatingHearts />
        </Block>
        <Block title="Floricele pentru aplicatia ta :)" tip="pe toate nu musca">
          <Flowers />
        </Block>
      </div>
    </section>
  );
}
