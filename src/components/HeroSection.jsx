
import React, { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="hero">
      {/* Background effects */}
      <div className="hero-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>
      
      {/* Content */}
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Introducing Duskflow AI</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient">AI-powered workflow</span><br />
            for modern teams
          </h1>
          
          <p className="hero-description">
            Streamline your workflow with our AI assistant that learns from your team's processes and helps you automate repetitive tasks.
          </p>
          
          <form className="hero-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="hero-input"
            />
            <button type="submit" className="btn btn-primary">Get started free</button>
          </form>
          
          <p className="hero-form-note">
            No credit card required • Free 14-day trial
          </p>
        </div>
        
        {/* Dashboard Preview */}
        <div className="dashboard-preview">
          <div className="dashboard-preview-glow"></div>
          <div className="dashboard-preview-card">
            <div className="dashboard-preview-inner">
              <div className="dashboard-preview-placeholder">Dashboard Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
