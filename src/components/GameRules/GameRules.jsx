import { GameRulesImg, CloseIcon } from "../../icons/index";

export default function GameRules({ onLoadRules }) {
  return (
    <div className="z-2 w-full h-full flex items-center justify-center absolute top-0 left-0 bg-white">
      <article className="h-full flex flex-col items-center justify-evenly p-4 ">
        <header>
          <h1 className="text-[clamp(2rem,5vw,3rem)] text-navy-900 font-bold">
            RULES
          </h1>
        </header>
        <main className="p-4">
          <GameRulesImg className="w-full h-full" />
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
