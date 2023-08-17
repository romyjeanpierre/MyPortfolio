import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, my name is Romy Jean-Pierre. I am a motivated, dedicated and enthusiastic Junior Software Engineer.  I am a graduate of Adelphi University, with a Bachelor's Degree in Business Management and Communication. I am also enrolled in two rigorous Tech courses: 1. Perscholas to earn a certificate in Software Engineering. 2. Network Walks to earn an official certificate from Cisco in Cyber Security. 
           
          
        </p>

        <br />

        <p className="text-xl">
          I am a self starter and motivated team player with ability to accomplish tasks independently. Through my professional experience in public health, customer service and No-Fault Insurance, I have gained and strengthened many skills that are transferrable to the tech industry, such as: 
         
        </p>
      </div>
    </div>
  );
};

export default About;