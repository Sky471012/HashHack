import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  // How it Works steps data
  const steps = [
    {
      title: "Smart Screenshot & AI Detection",
      description:
        "While you browse, the extension quietly takes screenshots—every 15 seconds, when you switch tabs, or scroll to the end of a page. Each image is instantly checked by AI (Gemini) to detect any inappropriate or harmful content. This happens in real-time without interrupting your experience.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200&h=800",
    },
    {
      title: "Auto-Block Harmful Screens",
      description:
        "If anything inappropriate is detected, your screen is immediately blocked or blurred to protect you from seeing it. You’re shielded from harmful visuals without needing to take action yourself.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=800",
    },
    {
      title: "Alert Trusted Contacts",
      description:
        "As soon as harmful content is detected, a WhatsApp message and an email are automatically sent to your parent or guardian, ensuring someone you trust is informed and ready to support you.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200&h=800",
    },
  ];

  return (
    <section id="working" className="py-24 relative">


      <div className="mt-16 relative">
      
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle,rgba(115,115,115,0.3)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="border-4 border-white/30 w-full bg-[#141414] rounded-lg overflow-hidden">
        
          <div className=" h-full flex items-center justify-center">
            <div className="text-white/20 text-lg">
              <div className="container max-w-6xl mx-auto px-4">
                {/* How it Works Section */}
                <div className="m-10">
                  <h2 className="text-4xl md:text-4xl lg:text-5xl font-[poppins] text-white font-bold mb-4 text-center animate-fade-in">
                    How <span className="text-gradient">It Works</span>
                  </h2>
                  <p
                    className="text-white/60 max-w-2xl mx-auto text-center mb-16 animate-fade-in"
                    style={{ animationDelay: "200ms" }}
                  >
                    Our streamlined process makes implementation simple and
                    effective, so you can start seeing results right away.
                  </p>

                  <div className="space-y-28">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className={`flex flex-col ${
                          index % 2 === 0
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                        } items-center gap-8 md:gap-16 animate-fade-in`}
                        style={{ animationDelay: `${(index + 1) * 300}ms` }}
                      >
                        {/* Screenshot Side */}
                        <div className="w-full md:w-1/2 transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 hover:shadow-xl">
                          <div className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300 hover:border-dusk-400/30 hover:shadow-dusk-500/20">
                            <div className="aspect-video w-full bg-zinc-900/50 overflow-hidden">
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-500 transform hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 space-y-4">
                          <div className="flex items-center mb-2 group">
                            <div className="w-10 h-10 rounded-full bg-dusk-500/20 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-dusk-500/40 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-dusk-500/20">
                              <span className="text-dusk-400 text-xl font-bold group-hover:text-dusk-300">
                                {index + 1}.
                              </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white transition-colors duration-300 group-hover:text-dusk-300">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-white/70 text-lg pl-14 transition-colors duration-300 hover:text-white/90">
                            {step.description}
                          </p>

                          

                          <div className="pl-14 pt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            <Button
                              size="sm"
                              className="bg-dusk-500/20 text-dusk-300 hover:bg-dusk-500/40 border border-dusk-400/20"
                            >
                              Learn more
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
