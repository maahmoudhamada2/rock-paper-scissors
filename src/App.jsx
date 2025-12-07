import Header from "./components/Header/Header";
import GameShapes from "./components/GameShapes/GameShapes";
import Footer from "./components/Footer/Footer";
import GameRules from "./components/GameRules/GameRules";
import useGameData from "./store/useGameData";
import ChoosingVersion from "./ChoosingVersion";

export default function App() {
  const showRules = useGameData((state) => state.showRules);
  const updateShowRules = useGameData((state) => state.updateShowRules);

  return (
    <>
      <article className="overflow-y-auto overflow-x-hidden h-screen flex flex-col items-center p-4">
        {/* <Header />
        <GameShapes />
        <Footer onLoadRules={updateShowRules} /> */}
        <ChoosingVersion />
      </article>
      {showRules && <GameRules onLoadRules={updateShowRules} />}
    </>
  );
}
