
import { BrainCircuit, Globe, Mail, MessageSquare, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-oceanic-noir border-t border-nocturnal/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group w-max">
              <BrainCircuit className="w-6 h-6 text-[#00EEFF] group-hover:text-[#00EEFF]/80 transition-colors" aria-hidden="true" />
              <span className="text-arctic font-mono font-bold tracking-tight text-xl">NexusAI</span>
            </div>
            <p className="text-mystic/70 font-sans text-sm leading-relaxed mb-8 max-w-sm">
              Empowering global enterprises with autonomous neural networks. Built for unprecedented scale, secured by design.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-md">
              <h4 className="text-arctic font-mono font-bold text-xs mb-4 uppercase tracking-widest">Subscribe to Insights</h4>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  aria-label="Email address for newsletter"
                  placeholder="Enter your enterprise email" 
                  className="w-full bg-[#08121C]/60 backdrop-blur-md border border-[rgba(0,220,255,0.1)] rounded-full py-3 pl-5 pr-12 text-sm text-arctic placeholder:text-mystic/40 focus:outline-none focus:ring-2 focus:ring-[#00EEFF]/50 transition-colors shadow-inner"
                />
                <button aria-label="Subscribe" className="absolute right-2 w-8 h-8 rounded-full bg-[#00EEFF] flex items-center justify-center text-[#08121C] hover:bg-[#00EEFF]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-oceanic-noir focus:ring-[#00EEFF]">
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 className="text-arctic font-mono font-bold text-xs mb-6 uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              {['Product', 'Solutions', 'Pricing', 'Security', 'Enterprise'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-mystic/70 hover:text-[#00EEFF] font-sans text-sm transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#00EEFF] after:transition-transform after:duration-300 hover:after:scale-x-100 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-arctic font-mono font-bold text-xs mb-6 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4">
              {['Documentation', 'API Reference', 'Case Studies', 'Blog', 'Webinars'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-mystic/70 hover:text-[#00EEFF] font-sans text-sm transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#00EEFF] after:transition-transform after:duration-300 hover:after:scale-x-100 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-arctic font-mono font-bold text-xs mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-mystic/70 hover:text-[#00EEFF] font-sans text-sm transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#00EEFF] after:transition-transform after:duration-300 hover:after:scale-x-100 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-nocturnal flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-mystic/50 font-sans text-sm">
            © {currentYear} NexusAI Enterprise Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[Globe, MessageSquare, Mail].map((Icon, idx) => {
              const labels = ["Global Website", "Community Forum", "Email Support"];
              return (
                <a key={idx} href="#" aria-label={labels[idx]} className="text-mystic/50 hover:text-[#00EEFF] transition-all duration-300">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
