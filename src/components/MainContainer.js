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
    imgHeight: window.innerWidth <= 414 ? '250px' : '500px'
  },
  {
    id: 2,
    title: 'A Landing Page',
    href: 'https://josht-dev.github.io/landing-page-wk1-mini-project/',
    link: weekOne,
    alt: 'landing page project',
    projectSize: window.innerWidth <= 540 ? '100%' : '49%',
    imgPosition: 'top center',
    imgHeight: '250px'
  },
  {
    id: 3,
    title: 'Horiseon Refactor',
    href: 'https://josht-dev.github.io/wk1c-marketing-accessibility-refactor/',
    link: horiseon,
    alt: 'Horiseon website',
    projectSize: window.innerWidth <= 540 ? '100%' : '49%',
    imgPosition: 'top center',
    imgHeight: '250px'
  }
]

// Resume proficiency objects array props
const proficiencies = {
  frontend: [
    {
      id: 1,
      text: 'HTML'
    },
    {
      id: 2,
      text: 'CSS'
    },
    {
      id: 3,
      text: 'JavaScript'
    },
    {
      id: 4,
      text: 'JQuery'
    },
    {
      id: 5,
      text: 'Responsive Design'
    },
    {
      id: 6,
      text: 'React'
    },
    {
      id: 7,
      text: 'Bootstrap'
    }
  ],
  backend: [
    {
      id: 1,
      text: 'Node'
    },
    {
      id: 2,
      text: 'Express'
    },
    {
      id: 3,
      text: 'SQL'
    },
    {
      id: 4,
      text: 'Sequelize'
    },
    {
      id: 5,
      text: 'MongoDB'
    },
    {
      id: 6,
      text: 'GraphQL'
    },
    {
      id: 7,
      text: 'Mongoose'
    }
  ]
}

// Export function that handles page switching
export default function MainContainer() {
  // Page state
  const [currentPage, setCurrentPage] = useState('Home');

  // Styling for main
  const styles = {
    mainStyle: {
      textAlign: currentPage === 'Home' ? 'center' : 'initial',
      padding: '1rem'
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
      return <Resume proficiencies={proficiencies}/>;
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
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </main>
  );
}