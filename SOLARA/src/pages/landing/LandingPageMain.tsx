import React from "react";
import bgimage from "../../assets/imgs/bgimage.jpg";

const LandingPageMain = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="flex-col">
          <h1 className="text-8xl mb-4 font-thin font-primary text-color-secondary opacity-80">
            Created for {" "}
            <span className="text-9xl font-styled text-color-secondary opacity-80 mb-4">
              skin
            </span>
          </h1>
        </div>
        <p className="text-lg max-w-2xl leading-relaxed">
          Your journey begins here
        </p>
      </div>
    </div>
  );
};

export default LandingPageMain;
