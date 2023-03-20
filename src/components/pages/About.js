// *****Import Modules*****
import React from 'react';
import selfPic from '../../assets/images/portfolio_pic.jpg';

const styles = {
  sectionStyle: {
    display: 'flex',
    paddingBottom: '5.5rem'
  },
  figureStyle: {
    width: '50%',
  },
  imgStyle: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '300px'
  },
  pStyle: {
    width: '50%',
    lineHeight: '20px',
    marginLeft: '16px',
    textAlign: 'left'
  }
}

// Function to generate the About page component
function About() {
  return (
    <section style={styles.sectionStyle}>
      <figure style={styles.figureStyle}>
        <img style={styles.imgStyle} src={selfPic} alt='Joshua Taylor portfolio'></img>
      </figure>
      <p style={styles.pStyle}>
        My name is Josh Taylor, and I am originally from Tulsa, OK. My wife and I moved to Longmont, CO, in 2019 and never looked back! We love hiking with our 2 pups in the mountains and playing board games with friends.<br></br><br></br>During the pandemic, I realized I had lost interest in my quality assurance job and started to contemplate other prospects. While I have a solid eye for detail that helps me in the QA role, I wanted to participate in the creation of something a bit more. Thus, in 2023 I will complete a certification in full-stack development.<br></br><br></br>I am told that my strongest values are being honest, patient, and detail-oriented. I look forward to applying these values at my next opportunity!
      </p>
    </section>
  )
}

export default About;