import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeComponent'
import Aos from 'aos';
import 'aos/dist/aos.css';


function About() {
    useEffect(()=>{
    Aos.init({
        offset:200,
        duration:800,
        delay:100,
        easing:"ease-in-sine"
        })
    },[])
    
    const{darkmode,toggleDarkMode}=useDarkMode();

  return (
    <div id='about' className={`${darkmode ? 'bg-black' : 'bg-transparent'}' lg:py-20 px-20
    flex flex-col justify-center items-center gap-8`}>
        <h1 className='text-5xl mb-8 border-b-2 border-gray-300 text-shadow-lg font-semibold  dark:text-white
        font-serif' data-aos="zoom-in">About Me</h1>
        <p className='text-teal-900  text-xl font-semibold text-center leading-7 py-10'
        data-aos="zoom-in" data-aos-delay="200">Hey, I'm Surbhi — a frontend developer who turns pixels into purpose.
    I don’t just build websites — I craft interactive experiences that feel alive.
    <br /> With a strong grip on HTML, CSS, JavaScript, and React,  I blend code and creativity to build smooth, responsive, and engaging web interfaces. <br /> Whether it’s a startup idea or a complex dashboard, I love bringing clarity to complexity through clean code and intuitive design. <br />

    I'm driven by the belief that good design isn't just how something looks — it's how it feels to use. <br /> Though I am still working on API's .</p>
    </div>
  )
}

export default About