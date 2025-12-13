import useGameData from "./store/useGameData";
import GamePanel from "./components/GamePanel/GamePanel";
import ChossingEdition from "./components/ChossingEdition/ChoosingEdition";

export default function App() {
  const isChoosed = useGameData((state) => state.isChoosed);
  return isChoosed ? <GamePanel /> : <ChossingEdition />;
}
