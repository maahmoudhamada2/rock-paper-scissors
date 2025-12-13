import PanelHeader from "./PanelHeader/PanelHeader";
import PanelButtons from "./PanelButtons/PanelButtons";
import PanelFooter from "./PanelFooter/PanelFooter";

export default function GamePanel() {
  return (
    <article className="overflow-y-auto overflow-x-hidden h-screen flex flex-col items-center p-4">
      <PanelHeader />
      <PanelButtons />
      <PanelFooter />
    </article>
  );
}
