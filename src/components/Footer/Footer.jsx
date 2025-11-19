import { GameRules, CloseIcon } from "../../icons/index";
import { useState } from "react";

export default function Footer() {
  const [showRules, setShowRules] = useState(false);
  return (
    <footer>
      <button
        className="px-6 py-2 text-[0.75rem] text-white font-semibold tracking-wider border-2 border-gray-600 rounded-[9px]"
        onClick={() => setShowRules((prev) => !prev)}>
        RULES
      </button>
      {showRules ? (
        <section>
          <div>
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
