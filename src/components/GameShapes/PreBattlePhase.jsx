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
    <div className="max-w-[24rem] grid grid-cols-4 gap-[2rem] px-[2rem] self-center">
      {/* <div>
        <BgTriangle />
      </div> */}
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
