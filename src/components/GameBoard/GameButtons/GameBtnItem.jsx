import useGameData from "../../../store/useGameData";
import clsx from "clsx";

export default function GameBtnItem({ shapeData, disabled, winner = null }) {
  const startPlayingPhase = useGameData((state) => state.startPlayingPhase);
  return (
    <div
      className={clsx(
        `w-full transition-all relative ${shapeData.position} row-span-2 z-1 bg-white rounded-full aspect-square`,
        disabled ? null : "hover:scale-90 active:scale-80",
        winner ? "rings" : null
      )}>
      <div
        className={`inset-shadow-choose-btn w-full h-full rounded-full border-[clamp(1rem,1vw,2rem)] ${shapeData.borderColor}`}>
        <button
          className="cursor-pointer w-full h-full flex justify-center items-center"
          disabled={disabled}
          onClick={() => startPlayingPhase(shapeData.id)}
          id={shapeData.id}
          type="button">
          <shapeData.icon />
        </button>
      </div>
      <span className="outer-shadow"></span>
    </div>
  );
}
