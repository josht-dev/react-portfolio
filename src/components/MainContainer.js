// *****Import Modules*****
import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import '../styles/reset.css';
import '../styles/Style.css';

// Styling for main
const styles = {
  mainStyle: {
    width: '812px',
    margin: 'auto',
    backgroundColor: '#F5F5F5',
    textAlign: 'center'
  }
}

// Export function that handles page switching
export default function MainContainer() {
  // Page state
  const [currentPage, setCurrentPage] = useState('Home');

  // Switch render between pages when called
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
  }

  // Function to handle the page change
  const handlePageChange = (page) => setCurrentPage(page);

  // Return the new component
  return (
    <main style={styles.mainStyle}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </main>
  );
}