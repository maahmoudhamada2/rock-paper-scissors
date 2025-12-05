import useGameData from "../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="font-bold text-[clamp(2rem,10vw,4rem)]">{resultStatus}</p>
      <button
        className="bg-white rounded-lg text-black px-[clamp(1rem,15vw,4rem)] py-[0.5rem] sm:py-[0.7rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
