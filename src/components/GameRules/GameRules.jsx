import { GameRulesImg, CloseIcon } from "../../icons/index";

export default function GameRules({ onLoadRules }) {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <article className="w-full h-full overflow-auto p-8 flex flex-col justify-around items-center bg-white">
        <header>
          <h1 className="font-bold text-navy-900 text-[clamp(1rem,10vw,1.5rem)]">
            RULES
          </h1>
        </header>
        <main>
          <GameRulesImg className="w-full" />
        </main>
        <footer>
          <button onClick={onLoadRules}>
            <CloseIcon />
          </button>
        </footer>
      </article>
    </div>
  );
}
