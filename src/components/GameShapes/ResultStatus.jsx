import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <section>
      <p className="text-[2.5rem] font-bold text-white pb-[0.5rem] sm:text-[2rem]">
        {resultStatus}
      </p>
      <button
        className="text-[0.9rem] px-[3.5rem] py-[1rem] tracking-[0.2rem] rounded-[10px] bg-white sm:px-[1rem] sm:py-[0.5rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </section>
  );
}
