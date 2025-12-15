import useGameData from "../store/useGameData";

export default function EditionCard({ title, desciption, Cover, id }) {
  const setupEdition = useGameData((state) => state.setupEdition);
  const handleClick = (e) => {
    setupEdition(e.target.id);
  };
  return (
    <article className="w-full sm:max-w-108 md:max-w-[20rem] flex flex-col border-[clamp(0.3rem,1vw,0.5rem)] border-[#38BDF8] rounded-2xl">
      <header className="rounded-t-2xl bg-[radial-gradient(#1E293B,#0F172A)] px-8 pt-8">
        <Cover />
        <h2 className="text-[#38BDF8] text-[clamp(1.5rem,2vw,1.7rem)] font-bold text-center whitespace-nowrap">
          {title}
        </h2>
      </header>
      <main className="flex-1  justify-around p-4 rounded-b-2xl  flex flex-col items-center gap-4 bg-[#0F172A]">
        <p className="text-[#CBD5E1] text-[clamp(0.9rem,2vw,1rem)] text-center leading-normal">
          {desciption}
        </p>
        <button
          onClick={handleClick}
          id={id}
          className="text-[#0F172A] text-[0.8rem] px-16 py-[0.7rem] bg-[#38BDF8] rounded-lg">
          PLAY NOW
        </button>
      </main>
    </article>
  );
}
