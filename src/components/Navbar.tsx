import { useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navItems = ['Features', 'Solutions', 'Platform', 'Pricing', 'Resources'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-oceanic-noir/50 backdrop-blur-2xl border-b border-nocturnal/30">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia/50 rounded-lg">
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center shadow-lg" aria-hidden="true">
             <div className="w-4 h-4 bg-oceanic-noir rounded-sm" />
           </div>
           <span className="text-arctic font-sans font-bold text-lg tracking-tight">NexusAI</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 relative" onMouseLeave={() => setHoveredNav(null)}>
           {navItems.map((item) => (
             <a 
               key={item} 
               href={`#${item.toLowerCase()}`} 
               onMouseEnter={() => setHoveredNav(item)}
               className="relative text-mystic/80 hover:text-arctic text-sm font-sans font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia/50 px-2 py-4"
             >
               {item}
               {hoveredNav === item && (
                 <motion.div
                   layoutId="nav-underline"
                   className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-forsythia to-saffron rounded-full"
                   initial={false}
                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
                 />
               )}
             </a>
           ))}
        </div>

        <div className="flex items-center gap-4">
           <button aria-label="Book a Demo" className="hidden sm:block px-5 py-2 text-sm font-sans font-medium text-arctic border border-[rgba(0,220,255,0.2)] rounded-full hover:border-[rgba(0,220,255,0.4)] hover:bg-[rgba(0,220,255,0.08)] transition-all duration-[220ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00DCFF]/50">
             Book Demo
           </button>
           <button aria-label="Start Free Trial" className="px-5 py-2 text-sm font-sans font-bold text-oceanic-noir bg-gradient-to-r from-[#00DCFF] to-[#00B4FF] rounded-full shadow-[0_0_15px_rgba(0,220,255,0.4)] hover:shadow-[0_0_25px_rgba(0,220,255,0.6)] hover:-translate-y-0.5 hover:brightness-110 transition-all duration-[220ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00DCFF]/50 active:translate-y-0">
             Start Free Trial
           </button>
        </div>
      </nav>
    </header>
  );
}
