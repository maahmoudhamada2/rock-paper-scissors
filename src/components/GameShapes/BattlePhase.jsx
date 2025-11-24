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
    <div className="flex flex-wrap justify-between pt-[1.5rem] px-[1rem] gap-y-[1.5rem]">
      <section className="w-[45%] flex flex-col items-center gap-[0.7rem]">
        <GameShapeItem shapeData={playerChoice} />
        <p className="text-[clamp(0.8rem,3vw,1.5rem)] text-white font-bold">
          YOU PICKED
        </p>
      </section>
      <section className="w-[45%] flex flex-col items-center gap-[0.7rem]">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div></div>
        )}
        <p className="text-[clamp(0.8rem,3vw,1.5rem)] text-white font-bold">
          HOUSE PICKED
        </p>
      </section>
      <section className="w-full flex flex-col items-center gap-[0.5rem]">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
