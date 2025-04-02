
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">D</div>
          <span className="logo-text">Duskflow</span>
        </div>
        
        <nav className="nav">
          <a href="#features" className="nav-item">Features</a>
          <a href="#testimonials" className="nav-item">Testimonials</a>
          <a href="#pricing" className="nav-item">Pricing</a>
        </nav>
        
        <div className="header-buttons">
          <button className="btn btn-secondary">Sign in</button>
          <button className="btn btn-primary">Try for free</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
