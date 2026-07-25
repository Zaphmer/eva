import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { playlist } from "../../config";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playlist.length === 0) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio
      .play()
      .then(() => {
        setPlaying(true);
        // gentle fade-in
        let v = 0;
        const fade = window.setInterval(() => {
          v += 0.05;
          audio.volume = Math.min(v, 0.6);
          if (v >= 0.6) window.clearInterval(fade);
        }, 120);
      })
      .catch(() => setNeedsTap(true));
  }, []);

  const startWithTap = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;
    audio.play();
    setPlaying(true);
    setNeedsTap(false);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  if (playlist.length === 0) return null;

  return (
    <>
      <audio ref={audioRef} src={playlist[0].src} loop />
      {needsTap && !playing && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={startWithTap}
          className="btn"
          style={{ position: "fixed", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 300 }}
        >
          🎵 tap for music
        </motion.button>
      )}
      {playing && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute music" : "Mute music"}
          className="glass"
          style={{
            position: "fixed",
            bottom: "1.25rem",
            right: "1.25rem",
            zIndex: 300,
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}
    </>
  );
}
