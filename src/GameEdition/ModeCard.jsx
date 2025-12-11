import { ClassicBtns, RPSLSBtns } from "../icons";
import useGameData from "../store/useGameData";

export default function ModeCard({ title, desciption, Cover, id }) {
  const setupGameEdition = useGameData((state) => state.setupGameEdition);
  const handleClick = (e) => {
    setupGameEdition(e.target.id);
  };
  return (
    <article className="max-w-[20rem] border-[8px] border-[#38BDF8] rounded-2xl">
      <header className="rounded-t-2xl bg-[radial-gradient(#1E293B,#0F172A)] p-8">
        <Cover />
      </header>
      <main className="rounded-b-2xl p-4 flex flex-col items-center gap-[0.7rem] bg-[#0F172A]">
        <h2 className="text-[#38BDF8] font-bold">Classic Edition</h2>
        <p className="text-[#CBD5E1] text-[0.9rem] text-center leading-normal">
          RPS (Rock, Paper, Scissors) has three choices, forming a simple cycle
          (rock beats scissors, scissors beats paper, paper beats rock)
        </p>
        <button
          onClick={handleClick}
          id={id}
          className="text-[#0F172A] text-[0.8rem] px-[1.5rem] py-[0.5rem] bg-[#38BDF8] rounded-lg">
          PLAY NOW
        </button>
      </main>
    </article>
  );
}
