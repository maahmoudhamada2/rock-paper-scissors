import GameScore from "./GameScore";
import { ClassicLogo, RPSLSLogo } from "../../../icons";
import useGameData from "../../../store/useGameData";

export default function PanelHeader() {
  const currentEdition = useGameData((state) => state.currentEdition);
  return (
    <header className="z-1 w-full max-w-160 flex justify-between items-center border-3 border-gray-600 rounded-lg p-2">
      {currentEdition === "classic" ? <ClassicLogo /> : <RPSLSLogo />}
      <GameScore />
    </header>
  );
}
