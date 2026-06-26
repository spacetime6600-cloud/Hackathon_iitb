import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlatformFeatures } from './components/PlatformFeatures';
import { AnalyticsInterface } from './components/AnalyticsInterface';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Pre-compute particle positions outside component to avoid Math.random() on every render
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: (i * 1237 % 1000) / 10, // deterministic pseudo-random %
  y: (i * 3571 % 1000) / 10,
  duration: 20 + (i * 7 % 10),
  delay: (i * 3 % 20),
  drift: -(50 + (i * 31 % 80)),
}));

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // ✅ Transforms computed at top level (not inside JSX) — fixes Hook rule violation
  const glowX = useTransform(smoothX, v => v - 40);
  const glowY = useTransform(smoothY, v => v - 40);

  useEffect(() => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-oceanic-noir min-h-screen text-arctic font-sans relative overflow-x-hidden">
      
      {/* 1. Subtle Vignette */}
      <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_150px_rgba(4,9,16,0.8)]" aria-hidden="true" />

      {/* 2. Soft Mouse Glow — opacity 5%, radius 80px, lerped */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-40 hidden md:block rounded-full bg-[#00EEFF] blur-[40px]"
        style={{ width: 80, height: 80, x: glowX, y: glowY, opacity: 0.05 }}
      />
      
      {/* 3. Almost Invisible Moving Noise Texture */}
      <motion.div 
        aria-hidden="true"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.015] mix-blend-overlay" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }} 
      />

      {/* 4. Faint Animated Grid */}
      <div aria-hidden="true" className="pointer-events-none fixed -inset-[20px] z-0 opacity-[0.025]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, #00EEFF 1px, transparent 1px), linear-gradient(to bottom, #00EEFF 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
          }}
        />
      </div>

      {/* 5. Ambient Low-Opacity Blobs — Breathing */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#00EEFF] mix-blend-screen blur-[140px] gpu-layer" 
        />
        <motion.div 
          animate={{ opacity: [0.04, 0.08, 0.04], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="absolute top-[30%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#0044FF] mix-blend-screen blur-[160px] gpu-layer" 
        />
      </div>

      {/* 6. Tiny Floating Particles — pre-computed positions, no Math.random() in render */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={`particle-${p.id}`}
            className="absolute w-[3px] h-[3px] rounded-full bg-[#00EEFF] blur-[1px]"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, p.drift], opacity: [0, 0.25, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <HeroSection />
          <PlatformFeatures />
          <AnalyticsInterface />
          <Testimonials />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
