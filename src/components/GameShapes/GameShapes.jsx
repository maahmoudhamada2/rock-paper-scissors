import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <main className=" flex-1 flex items-center">
      <div className="w-auto max-w-[18rem] grid grid-cols-4 gap-8 ">
        <PreBattlePhase />
      </div>
    </main>
  );
}
