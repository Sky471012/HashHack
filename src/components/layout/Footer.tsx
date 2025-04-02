
export function Footer() {
  const footerLinks = {
    "Product": ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
    "Resources": ["Documentation", "Guides", "API Reference", "Community", "Templates"],
    "Company": ["About us", "Blog", "Careers", "Customers", "Contact"]
  };

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-dusk-500 to-indigo-600 flex items-center justify-center">
                <span className="font-bold text-white">D</span>
              </div>
              <span className="font-bold text-white text-xl">Duskflow</span>
            </div>
            <p className="text-white/60 mb-6">AI-powered workflow automation for modern teams.</p>
            <div className="flex items-center gap-4">
              {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Duskflow. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-white/60 hover:text-white transition-colors text-sm">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
