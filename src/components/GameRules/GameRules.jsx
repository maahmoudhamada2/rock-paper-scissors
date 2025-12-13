import { ClassicRules, CloseIcon } from "../../icons";
import useGameData from "../../store/useGameData";
export default function GameRules({ onLoadRules }) {
  const RulesModal = useGameData((state) => state.RulesModal);

  return (
    <div className="z-3 w-full h-full bg-white flex justify-center items-center fixed top-0 left-0 md:bg-[#00000091]">
      <article className="h-full md:h-auto p-8 flex flex-col justify-around items-center   bg-white md:max-w-[20rem]  md:rounded-2xl">
        <header>
          <h1 className="font-bold text-navy-900 text-[clamp(1rem,10vw,2rem)]">
            RULES
          </h1>
        </header>
        <main>
          <RulesModal className="w-full md:max-w-[15rem]" />
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
