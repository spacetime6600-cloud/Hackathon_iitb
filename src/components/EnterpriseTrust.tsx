import { motion } from 'framer-motion';
import { Lock, Server, Globe2 } from 'lucide-react';

export function EnterpriseTrust() {
  const pillars = [
    {
      title: "SOC 2 Type II Certified",
      desc: "Built from the ground up for compliance in highly regulated industries.",
      icon: <Lock className="w-5 h-5 text-mystic" />
    },
    {
      title: "Multi-Region Redundancy",
      desc: "99.999% uptime guaranteed by our globally distributed architecture.",
      icon: <Globe2 className="w-5 h-5 text-mystic" />
    },
    {
      title: "Dedicated Infrastructure",
      desc: "Isolated compute environments for maximum performance and security.",
      icon: <Server className="w-5 h-5 text-mystic" />
    }
  ];

  return (
    <section className="bg-oceanic-noir py-24 md:py-32 px-6 overflow-hidden relative border-t border-nocturnal/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-arctic font-mono font-bold tracking-tight mb-6">
            Trusted by the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">World's Best Engineering Teams</span>
          </h2>
          <p className="text-mystic/70 font-sans text-lg max-w-2xl mx-auto">
            From hyper-growth startups to Fortune 500 enterprises, NexusAI provides the reliable foundation for mission-critical automation.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-nocturnal/20 border border-nocturnal flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-arctic font-mono font-bold text-lg mb-3">{pillar.title}</h3>
              <p className="text-mystic/60 font-sans text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Footer / CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-24 liquid-glass rounded-3xl p-10 md:p-16 text-center border border-nocturnal/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-nocturnal/10 pointer-events-none" />
          <h3 className="text-3xl md:text-4xl font-mono text-arctic font-bold mb-6 relative z-10">
            Ready to upgrade your infrastructure?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="bg-forsythia hover:bg-saffron text-oceanic-noir rounded-full px-8 py-3 text-sm font-bold transition-colors w-full sm:w-auto">
              Contact Sales
            </button>
            <button className="liquid-glass rounded-full px-8 py-3 text-arctic text-sm font-medium hover:bg-nocturnal/40 transition-colors border border-nocturnal w-full sm:w-auto">
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
