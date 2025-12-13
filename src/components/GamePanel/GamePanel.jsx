import PanelHeader from "./PanelHeader/PanelHeader";
import PanelButtons from "./PanelButtons/PanelButtons";
import PanelFooter from "./PanelFooter/PanelFooter";
import useGameData from "../../store/useGameData";

export default function GamePanel() {
  const updateShowRules = useGameData((state) => state.updateShowRules);
  return (
    <article className="h-full flex flex-col items-center p-4">
      <PanelHeader />
      <PanelButtons />
      <PanelFooter onLoadRules={updateShowRules} />
    </article>
  );
}
