import Header from "./components/Header/Header";
import GameShapes from "./components/GameShapes/GameShapes";
import Footer from "./components/Footer/Footer";
import GameRules from "./components/GameRules/GameRules";
import useGameData from "./store/useGameData";

export default function App() {
  const showRules = useGameData((state) => state.showRules);
  const updateShowRules = useGameData((state) => state.updateShowRules);

  return (
    <>
      <article className="min-h-screen flex flex-col p-4">
        <Header />
        <GameShapes />
        <Footer onLoadRules={updateShowRules} />
      </article>
      {showRules && <GameRules onLoadRules={updateShowRules} />}
    </>
  );
}
