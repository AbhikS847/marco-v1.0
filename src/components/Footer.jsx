import React from 'react';

const Footer = () => {

  const footerStyle = {
    backgroundColor: '#F1AF4E',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <div style={footerStyle}>
    &copy; 2023 MARCO
    </div>
  )
}

export default Footer;