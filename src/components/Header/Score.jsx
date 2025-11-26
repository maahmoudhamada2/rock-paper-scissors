import useGameData from "../../store/useGameData";

export default function Score() {
  const score = useGameData((state) => state.score);

  return (
    <section className="leading-[1.1] px-[clamp(1.5rem,3vw,2.5rem)] pb-[clamp(0.3rem,1vh,0.6rem)] pt-[clamp(0.5rem,3vh,0.7rem)] flex flex-col items-center justify-center bg-white rounded-lg">
      <h1 className="font-bold text-[clamp(0.6rem,3vw,0.7rem)] text-blue-700 tracking-wider">
        SCORE
      </h1>
      <p className="font-bold text-[clamp(1.7rem,12vw,3rem)] text-navy-900">
        {score}
      </p>
    </section>
  );
}
