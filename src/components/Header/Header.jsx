import { Logo } from "../../icons";
import Score from "./Score";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-3 border-gray-600 rounded-lg p-4">
      <Logo className="max-h-[7rem]" />
      <Score />
    </header>
  );
}
