import React from "react";
import { BsEnvelopeAt, BsFileEarmarkPersonFill } from "react-icons/bs";
import { GrLinkedin, GrGithub } from "react-icons/gr";

const SocialBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <GrLinkedin size={36} />
        </>
      ),
      href: "https://www.linkedin.com/in/romyjeanpierre/",
      style: "rounded-tr-md bg-gradient-to-r  from-cyan-500 to text-teal-950 text-white font-burtons border shadow-2xl shadow-white-200 hover:shadow-cyan-500",
    },
    {
      id: 3,
      child: (
        <>
          Email <BsEnvelopeAt size={36} />
        </>
      ),
      href: "mailto:romyjeanpierre@yahoo.com",
      style: 'bg-gradient-to-r  from-cyan-500 to text-teal-950 text-white font-burtons border shadow-2xl shadow-white-200 hover:shadow-cyan-500'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <GrGithub size={36} />
        </>
      ),
      href: "https://github.com/romyjeanpierre",
      style: 'bg-gradient-to-r  from-cyan-500 to text-teal-950 text-white font-burtons border shadow-2xl shadow-white-200 hover:shadow-cyan-500'
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFileEarmarkPersonFill size={36} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md bg-gradient-to-r  from-cyan-500 to text-teal-950 text-white font-burtons border shadow-2xl shadow-white-200 hover:shadow-cyan-500",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialBar;