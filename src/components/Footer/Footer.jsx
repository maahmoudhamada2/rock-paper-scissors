import { GameRules, CloseIcon } from "../../icons/index";
import { useState } from "react";

export default function Footer() {
  const [showRules, setShowRules] = useState(false);
  return (
    <footer className=" p-4 w-full flex justify-center sm:justify-end">
      <button
        className="px-6 py-2 text-[0.75rem] text-white font-semibold tracking-wider border-2 border-gray-600 rounded-[9px]"
        onClick={() => setShowRules((prev) => !prev)}>
        RULES
      </button>
      {showRules ? (
        <section className="w-full h-full z-2 bg-white absolute top-0 left-0 flex justify-center items-center ">
          <div className="w-full h-full p-[2rem] flex flex-col justify-around items-center ">
            <h1 className="text-[1.5rem] font-bold">RULES</h1>
            <GameRules className="w-full" />
            <button onClick={() => setShowRules((prev) => !prev)}>
              <CloseIcon />
            </button>
          </div>
        </section>
      ) : null}
    </footer>
  );
}
