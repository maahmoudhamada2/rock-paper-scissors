import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import { BgTriangle } from "../../icons";

export default function PreBattlePhase() {
  const shapesData = useGameData((state) => state.shapes);
  return (
    <>
      <div className="absolute w-full h-full flex justify-center items-center">
        <BgTriangle className="w-[14rem]" />
      </div>
      {shapesData.map((shape) => (
        <GameShapeItem key={shape.id} shapeData={shape} size="sm" />
      ))}
    </>
  );
}
