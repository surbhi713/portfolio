import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-pink-50 border-t border-pink-200 py-16 px-6 mt-20 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700">
        {/* Text */}
        <p className="text-sm md:text-base font-medium text-center md:text-left">
          © {new Date().getFullYear()} Surbhi. All rights reserved.
        </p>

        {/* Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/surbhi-a4111b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-700 transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-sky-700 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
