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
      <section className="pb-6 flex flex-col items-center gap-4">
        <GameShapeItem shapeData={playerChoice} isComp={false} />
        <p className="text-[0.8rem] text-white font-bold">YOU PICKED</p>
      </section>
      <section className="pb-6 flex flex-col items-center gap-4">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-32 aspect-square rounded-full bg-[#182844]"></div>
        )}
        <p className="text-[0.8rem] text-white font-bold">THE HOUSE PICKED</p>
      </section>
      {showResult && <ResultStatus />}
    </>
  );
}
