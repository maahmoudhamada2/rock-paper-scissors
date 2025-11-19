import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);
  return (
    <main className="flex-1 flex items-center">
      <section className="relative max-w-[20rem] flex flex-wrap justify-center gap-x-[3rem] gap-y-[2rem]">
        {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      </section>
    </main>
  );
}
