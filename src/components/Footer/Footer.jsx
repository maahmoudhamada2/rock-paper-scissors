export default function Footer({ onLoadRules }) {
  return (
    <footer>
      <button
        className="px-6 py-2 text-[0.75rem] text-white font-semibold tracking-wider border-2 border-gray-600 rounded-[9px]"
        onClick={onLoadRules}>
        RULES
      </button>
    </footer>
  );
}
