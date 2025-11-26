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
    <div className="h-full grid grid-cols-4 gap-6 items-start">
      <section className="flex flex-col items-center aspect-square row-start-1 row-end-1 col-start-1 col-span-2">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-white text-[0.5rem]">YOU PICKED</p>
      </section>
      <section className="flex flex-col items-center aspect-square row-start-1 row-end-1 col-start-3 col-span-2">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full aspect-square rounded-full bg-red-600 "></div>
        )}
        <p className="font-bold text-white text-[0.5rem]">HOUSE PICKED</p>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-[1.1vh] row-start-2 row-end-2 col-start-1 col-span-4">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
