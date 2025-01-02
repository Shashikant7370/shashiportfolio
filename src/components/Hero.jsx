import React  from "react";
import resume from "/shashikant_resume.pdf"
import Menu from "./Menu";

function Hero({show}) {

  return (
    <section id="hero" className="bg-[rgb(11,26,51)] w-full flex flex-col-reverse lg:flex-row  justify-center items-center sm:justify-evenly px-10 sm:px-20 sm:py-32 relative">
     
      <div className=" flex max-w-[500px] flex-col p-3 text-white">
        <h2 className="text-2xl sm:text-[29px] font-mono text-start sm:text-end">
          Hi, I'm{" "}
          <span className="text-orange-400 font-semibold">
            MERN Stack Developer
          </span>
          .
        </h2>
        <p>Aspiring MERN Stack Developer | Passionate Learner</p>

        <div className="flex gap-5">
          <a
            href="#contact"
            className="px-3 z-20 sm:px-4 py-2 mt-4 bg-orange-500 rounded-md "
          >
            Hire Me
          </a>
          <a
            href={resume} target="_blank" download
            className="px-3 z-20 md:px-4 py-2 mt-4 bg-green-500 rounded-md"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="z-30">
        <img
          src="/profileimage-removebg.png"
          className="h-60 w-60 sm:h-80 sm:w-80 rounded-full z-30 border-2 border-orange-300 shadow-[0_0_60px_-5px_rgba(0,0,0,0.3)] shadow-orange-500"
          alt=""
        />
      </div>

      <img src="/linejhalar.png" className="h-[500px] w-full absolute bottom-0 left-0 opacity-15" />
    </section>
  );
}

export default Hero;
