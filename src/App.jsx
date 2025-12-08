import Header from "./components/Header/Header";
import GameShapes from "./components/GameShapes/GameShapes";
import Footer from "./components/Footer/Footer";
import GameRules from "./components/GameRules/GameRules";
import useGameData from "./store/useGameData";
import GameEdition from "./GameEdition";

export default function App() {
  const showRules = useGameData((state) => state.showRules);
  const updateShowRules = useGameData((state) => state.updateShowRules);
  const editionChoosed = useGameData((state) => state.editionChoosed);
  return (
    <>
      <article className="overflow-y-auto overflow-x-hidden h-screen flex flex-col items-center p-4">
        {editionChoosed ? (
          <>
            <Header />
            <GameShapes />
            <Footer onLoadRules={updateShowRules} />
          </>
        ) : (
          <GameEdition />
        )}
      </article>
      {showRules && <GameRules onLoadRules={updateShowRules} />}:
    </>
  );
}
