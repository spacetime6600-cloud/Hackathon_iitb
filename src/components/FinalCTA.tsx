import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

// Pre-computed particle data — avoids Math.random() in render (causes jitter/hydration issues)
const CTA_PARTICLES = [
  { w: '120px', h: '120px', left: '10%',  top: '15%',  duration: 8,  delay: 0   },
  { w: '80px',  h: '80px',  left: '75%',  top: '10%',  duration: 10, delay: 0.5 },
  { w: '100px', h: '100px', left: '30%',  top: '70%',  duration: 12, delay: 1   },
  { w: '60px',  h: '60px',  left: '85%',  top: '60%',  duration: 9,  delay: 1.5 },
  { w: '140px', h: '140px', left: '50%',  top: '30%',  duration: 14, delay: 2   },
  { w: '70px',  h: '70px',  left: '5%',   top: '80%',  duration: 11, delay: 2.5 },
];

export function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="relative bg-oceanic-noir py-32 md:py-48 px-6 overflow-hidden border-y border-nocturnal/30">
      
      {/* Animated AI Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Core glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,220,255,0.04)_0%,_transparent_70%)] blur-[120px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#114C5A15_1px,transparent_1px),linear-gradient(to_bottom,#114C5A15_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating particles — static positions to avoid re-render jitter */}
        {CTA_PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: p.delay
            }}
            className="absolute rounded-full bg-[#00EEFF]/10 blur-xl"
            style={{ width: p.w, height: p.h, left: p.left, top: p.top }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#08121C]/60 backdrop-blur-md inline-block px-4 py-2 rounded-full border border-[rgba(0,220,255,0.2)] mb-8"
        >
          <span className="text-[#00EEFF] text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00EEFF] animate-pulse" />
            Ready for Production
          </span>
        </motion.div>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-fluid-h2 text-arctic font-mono font-bold tracking-tight mb-8"
        >
          Transform Your Enterprise with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DCFF] to-mystic">Intelligent AI</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-mystic/80 font-sans text-fluid-body leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Join thousands of organizations already using AI to automate workflows, improve productivity and accelerate growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            animate={{ scale: [1, 1.02, 1], boxShadow: ["0 4px 15px rgba(0,220,255,0.2)", "0 4px 25px rgba(0,220,255,0.4)", "0 4px 15px rgba(0,220,255,0.2)"] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#00DCFF] to-[#00B4FF] text-[#08121C] font-sans font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ease-out-expo hover:-translate-y-[2px] hover:scale-[1.02] hover:brightness-105 group tracking-wide"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-[4px] transition-transform duration-300 ease-out-expo" aria-hidden="true" />
          </motion.button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#08121C]/80 backdrop-blur-md text-arctic font-sans font-bold text-lg flex items-center justify-center gap-2 border border-[rgba(0,220,255,0.2)] hover:border-[rgba(0,220,255,0.4)] hover:bg-[rgba(0,220,255,0.05)] transition-all duration-300 ease-out-expo hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(0,220,255,0.2)] hover:brightness-105 tracking-wide group">
            <PlayCircle className="w-5 h-5 text-[#00DCFF] group-hover:scale-105 transition-transform duration-300 ease-out-expo" aria-hidden="true" />
            Book a Live Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
