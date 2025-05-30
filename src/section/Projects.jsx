import React, { use, useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useDarkMode } from '../components/DarkModeComponent';
import project from "../components/export.js";


function Project() {
    useEffect(()=>{
        Aos.init({
            delay:100,
            offset:200,
            duration:800,
            easing:'ease-in-sine'
        })
    })

    const{darkmode,toggleDarkMode} = useDarkMode()

  return (
    <section className={`${darkmode ? 'bg-black' : 'bg-transparent'}  
        lg:px-20 px-6 py-20 justify-center items-center gap-20  flex flex-col  lg:w-[95%]
    w-full h-fit m-auto bg-center bg-cover`}>
        <div className='flex flex-col justify-center items-start gap-4'>
        <h1 className='text-5xl border-b-2 border-gray-400 font-semibold font-serif'>
            Projects
        </h1>
        </div>
        

        <div id="projects" data-aos="zoom-in"  className='grid lg:grid-cols-3 grid-cols-1 items-start gap-10 bg-fuchsia-200
         rounded-xl p-8 justify-between w-full shadow-xl shadow-black'>
            {
                project.map((items,index)=>(
                    <div key={index} className='rounded-xl  justify-center
               items-start gap-6 cursor-pointer flex flex-col p-12  '>
                        <div className='gap-4 flex justify-start items-center w-full transform hover:scale-110
                        transition-transform duration-300 '>
                            <img src={items.image} alt={items.alt} data-aos="fade-in" data-aos-delay="800" 
                            className='rounded-xl' />
                            <button className="absolute left-7 center-10 bg-fuchsia-600
                             text-white px-4 py-2 text-sm font-semibold rounded hover:bg-fuchsia-700">
                                <a href={items.link}>Live Demo</a>
                              </button>
                            <button className="absolute right-7 center-10 bg-fuchsia-600
                             text-white px-4 py-2 text-sm font-semibold rounded hover:bg-fuchsia-700">
                                <a href="">Source Code</a>
                              </button>
                        </div>
                        <div>
                        <h1 className='text-xl font-semibold border-b-2 border-gray-500 '>{items.name}</h1><br />
                        <p className='text-lg'>{items.about}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default Project