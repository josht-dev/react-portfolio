// *****Import Modules*****
import React from 'react';

// Component styling
const styles = {
  divStyle: {
    width: '100%',
  },
  labelStyle: {
    display: 'block'
  },
  inputStyle: {
    width: '100%',
    border: '2px solid #222'
  },
  textareaStyle: {
    width: '100%',
    height: '132px',
    border: '2px solid #222',
    resize: 'none'
  },
  btnStyle: {
    width: '80px',
    height: '32px',
    backgroundColor: '#89AD6D',
    color: '#fff',
    borderRadius: '4px'
  }
}

// Export react component
export default function Contact() {
  return (
    <form>
      <div style={styles.divStyle}>
        <label style={styles.labelStyle} htmlFor='name'>Name</label>
        <input style={styles.inputStyle} id='name' name='name'></input>
      </div>
      <div style={styles.divStyle}>
        <label style={styles.labelStyle} htmlFor='email'>Email Address</label>
        <input style={styles.inputStyle} type='email' id='email' name='email'></input>
      </div>
      <div style={styles.divStyle}>
        <label style={styles.labelStyle} htmlFor='message'>Message</label>
        <textarea style={styles.textareaStyle} id='message' name='message'></textarea>
      </div>
      <div style={styles.divStyle}>
        <button type="submit" style={styles.btnStyle}>Submit</button>
      </div>
    </form>
  );
}