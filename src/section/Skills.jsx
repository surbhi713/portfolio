import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDarkMode } from "../components/DarkModeComponent";

const SkillsSection = () => {
  const { darkmode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      delay: 100,
      offset: 200,
      duration: 800,
      easing: "ease-in-sine"
    });
  }, []);

  return (
    <section
      id="skills"
      className={`py-16 px-4 sm:px-6 md:px-10 transition-colors duration-500 
        ${darkmode ? "bg-black text-amber-100" : "bg-gray-50 text-gray-800"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center font-serif relative"
        >
          Skills <span className="text-rose-600">&</span> Technologies
          <div className="absolute left-1/2 -bottom-2 w-24 h-1 bg-rose-500 rounded-full -translate-x-1/2"></div>
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              title: "Frontend",
              items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
            },
            {
              title: "Backend & Databases",
              items: ["Python", "Node.js", "MySQL", "MongoDB"],
            },
            {
              title: "Tools & Workflow",
              items: ["VS Code", "Git & GitHub", "Postman", "Pycharm"],
            },
          ].map((skill, idx) => (
            <div
              key={idx}
              className={`bg-amber-100 ${
                darkmode ? "text-gray-900" : "text-gray-800"
              } rounded-2xl shadow-lg p-6 sm:p-8 hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4">{skill.title}</h3>
              <ul className="list-disc list-inside space-y-2 font-medium">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-800">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
