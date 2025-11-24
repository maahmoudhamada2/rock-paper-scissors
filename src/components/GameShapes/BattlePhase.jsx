import { useEffect } from "react";
import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import ResultStatus from "./ResultStatus";

export default function BattlePhase() {
  const { playerChoice, computerChoice } = useGameData(
    (state) => state.battlePhase
  );
  const updateShowResult = useGameData((state) => state.updateShowResult);
  const showResult = useGameData((state) => state.showResult);

  useEffect(() => {
    const timeOutId = setTimeout(() => updateShowResult(), 2000);
    return () => clearTimeout(timeOutId);
  }, []);
  return (
    <div>
      <section>
        <GameShapeItem shapeData={playerChoice} />
        <p>YOU PICKED</p>
      </section>
      <section>
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div></div>
        )}
        <p>THE HOUSE PICKED</p>
      </section>
      <section>{showResult && <ResultStatus />}</section>
    </div>
  );
}
