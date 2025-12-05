import { useEffect } from "react";
import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import ResultStatus from "./ResultStatus";
import clsx from "clsx";

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
    <div className="h-full flex flex-wrap justify-center content-around gap-x-[10vw] text-white self-start">
      <section className="w-[clamp(2rem,35vw,10rem)] flex flex-col items-center gap-4">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-[clamp(0.7rem,2vw,1rem)]">YOU PICKED</p>
      </section>
      <section className="w-[clamp(2rem,35vw,10rem)] flex flex-col items-center gap-4">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full h-full aspect-square rounded-full bg-yellow-200"></div>
        )}
        <p className="font-bold  text-[clamp(0.7rem,2vw,1rem)]">HOUSE PICKED</p>
      </section>
      <section className="w-[15rem] h-[5rem] flex flex-col items-center gap-2">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
