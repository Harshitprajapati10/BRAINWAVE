import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Userspremium from "./components/Userspremium"
import React, { useState, useEffect } from "react";
import { premiumH } from "./assets";

const App = () => {
  const [showImage, setShowImage] = useState(true);
  const [width, setWidth] = useState("0%");
  useEffect(() => {
    // Set a timeout to change width after the page loads
    const timer1 = setTimeout(() => {
      setWidth("100%");
    }, 500);

    return () => clearTimeout(timer1); // Clean up the timer
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      // setWidth("100%");
      setShowImage(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showImage && (
      <div className="h-[95vh] w-[100vw]">
        <div className="h-[10px] bg-purple-900 transition-all duration-500" style={{ width }}></div>
        <div className="w-full h-[80vh] flex items-center justify-center">
          <img className="h-[20vh] rotate-340" src={premiumH} alt="Loading..." />
        </div>
        <div className="w-full flex justify-center">
          <p className=" text-5xl font-edu-vic-wa-nt-beginner font-bold">
            premiumH
          </p>
        </div>
      </div>
     )} 

      {!showImage && (
        <>
          <Header />
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Hero />
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
            <Userspremium/>
          </div>
          <ButtonGradient />
          <Footer />
        </>
      )}

    </>
  );
};

export default App;
