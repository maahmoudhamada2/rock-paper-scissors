import { useEffect } from "react";
import GameBtnItem from "./GameBtnItem";
import useGameData from "../../store/useGameData";

export default function PlayingPhase() {
  const { plPick, compPick } = useGameData((state) => state.battlePicks);

  //   useEffect(() => {
  //     const timeOutId = setTimeout(() => updateShowResult(), 2000);
  //     return () => clearTimeout(timeOutId);
  //   }, []);

  return (
    <div className="w-full h-full whitespace-nowrap flex flex-wrap justify-center content-around gap-x-[10vw] gap-y-[5vw] text-white self-start md:flex-nowrap md:items-center md:gap-[5vw]">
      <section className="w-[clamp(2rem,35vw,10rem)] md:w-[clamp(3rem,40vw,15rem)] flex flex-col items-center gap-4 md:flex-col-reverse md:order-1">
        <GameBtnItem shapeData={plPick.shape} disabled={true} />
        <p className="z-1 font-semibold text-[clamp(0.7rem,2vw,1.3rem)]">
          YOU PICKED
        </p>
      </section>
      <section className="w-[clamp(2rem,35vw,10rem)] md:w-[clamp(3rem,40vw,15rem)] flex flex-col items-center gap-4 md:flex-col-reverse md:order-3">
        <GameBtnItem shapeData={compPick.shape} disabled={true} />
        <p className="z-1 font-semibold  text-[clamp(0.7rem,2vw,1.3rem)]">
          The HOUSE PICKED
        </p>
      </section>
      {/* <section className="z-1 max-md:w-[15rem] max-md:h-[5.5rem] flex flex-col items-center gap-2 md:order-2">
        {showResult && <ResultStatus />}
      </section> */}
    </div>
  );
}
