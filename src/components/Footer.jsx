
import React from 'react';

const Footer = () => {
  const footerLinks = {
    "Product": ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
    "Resources": ["Documentation", "Guides", "API Reference", "Community", "Templates"],
    "Company": ["About us", "Blog", "Careers", "Customers", "Contact"]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-branding">
            <div className="footer-logo">
              <div className="logo-icon">D</div>
              <span>Duskflow</span>
            </div>
            <p className="footer-description">AI-powered workflow automation for modern teams.</p>
            <div className="social-links">
              {["T", "L", "G", "Y"].map((social, index) => (
                <a key={index} href="#" className="social-link">{social}</a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-links-column">
                <h3>{category}</h3>
                <ul className="footer-links-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Duskflow. All rights reserved.
          </div>
          <div className="footer-legal">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="footer-legal-link">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
