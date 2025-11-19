import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);
  return (
    <main className="flex-1 flex items-center">
      <section className="max-w-[20rem] flex flex-wrap justify-center gap-6">
        {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      </section>
    </main>
  );
}
