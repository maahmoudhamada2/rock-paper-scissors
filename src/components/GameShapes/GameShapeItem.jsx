import useGameData from "../../store/useGameData";

export default function GameShapeItem({ shapeData, position }) {
  const updateBattlePhase = useGameData((state) => state.updateBattlePhase);
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <div
      className={`relative ${shapeData.position} row-span-2 col-span-5 z-1 bg-white rounded-full aspect-square`}>
      <div
        className={`inset-shadow-choose-btn w-full h-full rounded-full border-[clamp(1rem,1vw,2rem)] ${shapeData.borderColor}`}>
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
