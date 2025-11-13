import useGameData from "../../store/useGameData";

export default function GameShapeItem({ shapeData }) {
  const updateBattlePhase = useGameData((state) => state.updateBattlePhase);
  const battleStarted = useGameData((state) => state.battleStarted);

  return (
    <section>
      <button
        disabled={battleStarted}
        id={shapeData.id}
        onClick={(e) => updateBattlePhase(e)}
        type="button">
        <shapeData.icon />
      </button>
    </section>
  );
}
