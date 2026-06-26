
import { BrainCircuit, Globe, Mail, MessageSquare, ArrowRight } from 'lucide-react';

// Computed once at module level — not on every render
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {

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
              <h4 className="text-mystic/80 font-mono text-label mb-4 uppercase">Subscribe to Insights</h4>
              <form
                onSubmit={(e) => { e.preventDefault(); }}
                className="relative flex items-center"
                aria-label="Newsletter subscription form"
              >
                <input 
                  type="email" 
                  name="email"
                  required
                  aria-label="Email address for newsletter"
                  placeholder="Enter your enterprise email" 
                  className="w-full bg-[#08121C]/60 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-full py-3 pl-5 pr-12 text-sm text-arctic placeholder:text-mystic/40 focus:outline-none focus:ring-2 focus:ring-[rgba(255,255,255,0.2)] transition-colors shadow-inner"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 w-8 h-8 rounded-full bg-arctic flex items-center justify-center text-[#08121C] hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-oceanic-noir focus:ring-white"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 className="text-mystic/80 font-mono text-label mb-6 uppercase">Platform</h4>
            <ul className="space-y-4">
              {['Product', 'Solutions', 'Pricing', 'Security', 'Enterprise'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-mystic/70 hover:text-arctic font-sans text-sm transition-colors inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-mystic/80 font-mono text-label mb-6 uppercase">Resources</h4>
            <ul className="space-y-4">
              {['Documentation', 'API Reference', 'Case Studies', 'Blog', 'Webinars'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-mystic/70 hover:text-arctic font-sans text-sm transition-colors inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-mystic/80 font-mono text-label mb-6 uppercase">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-mystic/70 hover:text-arctic font-sans text-sm transition-colors inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-nocturnal flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-mystic/50 font-sans text-sm">
            © {CURRENT_YEAR} NexusAI Enterprise Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[Globe, MessageSquare, Mail].map((Icon, idx) => {
              const labels = ["Global Website", "Community Forum", "Email Support"];
              return (
                <a key={idx} href="#" aria-label={labels[idx]} className="text-mystic/50 hover:text-arctic transition-colors duration-300">
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
