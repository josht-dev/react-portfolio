// *****Import Modules*****
import React from 'react';
import '../styles/Navigation.css';

const styles = {
  activeLink: {
    fontWeight: 700
  },
  inactiveLink: {
    fontWeight: 300
  }
}

// Function to generate the nav component
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a 
          href='#about' 
          onClick={() => handlePageChange('About')} 
          style={currentPage === 'About' ? styles.activeLink : styles.inactiveLink}
          >
            About
          </a>
        </li>
        <li>
          <a 
          href='#contact' 
          onClick={() => handlePageChange('Contact')} 
          style={currentPage === 'Contact' ? styles.activeLink : styles.inactiveLink}
          >
            Contact
          </a>
        </li>
        <li>
          <a 
          href='#resume' 
          onClick={() => handlePageChange('Resume')} 
          style={currentPage === 'Resume' ? styles.activeLink : styles.inactiveLink}
          >
            Resume
          </a>
        </li>
        <li>
          <a 
          href='#work' 
          onClick={() => handlePageChange('Work')} 
          style={currentPage === 'Work' ? styles.activeLink : styles.inactiveLink}
          >
            Work
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;