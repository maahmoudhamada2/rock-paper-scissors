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
    <div className="w-full h-full pt-[5vh] grid grid-cols-4 justify-items-center">
      <section className="w-[clamp(7rem,25vw,12rem)] aspect-square flex flex-col items-center gap-4 row-start-1 row-end-1 col-start-1 col-span-2">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,3rem)]">
          YOU PICKED
        </p>
      </section>
      <section className="w-[clamp(7rem,25vw,12rem)] aspect-square flex flex-col items-center gap-4 row-start-1 row-end-1 col-start-3 col-span-2">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full aspect-square rounded-full bg-red-600"></div>
        )}
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,3rem)]">
          HOUSE PICKED
        </p>
      </section>
      <section className="flex flex-col jusitfy-end items-center gap-2 row-start-2 row-end-2 col-start-1 col-span-4">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
