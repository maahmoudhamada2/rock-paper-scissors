import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);
  return (
    <main
      className={clsx(
        `relative flex justify-center flex-1`,
        battleStarted ? "pt-[4rem] items-start" : "items-center"
      )}>
      <section
        className={clsx(
          `max-w-[27rem] flex flex-wrap justify-center items-center gap-x-[3rem]`,
          battleStarted ? "gap-y-[5rem]" : "gap-y-[2.5rem]"
        )}>
        {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      </section>
    </main>
  );
}
