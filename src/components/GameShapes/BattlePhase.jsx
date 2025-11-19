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
    <>
      <section>
        <GameShapeItem shapeData={playerChoice} size="lg" />
        <p className="text-[0.8rem] text-white font-bold">YOU PICKED</p>
      </section>
      <section>
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} size="lg" />
        ) : (
          <div></div>
        )}
        <p className="text-[0.8rem] text-white font-bold">THE HOUSE PICKED</p>
      </section>
      {showResult && <ResultStatus />}
    </>
  );
}
