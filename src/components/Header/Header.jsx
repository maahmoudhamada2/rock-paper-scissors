import { Logo } from "../../icons";
import Score from "./Score";

export default function Header() {
  return (
    <header className="w-full p-[0.7rem] flex justify-between items-center border-3 border-gray-600 rounded-lg sm:w-[90%]">
      <Logo className="w-[285px] h-[70px]" />
      <Score />
    </header>
  );
}
