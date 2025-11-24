import useGameData from "../../store/useGameData";
import clsx from "clsx";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white text-[clamp(0.9rem,7vw,3rem)] font-bold">
        {resultStatus}
      </p>
      <button
        className="bg-white rounded-lg px-[clamp(1.5rem,15vw,3.5rem)] px-[1rem] py-[0.5rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
