import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white font-bold text-[clamp(1rem,10vw,8rem)] md:text-[clamp(1rem,4vw,2rem)] tracking-[0.3rem]">
        {resultStatus}
      </p>
      <button
        className="bg-white py-[2vh] px-[20vw] md:px-[6vw] rounded-lg"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
