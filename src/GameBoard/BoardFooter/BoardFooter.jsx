import useGameData from "../../store/useGameData";

export default function BoardFooter({ toggleRules }) {
  const switchEdition = useGameData((state) => state.switchEdition);
  return (
    <footer className="w-full flex justify-center gap-2 md:justify-end md:py-2">
      <button
        className="cursor-pointer text-[0.9rem] border px-5 py-2 rounded-lg border-white text-white"
        onClick={toggleRules}>
        RULES
      </button>
      <button
        className="cursor-pointer text-[0.9rem] border border-white text-white rounded-lg py-2 px-5"
        onClick={switchEdition}>
        SWITCH
      </button>
    </footer>
  );
}
