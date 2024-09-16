import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import Featuresoverview from "./components/Featuresoverview"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<>
              <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Pricing />
                <Roadmap />
              </div>
              <ButtonGradient /></>
          } />
          <Route path="/features" element={<Featuresoverview />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
