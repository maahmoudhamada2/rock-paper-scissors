import { Logo } from "../../icons";
import Score from "./Score";

export default function Header() {
  return (
    <header className="w-full max-w-[40rem] flex justify-between border-3 border-gray-600 rounded-lg p-2">
      <Logo className="max-w-[20rem] h-[5rem]" />
      <Score />
    </header>
  );
}
