import useGameData from "../../store/useGameData";

export default function Score() {
  const score = useGameData((state) => state.score);

  return (
    <section className="py-2 px-[1.7rem] leading-[1.3] rounded-lg bg-[#fbfafa] flex flex-col justify-end items-center aspect-square ">
      <h1 className="text-blue-700 text-[0.7rem] font-bold">SCORE</h1>
      <p className="text-navy-900 text-[2.5rem] font-bold">{score}</p>
    </section>
  );
}
