import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Platform', href: '#dashboard' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040910]/80 backdrop-blur-2xl border-b border-[rgba(0,220,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="NexusAI Home"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia/50 rounded-lg"
        >
          <div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center shadow-lg"
            aria-hidden="true"
          >
            <div className="w-3.5 h-3.5 bg-oceanic-noir rounded-sm" />
          </div>
          <span className="text-arctic font-sans font-bold text-lg tracking-tight">NexusAI</span>
        </a>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center gap-6 relative"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredNav(item.label)}
              className="relative text-mystic/80 hover:text-arctic text-sm font-sans font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia/50 px-2 py-4"
            >
              {item.label}
              {hoveredNav === item.label && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 bottom-2 h-0.5 bg-gradient-to-r from-forsythia to-saffron rounded-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Book a Demo"
            className="px-5 py-2 text-sm font-sans font-medium text-arctic border border-[rgba(0,220,255,0.2)] rounded-full hover:border-[rgba(0,220,255,0.4)] hover:bg-[rgba(0,220,255,0.08)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00DCFF]/50"
          >
            Book Demo
          </button>
          <button
            aria-label="Start Free Trial"
            className="px-5 py-2 text-sm font-sans font-bold text-oceanic-noir bg-gradient-to-r from-[#00DCFF] to-[#00B4FF] rounded-full shadow-[0_0_15px_rgba(0,220,255,0.3)] hover:shadow-[0_0_25px_rgba(0,220,255,0.5)] hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00DCFF]/50 active:translate-y-0"
          >
            Start Free Trial
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(0,220,255,0.15)] hover:border-[rgba(0,220,255,0.3)] text-mystic hover:text-arctic transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00DCFF]/50"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-xs z-50 md:hidden bg-[#040910]/95 backdrop-blur-2xl border-l border-[rgba(0,220,255,0.1)] flex flex-col pt-24 pb-10 px-8"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation links">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-mystic hover:text-arctic font-sans font-medium text-lg py-3 border-b border-[rgba(0,220,255,0.06)] transition-colors duration-200"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <button className="w-full py-3 rounded-full text-sm font-sans font-medium text-arctic border border-[rgba(0,220,255,0.2)] hover:border-[rgba(0,220,255,0.4)] hover:bg-[rgba(0,220,255,0.05)] transition-all duration-200">
                  Book Demo
                </button>
                <button className="w-full py-3 rounded-full text-sm font-sans font-bold text-oceanic-noir bg-gradient-to-r from-[#00DCFF] to-[#00B4FF] shadow-[0_0_15px_rgba(0,220,255,0.3)] hover:brightness-110 transition-all duration-200">
                  Start Free Trial
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
