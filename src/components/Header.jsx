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
        link:'Projects',path:'tools' 
      },

    ]
  return (
    <nav className={`${darkmode ? 'bg-black' : scrolled ? ' bg-teal-600 py-2 shadow-white shadow-xl border-teal-900'  : 'bg-amber-200' }
      border border-amber-400 lg:px-10 px-4 py-0 flex justify-between items-start 
      gap-4 sticky top-0 z-30  ease-in-out`}>

      <div className='flex gap-5 justify-center items-center py-2'>
        <img src={client5} alt="me"  className='w-[30%] h-fit transition-transform duration-300 transform hover:scale-110'/>
        <h1 className='font-bold text-4xl text-pink-700 font-serif
        hover:text-rose-500 transform hover:scale-110 transition-transform duration-300'>Surbhi</h1>
        {/* give it a path that routes to about me section */}
      </div>
        
        <ul className='flex justify-center items-center gap-4 py-10 '>
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



// function Header() {


//   return (
//     <nav
//       className={`
//         ${darkmode ? 'bg-black' : 'bg-amber-200'} 
//         border border-amber-400 px-4 lg:px-10 
//         transition-all duration-300
//     >
//       <div className="flex gap-4 items-center transition-transform duration-300">
//         <img
//           src={client5}
//           alt="me"
//           className={`h-12 w-12 object-contain transition-all duration-300 ${
//             scrolled ? 'scale-90' : 'scale-100'
//           }`}
//         />
//         <h1
//           className={`font-bold font-serif text-pink-700 hover:text-rose-500 transition-transform duration-300 ${
//             scrolled ? 'text-2xl' : 'text-4xl'
//           }`}
//         >
//         </h1>
//       </div>

//       
//   );
// }

// export default Header;
