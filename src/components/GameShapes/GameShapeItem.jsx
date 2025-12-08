import useGameData from "../../store/useGameData";

export default function GameShapeItem({ shapeData, position }) {
  const updateBattlePhase = useGameData((state) => state.updateBattlePhase);
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <div className={`relative w-full h-full aspect-square ${position}`}>
      <div
        className={`relative inset-shadow-choose-btn w-full h-full bg-white rounded-full aspect-square border-[clamp(1.2rem,3.5vw,1.5rem)] ${shapeData.borderColor}`}>
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
