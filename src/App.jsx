import Header from "./components/Header/Header";
import GameShapes from "./components/GameShapes/GameShapes";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <article className="h-screen p-4 flex flex-col items-center">
      <Header />
      <GameShapes />
      <Footer />
    </article>
  );
}
