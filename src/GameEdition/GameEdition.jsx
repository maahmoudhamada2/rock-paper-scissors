import { ClassicBtns, RPSLSBtns } from "../icons";
import ModeCard from "./ModeCard";

export default function GameEdition() {
  return (
    <div className="flex flex-col items-center gap-[2rem] p-4">
      <h1>Classic or Chaos</h1>
      <ModeCard Cover={ClassicBtns} id="classic" />
      <ModeCard Cover={RPSLSBtns} id="rpsls" />
    </div>
  );
}
