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
    <main>
      {/*
      {currentPage !== 'Home' && <Header />}
      {currentPage !== 'Home' && <Navigation />}
      */}
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/*
      {includeHeader()}
      {includeNav()}
      {renderPage()} 
      {renderPage()} 
      */}
      
      <Footer />
    </main>
  );
}