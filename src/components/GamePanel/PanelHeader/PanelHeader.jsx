import GameScore from "./GameScore";
import useGameData from "../../../store/useGameData";

export default function PanelHeader() {
  const EditionLogo = useGameData((state) => state.EditionLogo);
  return (
    <header className="z-1 w-full max-w-160 flex justify-between items-center border-3 border-gray-600 rounded-lg p-2">
      <EditionLogo />
      <GameScore />
    </header>
  );
}
