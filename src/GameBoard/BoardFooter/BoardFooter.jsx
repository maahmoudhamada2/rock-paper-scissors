export default function BoardFooter({ toggleRules }) {
  return (
    <footer className="w-full flex justify-center gap-2 md:justify-end md:py-2">
      <button
        className="cursor-pointer text-[0.9rem] border px-5 py-2 rounded-lg border-white text-white"
        onClick={toggleRules}>
        RULES
      </button>
    </footer>
  );
}
