import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
      <p>© {new Date().getFullYear()} Library App</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;