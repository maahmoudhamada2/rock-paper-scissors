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
    <div className="self-center relative grid grid-cols-[repeat(4,clamp(1.5rem,10vw,4rem))] gap-x-[2.5rem] gap-y-[1.5rem]">
      <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
        <BgTriangle className="w-[68%]" />
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
