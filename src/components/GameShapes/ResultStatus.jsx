import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white text-[clamp(0rem,8vw,3rem)] font-bold">
        {resultStatus}
      </p>
      <button
        className="bg-white rounded-lg px-[clamp(1rem,25vw,3rem)] py-[0.5rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
