import React from "react";
import bgimage from "../assets/imgs/bgimage.jpg"; // Ensure the correct path

function Footer() {
  return (
    <footer className="relative h-auto">
      <div
        className="bg-cover bg-no-repeat absolute inset-0 brightness-80"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundPosition: "center bottom", 
          backgroundSize: "cover", 
        }}
      />
      <div className="relative flex flex-col md:flex-row items-center justify-between text-color-secondary opacity-80 md:p-20">
        <div className="flex flex-col mb-8 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-primary mb-2">
            Join the <span className="font-styled">Club</span>
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-300 p-2 mb-2"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col space-y-2">
            <h1 className="font-primary text-3xl">Navigate</h1>
            <a href="#" className="hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="hover:text-gray-900">
              Profile
            </a>
            <a href="#" className="hover:text-gray-900">
              Our philosophy
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-primary text-3xl">Contact</h1>

            <a href="#" className="hover:text-gray-900">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-900">
              Pinterest
            </a>
            <a href="#" className="hover:text-gray-900">
              Facebook
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-primary text-3xl">Information</h1>

            <a href="#" className="hover:text-gray-900">
              FAQ
            </a>
            <a href="#" className="hover:text-gray-900">
              Shipping
            </a>
            <a href="#" className="hover:text-gray-900">
              Return and Refund Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
