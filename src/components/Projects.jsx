import React from "react";
// import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="">
      <h2 className="text-black text-4xl font-semibold p-0 m-0 box-content">
        Projects
      </h2>

      {/* Meme Generator */}
      <div className="mt-3 shadow-md rounded-lg py-10 flex flex-col-reverse sm:flex-row justify-evenly items-center">
        <div className="sm:w-[400px]">
          <h3 className="text-xl py-1 text-sky-600 font-semibold underline">
            Meme Generator App
          </h3>
          <p className="text-sm sm:text-xl">
            A fun app built with React.js to create and share memes dynamically.
            In this app, you can create memes by adding text to the top and
            bottom of the image. You can also download the meme and share it on
            social media.
          </p>
        </div>
        <div className="hover:scale-105 transition-all duration-700">
          <img
            src="/projects/meme_generator.png"
            height={300}
            width={400}
            className="shadow-inner shadow-slate-700 p-1 rounded-md"
          />
        </div>
      </div>

      {/*BMI Calculator*/}

      <div className="mt-8 shadow-md rounded-lg py-10 flex flex-col sm:flex-row justify-evenly items-center">
        <div className="hover:scale-105 transition-all duration-700">
          <img
            src="/projects/bmi_calculator.png"
            height={300}
            width={400}
            className="shadow-inner shadow-slate-700 p-1 rounded-md"
          />
        </div>
        <div className="sm:w-[400px]">
          <h3 className="text-xl py-1 text-sky-600 font-semibold underline">
            BMI Calculator App
          </h3>
          <p className="text-sm sm:text-xl">
            A simple app built with React.js to calculate BMI with height and
            weight. It also shows the category of BMI.
          </p>
        </div>
      </div>

      {/* Weather App */}
      <div className="mt-8 shadow-md rounded-lg py-10 flex flex-col-reverse sm:flex-row justify-evenly items-center">
        <div className="sm:w-[400px]">
          <h3 className="text-xl py-1 text-sky-600 font-semibold underline">
            Weather App
          </h3>
          <p className="text-sm sm:text-xl">
            A weather app built with React.js to get the weather of any city
            using the OpenWeatherMap API. In this app, you can search for any
            city by longitude and latitude and get the weather details of that
            city. We use context API to manage the state of the app.
          </p>
        </div>

        <div className="hover:scale-105 transition-all duration-500">
          <img
            src="/projects/weather_app.png"
            height={200}
            width={400}
            className="shadow-inner shadow-slate-700 p-1 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
