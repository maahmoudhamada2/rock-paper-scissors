import { Logo } from "../../icons";
import Score from "./Score";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center border-3 border-gray-600 rounded-lg px-[0.7rem] py-2">
      <Logo className="max-w-[10rem] " />
      <Score />
    </header>
  );
}
