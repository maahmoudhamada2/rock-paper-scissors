import useGameData from "../../../store/useGameData";

export default function GameResult() {
  const gameReset = useGameData((state) => state.gameReset);
  const resultStatus = useGameData((state) => state.resultStatus);
  return (
    <>
      <p className="font-bold text-[clamp(1.5rem,10vw,2rem)]">{resultStatus}</p>
      <button
        onClick={gameReset}
        className="cursor-pointer hover:text-red-500 bg-white rounded-lg  text-black px-[clamp(1rem,15vw,3rem)] py-[0.7rem]">
        PLAY AGAIN
      </button>
    </>
  );
}
