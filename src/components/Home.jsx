import React from "react";
import { HiArrowRight } from "react-icons/hi";
import heroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-sm">
            I am a self-taught developer that started from scratch 1 year ago.
            Currently my main focus is on building beautiful web applications using 
            technologies like React, Tailwind, Next JS and Firebase.
          </p>
          <div>
            <Link to={"portfolio"} smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-300 cursor-pointer">
              Porftolio <span className="group-hover:rotate-90 duration-300"><HiArrowRight size={20} className="ml-1.5"/></span>
            </Link>
          </div>
        </div>

        <div>
          <img src={heroImage} alt="heroImg" className="rounded-2xl mx-auto md:w-full w-2/3" />
        </div>
      </div>
    </div>
  );
};
