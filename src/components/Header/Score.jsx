import useGameData from "../../store/useGameData";

export default function Score() {
  const score = useGameData((state) => state.score);

  return (
    <section>
      <h1>SCORE</h1>
      <p>{score}</p>
    </section>
  );
}
