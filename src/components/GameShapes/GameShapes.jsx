import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";

export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);
  return (
    <main className=" pt-[4rem]">
      <section className="relative max-w-100 flex flex-wrap justify-center gap-10">
        {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      </section>
    </main>
  );
}
