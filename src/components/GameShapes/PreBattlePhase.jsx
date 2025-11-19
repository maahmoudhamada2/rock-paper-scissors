import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import { BgTriangle } from "../../icons";

export default function PreBattlePhase() {
  const shapesData = useGameData((state) => state.shapes);
  return (
    <>
      <div>
        <BgTriangle />
      </div>
      {shapesData.map((shape) => (
        <GameShapeItem key={shape.id} shapeData={shape} size="sm" />
      ))}
    </>
  );
}
