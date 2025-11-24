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
    <div className="pt-[2rem] grid grid-cols-4 self-start gap-x-[2rem] gap-y-[4rem]">
      <section className="flex flex-col items-center gap-[1rem] row-start-1 row-end-1 col-start-1 col-span-2">
        <GameShapeItem shapeData={playerChoice} />
        <p className="text-white font-bold">YOU PICKED</p>
      </section>
      <section className="flex flex-col items-center gap-[1rem] row-start-1 row-end-1 col-start-3 col-span-2">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full h-full bg-yellow-600 rounded-full aspect-square"></div>
        )}
        <p className="text-white font-bold">THE HOUSE PICKED</p>
      </section>
      <section className="flex flex-col items-center justify-center row-start-2 row-end-2 col-start-1 col-span-4">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
