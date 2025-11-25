import useGameData from "../../store/useGameData";

export default function Score() {
  const score = useGameData((state) => state.score);

  return (
    <section className="bg-white flex flex-col items-center rounded-lg px-[clamp(1rem,5vw,2rem)] py-[clamp(1rem,3vh,2rem)]">
      <h1 className="text-[0.7rem] text-blue-700 font-bold">SCORE</h1>
      <p className=" text-navy-900 font-bold">{score}</p>
    </section>
  );
}
