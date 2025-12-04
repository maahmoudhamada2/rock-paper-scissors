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
    <div className={`relative w-full h-full aspect-square ${position}`}>
      <div
        className={`inset-shadow-choose-btn z-1 w-full h-full bg-white rounded-full aspect-square border-[clamp(1rem,1.5vw,3rem)] ${
          borderColors[shapeData.name]
        }`}>
        <button
          className="w-full h-full flex justify-center items-center"
          disabled={battleStarted}
          id={shapeData.id}
          onClick={(e) => updateBattlePhase(e)}
          type="button">
          <shapeData.icon />
        </button>
      </div>
      <span className="myClass"></span>
    </div>
  );
}
