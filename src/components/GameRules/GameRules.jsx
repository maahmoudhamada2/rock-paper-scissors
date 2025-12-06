import { GameRulesImg, CloseIcon } from "../../icons/index";

export default function GameRules({ onLoadRules }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center absolute top-0 left-0 md:bg-[#00000091]">
      <article className="w-full h-full p-8 flex flex-col justify-evenly items-center bg-white md:max-w-[18rem] md:h-[60%] md:rounded-2xl">
        <header>
          <h1 className="font-bold text-navy-900 text-[clamp(1rem,10vw,2rem)]">
            RULES
          </h1>
        </header>
        <main>
          <GameRulesImg className="w-full md:max-w-[15rem]" />
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
