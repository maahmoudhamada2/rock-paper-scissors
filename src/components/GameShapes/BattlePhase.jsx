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
    <div className="w-full h-full pt-[5vh] sm:h-[90%] sm:pt-[5vh] flex flex-wrap justify-between content-between self-start">
      <section className="w-[clamp(6rem,40%,12rem)] flex flex-col items-center gap-4 aspect-square">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,3rem)]">
          YOU PICKED
        </p>
      </section>
      <section className="w-[clamp(6rem,40%,12rem)] flex flex-col items-center gap-4 aspect-square">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full aspect-square rounded-full bg-[#182844]"></div>
        )}
        <p className="font-bold text-white text-[clamp(0.8rem,3vw,3rem)]">
          HOUSE PICKED
        </p>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
