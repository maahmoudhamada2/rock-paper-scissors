import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import { BgTriangle } from "../../icons";

export default function PreBattlePhase() {
  const shapesData = useGameData((state) => state.shapes);
  const btnPos = {
    paper: "col-span-2 row-start-1 col-start-1 row-end-1",
    scissors: "row-start-1 col-start-3 row-end-1 col-span-2",
    rock: "col-span-2 row-start-2 col-start-2 row-end-2 ",
  };
  return (
    <>
      {/* <div className="absolute w-full h-full flex justify-center items-center">
        <BgTriangle className="w-[14rem]" />
      </div> */}
      {shapesData.map((shape) => (
        <GameShapeItem
          key={shape.id}
          shapeData={shape}
          position={btnPos[shape.name]}
        />
      ))}
    </>
  );
}
