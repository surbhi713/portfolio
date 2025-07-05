import real from '../assets/real.png';
import portfolio from '../assets/portfolio.png'
import spotify from '../assets/spotify.png'
import apple from'../assets/Apple.png';
import arch from '../assets/arch_Web.png'
import { Link } from 'react-scroll';

const project = [
    {
        name : 'Real Estate Website',
        about: 'A responsive website created with React, Tailwind and Vite with multiple libraries like React-icons, AOS, Scroll.',
        alt: 'Real Estate Website',
        image : real,
        link: 'https://delhi-real-estate.netlify.app/'
    },

    {
        name: 'Portfolio Website',
        about:'My portfolio created with React, Tailwind and Vite with animation imported from AOS library.',
        alt:'Portfolio Website',
        image: portfolio,
        link:'https://surbhisportfolio.netlify.app/'
    },

    {
        name: 'Spoitfy Clone',
        about: 'A music website built with JS, HTML and CSS. ',
        alt:'Spotify Clone',
        image: spotify,
    },
    {
        name: 'Arch Complete Solution',
        about: 'A business website built with React JS, Tailwind CSS and multiple Animation Libraries like React-scroll, GSAP, AOS, Slicker',
        alt:'Freelancing website',
        image: arch,
        link:'https://archcompletesolution.netlify.app'
    },
    {
        name: 'Apple iPhone Clone',
        about: 'An Apple Clone to learn GSAP and many more JS logics. Built with React JS, GSAP, Javascript, Tailwind CSS',
        alt:'Apple iPhone Clone',
        image: apple,
        link:''
    },


]

export default project ;
