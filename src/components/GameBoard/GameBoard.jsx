import GameButtons from "./GameButtons/GameButtons";
import BoardHeader from "./BoardHeader/BoardHeader";
import BoardFooter from "./BoardFooter/BoardFooter";
import useGameData from "../../store/useGameData";

export default function GameBoard() {
  const toggleRules = useGameData((state) => state.toggleRules);

  return (
    <article className="overflow-y-auto overflow-x-hidden h-full flex flex-col items-center p-4">
      <BoardHeader />
      <GameButtons />
      <BoardFooter toggleRules={toggleRules} />
    </article>
  );
}
