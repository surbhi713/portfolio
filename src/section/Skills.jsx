// import React, { use, useEffect } from 'react'

// import Aos from 'aos';
// import { useDarkMode } from '../components/DarkModeComponent';


// function Skills() {



//     const{darkmode,toggleDarkMode} = useDarkMode();

//   return (
//     <div className={`${darkmode ? 'bg-black' : 'bg-gray-800'} lg:py-20 py-6 px-20
//     flex justify-center items-start gap-10`} >
        
//     </div>
//   )
// }

// export default Skills


import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDarkMode } from "../components/DarkModeComponent";

const SkillsSection = () => {

      useEffect(()=>{
        AOS.init({
            delay:100,
            offset:200,
            duration:800,
            easing:"ease-in-sine"
        })
    })

  const {darkmode,toggleDarkMode} = useDarkMode();
  return (
    <section id="skills" className={`${darkmode?"bg-black text-amber-200" :  "bg-transparent"}
     py-12 justify-center flex px-4 text-gray-800`}>
      <div className="max-w-5xl mx-auto ">
        <h2 data-aos="zoom-in" className="text-5xl font-bold  text-red-900 mb-8 border-b-2
        font-serif border-gray-300 inline-block">
          Skills <span className="text-zinc-800">&</span> Technologies
        </h2>

        <div data-aos="zoom-in" data-aos-delay="400" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-rose-900
        rounded-xl lg:py-20 py-6 shadow-xl shadow-black border-rose-500 px-10 gap-8">
          {/* Frontend Skills */}
          <div className="bg-amber-200 rounded-xl py-10 px-10 gap-10 shadow-black
          shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer
          ">
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <ul className="list-disc font-semibold list-inside text-gray-700 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend & Databases */}
          <div className="bg-amber-200 rounded-xl  py-10 px-10 gap-10 shadow-black
          shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Backend & Databases</h3>
            <ul className="list-disc list-inside font-semibold text-gray-700 space-y-1">
              <li>Python</li>
              <li>Django</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Tools & Workflow */}
          <div className="bg-amber-200 rounded-xl  py-10 px-10 gap-10 shadow-black
          shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer">
            
            <h3 className="text-xl font-bold mb-2">Tools & Workflow</h3>
            <ul className="list-disc font-semibold list-inside text-gray-700 space-y-1">
              <li>VS Code</li>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Pycharm</li>
              <li className="decoration-none"></li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
