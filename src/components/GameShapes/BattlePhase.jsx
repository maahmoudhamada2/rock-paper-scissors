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
    <div className="self-start text-white w-full flex flex-wrap justify-between p-4">
      <section className="w-[clamp(2rem,35vw,6rem)] flex flex-col items-center gap-4">
        <GameShapeItem shapeData={playerChoice} />
        <p className="font-bold text-[clamp(0.7rem,2vw,1rem)]">YOU PICKED</p>
      </section>
      <section className="w-[clamp(2rem,35vw,6rem)] flex flex-col items-center gap-4">
        {showResult ? (
          <GameShapeItem shapeData={computerChoice} />
        ) : (
          <div className="w-full h-full aspect-square rounded-full bg-yellow-200"></div>
        )}
        <p className="font-bold  text-[clamp(0.7rem,2vw,1rem)]">HOUSE PICKED</p>
      </section>
      <section className="w-full flex flex-col items-center gap-4">
        {showResult && <ResultStatus />}
      </section>
    </div>
  );
}
