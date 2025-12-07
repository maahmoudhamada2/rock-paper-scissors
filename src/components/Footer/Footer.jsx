export default function Footer({ onLoadRules }) {
  return (
    <footer className="w-full flex justify-center md:justify-end md:py-[0.5rem]">
      <button
        className="text-[0.9rem] border px-5 py-2 rounded-lg border-white text-white"
        onClick={onLoadRules}>
        RULES
      </button>
    </footer>
  );
}
