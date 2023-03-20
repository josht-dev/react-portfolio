// *****Import Modules*****
import React from 'react';

// Export react component
export default function Project(props) {
  // Component styling
  const styles = {
    projectStyle: {
      width: props.projectSize,
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
      objectPosition: props.imgPosition,
      filter: 'blur(5px) brightness(60%)',
      height: props.imgHeight
    }
  }

  return (
    <div style={styles.projectStyle} key={props.id}>
      <div style={styles.titleStyle}>
        <h2>{props.title}</h2>
      </div>
      <a href={props.href} target='_blank' rel="noreferrer">
        <img style={styles.imgStyle} src={props.link} alt={props.alt}></img>
      </a>
    </div>
  );
}