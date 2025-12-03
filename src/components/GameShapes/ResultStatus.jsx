import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white font-bold text-[clamp(2rem,5vw,2.5rem)] tracking-[0.3rem]">
        {resultStatus}
      </p>
      <button
        className="bg-white py-[0.5rem] px-[clamp(1.2rem,15vw,3.5rem)] rounded-lg"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
