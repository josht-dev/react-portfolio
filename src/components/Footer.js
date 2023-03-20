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
    bottom: '16px',
    left: '20%',
    width: '60%',
    padding: '1rem'
  },
  ulStyle: {
    marginTop: '8px',
    height: '48px',
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  liStyle: {
    display: 'flex',
    alignItems: 'center'
  },
  imgStyle: {
    height: '34px',
    width: '34px',
    objectFit: 'fill'
  }
}

// Export react component
export default function Footer({ handlePageChange }) {
  return (
    <footer id='contact-me' style={styles.footerStyle}>
      <ul style={styles.ulStyle}>
        <li id='phone' className='show-contact' style={styles.liStyle}>
          <img src={phoneIcon} alt="phone icon" style={styles.imgStyle}></img>
        </li>
        <li id='email' className='show-contact' style={styles.liStyle}>
          <a href='#contact' onClick={() => handlePageChange('Contact')} >
            <img src={emailIcon} alt="email icon" style={styles.imgStyle}></img>
          </a>
        </li>
        <li style={styles.liStyle}>
          <a href="https://github.com/josht-dev" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="github icon" style={styles.imgStyle}></img>
          </a>
        </li>
        <li style={styles.liStyle}>
          <a href="https://www.linkedin.com/in/joshua-taylor-43ab14145" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="linkedin icon" style={styles.imgStyle}></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}