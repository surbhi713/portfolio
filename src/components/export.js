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
    },

    {
        name: 'Spoitfy Clone',
        about: 'A music website built with JS, HTML and CSS. ',
        alt:'Spotify Clone',
        image: spotify,
    },
    {
        name: 'Arch Complete Solution',
        about: 'A music website built with JS, HTML and CSS. ',
        alt:'Spotify Clone',
        image: arch,
        link:''
    },
    {
        name: 'Apple iPhone Clone',
        about: 'A music website built with JS, HTML and CSS. ',
        alt:'Spotify Clone',
        image: apple,
        link:''
    },


]

export default project ;
