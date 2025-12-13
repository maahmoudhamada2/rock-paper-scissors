import useGameData from "../../store/useGameData";
import GameShapeItem from "./GameShapeItem";
import { BgPentagon, BgTriangle, ScissorsIcon } from "../../icons";

export default function PreBattlePhase() {
  const container = useGameData((state) => state.container);

  return (
    // <div className="self-center relative grid grid-cols-[repeat(4,clamp(1.5rem,10vw,3rem))] gap-x-[2.5rem] gap-y-[1.5rem]">
    // <div className="h-full grid relative w-full max-w-[30rem]">
    //   {/* <div className="w-full h-full flex justify-center items-center absolute top-0 left-0"> */}
    //   <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 ">
    //     <container.background className="w-full h-full" />
    //   </div>
    //   {container.shapes.map((shape) => (
    //     <GameShapeItem
    //       key={shape.id}
    //       shapeData={shape}
    //       position={shape.position}
    //     />
    //   ))}
    <div className="max-w-[20rem] aspect-square grid grid-cols-15 grid-rows-15">
      <div className={`w-[86%] h-full ${container.background.position}`}>
        <container.background.icon className="w-full h-full" />
      </div>
      {container.shapes.map((shape) => (
        <GameShapeItem key={shape.id} shapeData={shape} />
      ))}
    </div>
  );
}
