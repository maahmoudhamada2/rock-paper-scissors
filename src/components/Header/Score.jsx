import useGameData from "../../store/useGameData";

export default function Score() {
  const score = useGameData((state) => state.score);

  return (
    <section className="flex flex-col justify-end bg-white aspect-square items-center px-6 py-3 rounded-md leading-2">
      <h1 className="font-bold text-[0.7rem] text-blue-700">SCORE</h1>
      <p className="font-bold text-5xl text-navy-900">{score}</p>
    </section>
  );
}
