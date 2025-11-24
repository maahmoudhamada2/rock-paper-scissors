import useGameData from "../../store/useGameData";
import BattlePhase from "./BattlePhase";
import PreBattlePhase from "./PreBattlePhase";
import clsx from "clsx";
export default function GameShapes() {
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <main className="w-full flex gap-[2rem] justify-center pt-[4rem] flex-1">
      {battleStarted ? <BattlePhase /> : <PreBattlePhase />}
      {/* <div className="w-full grid-container">
        <section className="grid-items item-one"></section>
        <section className="grid-items item-two"></section>
        <section className="grid-items item-three"></section>
      </div> */}
    </main>
  );
}
