import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);
  return (
    <main className="flex-1 flex items-start pt-[5rem]">
      <section
        className={clsx(
          `relative  flex flex-wrap justify-center gap-x-[3rem]`,
          battleStarted ? "gap-y-[4rem]" : "gap-y-[2rem] max-w-[20rem]"
        )}>
        {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      </section>
    </main>
  );
}
