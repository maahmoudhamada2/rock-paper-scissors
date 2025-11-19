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
      className={`${borderColors[shapeData.name]} ${
        btnSizes[size]
      } z-1 w-[7rem] bg-white rounded-full aspect-square border-18 inset-shadow-choose-btn`}>
      <button
        className="w-full h-full flex justify-center items-center"
        disabled={battleStarted}
        id={shapeData.id}
        onClick={(e) => updateBattlePhase(e)}
        type="button">
        <shapeData.icon />
      </button>
    </section>
  );
}
