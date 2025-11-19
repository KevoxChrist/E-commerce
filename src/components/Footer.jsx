import { useState } from 'react';
import '../styles/Footer.css'

function Footer(){
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.trim();

    if (emailValue === '') {
      setError('Email is required');
    } else if (!isValidEmail(emailValue)) {
      setError('Provide a valid email');
    } else {
      setError('');
      setIsSubscribed(true);
      console.log('Newsletter subscription:', emailValue);
      // Here you would typically send the email to your backend
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear error when user starts typing
  };

  return(
    // <!-- Footer -->
    <footer className="footer">
      {/* <!-- Socials Section --> */}
      <section className="socials-section">
        <div className="socials-content">
          <div className="socials-title">Socials</div>
          <div className="social-icons">
            <a href="https://www.instagram.com/">
              <img
                src="/Images/Instagram_Glyph_White.svg"
                alt="Instagram Logo"
              />
            </a>
            <a href="https://x.com/?lang=en">
              <img src="/Images/twitter.svg" alt="Twitter Logo" />
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Center Logo --> */}
      <div className="footer-logo-section">
        <div className="footer-logo">VISI</div>
        <div className="footer-tagline">"Bring stories to life."</div>
      </div>

      {/* <!-- Newsletter Section --> */}
      <div className="newsletter-section">
        <div className="newsletter-title">SUBSCRIBE</div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="newsletter-input" 
            placeholder="" 
            value={email}
            onChange={handleChange}
          />
          <button 
            type="submit" 
            className="footer-submit-btn"
            style={{
              backgroundColor: isSubscribed ? 'Black' : ''
            }}
          >
            {isSubscribed ? 'SUBSCRIBED' : 'Submit'}
          </button>
          <div className="footer-error-text">{error}</div>
        </form>
        <div className="newsletter-description">subscribe to our news letter</div>
      </div>
    </footer>
  )
}


export default Footer;