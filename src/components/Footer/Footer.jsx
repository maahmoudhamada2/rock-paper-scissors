import { GameRules, CloseIcon } from "../../icons/index";
import { useState } from "react";

export default function Footer() {
  const [showRules, setShowRules] = useState(false);
  return (
    <footer className="relative p-4 w-full flex justify-center">
      <button
        className="px-6 py-2 text-[0.75rem] text-white font-semibold tracking-wider border-2 border-gray-600 rounded-[9px]"
        onClick={() => setShowRules((prev) => !prev)}>
        RULES
      </button>
      {showRules ? (
        <section>
          <div>
            <header>
              <h1>RULES</h1>
            </header>
            <main>
              <GameRules />
            </main>
            <footer>
              <button onClick={() => setShowRules((prev) => !prev)}>
                <CloseIcon />
              </button>
            </footer>
          </div>
        </section>
      ) : null}
    </footer>
  );
}
