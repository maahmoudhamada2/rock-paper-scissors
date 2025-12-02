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
    <div className="h-[50vh] flex flex-wrap content-between justify-center gap-x-[10vw] gap-y-[7vw] md:gap-0">
      <section className="w-[clamp(2rem,40vw,10rem)] flex flex-col items-center gap-4 md:order-1">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,3rem)]">
          YOU PICKED
        </p>
      </section>
      <section className="w-[clamp(2rem,40vw,10rem)] flex flex-col items-center gap-4 md:order-3">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full aspect-square rounded-full bg-[#182844]"></div>
        )}
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,3rem)]">
          HOUSE PICKED
        </p>
      </section>
      <section className="w-full flex flex-col  items-center md:w-auto md:order-2">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
