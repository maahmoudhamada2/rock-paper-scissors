import useGameData from "../../store/useGameData";

export default function GameShapeItem({ shapeData }) {
  const updateBattlePhase = useGameData((state) => state.updateBattlePhase);
  const battleStarted = useGameData((state) => state.battleStarted);

  const borderColors = {
    paper: "border-blue-500",
    scissors: "border-gold-500",
    rock: "border-red-600",
  };

  return (
    <section
      className={`z-1 relative w-32 rounded-[50%] aspect-square bg-white border-18 ${
        borderColors[shapeData.name]
      } inset-shadow-choose-btn primary-btn-shadow`}>
      <button
        className=" w-full h-full flex items-center justify-center"
        disabled={battleStarted}
        id={shapeData.id}
        onClick={(e) => updateBattlePhase(e)}
        type="button">
        <shapeData.icon />
      </button>
    </section>
  );
}
