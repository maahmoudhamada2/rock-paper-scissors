import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <main className="w-full flex-1 flex justify-center items-center md:p-4 ">
      {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
    </main>
  );
}
