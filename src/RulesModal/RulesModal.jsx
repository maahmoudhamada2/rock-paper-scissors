import { ClassicRules, CloseIcon } from "../icons";

export default function RulesModal({ toggleRules }) {
  return (
    <div className="z-3 w-full h-full bg-white flex justify-center items-center fixed top-0 left-0 md:bg-[#00000091]">
      <article className="h-full md:h-auto p-8 flex flex-col justify-around items-center md:flex-row md:flex-wrap md:justify-between gap-8 bg-white md:max-w-[20rem]  md:rounded-2xl">
        <header className="md:order-1">
          <h1 className="font-bold text-navy-900 text-[clamp(1rem,10vw,2rem)]">
            RULES
          </h1>
        </header>
        <main className="md:w-full md:order-3">
          <ClassicRules className="w-full h-full" />
        </main>
        <footer className="md:order-2">
          <button onClick={toggleRules}>
            <CloseIcon />
          </button>
        </footer>
      </article>
    </div>
  );
}
