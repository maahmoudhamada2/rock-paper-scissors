import useGameData from "../../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="font-bold text-[clamp(1.5rem,10vw,2rem)]">{resultStatus}</p>
      <button
        className="cursor-pointer hover:text-red-500 bg-white rounded-lg  text-black px-[clamp(1rem,15vw,3rem)] py-[0.7rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
