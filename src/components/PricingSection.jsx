
import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for individuals and small teams",
      features: [
        "5 AI-powered workflows",
        "Basic document processing",
        "1,000 AI credits per month",
        "Email support"
      ],
      highlight: false,
      buttonText: "Get started"
    },
    {
      name: "Professional",
      price: "$49",
      description: "Ideal for growing teams and companies",
      features: [
        "Unlimited AI-powered workflows",
        "Advanced document processing",
        "10,000 AI credits per month",
        "Priority support",
        "Custom integrations",
        "Team collaboration tools"
      ],
      highlight: true,
      buttonText: "Start free trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited AI credits",
        "Dedicated account manager",
        "Custom AI model training",
        "Enterprise security features",
        "Service level agreement (SLA)"
      ],
      highlight: false,
      buttonText: "Contact sales"
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, <span className="gradient">transparent pricing</span></h2>
          <p className="section-description">Choose the perfect plan for your team's needs.</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={plan.highlight ? "pricing-card pricing-card-popular" : "pricing-card"}>
              {plan.highlight && (
                <div className="pricing-card-popular-badge">
                  MOST POPULAR
                </div>
              )}
              
              <div className="pricing-card-content">
                <div className="pricing-card-header">
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="pricing-amount">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="pricing-period">/month</span>}
                  </div>
                  <p className="pricing-description">{plan.description}</p>
                </div>
                
                <button className={plan.highlight ? "btn btn-primary pricing-button" : "btn btn-secondary pricing-button"}>
                  {plan.buttonText}
                </button>
                
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="pricing-feature">
                      <span className="pricing-feature-icon">✓</span>
                      <span className="pricing-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <p className="pricing-note">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <a href="#" className="pricing-link">View full plan comparison →</a>
      </div>
    </section>
  );
};

export default PricingSection;
