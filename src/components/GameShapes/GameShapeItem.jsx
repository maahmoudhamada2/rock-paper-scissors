import useGameData from "../../store/useGameData";

export default function GameShapeItem({ shapeData, size }) {
  const updateBattlePhase = useGameData((state) => state.updateBattlePhase);
  const battleStarted = useGameData((state) => state.battleStarted);

  const borderColors = {
    paper: "border-blue-500",
    scissors: "border-gold-500",
    rock: "border-red-600",
  };
  const btnSizes = {
    sm: "w-[7rem]",
    lg: "w-[8rem]",
  };
  return (
    <section
      className={`${btnSizes[size]}  border-16 ${
        borderColors[shapeData.name]
      } aspect-square bg-white rounded-full`}>
      <button
        className="flex justify-center items-center rounded-full aspect-square flex items-center justify-center"
        disabled={battleStarted}
        id={shapeData.id}
        onClick={(e) => updateBattlePhase(e)}
        type="button">
        <shapeData.icon />
      </button>
    </section>
  );
}
