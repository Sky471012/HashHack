
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Duskflow has transformed how our team operates. We've reduced our workflow time by 60% and improved accuracy across the board.",
      name: "Sarah Johnson",
      role: "Operations Director, Acme Inc",
      avatar: "SJ"
    },
    {
      quote: "The AI-powered document processing has been a game-changer for our legal team. What used to take days now takes minutes.",
      name: "Michael Chen",
      role: "Legal Tech Lead, LawCorp",
      avatar: "MC"
    },
    {
      quote: "Our team was able to implement Duskflow in just a few days. The ROI has been incredible - we've already saved thousands of hours.",
      name: "Lisa Rodriguez",
      role: "Project Manager, TechSolutions",
      avatar: "LR"
    }
  ];

  const logos = [
    "Acme Inc", "TechCorp", "Innovative", "GlobalTech", "NextWave", "FutureSoft"
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trusted by <span className="gradient">industry leaders</span></h2>
          <p className="section-description">See what our customers have to say about Duskflow.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <blockquote className="testimonial-text">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-logos">
          <p className="testimonial-logos-title">Trusted by forward-thinking companies</p>
          <div className="testimonial-logos-grid">
            {logos.map((logo, index) => (
              <div key={index} className="testimonial-logo">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
