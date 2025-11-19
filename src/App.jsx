import Header from "./components/Header/Header";
import GameShapes from "./components/GameShapes/GameShapes";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <article className="min-h-screen flex flex-col items-center p-4">
      <Header />
      <GameShapes />
      <Footer />
    </article>
  );
}
