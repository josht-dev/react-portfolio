// *****Import Modules*****
import React from 'react';

const styles = {
  sectionStyle: {

  },
  divStyle: {
    marginBottom: '32px'
  },
  btnStyle: {
    color: '#fff',
    backgroundColor: '#89AD6D',
    borderRadius: '4px',
    width: '244px',
    height: '32px'
  },
  ulStyle: {
    listStyle: 'initial',
    marginLeft: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  liStyle: {
    width: '48%'
  },
  pStyle: {
    margin: '0.5rem 0'
  }
}

export default function Resume(props) {
  return (
    <section style={styles.sectionStyle}>
      <div style={styles.divStyle}>
        {/* TODO - Make button work */}
        <button style={styles.btnStyle}>Download PDF</button>
      </div>
      <div style={styles.divStyle}>
        <h2>Front-end Proficiencies</h2>
        <ul style={styles.ulStyle}>
          {props.proficiencies.frontend.map(item => (
            <li key={item.id} style={styles.liStyle}>{item.text}</li>
          ))}
        </ul>
      </div>
      <div style={styles.divStyle}>
        <h2>Back-end Proficiencies</h2>
        <ul  style={styles.ulStyle}>
          {props.proficiencies.backend.map(item => (
            <li key={item.id} style={styles.liStyle}>{item.text}</li>
          ))}
        </ul>
      </div>
      <div style={styles.divStyle}>
        {/* TODO - Change joke to randomly pull from a list */}
        <h2>Dad-joke Proficiencies</h2>
        <p style={styles.pStyle}><b>Q: </b>Why did the security conscious engineer refuse to pay their dinner bill?</p>
        <p style={styles.pStyle}><b>A: </b>Because they could not verify the checksum!</p>
      </div>
    </section>
  )
}