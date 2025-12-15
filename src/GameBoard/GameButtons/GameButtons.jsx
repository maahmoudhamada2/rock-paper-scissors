import useGameData from "../../store/useGameData";
import IdlePhase from "./IdlePhase";
import PlayingPhase from "./PlayingPhase";
export default function GameButtons() {
  const currentPhase = useGameData((state) => state.currentPhase);
  return (
    <main className="w-full flex-1 flex justify-center items-center md:p-4 ">
      {currentPhase === "idle" ? <IdlePhase /> : <PlayingPhase />}
    </main>
  );
}
