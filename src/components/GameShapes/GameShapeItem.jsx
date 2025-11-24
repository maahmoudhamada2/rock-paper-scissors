import useGameData from "../../store/useGameData";

export default function GameShapeItem({ shapeData, position }) {
  const updateBattlePhase = useGameData((state) => state.updateBattlePhase);
  const battleStarted = useGameData((state) => state.battleStarted);

  const borderColors = {
    paper: "border-blue-500",
    scissors: "border-gold-500",
    rock: "border-red-600",
  };

  return (
    <div
      className={`w-full bg-white rounded-full aspect-square border-[clamp(12px,5vw,18px)] ${
        borderColors[shapeData.name]
      } ${position}`}>
      <button
        className="w-full flex items-center justify-center rounded-full aspect-square "
        disabled={battleStarted}
        id={shapeData.id}
        onClick={(e) => updateBattlePhase(e)}
        type="button">
        <shapeData.icon />
      </button>
    </div>
  );
}
