import { motion } from "framer-motion";
import type { GalleryPhoto } from "../../config";

export default function Polaroid({
  photo,
  caption,
  rotation,
  onOpen,
  index,
}: {
  photo: GalleryPhoto;
  caption: string;
  rotation: number;
  onOpen: () => void;
  index: number;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06 }}
      whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
      style={{
        background: "var(--white)",
        padding: "0.6rem 0.6rem 2.2rem",
        borderRadius: 6,
        boxShadow: "0 14px 30px rgba(91,55,88,0.18)",
        width: 200,
        display: "inline-block",
        position: "relative",
        cursor: "zoom-in",
      }}
    >
      <img
        src={photo.src}
        loading="lazy"
        alt={caption}
        style={{ width: "100%", height: 190, objectFit: "cover", borderRadius: 3, display: "block" }}
      />
      <span
        style={{
          position: "absolute",
          bottom: 8,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          color: "var(--plum)",
          padding: "0 0.5rem",
        }}
      >
        {caption}
      </span>
    </motion.button>
  );
}
