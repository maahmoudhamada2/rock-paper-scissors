export default function Footer({ onLoadRules }) {
  return (
    <footer className="flex justify-center items-center mt-[0.7rem]">
      <button
        className="text-[0.7rem] font-semibold px-4 py-2 tracking-[0.2rem] text-white border-2 border-gray-600 rounded-lg"
        onClick={onLoadRules}>
        RULES
      </button>
    </footer>
  );
}
