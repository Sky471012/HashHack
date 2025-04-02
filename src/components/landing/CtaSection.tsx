
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-dusk-600/20 to-dusk-900/20 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your workflow?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">Join thousands of teams using Duskflow to automate their processes and boost productivity.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-dusk-500 to-indigo-600 hover:opacity-90 text-white px-8 py-6 text-lg">
                Start your free trial
              </Button>
              <Button variant="ghost" className="text-white bg-white/5 hover:bg-white/10 border border-white/10">
                Schedule a demo
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-white/50">No credit card required • Free 14-day trial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
