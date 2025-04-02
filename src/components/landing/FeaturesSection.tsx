
import { Check } from "lucide-react";

export function FeaturesSection() {
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
    <section id="features" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All-in-one <span className="text-gradient">AI solution</span> for your workflow</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Everything you need to streamline your processes and improve productivity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 border border-white/10 hover:border-dusk-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-dusk-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-dusk-400/20 to-dusk-600/20 flex items-center justify-center mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Why teams choose <span className="text-gradient">Duskflow</span></h3>
            <ul className="space-y-4">
              {[
                "Saves 20+ hours per week on manual tasks",
                "Reduces errors by up to 90%",
                "Improves team collaboration and productivity",
                "Seamless integration with existing tools",
                "Advanced security and compliance features"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 mr-3 p-1 rounded-full bg-dusk-500/20 text-dusk-400">
                    <Check size={16} />
                  </div>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="aspect-video w-full bg-zinc-900 flex items-center justify-center">
              <div className="text-white/20 text-lg">Feature Demonstration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
