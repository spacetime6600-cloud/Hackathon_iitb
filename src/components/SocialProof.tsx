import { motion } from 'framer-motion';
import { Building, Activity, ShieldPlus, Cloud, Cpu, Factory } from 'lucide-react';

export function SocialProof() {
  const logos = [
    { name: "Acme Finance", icon: <Building className="w-8 h-8" /> },
    { name: "HealthTech AI", icon: <ShieldPlus className="w-8 h-8" /> },
    { name: "Global Cloud", icon: <Cloud className="w-8 h-8" /> },
    { name: "Nexus Startups", icon: <Cpu className="w-8 h-8" /> },
    { name: "Prime Manufacturing", icon: <Factory className="w-8 h-8" /> },
    { name: "DataStream", icon: <Activity className="w-8 h-8" /> },
  ];

  return (
    <section className="bg-oceanic-noir py-24 px-6 border-y border-nocturnal/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,76,90,0.1)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-mystic/60 text-xs font-mono uppercase tracking-widest font-semibold mb-12"
        >
          Trusted by 2,500+ Global Businesses
        </motion.p>

        {/* Logo Carousel Container */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-oceanic-noir to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-oceanic-noir to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex items-center gap-16 md:gap-32 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 text-mystic/30 hover:text-mystic transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
              >
                {logo.icon}
                <span className="font-sans font-bold text-xl tracking-tight hidden sm:block">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
