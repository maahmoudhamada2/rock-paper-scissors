import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import { BgTriangle } from "../../icons";

export default function PreBattlePhase() {
  const shapesData = useGameData((state) => state.shapes);
  return (
    <>
      <div className=" flex justify-center items-center absolute">
        <BgTriangle className="w-[12rem]" />
      </div>
      {shapesData.map((shape) => (
        <GameShapeItem key={shape.id} shapeData={shape} size="sm" />
      ))}
    </>
  );
}
