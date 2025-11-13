import Header from "./components/Header/Header";
import GameShapes from "./components/GameShapes/GameShapes";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <article className="w-full h-full p-4 flex flex-col justify-between items-center">
      <Header />
      <GameShapes />
      <Footer />
    </article>
  );
}
