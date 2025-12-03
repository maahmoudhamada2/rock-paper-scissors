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
    <div className="h-[56vh] sm:h-[60vh] md:h-full flex flex-wrap content-between justify-evenly gap-x-[10vw] gap-y-[7vw] md:content-center md:items-center md:justify-center md:flex-nowrap md:gap-8 md:w-full ">
      <section className="w-[clamp(2rem,40vw,14rem)] flex flex-col items-center gap-4 md:flex-col-reverse md:order-1">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,1rem)]">
          YOU PICKED
        </p>
      </section>
      <section className="w-[clamp(2rem,40vw,14rem)] flex flex-col items-center gap-4 md:flex-col-reverse md:order-3">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full aspect-square rounded-full bg-[#182844]"></div>
        )}
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,1rem)]">
          HOUSE PICKED
        </p>
      </section>
      <section className="w-full flex flex-col gap-2 sm:gap-4 items-center md:w-auto md:order-2">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
