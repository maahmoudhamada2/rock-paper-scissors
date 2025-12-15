import useGameData from "./store/useGameData";
import RulesModal from "./components/RulesModal/RulesModal";
import EditionChoosing from "./components/EditionChoosing/EditionChoosing";
import GameBoard from "./components/GameBoard/GameBoard";

export default function App() {
  const showRules = useGameData((state) => state.showRules);
  const toggleRules = useGameData((state) => state.toggleRules);
  const currentPhase = useGameData((state) => state.currentPhase);

  return (
    <>
      {currentPhase === "editions" ? <EditionChoosing /> : <GameBoard />}
      {showRules && <RulesModal toggleRules={toggleRules} />}
    </>
  );
}
