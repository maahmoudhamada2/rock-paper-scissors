import { GameRulesImg, CloseIcon } from "../../icons/index";

export default function GameRules({ onLoadRules }) {
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-white">
      <article>
        <header>
          <h1>RULES</h1>
        </header>
        <main>
          <GameRulesImg />
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
