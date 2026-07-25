import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AchievementCtx = {
  unlock: (id: string, label: string) => void;
  unlockedCount: number;
};

const Ctx = createContext<AchievementCtx | null>(null);

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const [queue, setQueue] = useState<{ id: string; label: string; key: number }[]>([]);
  const seen = useRef<Set<string>>(new Set());
  const keyRef = useRef(0);

  const unlock = useCallback((id: string, label: string) => {
    if (seen.current.has(id)) return;
    seen.current.add(id);
    keyRef.current += 1;
    setQueue((q) => [...q, { id, label, key: keyRef.current }]);
    window.setTimeout(() => {
      setQueue((q) => q.slice(1));
    }, 3200);
  }, []);

  return (
    <Ctx.Provider value={{ unlock, unlockedCount: seen.current.size }}>
      {children}
      <div className="achievement-stack" aria-live="polite">
        <AnimatePresence>
          {queue.map((item) => (
            <motion.div
              key={item.key}
              className="achievement-toast"
              initial={{ x: 60, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 60, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {item.label}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <style>{`
        .achievement-stack {
          position: fixed;
          top: 1.25rem;
          right: 1.25rem;
          z-index: 500;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          pointer-events: none;
        }
        .achievement-toast {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: rgba(59, 36, 62, 0.92);
          color: var(--white);
          padding: 0.65rem 1rem;
          border-radius: 12px;
          box-shadow: var(--shadow-lift);
          max-width: 260px;
        }
        @media (max-width: 640px) {
          .achievement-stack { top: auto; bottom: 1rem; right: 1rem; left: 1rem; }
          .achievement-toast { max-width: none; }
        }
      `}</style>
    </Ctx.Provider>
  );
}

export function useAchievements() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAchievements must be used within AchievementsProvider");
  return ctx;
}
