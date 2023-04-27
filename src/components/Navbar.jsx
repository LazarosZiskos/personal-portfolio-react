import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
      link: "experience",
    },

    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <p className="text-5xl font-signature"> Lazaros </p>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:underline"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {toggleMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {toggleMenu && (
        <ul
        className="flex flex-col justify-center items-center top-0 absolute left-0 w-full h-screen bg-gradient-to-b
            from-black to-gray-800 text-gray-500"
      >
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:underline hover:scale-105">
            <Link onClick={() => setToggleMenu(!toggleMenu) } to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      )}
      
    </div>
  );
};
