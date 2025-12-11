import { ClassicBtns, RPSLSBtns } from "../icons";
import ModeCard from "./ModeCard";

export default function GameEdition() {
  return (
    <div className="flex flex-col items-center gap-[2rem] p-4">
      <h1 className="text-[10vw] text-[#38BDF8] font-[Bangers]">
        Classic or Chaos
      </h1>
      <div className="flex gap-[2rem]">
        <ModeCard Cover={ClassicBtns} id="classic" />
        <ModeCard Cover={RPSLSBtns} id="rpsls" />
      </div>
    </div>
  );
}
