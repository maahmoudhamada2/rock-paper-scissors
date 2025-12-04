import useGameData from "../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p className="font-bold text-[clamp(1.5rem,5vw,3rem)]">{resultStatus}</p>
      <button
        className="bg-white rounded-lg text-black px-[1rem] py-[0.3rem]"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </>
  );
}
