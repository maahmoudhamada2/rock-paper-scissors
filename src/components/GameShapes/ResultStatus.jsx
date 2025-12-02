import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white font-bold text-[clamp(2rem,6vw,6rem)] tracking-[0.3rem] sm:text-[clamp(2rem,10vw,6rem)]">
        {resultStatus}
      </p>
      <button
        className="bg-white py-[1.5vw] px-[12vw] rounded-lg sm:px-[20vw] sm:py-[3vw]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
