import React from "react";
// import "./Skills.css";

const skills = [
  {
    skill: "Html",
    src: "/skillsimages/html.png",
    per: 95,
  },
  {
    skill: "CSS",
    src: "/skillsimages/css.png",
    per: 95,
  },
  {
    skill: "Javascript",
    src: "/skillsimages/javascript.png",
    per: 90,
  },
  {
    skill: "React Js",
    src: "/skillsimages/react.png",
    per: 90,
  },
  {
    skill: "Node Js",
    src: "/skillsimages/node.png",
    per: 85,
  },
  {
    skill: "Express JS",
    src: "/skillsimages/express js.png",
    per: 85,
  },
  {
    skill: "MongoDB",
    src: "/skillsimages/mongodb.png",
    per: 85,
  },
  {
    skill: "Bootstrap",
    src: "/skillsimages/bootstrap.png",
    per: 80,
  },
  {
    skill: "TailwindCSS",
    src: "/skillsimages/tailwindcss.png",
    per:98,
  },
  {
    skill: "Next JS",
    src: "/skillsimages/nextjs.png",
    per: 75,
  },
  {
    skill: "PHP",
    src: "/skillsimages/php.png",
    per: 75,
  },
  {
    skill: "MySQL",
    src: "/skillsimages/mysql.png",
    per: 80,
  },
  {
    skill: "Java",
    src: "/skillsimages/java.png",
    per: 75,
  },
  {
    skill: "Python",
    src: "/skillsimages/python.png",
    per: 70,
  },
  {
    skill: "Flutter",
    src: "/skillsimages/flutter.png",
    per: 70,
  },
  {
    skill: "PostgreSQL",
    src: "/skillsimages/postgresql.png",
    per: 70,
  },
  {
    skill: "ChatGPT",
    src: "/skillsimages/chatgpt.png",
    per: 85,
  },
  {
    skill: "Git/GitHub",
    src: "/skillsimages/Git_github.png",
    per: 80,
  },
  {
    skill: "Power BI",
    src: "/skillsimages/power bi.png",
    per: 70,
  },
];
function Skills() {

  return (
    <section id="skills" className="bg-[rgb(11,26,51)] relative">
      <hr className="w-full text-white" />
      <h2 className="text-white text-4xl font-semibold mt-10">Skills</h2>
      <div className="flex gap-2 md:gap-6 lg:gap-8 flex-wrap w-full lg:w-[900px] m-auto justify-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col w-36 sm:w-52 lg:w-60 p-2 sm:p-4 justify-center rounded-md  z-20 text-orange-400 items-center bg-gradient-to-tr from-sky-500 to-gray-700-400 relative overflow-hidden"
          >
            <img
              src={skill.src}
              alt="skill_image"
              className="h-8 w-8 sm:h-16 sm:w-16"
            />
            <h2 className="text-xs sm:text-xl uppercase">{skill.skill}</h2>
            <div className="absolute bottom-0 left-0 w-full bg-slate-600">
              <div style={{width:`${skill.per}%`}} className={`h-2 bg-orange-400 rounded-full`}></div>
            </div>
            <h1 className="absolute right-1 bottom-2 sm:right-4 sm:bottom-4 text-xs text-white ">{skill.per}%</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
