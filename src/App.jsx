import EditionChoosing from "./EditionChoosing/EditionChoosing";
import GameBoard from "./GameBoard/GameBoard";
import RulesModal from "./RulesModal/RulesModal";
import useGameData from "./store/useGameData";

export default function App() {
  const showRules = useGameData((state) => state.showRules);
  const toggleRules = useGameData((state) => state.toggleRules);
  const currentPhase = useGameData((state) => state.currentPhase);

  const debugState = useGameData((state) => state);
  console.log(debugState);
  return (
    <>
      {currentPhase === "editions" ? <EditionChoosing /> : <GameBoard />}
      {showRules && <RulesModal toggleRules={toggleRules} />}
    </>
  );
}
