// *****Import Modules*****
import React from 'react';
import '../styles/Navigation.css';

// Function to generate the nav component
function Navigation({ currentPage, handlePageChange }) {
  // Return the style obj for the link
  const activeLink = (link) => {
    const fontWeight = (currentPage === link && currentPage !== 'Home') ? 700: 300;

    return {
      fontSize: currentPage === 'Home' ? '32px' : '18px',
      fontWeight: fontWeight,
      lineHeight: currentPage === 'Home' ? '58px' : '38px',
      color: '#89AD6D',
      textDecoration: 'none'
    }
  }

  // Component styling
  const styles = {
    navStyle: {
      marginBottom: currentPage === 'Home' ? '350px' : '16px'
    },
    ulStyle: {
      display: currentPage === 'Home' ? 'initial' : 'flex',
      justifyContent: currentPage === 'Home' ? 'initial' : 'space-between'
    },
    liStyle: {
      marginBottom: '24px'
    }
  }

  return (
    <nav style={styles.navStyle}>
      <ul style={styles.ulStyle}>
        <li style={styles.liStyle}>
          <a href='#about' onClick={() => handlePageChange('About')} 
          style={activeLink('About')}
          >About</a>
        </li>
        <li style={styles.liStyle}>
          <a href='#contact' onClick={() => handlePageChange('Contact')} 
          style={activeLink('Contact')}
          >Contact</a>
        </li>
        <li style={styles.liStyle}>
          <a href='#resume' onClick={() => handlePageChange('Resume')} 
          style={activeLink('Resume')}
          >Resume</a>
        </li>
        <li style={styles.liStyle}>
          <a href='#work' onClick={() => handlePageChange('Work')} 
          style={activeLink('Work')}
          >Work</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;