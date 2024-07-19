import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import DexMark from "./components/dexMark";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <BorderSec />
        <AboutUs />
        <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%] bg-[#0f131c] ">
        

          <h1 className=" text-3xl sm:text-6xl font-bold text-white font-dream">
            Tokenomics
          </h1>

      
        </div>
        <Taxs />

        <DexMark/>
        {/* <ChooseHero /> */}
        <HowToBuy />
        <div className="main-bg2 pt-4">
          <Faq />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
