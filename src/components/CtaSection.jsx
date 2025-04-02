
import React from 'react';

const CtaSection = () => {
  return (
    <section className="cta">
      <div className="cta-bg"></div>
      <div className="cta-glow-1"></div>
      
      <div className="container">
        <div className="cta-card">
          <div className="cta-glow-inner-1"></div>
          <div className="cta-glow-inner-2"></div>
          <div className="cta-gradient"></div>
          
          <div className="cta-content">
            <h2 className="cta-title">Ready to transform your <span className="gradient">workflow</span>?</h2>
            <p className="cta-description">Join thousands of teams using Duskflow to automate their processes and boost productivity.</p>
            
            <div className="cta-buttons">
              <button className="btn btn-primary">Start your free trial</button>
              <button className="btn btn-secondary">Schedule a demo</button>
            </div>
            
            <p className="cta-note">No credit card required • Free 14-day trial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
