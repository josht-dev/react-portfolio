// *****Import Modules*****
import React from 'react';
import selfPic from '../assets/images/portfolio_pic.jpg';

// Function to generate the About page component
function About() {
  return (
    <section>
      <figure>
        <img src={selfPic} alt='Joshua Taylor portfolio'></img>
      </figure>
    </section>
  )
}

export default About;