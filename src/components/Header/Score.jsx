import useGameData from "../../store/useGameData";

export default function Score() {
  const score = useGameData((state) => state.score);

  return (
    <section className="bg-white flex flex-col items-center justify-end rounded-lg aspect-2/1 px-[1.5rem] py-[0.7rem] leading-[1.2]">
      <h1 className="text-[0.6rem] text-blue-700 font-bold">SCORE</h1>
      <p className="text-[2.1rem] text-navy-900 font-bold">{score}</p>
    </section>
  );
}
