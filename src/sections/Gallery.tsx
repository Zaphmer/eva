import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Polaroid from "../components/gallery/Polaroid";
import Lightbox from "../components/gallery/Lightbox";
import { galleryNotes, galleryPhotos, type GalleryPhoto } from "../config";

export default function Gallery() {
  const [active, setActive] = useState<{ photo: GalleryPhoto; caption: string } | null>(null);

  const items = useMemo(
    () =>
      galleryPhotos.map((photo, i) => ({
        photo,
        caption: photo.caption ?? galleryNotes[i % galleryNotes.length],
        rotation: photo.rotation ?? ((i * 37) % 11) - 5,
      })),
    [],
  );

  return (
    <section className="section" style={{ background: "var(--cream)", minHeight: "auto", paddingBottom: "8rem" }}>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">
        Avem un contract 
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", color: "var(--plum-deep)", margin: "1rem 0 3rem", textAlign: "center" }}
      >
        O tona de amintiri
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.75rem",
          justifyContent: "center",
          maxWidth: 1100,
        }}
      >
        {items.map((item, i) => (
          <Polaroid
            key={i}
            index={i}
            photo={item.photo}
            caption={item.caption}
            rotation={item.rotation}
            onOpen={() => setActive({ photo: item.photo, caption: item.caption })}
          />
        ))}
      </div>

      <p style={{ marginTop: "2.5rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", opacity: 0.5, textAlign: "center", maxWidth: 420 }}>
        (hello iubito, aici sunt niste momente dragute cu noi)
      </p>

      <Lightbox photo={active?.photo ?? null} caption={active?.caption ?? ""} onClose={() => setActive(null)} />
    </section>
  );
}
