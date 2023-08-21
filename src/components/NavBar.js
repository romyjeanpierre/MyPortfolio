import React, {useState} from 'react';
import { FaTimes} from 'react-icons/fa'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from "react-scroll";

  const NavBar = () => {
    const [nav, setNav] = useState(false);
  
    const links = [
      {
        id: 1,
        link: "home",
      },
      {
        id: 2,
        link: "about",
      },
      {
        id: 3,
        link: "portfolio",
      },
      {
        id: 4,
        link: "technicalSkills",
      },
      {
        id: 5,
        link: "contact",
      },
    ];



    return (
      <div className="fixed h-15 w-full flex justify-between items-center px-2 bg-gradient-to-r  from-cyan-500 to text-teal-950">
        <div>
          <h1 className="text-4xl font-signature ml-2 text-teal-900 font-burtons shadow-2xl shadow-white-200 hover:shadow-cyan-500">Romy A. Jean-Pierre</h1>
        </div>
  
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="rounded-xl px-4 border shadow-2xl shadow-white-200 hover:shadow-cyan-500 shadow-gray hover cursor-pointer capitalize font-medium bold text-teal-400 hover:scale-105 duration-200  "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
  
        <div
          onClick={() => setNav(!nav)}
          className=" pr-1 z-10 text-cyan-500 md:hidden cursor-pointer"
        >
          {nav ? <FaTimes size={30} /> : <BsThreeDotsVertical size={30} />}
        </div>
  
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default NavBar;