import useGameData from "../../store/useGameData";

export default function ResultStatus() {
  const resultStatus = useGameData((state) => state.resultStatus);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <>
      <p>{resultStatus}</p>
      <button onClick={resetBattlePhase}>PLAY AGAIN</button>
    </>
  );
}
