// *****Import Modules*****
import React from 'react';

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
      </ul>
    </nav>
  )
}