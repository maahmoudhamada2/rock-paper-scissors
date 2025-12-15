import useGameData from "../../store/useGameData";
import GameBtnItem from "./GameBtnItem";

export default function PreBattlePhase() {
  const btnsContainer = useGameData((state) => state.buttonsContainer);

  return (
    <div className="p-4 max-w-100 aspect-square grid grid-cols-15 grid-rows-15">
      <div className={`w-[86%] h-full ${btnsContainer.background.position}`}>
        <btnsContainer.background.icon className="w-full h-full" />
      </div>
      {btnsContainer.shapes.map((shape) => (
        <GameBtnItem key={shape.id} shapeData={shape} disabled={false} />
      ))}
    </div>
  );
}
