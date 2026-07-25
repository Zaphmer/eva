import { useRef } from "react";
import { AchievementsProvider } from "./hooks/useAchievements";
import DuckCompanion from "./components/DuckCompanion";
import Intro from "./sections/Intro";
import Playground from "./sections/Playground";
import Cake from "./sections/Cake";
import Gallery from "./sections/Gallery";
import Finale from "./sections/Finale";
import Ending from "./sections/Ending";

export default function App() {
  const playgroundRef = useRef<HTMLDivElement>(null);
  const finaleRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AchievementsProvider>
      <DuckCompanion />
      <Intro onEnter={() => scrollTo(playgroundRef)} />
      <div ref={playgroundRef}>
        <Playground />
      </div>
      <Cake onCelebrated={() => scrollTo(finaleRef)} />
      <Gallery />
      <div ref={finaleRef}>
        <Finale />
      </div>
      <Ending />
    </AchievementsProvider>
  );
}
