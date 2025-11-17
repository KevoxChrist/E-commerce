import React, { useState } from 'react';
import '../styles/Footer.css';
import instagramIcon from '../assets/home_images/Instagram_Glyph_White.svg';
import twitterIcon from '../assets/home_images/twitter.svg';

function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === '') {
      setError('Email is required');
      return;
    }
    
    if (!isValidEmail(email)) {
      setError('Provide a valid email');
      return;
    }
    
    // Success
    setError('');
    e.target.querySelector('.footer-submit-btn').textContent = 'SUBSCRIBED';
    e.target.querySelector('.footer-submit-btn').style.backgroundColor = 'Black';
  };

  return (
    <footer className="footer">
      {/* Socials Section */}
      <section className="socials-section">
        <div className="socials-content">
          <div className="socials-title">Socials</div>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram Logo" />
            </a>
            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter Logo" />
            </a>
          </div>
        </div>
      </section>

      {/* Center Logo */}
      <div className="footer-logo-section">
        <div className="footer-logo">VISI</div>
        <div className="footer-tagline">"Bring stories to life."</div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-title">SUBSCRIBE</div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="newsletter-input" 
            placeholder="" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="footer-submit-btn">Submit</button>
          <div className="footer-error-text">{error}</div>
        </form>
        <div className="newsletter-description">subscribe to our news letter</div>
      </div>
    </footer>
  );
}

export default Footer;