import useGameData from "../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="font-bold text-[clamp(1.5rem,10vw,2rem)]">{resultStatus}</p>
      <button
        className="bg-white rounded-lg font-semibold text-black px-[clamp(1rem,15vw,3rem)] py-[0.7rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
