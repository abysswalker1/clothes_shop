import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container container">
        <div className="footer__column">
          <h2 className="footer__column-title">О нас</h2>
        </div>
        <div className="footer__column">
          <h2 className="footer__column-title">Покупателям</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;