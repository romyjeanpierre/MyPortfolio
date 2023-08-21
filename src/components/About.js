import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-600 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600">
            About
          </p>
        </div>

        <p className="text-xl text-teal-500">
          Hello, my name is Romy Jean-Pierre. I am a motivated, dedicated and enthusiastic Junior Software and Cyber-Security Engineer. Presently, I'm enrolled in Network Walks to earn an official certificate from Cisco in Cyber Security, and also attending PerScholas to earn a certificate in Software Engineering. The experience has been and continues to be fulfilling and rewarding, offering a unique blend of problem-solving challenges, good research, creativity, analytical thinking and much more.
             
        </p>

        <br />

        <p className="text-xl text-teal-500">
         Through my professional experience in the insurance and medical industries, I have gained and strengthened many skills that are transferrable to the tech industry, such as:
         <br />
         <br />
         <h2 className="text-xl text-orange-200">
            1. Adaptability - I am comfortable adapting and succeeding in unfamiliar environments. 
          <br />
          <br />
            2. Teamwork - I work well with others in various situations and environments and can effectively resolve teamwork issues such as communication breakdowns and personality conflicts.
          <br /> 
          <br />
            3. Time management - Meeting deadlines is a key part of almost every role I held.  
          <br />
          <br />
            4. Resourcefulness - Being resourceful is my area of expertise. I am able to get things done using my resources and proactive in finding solutions. 
          </h2>
          <br />
          Languages I speak are: French and Creole
         
        </p>
      </div>
    </div>
  );
};

export default About;