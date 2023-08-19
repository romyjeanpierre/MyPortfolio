import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import kaliLinux from "../assets/kaliLinux.png";

const TechnicalSkills = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-teal-500",
    },
    {
      id: 2,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 3,
      src: node,
      title: "Node",
      style: "shadow-teal-500",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
      style: "shadow-teal-500",
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-teal-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-teal-500",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-teal-500",
    },
    {
      id: 8,
      src: kaliLinux,
      title: "Kali Linux",
      style: "shadow-teal-500",
    },
  ];

  return (
    <div
      name="technicalSkills"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-600"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-600 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">Additional programming languages to be added upon completion of courses</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;