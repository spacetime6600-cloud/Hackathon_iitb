import { motion } from 'framer-motion';
import { Network, Bot, Shield, Zap, Database, BarChart3 } from 'lucide-react';

// Custom CSS for native SVG animations
const svgStyles = `
  @keyframes dash-flow {
    0% { stroke-dashoffset: 100; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes dash-flow-reverse {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 100; }
  }
  @keyframes float-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes float-fast {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }
  @keyframes spin-slow {
    100% { transform: rotate(360deg); }
  }
  @keyframes spin-slow-reverse {
    100% { transform: rotate(-360deg); }
  }
  @keyframes draw-path {
    0% { stroke-dasharray: 0 1000; }
    100% { stroke-dasharray: 1000 1000; }
  }
  @keyframes bar-grow {
    0% { transform: scaleY(0); }
    100% { transform: scaleY(1); }
  }
  
  .anim-dash { animation: dash-flow 3s linear infinite; }
  .anim-dash-reverse { animation: dash-flow-reverse 4s linear infinite; }
  .anim-float { animation: float-slow 4s ease-in-out infinite; }
  .anim-float-fast { animation: float-fast 2s ease-in-out infinite; }
  .anim-pulse { animation: pulse-glow 3s ease-in-out infinite; }
  .anim-spin { animation: spin-slow 20s linear infinite; transform-origin: center; }
  .anim-spin-reverse { animation: spin-slow-reverse 25s linear infinite; transform-origin: center; }
  .anim-draw { animation: draw-path 3s ease-out forwards infinite alternate; }
  .anim-bar { animation: bar-grow 2s ease-out forwards infinite alternate; transform-origin: bottom; }
`;

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.165, 0.84, 0.44, 1] }}
      className={`relative group rounded-[24px] overflow-hidden bg-oceanic-noir/40 backdrop-blur-xl border border-[rgba(0,220,255,0.1)] hover:border-[rgba(0,220,255,0.3)] hover:-translate-y-[4px] hover:scale-[1.01] transition-all duration-300 ease-out-expo flex flex-col p-8 md:p-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)] ${
        index === 0 || index === 3 ? 'md:col-span-2 min-h-[500px]' : 'md:col-span-1 min-h-[400px]'
      } ${index === 0 ? 'md:row-span-2' : 'md:row-span-1'}`}
    >
      {/* Subtle Background Gradient that shifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00DCFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Custom SVG Visualization Area */}
      <div className="flex-1 w-full relative mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-[#08121C]/60 border border-[rgba(0,220,255,0.05)] group-hover:border-[rgba(0,220,255,0.15)] transition-colors shadow-inner">
         {/* Ambient radial glow behind visualization */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,220,255,0.05)_0%,_transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,_rgba(0,220,255,0.12)_0%,_transparent_70%)] transition-all duration-500 pointer-events-none" />
         {feature.visualization}
      </div>

      {/* Card Content */}
      <div className="mt-auto flex flex-col relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#08121C] border border-[rgba(0,220,255,0.15)] flex items-center justify-center group-hover:scale-105 group-hover:border-[rgba(0,220,255,0.4)] transition-all duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(0,220,255,0.2)]">
            {feature.icon}
          </div>
          <div>
              <div className="font-mono text-label text-mystic/80 uppercase tracking-[0.1em] mb-2 bg-[#08121C]/80 border border-[rgba(0,220,255,0.1)] rounded-md px-2.5 py-1 w-fit shadow-sm group-hover:border-[rgba(0,220,255,0.3)] transition-colors">
                {feature.label}
              </div>
          <h3 className="text-heading-2 font-sans font-semibold text-arctic tracking-tight">{feature.title}</h3>
          </div>
        </div>
        <p className="text-mystic/70 font-sans text-body-lg leading-relaxed max-w-prose-narrow">
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}

