import React from "react";
import LandingPageMain from "./LandingPageMain";
import BestSellers from "./BestSellers";
import Test from "./Test";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const LandingPage = () => {
  return (
    <div>
      <Header className=" absolute top-0 w-full z-50" />
      <LandingPageMain />
      <BestSellers />
      <Test />
      <Footer/>
    </div>
  );
};

export default LandingPage;
