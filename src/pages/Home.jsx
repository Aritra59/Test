// src/pages/Home.jsx
import React from "react";
import { Tajmahal } from "../assets/assets";

const Home = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-around px-10 py-20">
    {/* Left Content */}
    <div className="max-w-lg space-y-6">
      <h1 className="text-5xl font-bold text-gray-900">
        Uncover India's <br /> Vibrant Past <br /> Through Its Landmarks
      </h1>
      <p className="text-lg text-gray-600">
        Journey through India's enchanting history and discover its iconic treasures.
      </p>
      <button className="bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-600 transition">
        Start Your Journey
      </button>
    </div>

    {/* Right Image */}
    <div className="">
      <img
        src={Tajmahal}
        alt="Taj Mahal"
        className="w-64 h-[30rem] md:w-[24rem] rounded-lg shadow-lg"
      />
    </div>
  </div>
  );
}; 

export default Home;
