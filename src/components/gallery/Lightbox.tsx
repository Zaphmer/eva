import { AnimatePresence, motion } from "framer-motion";
import type { GalleryPhoto } from "../../config";

export default function Lightbox({
  photo,
  caption,
  onClose,
}: {
  photo: GalleryPhoto | null;
  caption: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(27, 20, 40, 0.75)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <motion.div
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--white)",
              padding: "1rem 1rem 1.6rem",
              borderRadius: 10,
              maxWidth: "min(90vw, 520px)",
            }}
          >
            <img src={photo.src} alt={caption} style={{ width: "100%", borderRadius: 6, display: "block" }} />
            <p style={{ textAlign: "center", marginTop: "0.8rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--plum)" }}>
              {caption}
            </p>
            <button
              onClick={onClose}
              className="btn btn-ghost"
              style={{ display: "block", margin: "1rem auto 0", fontSize: "0.85rem", padding: "0.5rem 1.2rem" }}
            >
              close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
