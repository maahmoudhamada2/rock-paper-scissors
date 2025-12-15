import useGameData from "../../../store/useGameData";

export default function GameScore() {
  const score = useGameData((state) => state.score);
  return (
    <section className="px-[clamp(1.5rem,5vw,2.5rem)] py-[clamp(0.5rem,3vw,1rem)] bg-white rounded-lg flex flex-col items-center">
      <h1 className="text-[clamp(0.7rem,3vw,1rem)] text-blue-600 font-bold">
        SCORE
      </h1>
      <p className="text-[clamp(1rem,12vw,3rem)] text-navy-900 font-bold">
        {score}
      </p>
    </section>
  );
}
