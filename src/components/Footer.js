// *****Import Modules*****
import React from 'react';
import '../styles/Footer.css';

// Export react component
export default function Footer() {
  return (
    <footer id='contact-me'>
      <ul>
        <li id='phone' className='show-contact'>
          <img src="%PUBLIC_URL%/icons/phone_icon.svg" alt="phone icon"></img>
        </li>
        <li id='email' className='show-contact'>
          <img src="%PUBLIC_URL%/icons/email_icon.svg" alt="email icon"></img>
        </li>
        <li>
          <a href="https://github.com/josht-dev" target="_blank" rel="noreferrer">
            <img src="%PUBLIC_URL%/icons/GitHub_icon.svg" alt="github icon"></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joshua-taylor-43ab14145" target="_blank" rel="noreferrer">
            <img src="%PUBLIC_URL%/icons/LinkedIn_icon.svg" alt="linkedin icon"></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}