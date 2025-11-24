import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <main>
      <div>{battleStarted ? <BattlePhase /> : <PreBattlePhase />}</div>
    </main>
  );
}
