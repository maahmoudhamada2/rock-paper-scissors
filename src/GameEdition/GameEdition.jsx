import { ClassicBtns, RPSLSBtns } from "../icons";
import ModeCard from "./ModeCard";

export default function GameEdition() {
  return (
    <div className="flex flex-col items-center gap-[2rem] pt-[2rem]">
      <h1 className="text-[clamp(2.9rem,10vw,7rem)] text-[#38BDF8] font-[Bangers] leading-none">
        Classic or Chaos
      </h1>
      <div className="flex flex-col gap-[3rem] md:flex-row">
        <ModeCard Cover={ClassicBtns} id="classic" />
        <ModeCard Cover={RPSLSBtns} id="rpsls" />
      </div>
    </div>
  );
}
