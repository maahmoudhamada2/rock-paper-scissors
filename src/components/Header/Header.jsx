import { Logo, LogoBonus } from "../../icons";
import Score from "./Score";

export default function Header() {
  return (
    <header className="z-1 w-full max-w-[40rem] flex justify-between items-center border-3 border-gray-600 rounded-lg p-2">
      <Logo className="max-h-[7rem]" />
      <Score />
    </header>
  );
}
