import React, { useEffect, useState } from 'react';
import { useDarkMode } from './DarkModeComponent';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; 
import client5 from '../assets/client5.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkmode, toggleDarkMode } = useDarkMode();

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Contact', path: 'contact' },
    { link: 'Skills and Tech', path: 'skills' },
    { link: 'Projects', path: 'projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`${
        darkmode? 'bg-black' : scrolled? 'bg-teal-600 shadow-xl border-b border-teal-900': 'bg-amber-200'} 
        w-full sticky top-0 z-30 px-4 lg:px-8 transition-all duration-300`}
    >
      <div className="flex justify-between items-center py-4">
        
        <h1 className="font-bold text-3xl text-pink-700 font-serif hover:text-rose-500 transform hover:scale-110 transition-transform duration-300">
          Surbhi
        </h1>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden ">
          <button onClick={toggleMenu} className="text-3xl  text-black focus:outline-none">
            {menuOpen ? <FiX />  : <FiMenu />}
          </button>
        </div>

        {/* Navigation Menu */}
       <ul
  className={`${menuOpen ? 'flex' : 'hidden'} 
  flex-col lg:flex lg:flex-row gap-4 lg:gap-6 absolute lg:static top-[70px] left-0 w-full lg:w-auto
    ${scrolled ? 'lg:bg-teal-600 bg-teal-600 ' : 'bg-amber-100 lg:bg-amber-200'}
    px-4 lg:px-0 py-4 lg:py-0 transition-all duration-300`}
>

          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              smooth={true}
              spy={true}
              offset={-100}
              onClick={() => setMenuOpen(false)}
              className="text-xl uppercase font-serif cursor-pointer px-3 py-2 text-black font-bold
               hover:bg-black hover:lg:bg-red-600 rounded-xl transform hover:scale-110 
                hover:text-white transition-transform duration-300"
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
