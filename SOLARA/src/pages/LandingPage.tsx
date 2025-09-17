import React from "react";
import bgimage from "../assets/imgs/bgimage.jpg";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Header className="absolute top-0 w-full z-50" />
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Created for
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-styled mb-4">
          Skin
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
          Your journey begins here
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
