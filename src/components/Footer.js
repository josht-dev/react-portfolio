// *****Import Modules*****
import React from 'react';
import '../styles/Footer.css';
import phoneIcon from '../assets/icons/phone_icon.svg';
import emailIcon from '../assets/icons/email_icon.svg';
import githubIcon from '../assets/icons/GitHub_icon.svg';
import linkedinIcon from '../assets/icons/LinkedIn_icon.svg';

// Component styling, pseudo-class and pseudo-element styling still in external file
const styles = {
  footerStyle: {
    position: 'fixed',
    bottom: '10px',
    width: '100%'
  },
  ulStyle: {
    marginTop: '8px',
    height: '48px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    justifyItems: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    height: '34px',
    width: '34px',
    objectFit: 'fill'
  }
}

// Export react component
export default function Footer() {
  return (
    <footer id='contact-me' style={styles.footerStyle}>
      <ul style={styles.ulStyle}>
        <li id='phone' className='show-contact'>
          <img src={phoneIcon} alt="phone icon" style={styles.imgStyle}></img>
        </li>
        <li id='email' className='show-contact'>
          <img src={emailIcon} alt="email icon" style={styles.imgStyle}></img>
        </li>
        <li>
          <a href="https://github.com/josht-dev" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="github icon" style={styles.imgStyle}></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joshua-taylor-43ab14145" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="linkedin icon" style={styles.imgStyle}></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}