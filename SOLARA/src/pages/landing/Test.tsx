import React from "react";
import img4 from "../../assets/imgs/img4.jpg"; // Ensure correct path
import img3 from "../../assets/imgs/img3.jpg"; // Ensure correct path
import img1 from "../../assets/imgs/img1.jpg"; // Ensure correct path

const Test = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${img3}), url(${img4}), url(${img1})`, 
        backgroundPosition: "left, center, right",
        backgroundSize: "33.33% 100%", 
        backgroundRepeat: "no-repeat", 
      }}
    >
      <h1 className="text-4xl font-bold font-primary">Skin for the sun</h1>
      <p className="text-lg font-thin">Find out your type of skin to shop the products best suited for you</p>
    </div>
  );
};

export default Test;