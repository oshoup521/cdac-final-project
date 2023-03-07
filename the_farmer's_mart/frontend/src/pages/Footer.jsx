import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year} The Farmer's Mart. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

