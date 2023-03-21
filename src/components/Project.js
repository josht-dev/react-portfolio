// *****Import Modules*****
import React from 'react';
import '../styles/Work.css';

// Export react component
export default function Project(props) {
  // Pull nested object out of props
  const project = props.project;

  // Component styling
  const styles = {
    projectStyle: {
      width: project.projectSize,
      height: 'auto',
      position: 'relative',
      margin: '8px 0',
      zIndex: 1
    },
    titleStyle: {
      position: 'absolute',
      bottom: '50px',
      zIndex: 2,
      backgroundColor: '#89AD6D',
      color: '#FBFAF8',
      width: 'fit-content',
      padding: '15px',
      fontSize: '20px'
    },
    imgStyle: {
      width: '100%',
      overflow: 'hidden',
      objectFit: 'none',
      objectPosition: project.imgPosition,
      height: project.imgHeight
    }
  }

  return (
    <div style={styles.projectStyle}>
      <div style={styles.titleStyle}>
        <h2>{project.title}</h2>
      </div>
      <a href={project.href} target='_blank' rel="noreferrer">
        <img style={styles.imgStyle} src={project.link} alt={project.alt} className='project-img'></img>
      </a>
    </div>
  );
}