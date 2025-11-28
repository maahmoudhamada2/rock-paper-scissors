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
    <div className="w-full h-[70%] pt-[clamp(1rem,6vh,5rem)] grid grid-cols-4 self-center  gap-x-[2rem] gap-y-[2rem] justify-items-center">
      <section className="w-[clamp(6rem,32vw,9rem)] flex flex-col items-center gap-[1rem] aspect-square row-start-1 row-end-1 col-start-1 col-span-2 ">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,1.3rem)]">
          YOU PICKED
        </p>
      </section>
      <section className="w-[clamp(6rem,32vw,9rem)] flex flex-col items-center gap-[1rem] aspect-square row-start-1 row-end-1 col-start-3 col-span-2">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full aspect-square rounded-full bg-[#182844] "></div>
        )}
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,1.3rem)]">
          HOUSE PICKED
        </p>
      </section>
      <section className="flex flex-col justify-center items-center gap-[1.1vh] row-start-2 row-end-2 col-start-1 col-span-4">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
