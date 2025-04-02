
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Enhanced background glow effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-80 z-0"></div>
      <div className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-dusk-500/20 rounded-full blur-[150px] -z-0"></div>
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] -z-0"></div>
      
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="animate-float">
            <div className="mb-6 inline-flex items-center py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="animate-pulse rounded-full h-2 w-2 bg-dusk-500 mr-2"></span>
              <span className="text-xs text-white/80">Introducing Duskflow AI</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">AI-powered workflow</span><br />
            for modern teams
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl">
            Streamline your workflow with our AI assistant that learns from your team's processes and helps you automate repetitive tasks.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-dusk-500/50"
              />
            </div>
            <Button className="w-full sm:w-auto whitespace-nowrap bg-gradient-to-r from-dusk-500 to-indigo-600 hover:opacity-90 text-white border-none px-6 py-6 shadow-lg shadow-dusk-500/20">
              Get started free
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-white/50">
            No credit card required • Free 14-day trial
          </div>
        </div>
        
        {/* Dashboard Preview with enhanced glow */}
        <div className="mt-16 relative">
          <div className="absolute -z-10 w-full h-full scale-105 blur-[80px] bg-gradient-to-br from-dusk-500/20 via-transparent to-indigo-500/20 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-20 pointer-events-none rounded-2xl"></div>
          <div className="glass-card rounded-2xl p-2 border border-white/10 shadow-2xl shadow-dusk-500/10">
            <div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden">
              {/* You can replace this with an actual image */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="text-white/20 text-lg">Dashboard Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
