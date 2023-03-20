// *****Import Modules*****
import React from 'react';
import Project from '../Project';

// Component styling
const styles = {
  sectionStyle: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '96px 0 80px 0'
  }
}

// Export react component
export default function Work(props) {
  return (
    <section style={styles.sectionStyle}>
      {props.projects.map(item => (
        <Project project={item} />
      ))}
    </section>
  );
}