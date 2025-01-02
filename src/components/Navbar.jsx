import React from "react";
import "../index.css";
import { CiMenuFries } from "react-icons/ci";
import Menu from "./Menu";

function Navbar({ show, setShow }) {
  return (
    <nav className="h-24 bg-[rgb(11,26,51)] text-white sticky z-50 shadow-md shadow-slate-400 top-0 left-0 flex w-full justify-between px-8 lg:px-44 items-center">
      <a href="#hero">
        <h1 className="text-4xl text-orange-300 tracking-[1.7px] font-bahiana font-semibold ">
          SHASHIKANT
        </h1>
      </a>

      <CiMenuFries
        className="sm:hidden size-6 font-bold"
        onClick={() => setShow(!show)}
      />

      {show && <Menu show={show} setShow={setShow} />}

      <ul className="sm:flex justify-center items-center hidden text-xl lg:px-3 gap-8 lg:gap-20">
        <li className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300">
          <a href="#certificates">Certificates</a>
        </li>
        <li className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
