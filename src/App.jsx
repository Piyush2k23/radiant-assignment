import "./App.scss";
import Footer from "./components/footer/Footer";
import HeroSectionContainer from "./components/heroSectionContainer/HeroSectionContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSectionContainer />
        <Footer />
      </main>
    </>
  );
}

export default App;
