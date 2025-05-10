// import React, { use, useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Aos from 'aos';
// import { useDarkMode } from '../components/DarkModeComponent';


// function Skills() {

//     useEffect(()=>{
//         Aos.init({
//             delay:100,
//             offset:200,
//             duration:800,
//             easing:"ease-in-sine"
//         })
//     })

//     const{darkmode,toggleDarkMode} = useDarkMode();

//   return (
//     <div className={`${darkmode ? 'bg-black' : 'bg-gray-800'} lg:py-20 py-6 px-20
//     flex justify-center items-start gap-10`} >
        
//     </div>
//   )
// }

// export default Skills


import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-gray-300 inline-block">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend & Databases */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend & Databases</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Python</li>
              <li>Django</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Tools & Workflow */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Tools & Workflow</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>VS Code</li>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Pycharm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
