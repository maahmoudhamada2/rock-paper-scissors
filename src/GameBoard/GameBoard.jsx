import GameButtons from "./GameButtons/GameButtons";
import BoardHeader from "./BoardHeader/BoardHeader";

export default function GameBoard() {
  return (
    <article className="overflow-y-auto overflow-x-hidden h-full flex flex-col items-center p-4">
      <BoardHeader />
      <GameButtons />
    </article>
  );
}
