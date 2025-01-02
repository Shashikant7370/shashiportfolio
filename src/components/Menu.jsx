import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({show,setShow}) => {
  return (
    <ul
      className={`flex flex-col justify-center items-start bg-slate-800 transition-all duration-500 text-xl text-white p-5 pr-10 gap-5  z-50 absolute top-24 rounded-bl-lg ${
        show ? "right-0" : "-right-200"
      }`}
    >
      <button
        onClick={() => setShow(false)}
        className="absolute right-3 top-3 text-4xl text-red-500 p-2 cursor-pointer"
      >
        *
      </button>
      <li onClick={() => setShow(false)}>
        <a
          href="#hero"
          className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300"
        >
          Home
        </a>
      </li>
      <li onClick={() => setShow(false)}>
        <a
          href="#about"
          className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300"
        >
          About
        </a>
      </li>
      <li onClick={() => setShow(false)}>
        <a
          href="#skills"
          className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300"
        >
          Skills
        </a>
      </li>
      <li onClick={() => setShow(false)}>
        <a
          href="#projects"
          className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300"
        >
          Projects
        </a>
      </li>
      <li onClick={() => setShow(false)}>
        <a
          href="#certificates"
          className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300"
        >
          Certificates
        </a>
      </li>
      <li onClick={() => setShow(false)}>
        <a
          href="#contact"
          className="hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Menu