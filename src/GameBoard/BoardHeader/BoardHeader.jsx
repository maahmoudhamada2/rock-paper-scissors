import GameScore from "./GameScore";
import { ClassicLogo } from "../../icons";

export default function PanelHeader() {
  return (
    <header className="z-1 w-full max-w-160 flex justify-between items-center border-3 border-gray-600 rounded-lg p-2">
      <ClassicLogo />
      <GameScore />
    </header>
  );
}
