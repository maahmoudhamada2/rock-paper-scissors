import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white font-bold text-[clamp(2rem,6vw,6rem)] tracking-[0.3rem]">
        {resultStatus}
      </p>
      <button
        className="bg-white py-[1.5vw] px-[12vw] rounded-lg"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
