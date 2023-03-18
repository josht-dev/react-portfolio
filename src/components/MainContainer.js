// *****Import Modules*****
import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Work from './pages/Work';

// Export function that handles page switching
export default function MainContainer() {
  // Page state
  const [currentPage, setCurrentPage] = useState('Home');

  // Switch render between pages when called
  const renderPage = () => {

  }

  // Function to handle the page change
  const handlePageChange = (page) => setCurrentPage(page);
   
  // Return the new component
  return (
    
  )
}