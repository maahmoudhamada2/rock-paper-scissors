import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white text-[clamp(1rem,10vw,3rem)] font-bold">
        {resultStatus}
      </p>
      <button
        className="bg-white rounded-lg px-[clamp(1.5rem,15vw,3.5rem)] py-[0.7rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
