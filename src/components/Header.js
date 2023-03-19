// *****Import Modules*****
import React from 'react';

const styles = {
  headerStyle: {
    opacity: 0.8,
    height: '37px',
    margin: '57px auto 24px 0',
    borderBottom: '1px solid #DED7C8'
  },
  h1Style: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '30px',
    textTransform: 'uppercase'
  }
}

// Export function component
export default function Header() {
  return (
    <header style={styles.headerStyle}>
        <h1 style={styles.h1Style}>Joshua Taylor</h1>
    </header>
  )
}
