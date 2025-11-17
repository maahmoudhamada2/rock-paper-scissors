import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";

export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);
  return (
    <main className="flex-1 pt-[4rem] sm:pt-[2rem]">
      <section className="relative max-w-100 flex flex-wrap justify-center gap-10 sm:max-w-[unset]">
        {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      </section>
    </main>
  );
}
