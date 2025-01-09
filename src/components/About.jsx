import React from "react";
// import "./About.css";

function About() {
  return (
    <section id="about" className="bg-[rgb(11,26,51)] ">
      <hr className="w-full text-white" />
      <h2 className="text-white text-4xl font-semibold mt-5">About Me</h2>
      <p data-aos="zoom-in-up" className=" sm:text-xl text-white sm:w-[550px] m-auto text-center leading-8">
        I am an aspiring MERN Stack Developer with expertise in React.js,
        Node.js, MongoDB, and Express.js. I enjoy building responsive and
        dynamic web applications.
      </p>
    </section>
  );
}

 export default About;
