import React from "react";
import Selfie from "../assets/selfie.png";
//import { BsArrowRightCircle } from "react-icons/bs";
//import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-600">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">

          <h2 className="text-4xl sm:text-5xl font-semi-bold text-white">
            Junior Software and Cyber Security Engineer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Passionate about leveraging technology to solve complex problems and create meaningful impact. My coursework at Perscholas, Network Walks and through self-study has provided me with a solid foundation in various programming languages, tools and platforms. I am eager to apply my technical and transferrable skills to a challenging role in the tech industry, where I can contribute, learn and collaborate. 
          </p> 
          
        </div>

         
        <div>
          <img
            src={Selfie}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-3/ font-burtons border shadow-2xl shadow-white-200 hover:shadow-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;