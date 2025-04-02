
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "AI Workflow Automation",
      description: "Let our AI automate your repetitive tasks and workflows to save you time and reduce errors.",
      icon: "⚙️"
    },
    {
      title: "Smart Document Processing",
      description: "Extract and process information from documents automatically with high accuracy.",
      icon: "📄"
    },
    {
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time with advanced collaboration features.",
      icon: "👥"
    },
    {
      title: "Custom Integrations",
      description: "Connect with your favorite tools and services through our extensive API and integrations.",
      icon: "🔌"
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights into your workflow and team performance with detailed analytics.",
      icon: "📊"
    },
    {
      title: "Enterprise Security",
      description: "Enterprise-grade security to keep your data safe and compliant with regulations.",
      icon: "🔒"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">All-in-one <span className="gradient">AI solution</span> for your workflow</h2>
          <p className="section-description">Everything you need to streamline your processes and improve productivity.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="feature-highlights">
          <div>
            <h3 className="section-title">Why teams choose <span className="gradient">Duskflow</span></h3>
            <ul className="feature-list">
              {[
                "Saves 20+ hours per week on manual tasks",
                "Reduces errors by up to 90%",
                "Improves team collaboration and productivity",
                "Seamless integration with existing tools",
                "Advanced security and compliance features"
              ].map((item, i) => (
                <li key={i} className="feature-list-item">
                  <div className="feature-list-icon">✓</div>
                  <span className="feature-list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="feature-demo">
            <div className="dashboard-preview-inner">
              <div className="dashboard-preview-placeholder">Feature Demonstration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
