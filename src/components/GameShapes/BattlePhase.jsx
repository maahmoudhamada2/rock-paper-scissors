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
    <div className="grid grid-cols-4 gap-16 pt-[4rem]">
      <section className="row-start-1 row-end-1 col-start-1 col-span-2 flex flex-col items-center gap-4">
        <GameShapeItem shapeData={playerChoice} />
        <p className="text-[clamp(0.8rem,3vw,2rem)] text-white font-bold">
          YOU PICKED
        </p>
      </section>
      <section className="row-start-1 row-end-1 col-start-3 col-span-2 flex flex-col items-center gap-4">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full aspect-square bg-red-600 rounded-full"></div>
        )}
        <p className="text-[clamp(0.8rem,3vw,2rem)] text-white font-bold">
          THE HOUSE PICKED
        </p>
      </section>
      <section className="row-start-2 row-end-2 col-start-1 col-span-4 flex flex-col items-center gap-[1.5rem]">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
