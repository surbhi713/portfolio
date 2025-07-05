import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import profileImg from '../assets/surbhi.jpg';


function Home() {
    useEffect(()=>{
      Aos.init({
        offset:200,
        duration:800,
        delay:100,
        easing:"ease-in-sine"
      })
    },[])


  return (
    <div id='home' className='flex flex-col justify-center items-center gap-8 lg:py-20 py-7 px-3 mt-20
    '>
       <div className='flex-1 text-center lg:text-left'>
        <h1 data-aos="zoom-in" className='lg:text-7xl text-5xl font-serif font-semibold text-center'>Hi! I'm 
             <span className="text-rose-700 hover:text-yellow-900 text-center"> Surbhi</span></h1>
             
             <p data-aos="zoom-in" data-aos-delay="200" 
             className='justify-center items-center text-center px-4 text-xl font-semibold leading-10'>
                A Frontend Developer with a strong foundation in <strong>HTML</strong>,
             <strong> CSS</strong>, <strong>JAVASCRIPT</strong> <br /> and 
                modern frameworks like <strong>REACT.</strong></p>
                </div>

            <div className='flex gap-10 mt-6 items-end justify-center lg:py-10 px-10 rounded-xl'>
             <button  className='bg-rose-950  text-white rounded-xl font-semibold
            border shadow-lg shadow-black p-4 px-6 transform hover:scale-110 
                 
            transition-transform duration-300'  >
                <a href='#projects' smooth={true}>View Project</a>
            </button>
           
            <button className='bg-rose-950 text-white rounded-xl font-semibold
            border shadow-lg shadow-black p-4 px-6 transform hover:scale-110 
             transition-transform duration-300'>
                <a href="#contact" smooth={true}>Contact Me</a>
            </button>
            </div>

            
    </div>
  )
}

export default Home