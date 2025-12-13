import useGameData from "./store/useGameData";
import GamePanel from "./components/GamePanel/GamePanel";
import ChossingEdition from "./components/ChossingEdition/ChoosingEdition";
import GameRules from "./components/GameRules/GameRules";

export default function App() {
  const isChoosed = useGameData((state) => state.isChoosed);
  const showRules = useGameData((state) => state.showRules);
  const updateShowRules = useGameData((state) => state.updateShowRules);

  return (
    <>
      {isChoosed ? <GamePanel /> : <ChossingEdition />}{" "}
      {showRules && <GameRules onLoadRules={updateShowRules} />}
    </>
  );
}