export function PlatformFeatures() {
  const features = [
    {
      title: "Autonomous AI Agents",
      description: "Deploy self-learning neural agents that analyze, decide, and execute complex multi-step enterprise workflows without human intervention. Our cognitive engine adapts to edge cases in real-time.",
      label: "Core Neural Engine",
      icon: <Bot className="w-5 h-5 text-forsythia group-hover:text-[#00EEFF] transition-colors" aria-hidden="true" />,
      visualization: (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute inset-0 overflow-visible" role="img" aria-label="Neural Network Agent Visualization">
          <defs>
             <linearGradient id="net-line" x1="0" y1="0" x2="1" y2="1">
               <stop offset="0%" stopColor="#00EEFF" stopOpacity="0.1" />
               <stop offset="50%" stopColor="#FFC801" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#00EEFF" stopOpacity="0.1" />
             </linearGradient>
             <radialGradient id="core-glow-sm" cx="50%" cy="50%" r="50%">
               <stop offset="0%" stopColor="#00EEFF" stopOpacity="1" />
               <stop offset="100%" stopColor="transparent" stopOpacity="0" />
             </radialGradient>
          </defs>
          
          {/* Background Grid */}
          <g opacity="0.1">
             {[...Array(10)].map((_, i) => <line key={`v-${i}`} x1={i*40} y1="0" x2={i*40} y2="300" stroke="#00EEFF" strokeWidth="1" />)}
             {[...Array(8)].map((_, i) => <line key={`h-${i}`} x1="0" y1={i*40} x2="400" y2={i*40} stroke="#00EEFF" strokeWidth="1" />)}
          </g>

          {/* Neural Connections */}
          <g className="anim-float">
             <path d="M 50 50 Q 200 150 350 50" fill="none" stroke="url(#net-line)" strokeWidth="2" strokeDasharray="5 15" className="anim-dash" />
             <path d="M 50 250 Q 200 150 350 250" fill="none" stroke="url(#net-line)" strokeWidth="2" strokeDasharray="5 15" className="anim-dash-reverse" />
             <path d="M 100 150 L 300 150" fill="none" stroke="url(#net-line)" strokeWidth="1" strokeDasharray="4 8" className="anim-dash" />
             <path d="M 200 50 L 200 250" fill="none" stroke="url(#net-line)" strokeWidth="1" strokeDasharray="4 8" className="anim-dash-reverse" />
             
             {/* Floating Nodes */}
             <circle cx="50" cy="50" r="4" fill="#00EEFF" className="anim-pulse" style={{ filter: 'drop-shadow(0 0 4px #00EEFF)' }} />
             <circle cx="350" cy="50" r="4" fill="#FFC801" className="anim-pulse" style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 4px #FFC801)' }} />
             <circle cx="50" cy="250" r="4" fill="#FFC801" className="anim-pulse" style={{ animationDelay: '0.5s', filter: 'drop-shadow(0 0 4px #FFC801)' }} />
             <circle cx="350" cy="250" r="4" fill="#00EEFF" className="anim-pulse" style={{ animationDelay: '1.5s', filter: 'drop-shadow(0 0 4px #00EEFF)' }} />
             
             {/* Central AI Core */}
             <g transform="translate(200, 150)">
               <circle cx="0" cy="0" r="40" fill="url(#core-glow-sm)" className="anim-pulse" />
               <circle cx="0" cy="0" r="25" fill="none" stroke="#FFC801" strokeWidth="2" strokeDasharray="4 8" className="anim-spin" />
               <circle cx="0" cy="0" r="35" fill="none" stroke="#00EEFF" strokeWidth="1" strokeDasharray="10 20" className="anim-spin-reverse" />
               <circle cx="0" cy="0" r="15" fill="#114C5A" stroke="#00EEFF" strokeWidth="2" />
               <circle cx="0" cy="0" r="5" fill="#FFC801" className="anim-pulse" />
             </g>
          </g>
        </svg>
      )
    },
    {
      title: "Predictive Analytics",
      description: "Forecast market trends and operational bottlenecks with 99.9% accuracy.",
      label: "Machine Learning",
      icon: <BarChart3 className="w-5 h-5 text-mystic group-hover:text-[#00EEFF] transition-colors" aria-hidden="true" />,
      visualization: (
        <svg viewBox="0 0 300 200" className="w-full h-full absolute inset-0 p-6" role="img" aria-label="Predictive Analytics Chart">
           <g transform="translate(20, 150)">
             {/* Axes */}
             <line x1="0" y1="0" x2="260" y2="0" stroke="#114C5A" strokeWidth="2" />
             <line x1="0" y1="0" x2="0" y2="-120" stroke="#114C5A" strokeWidth="2" />
             
             {/* Animated Bar Charts */}
             <rect x="20" y="-40" width="30" height="40" fill="#114C5A" className="anim-bar" />
             <rect x="70" y="-60" width="30" height="60" fill="#114C5A" className="anim-bar" style={{ animationDelay: '0.2s' }} />
             <rect x="120" y="-30" width="30" height="30" fill="#114C5A" className="anim-bar" style={{ animationDelay: '0.4s' }} />
             <rect x="170" y="-90" width="30" height="90" fill="#114C5A" className="anim-bar" style={{ animationDelay: '0.6s' }} />
             <rect x="220" y="-110" width="30" height="110" fill="#00EEFF" opacity="0.6" className="anim-bar" style={{ animationDelay: '0.8s' }} />
             
             {/* Drawing Line Graph */}
             <path d="M 0 -20 Q 50 -80 100 -40 T 200 -100 T 260 -130" fill="none" stroke="#FFC801" strokeWidth="3" className="anim-draw" style={{ filter: 'drop-shadow(0 4px 6px rgba(255,200,1,0.4))' }} />
             
             {/* Data Points */}
             <circle cx="260" cy="-130" r="5" fill="#FFC801" className="anim-pulse" />
             
             {/* Floating UI Elements */}
             <g className="anim-float-fast" transform="translate(190, -150)">
               <rect x="0" y="0" width="60" height="24" rx="4" fill="#00EEFF" opacity="0.1" />
               <rect x="0" y="0" width="60" height="24" rx="4" fill="none" stroke="#00EEFF" strokeWidth="1" />
               <text x="30" y="16" fill="#00EEFF" fontSize="10" fontFamily="monospace" textAnchor="middle">+42%</text>
             </g>
           </g>
        </svg>
      )
    },
    {
      title: "Zero-Trust Security",
      description: "Military-grade encryption with isolated compute environments.",
      label: "SOC2 Compliant",
      icon: <Shield className="w-5 h-5 text-mystic group-hover:text-[#00EEFF] transition-colors" aria-hidden="true" />,
      visualization: (
        <svg viewBox="0 0 300 200" className="w-full h-full absolute inset-0" role="img" aria-label="Zero Trust Security Rings">
          <g transform="translate(150, 100)">
            {/* Rotating Security Rings */}
            <ellipse cx="0" cy="0" rx="90" ry="30" fill="none" stroke="#114C5A" strokeWidth="2" className="anim-spin" />
            <ellipse cx="0" cy="0" rx="110" ry="40" fill="none" stroke="#00EEFF" strokeWidth="1" strokeDasharray="4 8" className="anim-spin-reverse" />
            
            {/* Shield Center */}
            <g className="anim-float">
              <path d="M 0 -50 L 40 -30 L 40 20 Q 0 60 0 60 Q 0 60 -40 20 L -40 -30 Z" fill="#08121C" stroke="#00EEFF" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 15px rgba(0,238,255,0.3))' }} />
              <path d="M -20 -10 L 0 10 L 20 -20" fill="none" stroke="#FFC801" strokeWidth="3" className="anim-draw" />
            </g>

            {/* Falling Encryption Particles */}
            {[...Array(6)].map((_, i) => (
              <text 
                key={i} x={-80 + i * 30} y={-60} fill="#00EEFF" fontSize="12" fontFamily="monospace" 
                className="anim-float-fast" style={{ animationDelay: `${i * 0.4}s`, opacity: 0.5 }}
              >
                01
              </text>
            ))}
          </g>
        </svg>
      )
    },
    {
      title: "Global Data Integration",
      description: "Seamlessly ingest petabytes of unstructured data from legacy systems, modern APIs, and cloud infrastructure through a unified real-time pipeline.",
      label: "Data Pipeline",
      icon: <Database className="w-5 h-5 text-mystic group-hover:text-[#00EEFF] transition-colors" aria-hidden="true" />,
      visualization: (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute inset-0" role="img" aria-label="Global Data Integration Pipeline">
          <g transform="translate(200, 150)">
            {/* Isometric grid base */}
            <path d="M 0 50 L -150 0 L 0 -50 L 150 0 Z" fill="none" stroke="#114C5A" strokeWidth="1" />
            <path d="M 0 70 L -170 10 L 0 -40 L 170 10 Z" fill="none" stroke="#00EEFF" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" className="anim-pulse" />
            
            {/* Pipelines */}
            <path d="M -100 0 L 0 40 L 100 0" fill="none" stroke="#FFC801" strokeWidth="3" strokeDasharray="10 10" className="anim-dash" />
            <path d="M -50 -20 L 0 40 L 50 -20" fill="none" stroke="#00EEFF" strokeWidth="2" strokeDasharray="5 5" className="anim-dash-reverse" />
            
            {/* Server Nodes */}
            <g transform="translate(-100, -30)" className="anim-float">
              <rect x="-20" y="-30" width="40" height="60" rx="4" fill="#08121C" stroke="#00EEFF" strokeWidth="2" />
              <line x1="-10" y1="-15" x2="10" y2="-15" stroke="#FFC801" strokeWidth="2" />
              <line x1="-10" y1="0" x2="10" y2="0" stroke="#00EEFF" strokeWidth="2" />
              <line x1="-10" y1="15" x2="10" y2="15" stroke="#00EEFF" strokeWidth="2" />
            </g>
            
            <g transform="translate(100, -30)" className="anim-float" style={{ animationDelay: '1s' }}>
              <rect x="-20" y="-30" width="40" height="60" rx="4" fill="#08121C" stroke="#00EEFF" strokeWidth="2" />
              <line x1="-10" y1="-15" x2="10" y2="-15" stroke="#00EEFF" strokeWidth="2" />
              <line x1="-10" y1="0" x2="10" y2="0" stroke="#FFC801" strokeWidth="2" />
              <line x1="-10" y1="15" x2="10" y2="15" stroke="#00EEFF" strokeWidth="2" />
            </g>

            {/* Central Cloud Node */}
            <g transform="translate(0, 40)" className="anim-float" style={{ animationDelay: '0.5s' }}>
              <circle cx="0" cy="0" r="30" fill="#08121C" stroke="#FFC801" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 10px rgba(255,200,1,0.3))' }} />
              <circle cx="0" cy="0" r="20" fill="none" stroke="#00EEFF" strokeWidth="1" strokeDasharray="4 4" className="anim-spin" />
              <circle cx="0" cy="0" r="5" fill="#00EEFF" className="anim-pulse" />
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "Edge Processing",
      description: "Execute AI models directly at the edge for sub-millisecond latency.",
      label: "Performance",
      icon: <Zap className="w-5 h-5 text-mystic group-hover:text-[#00EEFF] transition-colors" aria-hidden="true" />,
      visualization: (
        <svg viewBox="0 0 300 200" className="w-full h-full absolute inset-0" role="img" aria-label="Edge Processing Circuit Traces">
          <g transform="translate(150, 100)">
            {/* Circuit traces */}
            <path d="M -80 -60 L -40 -60 L -30 -30 L -30 0" fill="none" stroke="#00EEFF" strokeWidth="2" strokeDasharray="4 8" className="anim-dash" />
            <path d="M 80 60 L 40 60 L 30 30 L 30 0" fill="none" stroke="#00EEFF" strokeWidth="2" strokeDasharray="4 8" className="anim-dash-reverse" />
            <path d="M -80 60 L -40 60 L -30 30 L -30 0" fill="none" stroke="#FFC801" strokeWidth="2" strokeDasharray="4 8" className="anim-dash" />
            <path d="M 80 -60 L 40 -60 L 30 -30 L 30 0" fill="none" stroke="#FFC801" strokeWidth="2" strokeDasharray="4 8" className="anim-dash-reverse" />
            
            {/* Center Chip */}
            <g className="anim-float-fast">
              <rect x="-40" y="-40" width="80" height="80" rx="8" fill="#08121C" stroke="#00EEFF" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 15px rgba(0,238,255,0.2))' }} />
              <rect x="-30" y="-30" width="60" height="60" rx="4" fill="none" stroke="#114C5A" strokeWidth="1" />
              
              {/* Chip Pins */}
              {[...Array(5)].map((_, i) => (
                <g key={`pins-${i}`}>
                  <line x1="-50" y1={-20 + i * 10} x2="-40" y2={-20 + i * 10} stroke="#FFC801" strokeWidth="2" />
                  <line x1="40" y1={-20 + i * 10} x2="50" y2={-20 + i * 10} stroke="#FFC801" strokeWidth="2" />
                  <line x1={-20 + i * 10} y1="-50" x2={-20 + i * 10} y2="-40" stroke="#FFC801" strokeWidth="2" />
                  <line x1={-20 + i * 10} y1="40" x2={-20 + i * 10} y2="50" stroke="#FFC801" strokeWidth="2" />
                </g>
              ))}
              
              {/* Core */}
              <circle cx="0" cy="0" r="15" fill="#00EEFF" className="anim-pulse" style={{ filter: 'drop-shadow(0 0 10px #00EEFF)' }} />
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "Neural Network API",
      description: "Build custom applications on top of our proprietary AI architecture.",
      label: "Developer Tools",
      icon: <Network className="w-5 h-5 text-mystic group-hover:text-[#00EEFF] transition-colors" aria-hidden="true" />,
      visualization: (
        <svg viewBox="0 0 300 200" className="w-full h-full absolute inset-0" role="img" aria-label="Neural Network API Nodes">
          <g transform="translate(150, 100)">
            {/* Network Nodes */}
            <path d="M 0 0 L -60 -40 M 0 0 L 60 -40 M 0 0 L 0 60" fill="none" stroke="#114C5A" strokeWidth="2" />
            <circle cx="0" cy="0" r="20" fill="#08121C" stroke="#00EEFF" strokeWidth="2" className="anim-pulse" style={{ filter: 'drop-shadow(0 0 10px rgba(0,238,255,0.4))' }} />
            <circle cx="-60" cy="-40" r="10" fill="#08121C" stroke="#FFC801" strokeWidth="2" className="anim-float" />
            <circle cx="60" cy="-40" r="10" fill="#08121C" stroke="#00EEFF" strokeWidth="2" className="anim-float" style={{ animationDelay: '0.5s' }} />
            
            {/* Code Block Snippet */}
            <g transform="translate(-40, 30)" className="anim-float-fast" style={{ animationDelay: '1s' }}>
              <rect x="0" y="0" width="80" height="40" rx="4" fill="#08121C" stroke="#114C5A" strokeWidth="1" />
              <line x1="10" y1="10" x2="30" y2="10" stroke="#FFC801" strokeWidth="2" strokeLinecap="round" />
              <line x1="35" y1="10" x2="70" y2="10" stroke="#00EEFF" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="20" x2="50" y2="20" stroke="#00EEFF" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="30" x2="40" y2="30" stroke="#114C5A" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      )
    }
  ];

  return (
    <section id="features" aria-labelledby="features-heading" className="bg-oceanic-noir py-32 lg:py-40 px-6 relative z-20">
      <style>{svgStyles}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nocturnal bg-nocturnal/20 mb-6"
          >
            <span className="font-mono text-label text-mystic uppercase tracking-[0.1em] font-semibold">Platform Capabilities</span>
          </motion.div>
          <motion.h2 
            id="features-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-heading-1 font-sans font-bold text-arctic mb-5"
          >
            Engineered for <span className="highlight-shimmer">Scale.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-mystic/70 font-sans text-body-lg max-w-prose-wide leading-relaxed"
          >
            A unified architecture combining predictive analytics, autonomous agents, and real-time data processing into one beautiful interface.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[auto]">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
