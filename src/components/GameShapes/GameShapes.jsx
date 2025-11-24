import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <main className="flex-1 items-center">
      <div className="grid grid-cols-4 gap-[2rem]">
        {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      </div>
    </main>
  );
}
