import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer-center bg-gray-500 rounded p-10">
    
  <div className='flex justify-between '>
    <p className='tex-md font-semibold '>Copyright © {new Date().getFullYear()} - All right reserved</p>
    <div className='justify-center items-end flex gap-6'>
        <a href="https://www.linkedin.com/in/surbhi-a4111b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x"  />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer