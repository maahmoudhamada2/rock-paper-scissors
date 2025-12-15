import GameButtons from "./GameButtons/GameButtons";

export default function GameBoard() {
  return (
    <article className="overflow-y-auto overflow-x-hidden h-full flex flex-col items-center p-4">
      <GameButtons />
    </article>
  );
}
