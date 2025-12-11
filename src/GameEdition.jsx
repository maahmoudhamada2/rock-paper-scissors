import { ClassicBtns, RPSLSBtns } from "./icons";
import useGameData from "./store/useGameData";

export default function GameEdition() {
  const setupGameEdition = useGameData((state) => state.setupGameEdition);
  const handleClick = (e) => {
    setupGameEdition(e.target.id);
  };
  return (
    <div className="flex flex-col items-center gap-[2rem] p-4 md:flex-row">
      <article className="max-w-[20rem] border-[8px] border-gold-500 rounded-2xl">
        <header className="p-8">
          <ClassicBtns />
        </header>
        <main className="p-4 flex flex-col items-center gap-[0.7rem] bg-gold-500">
          <h2 className="text-blue-600 font-bold">Classic Edition</h2>
          <p className="text-black text-[0.9rem] text-center leading-normal">
            RPS (Rock, Paper, Scissors) has three choices, forming a simple
            cycle (rock beats scissors, scissors beats paper, paper beats rock)
          </p>
          <button
            onClick={handleClick}
            id="classic"
            className="text-white text-[0.8rem] px-[1.5rem] py-[0.5rem] bg-[#1f3756] rounded-lg">
            PLAY NOW
          </button>
        </main>
      </article>
      <article className="max-w-[20rem] border-[8px] border-gold-500 rounded-2xl">
        <header className="p-8">
          <RPSLSBtns />
        </header>
        <main className="p-4 flex flex-col items-center gap-[0.7rem] bg-gold-500">
          <h2 className="text-blue-600 font-bold">RPSLS Edition</h2>
          <p className="text-black text-[0.9rem] text-center leading-normal">
            RPS (Rock, Paper, Scissors) has three choices, forming a simple
            cycle (rock beats scissors, scissors beats paper, paper beats rock)
          </p>
          <button
            onClick={handleClick}
            id="RPSLS"
            className="text-white text-[0.8rem] px-[1.5rem] py-[0.5rem] bg-[#1f3756] rounded-lg">
            PLAY NOW
          </button>
        </main>
      </article>
    </div>
  );
}
