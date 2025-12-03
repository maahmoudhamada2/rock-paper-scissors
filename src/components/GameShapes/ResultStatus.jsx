import useGameData from "../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="text-white font-bold text-[clamp(2rem,5vw,2.5rem)] ">
        {resultStatus}
      </p>
      <button
        className="bg-white py-[0.5rem] sm:py-[0.7rem] w-[200px] rounded-lg"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
