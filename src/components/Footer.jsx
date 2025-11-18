
import '../styles/Footer.css'

function Footer(){
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
        <form className="newsletter-form" action="/" method="GET">
          <input type="text" className="newsletter-input" placeholder="" />
          <button type="submit" className="footer-submit-btn">Submit</button>
          <div className="footer-error-text"></div>
        </form>
        <div className="newsletter-description">subscribe to our news letter</div>
      </div>
    </footer>
  )
}


export default Footer;