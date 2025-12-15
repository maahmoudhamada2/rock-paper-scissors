import GameBoard from "./GameBoard/GameBoard";
import RulesModal from "./RulesModal/RulesModal";
import useGameData from "./store/useGameData";

export default function App() {
  const showRules = useGameData((state) => state.showRules);
  const toggleRules = useGameData((state) => state.toggleRules);
  return (
    <>
      <GameBoard />
      {showRules && <RulesModal toggleRules={toggleRules} />}
    </>
  );
}
