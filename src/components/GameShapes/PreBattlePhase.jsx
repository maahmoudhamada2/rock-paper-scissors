import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import { BgTriangle, ScissorsIcon } from "../../icons";

export default function PreBattlePhase() {
  const shapesData = useGameData((state) => state.shapes);

  const btnPos = {
    paper: "row-start-1 col-start-1 row-end-1 col-span-2",
    scissors: "row-start-1 col-start-3 row-end-1 col-span-2",
    rock: "row-start-2 col-start-2 row-end-2 col-span-2",
  };
  return (
    <div className="grid grid-cols-4 gap-4 w-[clamp(10rem,75%,20rem)]">
      {/* <div className="w-[80%] h-[60%] absolute top-[50%] left-[50%] translate-[-50%]">
        <BgTriangle />
      </div> */}
      {shapesData.map((shape) => (
        <GameShapeItem
          key={shape.id}
          shapeData={shape}
          position={btnPos[shape.name]}
        />
      ))}
    </div>
  );
}
