import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlatformFeatures } from './components/PlatformFeatures';
import { AnalyticsInterface } from './components/AnalyticsInterface';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function App() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Use MotionValues for high-performance, re-render-free tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lerping
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    // Set initial center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#040910] min-h-screen text-arctic font-sans selection:bg-[#00EEFF]/30 selection:text-[#00EEFF] relative overflow-hidden">
      
      {/* 1. Subtle Vignette */}
      <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_150px_rgba(4,9,16,0.8)]" />

      {/* 2. Soft Mouse Glow (Lerped) - 80px radius */}
      <motion.div
        className="pointer-events-none fixed z-40 hidden md:block rounded-full bg-[#00EEFF] blur-[40px]"
        style={{
          width: 80,
          height: 80,
          x: useTransform(smoothX, v => v - 40),
          y: useTransform(smoothY, v => v - 40),
          opacity: 0.05
        }}
      />
      
      {/* 3. Almost Invisible Moving Noise Texture */}
      <motion.div 
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.015] mix-blend-overlay" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }} 
      />

      {/* 4. Faint Animated Grid (No Parallax) */}
      <div className="pointer-events-none fixed -inset-[20px] z-0 opacity-[0.02]">
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

      {/* 5. Ambient Low-Opacity Blobs (Breathing, No Parallax) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Cyan Blob */}
        <motion.div 
          animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#00EEFF] mix-blend-screen blur-[140px]" 
        />
        {/* Deep Blue Blob */}
        <motion.div 
          animate={{ opacity: [0.04, 0.08, 0.04], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="absolute top-[30%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#0044FF] mix-blend-screen blur-[160px]" 
        />
      </div>

      {/* 6. Tiny Floating Particles (No Parallax) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: Math.random() * (windowSize.width || 1000), 
              y: Math.random() * (windowSize.height || 1000) 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="absolute w-1 h-1 rounded-full bg-[#00EEFF] blur-[1px]"
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
