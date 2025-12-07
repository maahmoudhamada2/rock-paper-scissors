import classic from "./assets/GameContainer.png";
import RPSLS from "./assets/RPSLSContainer.png";
export default function ChoosingVersion() {
  return (
    <article className="pt-[2rem] flex flex-col justify-center gap-10 whitespace-nowrap">
      <header className="flex justify-center font-bold text-white">
        <h1 className="text-[2rem]">Choose Version</h1>
      </header>
      <main className="w-full flex flex-col justify-center items-center gap-8">
        <div className="p-4 rounded-2xl border-2 border-gray-600">
          <button className="text-white font-bold flex flex-col gap-6">
            <img className="w-full max-w-[10rem] aspect-square" src={classic} />
            Classic Version
          </button>
        </div>
        <div className="p-4 rounded-2xl border-2 border-gray-600">
          <button className="text-white font-bold flex flex-col gap-6">
            <img
              className="w-full max-w-[10rem] aspect-square h-full"
              src={RPSLS}
            />
            RPSLS Version
          </button>
        </div>
      </main>
    </article>
  );
}
