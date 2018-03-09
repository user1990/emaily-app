import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          Email Feed © {new Date().getFullYear()} all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;