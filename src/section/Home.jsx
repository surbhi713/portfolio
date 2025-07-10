import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import profileImg from '../assets/surbhi.jpg';

function Home() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      delay: 100,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:py-24 py-12 px-6 mt-10"
    >
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-center space-y-6">
        <h1
          data-aos="zoom-in"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
        >
          Hi! I'm{' '}
          <span className="text-rose-700 hover:text-yellow-900 transition duration-300">
            Surbhi
          </span>
        </h1>

        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-lg text-gray-700 leading-8 font-medium"
        >
          A Frontend Developer with a strong br foundation in{' '}
          <strong className="text-black">HTML</strong>,{' '}
          <strong className="text-black">CSS</strong>,{' '}
          <strong className="text-black">JavaScript</strong>, <br /> and modern
          frameworks like <strong className="text-black">React</strong>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="bg-rose-800 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-rose-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-rose-800 text-rose-800 py-3 px-6 rounded-xl font-semibold hover:bg-rose-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div
        data-aos="fade-up"
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={profileImg}
          alt="Surbhi"
          className="w-72 h-72 rounded-full object-cover border-4 border-rose-400 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}

export default Home;
