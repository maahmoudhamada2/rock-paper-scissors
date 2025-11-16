import useGameData from "../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <section className="text-center">
      <p className="text-[2rem] font-bold text-white pb-[0.5rem]">
        {resultStatus}
      </p>
      <button
        className="text-[0.7rem] font-[600] px-[2.5rem] py-[0.7rem] tracking-[0.2rem] rounded-[6px] bg-white"
        onClick={resetBattlePhase}>
        PLAY AGAIN
      </button>
    </section>
  );
}
