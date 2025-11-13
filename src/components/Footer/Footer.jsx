import { GameRules, CloseIcon } from "../../icons/index";
import { useState } from "react";

export default function Footer() {
  const [showRules, setShowRules] = useState(false);
  return (
    <footer>
      <button onClick={() => setShowRules((prev) => !prev)}>RULES</button>
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
