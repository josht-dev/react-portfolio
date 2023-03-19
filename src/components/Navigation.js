// *****Import Modules*****
import React from 'react';
import '../styles/Navigation.css';

// Function to generate the nav component
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a 
          href='#about' 
          onClick={() => handlePageChange('About')} 
          >
            About
          </a>
        </li>
        <li>
          <a 
          href='#contact' 
          onClick={() => handlePageChange('Contact')} 
          >
            Contact
          </a>
        </li>
        <li>
          <a 
          href='#resume' 
          onClick={() => handlePageChange('Resume')} 
          >
            Resume
          </a>
        </li>
        <li>
          <a 
          href='#work' 
          onClick={() => handlePageChange('Work')} 
          >
            Work
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;