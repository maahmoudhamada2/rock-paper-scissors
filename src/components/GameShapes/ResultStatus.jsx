import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <section className="flex flex-col items-center gap-2">
      <p className="text-[2.5rem] font-bold text-white pb-[0.5rem]">
        {resultStatus}
      </p>
      <button
        className="text-[0.9rem] px-[3.5rem] py-[1rem] tracking-[0.2rem] rounded-[10px] bg-white"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </section>
  );
}
