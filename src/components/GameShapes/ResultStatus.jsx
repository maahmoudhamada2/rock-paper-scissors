import useGameData from "../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <section className="text-center">
      <p className="text-[3rem] font-bold text-white pb-[0.5rem]">
        {resultStatus}
      </p>
      <button
        className="text-[0.9rem] px-[4rem] py-[1rem] tracking-[0.2rem] rounded-[10px] bg-white"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </section>
  );
}
