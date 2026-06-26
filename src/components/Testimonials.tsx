import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "NexusAI has completely transformed our data pipeline. What used to take our engineering team weeks is now automated in real-time. It's the closest thing to magic we've deployed.",
      name: "Sarah Jenkins",
      title: "Chief Technology Officer",
      company: "DataScale Enterprise",
      avatar: "SJ"
    },
    {
      quote: "The zero-latency querying on petabytes of unstructured data is unparalleled. We evaluated every enterprise AI platform, and nothing comes close to this architecture.",
      name: "Michael Chang",
      title: "VP of Engineering",
      company: "Quantum Financial",
      avatar: "MC"
    },
    {
      quote: "Deploying autonomous agents across our global infrastructure was seamless. The SOC2 compliance and zero-trust security model gave our board the confidence to scale.",
      name: "Elena Rodriguez",
      title: "Chief Data Officer",
      company: "NexusCorp Global",
      avatar: "ER"
    },
    {
      quote: "The predictive analytics model saved us millions in Q3 alone. It identified supply chain bottlenecks before they happened. An absolute game-changer for operations.",
      name: "David Chen",
      title: "VP of Operations",
      company: "Global Logistics",
      avatar: "DC"
    }
  ];

  // Duplicate for seamless infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-oceanic-noir py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(17,76,90,0.15)_0%,_transparent_70%)] pointer-events-none" />
      
      {/* CSS Animation for Marquee to easily support pause-on-hover */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .marquee-paused .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto relative z-10 max-w-full overflow-hidden">
        
        <div className="text-center mb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nocturnal bg-nocturnal/20 mb-6"
          >
            <span className="font-mono text-label text-mystic uppercase tracking-[0.1em] font-semibold">Social Proof</span>
          </motion.div>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-heading-1 font-sans font-extrabold text-arctic mb-5"
          >
            What Enterprise<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">Leaders Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-mystic/70 font-sans text-body-lg max-w-prose-wide mx-auto"
          >
            Discover how organizations worldwide are transforming operations through AI-powered automation.
          </motion.p>
        </div>

        {/* Infinite Marquee Container */}
        <div 
          className={`relative w-full overflow-hidden ${isHovered ? 'marquee-paused' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-oceanic-noir to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-oceanic-noir to-transparent z-20 pointer-events-none" />

          <div className="flex w-max animate-marquee gap-8 px-4 py-8">
            {duplicatedTestimonials.map((test, idx) => (
              <article
                key={idx}
                className="w-[350px] md:w-[450px] shrink-0 bg-oceanic-noir/40 backdrop-blur-xl rounded-[32px] p-10 border border-[rgba(0,220,255,0.1)] hover:border-[rgba(0,220,255,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-default flex flex-col relative overflow-hidden hover:-translate-y-[6px] hover:scale-[1.015]"
              >
                {/* Shine Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-mystic/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                
                <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-forsythia fill-forsythia" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-arctic/90 font-sans text-body-lg leading-relaxed flex-1 mb-10 relative z-10">
                  "{test.quote}"
                </p>
                
                <div className="flex items-center gap-4 relative z-10 border-t border-[rgba(0,220,255,0.1)] pt-6 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-[#08121C] border border-[rgba(0,220,255,0.15)] flex items-center justify-center overflow-hidden group-hover:border-[rgba(0,220,255,0.4)] transition-colors shadow-inner">
                    <span className="text-arctic font-mono text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {test.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-arctic font-sans font-bold tracking-tight">{test.name}</div>
                    <div className="text-mystic/80 font-sans text-sm">{test.title}</div>
                    <div className="text-[#00EEFF]/80 font-mono text-xs mt-1 uppercase tracking-widest">{test.company}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
