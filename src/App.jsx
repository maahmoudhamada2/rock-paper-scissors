import Header from "./components/Header/Header";
import GameShapes from "./components/GameShapes/GameShapes";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <article className="bg-red-600 w-full h-full min-h-[100vh] p-4 flex flex-col justify-between items-center">
      <Header />
      <GameShapes />
      <Footer />
    </article>
  );
}
