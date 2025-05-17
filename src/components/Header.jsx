import React, { useEffect,useState } from 'react'
import { useDarkMode } from './DarkModeComponent'
import { Link } from "react-scroll";
import client5 from "../assets/client5.png";



function Header() {

      const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const {darkmode,toggleDarkMode} = useDarkMode();

    const navItems = [
      {
        link:'Home',path:'home' 
      },
      {
        link:'About',path:'about' 
      },
      {
        link:'Contact',path:'contact' 
      },
      {
        link:'Skills and Tech',path:'skills' 
      },
      {
        link:'Projects',path:'projects' 
      },

    ]
  return (
    <nav className={`${darkmode ? 'bg-black' : scrolled ? ' bg-teal-600  shadow-xl px-4 border-teal-900'  : 'bg-amber-200' }
       lg:px-10 px-4 py-0 flex justify-between items-start gap-4 sticky top-0 z-30  ease-in-out`}>

      <div className='flex gap-5 justify-center items-center py-4'>
        {/* <img src={client5} alt="me"  className='w-[30%] h-fit transition-transform duration-300 transform hover:scale-110'/> */}
        <h1 className='font-bold text-4xl text-pink-700 font-serif 
        hover:text-rose-500 transform hover:scale-110 transition-transform duration-300'>Surbhi</h1>
        {/* give it a path that routes to about me section */}
      </div>
        
        <ul className='flex justify-center items-center gap-4 py-4  '>
          {
            navItems.map(({link,path})=>(
             <Link key={path} to={path} smooth={true} spy={true} offset={-100} 
             className='text-xl uppercase font-serif cursor-pointer px-3 py-2 text-black font-bold hover:bg-red-600 rounded-xl
            tranform hover:scale-110 hover:text-white transition-transform duration-300'>{link}</Link>
            ))
          }
        </ul>
        
    </nav>
  )
}

export default Header

// https://my-port-git-main-kaushals-projects-8d783411.vercel.app/
