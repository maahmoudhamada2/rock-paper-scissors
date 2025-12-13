import PanelBtnItem from "./PanelBtnItem";
import useGameData from "../../../store/useGameData";

export default function PreBattlePhase() {
  const container = useGameData((state) => state.container);

  return (
    <div className="p-[1rem] max-w-[25rem] aspect-square grid grid-cols-15 grid-rows-15">
      <div className={`w-[86%] h-full ${container.background.position}`}>
        <container.background.icon className="w-full h-full" />
      </div>
      {container.shapes.map((shape) => (
        <PanelBtnItem key={shape.id} shapeData={shape} />
      ))}
    </div>
  );
}
