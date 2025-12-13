import useGameData from "../../../store/useGameData";

export default function PanelFooter({ onLoadRules }) {
  const switchEdition = useGameData((state) => state.switchEdition);
  const resetBattlePhase = useGameData((state) => state.resetBattlePhase);
  return (
    <footer className="w-full flex justify-center gap-2 md:justify-end md:py-[0.5rem]">
      <button
        className="cursor-pointer text-[0.9rem] border px-5 py-2 rounded-lg border-white text-white"
        onClick={onLoadRules}>
        RULES
      </button>
      <button
        className="cursor-pointer text-[0.9rem] border border-white text-white rounded-lg py-2 px-5"
        onClick={() => {
          resetBattlePhase();
          switchEdition();
        }}>
        SWITCH
      </button>
    </footer>
  );
}
