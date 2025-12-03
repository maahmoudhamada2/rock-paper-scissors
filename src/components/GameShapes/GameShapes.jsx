import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <main className="w-full pt-[1rem] flex-1 flex items-center justify-center md:pt-[4rem]">
      {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
    </main>
  );
}
