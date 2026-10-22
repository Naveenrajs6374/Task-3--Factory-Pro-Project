import './Footer.css'
import logo from '../../assets/Home page Images/Footer image/Container (10).png'
import social from '../../assets/Home page Images/Footer image/List.png'
import connectBadge from '../../assets/Home page Images/Footer image/Background (3).png'


const bgModules = import.meta.glob('../../assets/Home page Images/Footer image/footer-bg.*', {
  eager: true,
  import: 'default',
})
const footerBg = Object.values(bgModules)[0]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#latest-blog' },
  { label: 'Services', href: '#services' },
]

const securityLinks = [
  { label: 'Term & Condition', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Help', href: '#' },
  { label: 'Contact Us', href: '#contact' },
]

function Footer() {
  return (
    <footer className="footer" id="contact">
      {footerBg && <img className="footer-bg" src={footerBg} alt="" aria-hidden="true" />}

      <div className="footer-container">
        
        <div className="footer-cta">
          <div className="footer-cta-text">
            <h2 className="footer-cta-title">Ready to work with us?</h2>
            <p>
              Join us to experience cutting-edge industrial solutions that drive innovation,
              lasting success.
            </p>
          </div>
          <a href="#contact" className="footer-badge" aria-label="Connect now">
            <img src={connectBadge} alt="" />
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="FactoryPro home">
              <img src={logo} alt="FactoryPro" />
            </a>
            <p>We are committed to providing personalized industrial solutions.</p>
            <img className="footer-social" src={social} alt="Social media icons" />
          </div>

          <nav className="footer-links" aria-label="Footer">
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3>Security</h3>
              <ul>
                {securityLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="tel:+91123654789">+91123654789</a>
                </li>
                <li>
                  <a href="mailto:info@domainname.com">info@domainname.com</a>
                </li>
                <li>
                  <address>520, West Valley, Amin and minim</address>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        
        <div className="footer-bottom">
          <p>Copyright © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer