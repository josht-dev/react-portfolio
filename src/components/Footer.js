// *****Import Modules*****
import React from 'react';
import '../styles/Footer.css';
import phoneIcon from '../assets/icons/phone_icon.svg';
import emailIcon from '../assets/icons/email_icon.svg';
import githubIcon from '../assets/icons/GitHub_icon.svg';
import linkedinIcon from '../assets/icons/LinkedIn_icon.svg';

// Export react component
export default function Footer() {
  return (
    <footer id='contact-me'>
      <ul>
        <li id='phone' className='show-contact'>
          <img src={phoneIcon} alt="phone icon"></img>
        </li>
        <li id='email' className='show-contact'>
          <img src={emailIcon} alt="email icon"></img>
        </li>
        <li>
          <a href="https://github.com/josht-dev" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="github icon"></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joshua-taylor-43ab14145" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="linkedin icon"></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}