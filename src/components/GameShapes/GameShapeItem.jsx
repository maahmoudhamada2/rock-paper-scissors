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
      className={`w-full h-full bg-white rounded-full aspect-square border-12 ${
        borderColors[shapeData.name]
      } ${position}`}>
      <button
        className="rounded-full aspect-square  flex justify-center items-center"
        disabled={battleStarted}
        id={shapeData.id}
        onClick={(e) => updateBattlePhase(e)}
        type="button">
        <shapeData.icon />
      </button>
    </div>
  );
}
