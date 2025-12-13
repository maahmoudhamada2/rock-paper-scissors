import { ClassicBtns, RPSLSBtns } from "../icons";
import ModeCard from "./ModeCard";

export default function GameEdition() {
  return (
    <div className="flex flex-col items-center gap-[2rem] pt-[2rem]">
      <h1 className="text-[clamp(2.9rem,10vw,7rem)] text-[#38BDF8] font-[Bangers] leading-none">
        Classic or Chaos
      </h1>
      <div className="flex flex-col gap-[3rem] md:flex-row">
        <ModeCard
          title={"Classic Edition"}
          desciption={
            "A simple and timeless game where you choose Rock, Paper, or Scissors. Each choice beats one option and loses to another. Quick, fun, and easy to play — perfect for instant matches."
          }
          Cover={ClassicBtns}
          id="classic"
        />
        <ModeCard
          title={"RPSLS Edition"}
          desciption={
            "An extended version of the classic game with two extra choices: Lizard and Spock. More combinations, more strategy, and more surprises. Ideal if you want a deeper and more exciting challenge."
          }
          Cover={RPSLSBtns}
          id="rpsls"
        />
      </div>
    </div>
  );
}
