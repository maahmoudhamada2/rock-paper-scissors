import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white text-[2.5rem] sm:text-[2.9rem] font-bold">
        {resultStatus}
      </p>
      <button
        className="bg-white rounded-lg px-[3rem] py-[0.5rem] sm:px-[5rem] sm:py-[1rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
