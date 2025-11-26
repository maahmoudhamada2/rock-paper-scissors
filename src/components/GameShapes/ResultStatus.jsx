import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-[clamp(1rem,11vw,4.5rem)] font-bold text-white">
        {resultStatus}
      </p>
      <button
        className="rounded-lg px-[11vw] py-[2vh] bg-white"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
