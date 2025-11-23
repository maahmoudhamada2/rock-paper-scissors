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
      className={`z-1 aspect-square rounded-full bg-white border-[clamp(15px,4vw,18px)] ${
        borderColors[shapeData.name]
      } ${position} inset-shadow-choose-btn`}>
      <button
        className="w-full h-full flex justify-center items-center"
        disabled={battleStarted}
        id={shapeData.id}
        onClick={(e) => updateBattlePhase(e)}
        type="button">
        <shapeData.icon />
      </button>
    </div>
  );
}
