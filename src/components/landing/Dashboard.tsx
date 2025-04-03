import { Check } from "lucide-react";

export function Dashboard() {
  return (
    <section id="features" className="py-24 relative">
      <div className="mt-16 relative">
        <div className="relative -z-10 w-full h-full scale-105 blur-[80px] bg-gradient-to-br from-dusk-500/20 via-transparent to-indigo-500/20 rounded-full"></div>
        <div className="relative inset-0 bg-gradient-to-b from-transparent to-background z-20 pointer-events-none rounded-2xl"></div>
        <div className="rounded-2xl p-2 shadow-2xl shadow-dusk-500/10">
          <div className="aspect-video border-4 border-white/30 w-full bg-zinc-900 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
              <div className="text-white/20 text-lg">


                <div className="container text-white max-w-6xl mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl font-[poppins] md:text-4xl font-bold mb-4">
                      All-in-one{" "} <span className="text-gradient">AI solution</span> for your workflow
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                      Everything you need to streamline your processes and
                      improve productivity.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass-card rounded-xl p-6 border border-white/10 hover:border-dusk-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-dusk-500/10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-dusk-400/20 to-dusk-600/20 flex items-center justify-center mb-4 text-2xl">
                        ⚙️
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        AI Workflow Automation
                      </h3>
                      <p className="text-white/60">
                        Let our AI automate your repetitive tasks and workflows
                        to save you time and reduce errors.
                      </p>
                    </div>
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
