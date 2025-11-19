import { GameRulesImg, CloseIcon } from "../../icons/index";

export default function GameRules({ onLoadRules }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 bg-white z-2">
      <article className="flex flex-col justify-evenly items-center flex-1">
        <header>
          <h1 className="text-[1.5rem] font-bold">RULES</h1>
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
