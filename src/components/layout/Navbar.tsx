
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-5'}`}>
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-dusk-500 to-indigo-600 flex items-center justify-center">
            <span className="font-bold text-white">D</span>
          </div>
          <span className="font-bold text-white text-xl">Duskflow</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="text-sm text-white/80 hover:text-white transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm text-white/80 hover:text-white transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm text-white/80 hover:text-white hover:bg-white/10">Sign in</Button>
          <Button className="bg-gradient-to-r from-dusk-500 to-indigo-600 hover:opacity-90 transition-opacity text-white border-none">Try for free</Button>
        </div>
      </div>
    </header>
  );
}
