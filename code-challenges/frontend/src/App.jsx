import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";

function App() {
  return (
    <>
      {/* 
    Hero
    Challenges List
    */}
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Features />
      <Footer />
    </>
  );
}

export default App;
