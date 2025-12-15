import GameButtons from "./GameButtons/GameButtons";
import BoardHeader from "./BoardHeader/BoardHeader";
import BoardFooter from "./BoardFooter/BoardFooter";

export default function GameBoard() {
  return (
    <article className="overflow-y-auto overflow-x-hidden h-full flex flex-col items-center p-4">
      <BoardHeader />
      <GameButtons />
      <BoardFooter />
    </article>
  );
}
