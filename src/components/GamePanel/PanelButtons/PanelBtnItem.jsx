import useGameData from "../../../store/useGameData";

export default function PanelBtnItem({ shapeData }) {
  const updateBattlePhase = useGameData((state) => state.updateBattlePhase);
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <div
      className={`w-full hover:scale-90 active:scale-80 transition-all relative ${shapeData.position} row-span-2 z-1 bg-white rounded-full aspect-square`}>
      <div
        className={`inset-shadow-choose-btn w-full h-full rounded-full border-[clamp(1rem,1vw,2rem)] ${shapeData.borderColor}`}>
        <button
          className="cursor-pointer w-full h-full flex justify-center items-center"
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
