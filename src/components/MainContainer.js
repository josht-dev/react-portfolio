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
import theTable from '../assets/images/thetableapp.png';
import weekOne from '../assets/images/landing-page-wk1-mini-project_.png';
import horiseon from '../assets/images/marketing-accessibility-refactor.png';

// Project work objects array props
const projects = [
  {
    id: 1,
    title: 'The Table',
    href: 'https://the-table-app.herokuapp.com/',
    link: theTable,
    alt: 'the table app',
    projectSize: '100%',
    imgPosition: 'top left',
    imgHeight: '500px'
  },
  {
    id: 2,
    title: 'A Landing Page',
    href: 'https://josht-dev.github.io/landing-page-wk1-mini-project/',
    link: weekOne,
    alt: 'landing page project',
    projectSize: '49%',
    imgPosition: 'top center',
    imgHeight: '250px'
  },
  {
    id: 3,
    title: 'Horiseon Refactor',
    href: 'https://josht-dev.github.io/wk1c-marketing-accessibility-refactor/',
    link: horiseon,
    alt: 'Horiseon website',
    projectSize: '49%',
    imgPosition: 'top center',
    imgHeight: '250px'
  }
]

// Export function that handles page switching
export default function MainContainer() {
  // Page state
  const [currentPage, setCurrentPage] = useState('Home');

  // Styling for main
  const styles = {
    mainStyle: {
      textAlign: currentPage === 'Home' ? 'center' : 'initial',
    }
  }

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
      return <Work projects={projects}/>;
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
      <Footer handlePageChange={handlePageChange} />
    </main>
  );
}