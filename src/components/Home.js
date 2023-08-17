import React from "react";
import HeroImage from "../assets/heroImage2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-semi-bold text-white">
            Junior Software and Cyber Security Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Passionate about leveraging technology to solve complex problems and create meaningful impact. My coursework at Perscholas, Network Walks and through self-study has provided me with a solid foundation in various programming languages, tools and platforms. I am eager to apply my technical and transferrable skills to a challenging role in the tech industry, where I can contribute, learn and collaborate. 
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-cyan-500 to text-teal text-white font-burtons border cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3 font-burtons border shadow-teal-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;