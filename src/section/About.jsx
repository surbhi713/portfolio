import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
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
      id="about"
      className=" text-gray-800 py-20 px-6 md:px-16 flex flex-col justify-center items-center"
    >
      <div className="max-w-5xl mx-auto text-center bg-white shadow-lg rounded-3xl px-8 py-12 border border-pink-200">
        <h1
          className="text-4xl md:text-5xl font-bold font-serif text-pink-700 mb-8 border-b-2 inline-block border-pink-300"
          data-aos="zoom-in"
        >
          About Me
        </h1>

        <p
          className="text-md md:text-lg leading-8 text-gray-700 font-medium"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi, I’m <span className="text-pink-600 font-semibold">Surbhi</span> —
          a frontend developer and full-time pixel wrangler. <br />
          I don’t just build websites — I convince browsers to behave (usually with snacks).
          <br /><br />
          Armed with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>, I turn ideas into smooth, responsive, and scroll-stopping experiences.
          I craft web experiences that are smooth, responsive, and occasionally make people say, “Whoa, that’s cool.”
          <br /><br />
          ⚠️Still negotiating with APIs. They speak JSON — I’m learning the dialect.
          <br /><br />
          Great design isn't just how it looks — it's how it *feels*. Let's make the web a more delightful place, one div at a time.
        </p>
      </div>
    </section>
  );
}

export default About;
