import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { Check, ChevronDown, Rocket, Zap, Building2 } from 'lucide-react';

// Counter component for smooth price transitions
function AnimatedPrice({ value }: { value: number | "Custom" }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (value === "Custom") {
      if (nodeRef.current) nodeRef.current.textContent = "Custom";
      return;
    }
    const node = nodeRef.current;
    if (!node) return;
    
    // Parse current value or start from 0
    const startValue = parseInt(node.textContent?.replace(/,/g, '') || '0') || 0;
    
    const controls = animate(startValue, value, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = Math.round(v).toLocaleString();
      },
    });
    
    return () => controls.stop();
  }, [value]);

  return <span ref={nodeRef} className="text-5xl font-mono text-arctic font-bold tracking-tight">{value === "Custom" ? "Custom" : value.toLocaleString()}</span>;
}

function PricingCard({ plan, getPrice, activeCurrency, index }: { plan: any, getPrice: any, activeCurrency: any, index: number }) {
  const priceVal = getPrice(plan.name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.165, 0.84, 0.44, 1] }}
      className={`relative rounded-[24px] p-8 md:p-10 transition-all duration-300 ease-out-expo group flex flex-col bg-oceanic-noir/40 backdrop-blur-xl hover:-translate-y-[4px] hover:scale-[1.01] ${
        plan.isPopular 
          ? 'md:-translate-y-[6px] z-20 border border-[rgba(0,220,255,0.25)] shadow-[0_20px_60px_rgba(0,0,0,0.5),_0_0_50px_rgba(0,220,255,0.1),_0_0_100px_rgba(0,220,255,0.08)] hover:border-[rgba(0,220,255,0.4)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),_0_0_50px_rgba(0,220,255,0.15),_0_0_100px_rgba(0,220,255,0.15)]' 
          : 'z-10 border border-[rgba(0,220,255,0.1)] shadow-[0_12px_40px_rgba(0,0,0,0.35),_0_0_40px_rgba(0,220,255,0.05)] hover:border-[rgba(0,220,255,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)]'
      }`}
    >
      {/* Natural Lighting Layers */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none overflow-hidden z-0">
         {/* Top left cyan */}
         <div className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(0,220,255,0.1)_0%,_transparent_70%)] mix-blend-screen" />
         {/* Center radial */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,220,255,0.03)_0%,_transparent_100%)] pointer-events-none" />
         {/* Edge lighting inset shadow */}
         <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_inset_0_0_20px_rgba(0,220,255,0.02)] pointer-events-none" />
      </div>

      {/* Center Card Animated Ambient Light */}
      {plan.isPopular && (
         <motion.div 
           animate={{ opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,220,255,0.1)_0%,_transparent_70%)] pointer-events-none rounded-[24px] mix-blend-screen z-0" 
         />
      )}

      {/* Inner Content Wrapper */}
      <div className="flex flex-col h-full z-10 relative">
        {plan.isPopular && (
          <div className="absolute -top-14 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-[#00DCFF] to-[#00B4FF] text-oceanic-noir font-mono font-bold text-xs uppercase tracking-widest py-1 px-4 rounded-full shadow-[0_0_15px_rgba(0,220,255,0.4)]">
              Most Popular
            </div>
          </div>
        )}

        <div className="mb-8 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner backdrop-blur-md transition-transform duration-[220ms] ${
              plan.isPopular ? 'bg-[rgba(0,220,255,0.15)] border-[rgba(0,220,255,0.4)] text-[#00DCFF] shadow-[0_0_15px_rgba(0,220,255,0.3)]' : 'bg-[#08121C]/50 border-[rgba(0,220,255,0.2)] group-hover:border-[rgba(0,220,255,0.4)] text-[#00DCFF]'
            }`}>
              {plan.icon}
            </motion.div>
            <h3 className="text-2xl font-sans text-arctic font-bold tracking-tight">{plan.name}</h3>
          </div>
        </div>
        
        <p className="text-mystic/70 font-sans text-sm leading-relaxed min-h-[40px] relative z-10">
          {plan.description}
        </p>

        {/* Price Container */}
        <div className="my-8 flex items-baseline gap-2 relative z-10">
          {priceVal !== "Custom" && <span className="text-2xl font-sans text-[#00DCFF]/80 font-medium">{activeCurrency.symbol}</span>}
          <AnimatedPrice value={priceVal === "Custom" ? "Custom" : parseInt(priceVal.replace(/,/g, ''))} />
          {priceVal !== "Custom" && <span className="text-mystic/60 font-sans text-sm">/ month</span>}
        </div>

        <div className="w-full h-[1px] bg-nocturnal/50 mb-8 relative z-10 group-hover:bg-[#00DCFF]/20 transition-colors duration-[220ms]" />

        <ul className="space-y-4 mb-10 flex-1 relative z-10">
          {plan.features.map((feature: string, fIdx: number) => (
            <li key={fIdx} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className={`w-4 h-4 ${plan.isPopular ? 'text-[#00DCFF] drop-shadow-[0_0_5px_rgba(0,220,255,0.5)]' : 'text-mystic/80 group-hover:text-[#00DCFF]'}`} />
              </div>
              <span className="text-mystic/80 font-sans text-sm group-hover:text-arctic transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 ease-out-expo relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir focus-visible:ring-[#00DCFF] flex items-center justify-center gap-2 group/btn hover:-translate-y-[2px] hover:scale-[1.02] hover:brightness-105 ${
          plan.isPopular 
            ? 'bg-gradient-to-r from-[#00DCFF] to-[#00B4FF] text-oceanic-noir shadow-[0_0_15px_rgba(0,220,255,0.3)] hover:shadow-[0_4px_20px_rgba(0,220,255,0.5)]' 
            : 'bg-[#08121C]/80 backdrop-blur-md text-arctic border border-[rgba(0,220,255,0.2)] hover:border-[rgba(0,220,255,0.4)] hover:bg-[rgba(0,220,255,0.05)] hover:shadow-[0_4px_15px_rgba(0,220,255,0.2)]'
        }`}>
          {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
        </button>
      </div>
    </motion.article>
  );
}

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const currencies = [
    { code: "USD", symbol: "$", label: "USD", flag: "🇺🇸" },
    { code: "EUR", symbol: "€", label: "EUR", flag: "🇪🇺" },
    { code: "INR", symbol: "₹", label: "INR", flag: "🇮🇳" }
  ];

  const activeCurrency = currencies.find(c => c.code === currency) || currencies[0];

  const pricingConfig: Record<string, Record<string, number | "Custom">> = {
    Starter: { USD: 99, EUR: 89, INR: 8200 },
    Professional: { USD: 499, EUR: 449, INR: 41500 },
    Enterprise: { USD: "Custom", EUR: "Custom", INR: "Custom" }
  };

  const getPrice = (planName: string) => {
    const basePrice = pricingConfig[planName][currency];
    if (basePrice === "Custom") return "Custom";
    const finalPrice = isAnnual ? Math.round(basePrice * 0.8) : basePrice;
    return finalPrice.toLocaleString();
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for startups beginning AI automation.",
      icon: <Rocket className="w-6 h-6 text-mystic group-hover:text-arctic transition-colors" aria-hidden="true" />,
      features: ["AI Automation", "Dashboard", "Analytics", "Email Support"],
      isPopular: false
    },
    {
      name: "Professional",
      description: "For growing businesses requiring advanced automation.",
      icon: <Zap className="w-6 h-6 text-forsythia group-hover:text-saffron transition-colors" aria-hidden="true" />,
      features: ["Everything in Starter", "AI Agents", "Workflow Automation", "API Access", "Priority Support"],
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "Custom AI infrastructure for global organizations.",
      icon: <Building2 className="w-6 h-6 text-mystic group-hover:text-arctic transition-colors" aria-hidden="true" />,
      features: ["Everything in Professional", "Unlimited AI Agents", "Dedicated Infrastructure", "Advanced Security", "Custom Integrations", "Dedicated Success Manager"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-oceanic-noir py-32 lg:py-40 px-6 relative z-10 border-t border-nocturnal/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Controls */}
        <div className="flex flex-col items-center text-center mb-36 relative z-50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nocturnal bg-nocturnal/20 mb-6"
          >
            <span className="text-mystic text-xs font-mono uppercase tracking-widest font-semibold">Transparent Pricing</span>
          </motion.div>
          <motion.h2
            id="pricing-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-fluid-h2 text-arctic font-mono font-bold tracking-tight mb-6"
          >
            Flexible Pricing <br/> Built for Every Enterprise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-mystic/80 font-sans text-fluid-body max-w-2xl mx-auto mb-16"
          >
            Choose the perfect AI automation plan for your organization with transparent pricing and enterprise-grade scalability.
          </motion.p>

          {/* Controls Bar Wrapper - Increased margin-bottom and overflow-visible */}
          <div className="relative overflow-visible w-full flex justify-center mb-[60px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center p-2 rounded-full bg-nocturnal/20 border border-nocturnal backdrop-blur-md relative overflow-visible"
            >
               {/* Currency Selector */}
               <div className="relative pl-2 w-36 overflow-visible">
                 <button 
                   onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                   aria-expanded={isCurrencyOpen}
                   aria-haspopup="listbox"
                   className="flex items-center justify-between w-full gap-2 px-4 py-2 rounded-full hover:bg-nocturnal/40 transition-colors text-arctic font-mono text-sm border border-transparent hover:border-mystic/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia/50"
                 >
                   <div className="flex items-center gap-2">
                     <span>{activeCurrency.flag}</span>
                     <span>{activeCurrency.code}</span>
                   </div>
                   <ChevronDown className={`w-4 h-4 text-mystic/60 transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                 </button>
                 
                 {/* Dropdown Menu */}
                 <AnimatePresence>
                   {isCurrencyOpen && (
                     <motion.div 
                       initial={{ opacity: 0, y: -8, scale: 0.97 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       exit={{ opacity: 0, y: -8, scale: 0.97 }}
                       transition={{ duration: 0.18, ease: "easeOut" }}
                       role="listbox" 
                       className="absolute left-0 w-full rounded-[14px] overflow-hidden"
                       style={{
                         top: 'calc(100% + 12px)',
                         zIndex: 9999,
                         background: 'rgba(8,18,28,0.95)',
                         backdropFilter: 'blur(18px)',
                         border: '1px solid rgba(0,238,255,0.12)',
                         boxShadow: '0 20px 60px rgba(0,0,0,.45), 0 0 30px rgba(0,238,255,.08)'
                       }}
                     >
                     <div className="p-1.5 flex flex-col gap-0.5">
                       {currencies.map(c => {
                         const isSelected = currency === c.code;
                         return (
                           <button
                             key={c.code}
                             role="option"
                             aria-selected={isSelected}
                             onClick={() => { setCurrency(c.code); setIsCurrencyOpen(false); }}
                             className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between text-sm font-mono transition-all duration-200 cursor-pointer group hover:bg-[rgba(0,238,255,0.08)] ${
                               isSelected ? 'bg-[rgba(0,238,255,0.04)] text-arctic font-bold' : 'text-mystic hover:text-arctic'
                             }`}
                           >
                             <div className="flex items-center gap-2.5 relative">
                               {/* Left border indicator for selected */}
                               <div className={`absolute -left-3 w-[3px] h-4 rounded-r-full transition-all duration-200 ${
                                 isSelected ? 'bg-[#00EEFF] shadow-[0_0_8px_#00EEFF]' : 'bg-transparent group-hover:bg-[#00EEFF]/50'
                               }`} />
                               <span className={`text-base transition-transform duration-200 ${isSelected ? '' : 'group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#00EEFF]'}`}>{c.flag}</span>
                               <span className={isSelected ? 'text-arctic' : 'group-hover:text-arctic'}>{c.code}</span>
                             </div>
                             {isSelected && (
                               <motion.div
                                 initial={{ scale: 0, opacity: 0 }}
                                 animate={{ scale: 1, opacity: 1 }}
                                 className="text-[#00EEFF]"
                               >
                                 <Check className="w-4 h-4 drop-shadow-[0_0_5px_rgba(0,238,255,0.5)]" />
                               </motion.div>
                             )}
                           </button>
                         );
                       })}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>

             {/* Vertical Divider */}
             <div className="w-[1px] h-8 bg-nocturnal mx-2" aria-hidden="true" />

             {/* Monthly/Annual Toggle */}
             <div className="flex items-center gap-3 pr-4">
                <span className={`text-sm font-sans font-medium transition-colors ${!isAnnual ? 'text-arctic' : 'text-mystic/60'}`}>Monthly</span>
                <button 
                  role="switch"
                  aria-checked={isAnnual}
                  aria-label="Toggle annual billing"
                  onClick={() => setIsAnnual(!isAnnual)}
                  className="relative w-12 h-6 rounded-full bg-oceanic-noir border border-nocturnal p-1 flex items-center cursor-pointer transition-colors hover:border-mystic/30 shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00DCFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-oceanic-noir"
                >
                  <motion.div 
                    className="w-4 h-4 bg-[#00DCFF] rounded-full shadow-[0_0_8px_#00DCFF]"
                    animate={{ x: isAnnual ? 24 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
                <span className={`text-sm font-sans font-medium transition-colors flex items-center gap-2 ${isAnnual ? 'text-arctic' : 'text-mystic/60'}`}>
                  Annual
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00DCFF]/10 text-[#00DCFF] border border-[#00DCFF]/20">
                    -20%
                  </span>
                </span>
             </div>
          </motion.div>
        </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} index={idx} getPrice={getPrice} activeCurrency={activeCurrency} />
          ))}
        </div>
      </div>
    </section>
  );
}
