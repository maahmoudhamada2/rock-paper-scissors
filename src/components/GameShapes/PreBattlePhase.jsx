import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import { BgTriangle, ScissorsIcon } from "../../icons";

export default function PreBattlePhase() {
  const shapesData = useGameData((state) => state.shapes);

  const shapePos = {
    paper: "row-start-1 row-end-1 col-start-1 col-span-2",
    scissors: "row-start-1 row-end-1 col-start-3 col-span-2",
    rock: "row-start-2 row-end-2 col-start-2 col-span-2",
  };

  return (
    <div className="relative max-w-[24rem] grid grid-cols-4 gap-x-[1.5rem] gap-y-[0.5rem] px-[2rem] self-center">
      <div className="w-full h-full absolute flex justify-center items-center">
        <BgTriangle className="w-[8.5rem] h-[11rem] sm:w-[11rem] " />
      </div>
      {shapesData.map((shape) => (
        <GameShapeItem
          key={shape.id}
          shapeData={shape}
          position={shapePos[shape.name]}
        />
      ))}
    </div>
  );
}
