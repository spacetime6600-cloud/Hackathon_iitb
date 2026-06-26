import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const isFloat = value.includes('.');
  const decimals = isFloat ? value.split('.')[1]?.length || 1 : 0;

  useEffect(() => {
    let start = 0;
    const end = numericPart;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(start + (end - start) * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [numericPart]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
}

function AnimatedKPICard({ card, idx }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 + card.delay, type: "spring" }}
      className={`absolute ${card.pos} z-30`}
    >
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut" }}
        className="rounded-xl p-4 border border-[rgba(0,220,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.4),_0_0_15px_rgba(0,220,255,0.05)] flex flex-col gap-2 min-w-[160px] bg-[rgba(8,20,30,0.6)] backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,220,255,0.1)_0%,_transparent_70%)] pointer-events-none -z-10" />
        <div className="text-mystic/60 font-sans text-xs font-medium relative z-10">{card.title}</div>
        <div className="flex items-end justify-between gap-4 relative z-10">
          <div className="text-arctic font-mono font-bold text-2xl tracking-tight">
             <AnimatedCounter value={card.value} />
          </div>
          <div className="flex flex-col items-end gap-1">
             <div className="flex items-center gap-1 text-[#00EEFF] font-mono text-[10px]">
               {card.metric}
             </div>
             {/* Mini Animated Line Chart */}
             <svg viewBox="0 0 40 15" className="w-10 h-3 overflow-visible">
               <motion.path 
                 d="M 0 15 Q 10 5 20 10 T 40 0" 
                 fill="none" 
                 stroke="#00EEFF" 
                 strokeWidth="2" 
                 strokeLinecap="round"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 + card.delay }}
                 style={{ filter: "drop-shadow(0 2px 4px rgba(0,238,255,0.4))" }}
               />
             </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Floating KPI Data
  const kpiCards = [
    { title: "AI Agents Active", value: "128", metric: "+ 24%", pos: "top-[10%] left-[10%]", delay: 0 },
    { title: "Tasks Automated", value: "8.42M+", metric: "+ 18%", pos: "top-[15%] right-[5%]", delay: 0.2 },
    { title: "Decision Speed", value: "142ms", metric: "+ 12%", pos: "top-[50%] right-[2%]", delay: 0.4 },
    { title: "Accuracy Rate", value: "99.8%", metric: "+ 0.6%", pos: "top-[55%] left-[5%]", delay: 0.6 },
    { title: "System Uptime", value: "99.99%", metric: "+ 0.01%", pos: "bottom-[15%] right-[10%]", delay: 0.8 }
  ];

  return (
    <section id="hero" aria-labelledby="hero-heading" ref={containerRef} className="relative min-h-screen bg-oceanic-noir overflow-hidden flex flex-col font-sans">
      {/* Hero Content */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center pt-32 lg:pt-40 pb-32 relative z-10 gap-16 lg:gap-24 xl:gap-32 h-full">
        
        {/* Left Content (Typography & Social Proof) */}
        <motion.div 
          style={{ y: y2, opacity }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-10 lg:mt-0 relative z-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-nocturnal bg-nocturnal/30 backdrop-blur-md mb-8 mx-auto lg:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-forsythia shadow-[0_0_8px_#FFC801]" />
            <span className="text-mystic text-xs font-mono uppercase tracking-widest font-semibold">AI-Powered Enterprise Automation</span>
          </motion.div>
          
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-[clamp(52px,5vw,80px)] leading-[0.95] tracking-[-0.03em] font-mono font-bold text-arctic mb-8 max-w-[90%] mx-auto lg:mx-0"
          >
            Unlock Autonomous AI <br className="hidden lg:block"/>
            That <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic via-arctic to-mystic">Thinks,</span> <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">Learns and Automates.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-[#C8D2DA] text-[18px] font-sans leading-[1.7] max-w-[480px] mx-auto lg:mx-0 mb-8"
          >
            Empower enterprises with intelligent automation, predictive analytics, autonomous AI agents and real-time decision making through one unified platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-24"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-oceanic-noir bg-gradient-to-r from-[#00DCFF] to-[#00B4FF] shadow-[0_0_15px_rgba(0,220,255,0.3)] hover:shadow-[0_4px_20px_rgba(0,220,255,0.5)] hover:-translate-y-[2px] hover:scale-[1.02] hover:brightness-105 transition-all duration-300 ease-out-expo group flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir focus-visible:ring-[#00DCFF] tracking-wide">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-[4px] transition-transform duration-300 ease-out-expo" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-arctic bg-[#08121C]/80 backdrop-blur-md border border-[rgba(0,220,255,0.2)] hover:border-[rgba(0,220,255,0.4)] hover:bg-[rgba(0,220,255,0.05)] hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(0,220,255,0.2)] hover:brightness-105 transition-all duration-300 ease-out-expo flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir focus-visible:ring-[#00DCFF] tracking-wide group">
              <PlayCircle className="w-4 h-4 text-[#00DCFF] group-hover:scale-105 transition-transform duration-300 ease-out-expo" />
              Book a Live Demo
            </button>
          </motion.div>

          {/* Integrated Social Proof */}
          <motion.section
            id="clients"
            aria-label="Trusted Companies"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl p-5 md:p-6 border border-[rgba(0,220,255,0.1)] shadow-[0_12px_40px_rgba(0,0,0,0.35),_0_0_40px_rgba(0,220,255,0.05)] relative overflow-hidden max-w-[480px] mx-auto lg:mx-0 bg-[#08121C]/80 backdrop-blur-xl"
          >
            <h2 className="text-[#C7D2D9]/50 text-[10px] font-mono uppercase tracking-widest font-bold mb-5 relative z-10 text-center lg:text-left">
              Trusted by 2,500+ Global Businesses
            </h2>
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-4 relative z-10">
              {/* Google */}
              <div className="flex items-center gap-2 text-[#C7D2D9] opacity-70 hover:opacity-100 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(0,220,255,0.6)] transition-all duration-200 cursor-pointer group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-auto h-6">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                <span className="font-sans font-medium text-[15px] tracking-tight">Google</span>
              </div>
              {/* Microsoft */}
              <div className="flex items-center gap-2 text-[#C7D2D9] opacity-70 hover:opacity-100 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(0,220,255,0.6)] transition-all duration-200 cursor-pointer group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-auto h-5">
                  <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                </svg>
                <span className="font-sans font-medium text-[15px] tracking-tight">Microsoft</span>
              </div>
              {/* AWS */}
              <div className="flex items-center gap-2 text-[#C7D2D9] opacity-70 hover:opacity-100 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(0,220,255,0.6)] transition-all duration-200 cursor-pointer group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-auto h-6 mt-0.5">
                  <path d="M11.08 15.35c-2.34.82-5.32 1.34-8.1 1.34-1.12 0-2.18-.08-2.98-.18 2.05 1.5 5.06 2.4 8.27 2.4 3.75 0 6.64-1.28 8.62-3.23l-1.32-.93c-1.3 1.25-3.07 1.9-5.18 1.9-.3 0-.62-.02-.92-.04.4-.23.78-.49 1.13-.78l.48-.4zm-2.02-3.14l-1.78-5.35h-1.8l2.76 7.42h1.66l1.7-4.8 1.66 4.8h1.68l2.77-7.42h-1.8l-1.78 5.37-1.72-5.12h-1.55l-1.8 5.1zM5.58 6.86h1.72v7.4h-1.72z" />
                </svg>
                <span className="font-sans font-medium text-[15px] tracking-tight">AWS</span>
              </div>
              {/* Oracle */}
              <div className="flex items-center gap-2 text-[#C7D2D9] opacity-70 hover:opacity-100 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(0,220,255,0.6)] transition-all duration-200 cursor-pointer group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-auto h-4 mt-0.5">
                  <path d="M16.92 0H7.08C3.17 0 0 3.17 0 7.08v9.84C0 20.83 3.17 24 7.08 24h9.84C20.83 24 24 20.83 24 16.92V7.08C24 3.17 20.83 0 16.92 0zM19.78 16.92c0 1.58-1.28 2.86-2.86 2.86H7.08c-1.58 0-2.86-1.28-2.86-2.86V7.08c0-1.58 1.28-2.86 2.86-2.86h9.84c1.58 0 2.86 1.28 2.86 2.86v9.84z" />
                </svg>
                <span className="font-sans font-medium text-[15px] tracking-tight">Oracle</span>
              </div>
              {/* Salesforce */}
              <div className="flex items-center gap-2 text-[#C7D2D9] opacity-70 hover:opacity-100 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(0,220,255,0.6)] transition-all duration-200 cursor-pointer group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-auto h-7 -mt-0.5">
                  <path d="M17.18 8.04A6.1 6.1 0 0011.23 2c-2.9 0-5.32 1.98-6 4.67C2.26 6.94 0 9.38 0 12.3c0 3.03 2.5 5.51 5.55 5.51h12.56c3.25 0 5.89-2.6 5.89-5.81 0-2.99-2.22-5.46-5.06-5.78a5.1 5.1 0 00-1.76-2.18z" />
                </svg>
                <span className="font-sans font-medium text-[15px] tracking-tight">Salesforce</span>
              </div>
            </div>
          </motion.section>

        </motion.div>

        {/* Right Visualization (Highly Complex SVG Core & KPI Cards) */}
        <motion.div 
          style={{ y: y1 }}
          className="w-full lg:w-1/2 relative h-[600px] lg:h-[800px] flex items-center justify-center lg:translate-x-8"
        >
          {/* Ambient Core Glow */}
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,220,255,0.08)_0%,_transparent_50%)] blur-[60px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,200,1,0.05)_0%,_transparent_50%)] blur-[40px] pointer-events-none mix-blend-screen" />

          {/* SVG Neural Network Base */}
          <motion.div 
            style={{ 
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 45%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 45%, black 100%)'
            }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center scale-110 origin-center"
          >
            <svg viewBox="0 0 1000 1000" className="w-[150%] h-[150%] -translate-y-[5%]" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="neural-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B4FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFC801" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00B4FF" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
                  <stop offset="40%" stopColor="#00B4FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#114C5A" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Radiating Curved Lines & Travelling Particles */}
              <g opacity="0.8">
                {[...Array(24)].map((_, i) => {
                  const angle = (i * 15 * Math.PI) / 180;
                  const x2 = 500 + Math.cos(angle) * 450;
                  const y2 = 500 + Math.sin(angle) * 450;
                  const cp1x = 500 + Math.cos(angle - 0.5) * 200;
                  const cp1y = 500 + Math.sin(angle - 0.5) * 200;
                  const cp2x = 500 + Math.cos(angle + 0.5) * 350;
                  const cp2y = 500 + Math.sin(angle + 0.5) * 350;
                  const pathD = `M 500 500 C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
                  return (
                    <g key={`line-group-${i}`}>
                      {/* Static Base Line */}
                      <path 
                        d={pathD} 
                        fill="none" 
                        stroke="url(#neural-line)" 
                        strokeWidth="1" 
                        opacity="0.3" 
                        strokeDasharray="4 12"
                      />
                      {/* CSS-Animated Travelling Particle */}
                      <motion.path
                        d={pathD}
                        fill="none"
                        stroke="#00E5FF"
                        strokeWidth="3"
                        strokeDasharray="2 600"
                        strokeLinecap="round"
                        animate={{ strokeDashoffset: [600, 0] }}
                        transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                        style={{ filter: 'drop-shadow(0 0 6px #00E5FF)' }}
                      />
                    </g>
                  );
                })}
              </g>

              {/* Central Core Rings */}
              <g style={{ transformOrigin: '500px 500px' }}>
                <motion.circle 
                  cx="500" cy="500" r="120" 
                  fill="none" stroke="#FFC801" strokeWidth="1" strokeDasharray="4 8" opacity="0.6"
                  animate={{ rotate: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "500px 500px" }}
                />
                <motion.circle 
                  cx="500" cy="500" r="160" 
                  fill="none" stroke="#00B4FF" strokeWidth="2" strokeDasharray="15 30" opacity="0.5"
                  animate={{ rotate: [0, -360] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "500px 500px" }}
                />
                <motion.circle 
                  cx="500" cy="500" r="220" 
                  fill="none" stroke="#114C5A" strokeWidth="3" strokeDasharray="2 20" opacity="0.7"
                  animate={{ rotate: [0, 360] }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "500px 500px" }}
                />
              </g>

              {/* AI Core Emitting Pulses */}
              <motion.circle
                cx="500" cy="500" r="80"
                fill="none" stroke="#00E5FF" strokeWidth="3"
                animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeOut" }}
                style={{ transformOrigin: "500px 500px" }}
              />
              <motion.circle
                cx="500" cy="500" r="80"
                fill="none" stroke="#FFC801" strokeWidth="2"
                animate={{ scale: [1, 3.5], opacity: [0.4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4.5, ease: "easeOut" }}
                style={{ transformOrigin: "500px 500px" }}
              />
              
              {/* Core Breathing Glow */}
              <motion.circle 
                cx="500" cy="500" r="95" 
                fill="url(#core-glow)" 
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "500px 500px" }}
              />

              {/* Core Solid Center */}
              <circle cx="500" cy="500" r="80" fill="#08121C" />
              <circle cx="500" cy="500" r="80" fill="url(#core-glow)" opacity="0.5" />
              <circle cx="500" cy="500" r="85" fill="none" stroke="#00E5FF" strokeWidth="2" opacity="0.8" />
              
              {/* Core Text Label */}
              <text x="500" y="495" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontFamily="monospace" fontWeight="bold" letterSpacing="4">NEXUS</text>
              <text x="500" y="520" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontFamily="monospace" fontWeight="bold" letterSpacing="4">AI CORE</text>

              {/* Intersection Sparks */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const r = i % 2 === 0 ? 200 : 350; // Random intersections
                const cx = 500 + Math.cos(angle) * r;
                const cy = 500 + Math.sin(angle) * r;
                return (
                  <motion.circle
                    key={`spark-${i}`}
                    cx={cx} cy={cy} r="4"
                    fill="#FFC801"
                    style={{ filter: "drop-shadow(0 0 6px #FFC801)" }}
                    animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 + (i % 3), delay: i * 0.4, ease: "easeOut" }}
                  />
                );
              })}

              {/* Bottom 3D Base Platform */}
              <g transform="translate(0, 300)">
                <ellipse cx="500" cy="650" rx="250" ry="60" fill="none" stroke="#00B4FF" strokeWidth="1" opacity="0.3" />
                <ellipse cx="500" cy="660" rx="270" ry="65" fill="none" stroke="#FFC801" strokeWidth="2" strokeDasharray="5 15" opacity="0.4" />
                <ellipse cx="500" cy="670" rx="300" ry="70" fill="none" stroke="#114C5A" strokeWidth="4" opacity="0.5" />
                {/* Platform vertical light rays */}
                <path d="M 490 650 L 490 580 M 510 650 L 510 580" stroke="#00E5FF" strokeWidth="2" opacity="0.5" filter="blur(2px)" />
              </g>
            </svg>
          </motion.div>

          {/* Floating KPI Cards (Absolute Positioned around Core) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none -translate-y-[10%]">
            {kpiCards.map((card, idx) => (
              <AnimatedKPICard key={idx} card={card} idx={idx} />
            ))}
          </div>

        </motion.div>

      </div>
      
      {/* Scroll to Explore Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
      >
        <span className="text-mystic/50 font-mono text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-mystic/30 to-transparent relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-forsythia absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="w-2 h-2 rounded-full border border-forsythia flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-forsythia rounded-full" />
        </div>
      </motion.div>

    </section>
  );
}
