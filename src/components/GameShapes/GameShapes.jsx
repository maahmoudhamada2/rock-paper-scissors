import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";

export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);
  return (
    <main>
      <section>{battleStarted ? <BattlePhase /> : <PreBattlePhase />}</section>
    </main>
  );
}
