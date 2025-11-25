import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white text-[clamp(1rem,20vw,2.5rem)] font-bold">
        {resultStatus}
      </p>
      <button
        className="bg-white rounded-lg px-[clamp(1rem,20vw,4rem)] py-[0.5rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
