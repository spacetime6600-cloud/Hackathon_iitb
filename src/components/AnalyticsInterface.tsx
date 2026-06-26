import { motion, useScroll, useTransform, animate, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Zap, Activity, Database, 
  Cpu, BarChart3, LineChart, ShieldCheck, 
  GitMerge, Server
} from 'lucide-react';

function Counter({ from, to, duration, decimals = 0 }: { from: number, to: number, duration: number, decimals?: number }) {
  const nodeRef = useRef(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

export function AnalyticsInterface() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const workflowSteps = [
    { icon: <Database className="w-5 h-5 text-mystic" />, label: "Collect Data" },
    { icon: <BarChart3 className="w-5 h-5 text-mystic" />, label: "Analyze" },
    { icon: <Cpu className="w-6 h-6 text-forsythia" />, label: "AI Decision Engine", highlight: true },
    { icon: <Zap className="w-5 h-5 text-mystic" />, label: "Automation" },
    { icon: <Activity className="w-5 h-5 text-mystic" />, label: "Monitoring" },
    { icon: <LineChart className="w-5 h-5 text-mystic" />, label: "Business Insights" },
  ];

  return (
    <section id="dashboard" aria-labelledby="dashboard-heading" ref={containerRef} className="bg-oceanic-noir py-32 md:py-48 px-6 overflow-hidden relative border-t border-nocturnal/30">
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(17,76,90,0.25)_0%,_transparent_70%)] blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-mystic text-sm tracking-widest uppercase mb-4 font-mono font-semibold"
          >
            Intelligent Automation Platform
          </motion.p>
          <h2
            id="dashboard-heading"
            className="text-fluid-h2 text-arctic leading-[1.1] tracking-tight font-mono font-bold max-w-4xl mx-auto"
          >
            Visualize how autonomous AI agents <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">analyze, decide & automate.</span>
          </h2>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start relative z-10"
        >
          {/* Animated Flowing Workflow Lines (Background of Dashboard) */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[40px]">
             <svg className="w-full h-full opacity-40" style={{ filter: "drop-shadow(0 0 8px rgba(255,200,1,0.5))" }}>
                <motion.path 
                  d="M -100,50 Q 200,200 400,100 T 1000,300"
                  fill="none"
                  stroke="url(#flow-gradient)"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  animate={{ strokeDashoffset: [0, -100] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#114C5A" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FFC801" />
                    <stop offset="100%" stopColor="#114C5A" stopOpacity="0" />
                  </linearGradient>
                </defs>
             </svg>
          </div>

          {/* Left Column: Premium Enterprise Dashboard */}
          <article className="rounded-[24px] p-8 md:p-12 border border-[rgba(0,220,255,0.1)] shadow-[0_12px_40px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.05)] relative overflow-hidden h-full flex flex-col gap-8 z-10 bg-oceanic-noir/40 backdrop-blur-xl">
             <div className="flex justify-between items-center relative z-10">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-[#08121C] border border-[rgba(0,220,255,0.15)] flex items-center justify-center shadow-lg">
                   <Activity className="w-5 h-5 text-[#00EEFF]" />
                 </div>
                 <div>
                   <h3 className="text-arctic font-sans font-bold text-lg tracking-tight">System Dashboard</h3>
                   <p className="text-mystic/60 text-xs font-sans mt-0.5">Live Enterprise Telemetry</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <span className="w-2.5 h-2.5 rounded-full bg-[#FFC801] shadow-[0_0_8px_#FFC801] animate-pulse" />
                 <span className="w-2.5 h-2.5 rounded-full bg-[#00EEFF] shadow-[0_0_8px_#00EEFF]" />
               </div>
             </div>

             {/* Top KPI Row */}
             <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="bg-[#08121C]/60 p-6 rounded-2xl border border-[rgba(0,220,255,0.05)] hover:border-[rgba(0,220,255,0.3)] hover:-translate-y-[4px] hover:scale-[1.01] transition-all duration-300 ease-out-expo hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)] group shadow-inner">
                  <div className="text-mystic/60 text-xs font-sans mb-1 uppercase tracking-wider">AI Accuracy</div>
                  <div className="text-arctic font-mono text-3xl font-bold">
                    <Counter from={0} to={99.8} duration={2} decimals={1} />
                    <span className="text-lg text-mystic">%</span>
                  </div>
                </div>
                <div className="bg-[#08121C]/60 p-6 rounded-2xl border border-[rgba(0,220,255,0.05)] hover:border-[rgba(0,220,255,0.3)] hover:-translate-y-[4px] hover:scale-[1.01] transition-all duration-300 ease-out-expo hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)] group shadow-inner">
                  <div className="text-mystic/60 text-xs font-sans mb-1 uppercase tracking-wider">System Uptime</div>
                  <div className="text-arctic font-mono text-3xl font-bold">
                    <Counter from={0} to={99.99} duration={2.5} decimals={2} />
                    <span className="text-lg text-mystic">%</span>
                  </div>
                </div>
             </div>

             {/* Middle Chart Row */}
             <div className="bg-[#08121C]/60 p-6 rounded-2xl border border-[rgba(0,220,255,0.05)] hover:border-[rgba(0,220,255,0.3)] hover:-translate-y-[4px] hover:scale-[1.01] transition-all duration-300 ease-out-expo hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)] relative z-10 shadow-inner group">
                <div className="flex justify-between items-center mb-6">
                   <div className="text-mystic/80 text-sm font-mono">Processing Speed</div>
                   <div className="text-arctic text-xs px-2 py-1 bg-[#08121C] rounded-md border border-[rgba(0,220,255,0.1)] group-hover:border-[rgba(0,220,255,0.3)] transition-colors">Past 24h</div>
                </div>
                <div className="relative h-24 w-full">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path
                      d="M0,80 C20,60 30,90 40,40 C50,20 60,60 70,30 C80,10 90,40 100,20 L100,100 L0,100 Z"
                      fill="url(#dash-grad)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2 }}
                    />
                    <motion.path
                      d="M0,80 C20,60 30,90 40,40 C50,20 60,60 70,30 C80,10 90,40 100,20"
                      fill="none"
                      stroke="#FFC801"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="dash-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFC801" />
                        <stop offset="100%" stopColor="#114C5A" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
             </div>

             {/* Bottom KPIs */}
             <div className="grid grid-cols-2 gap-6 relative z-10 flex-1">
                <div className="bg-[#08121C]/60 p-6 rounded-2xl border border-[rgba(0,220,255,0.05)] hover:border-[rgba(0,220,255,0.3)] hover:-translate-y-[4px] hover:scale-[1.01] transition-all duration-300 ease-out-expo hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)] flex flex-col justify-between shadow-inner group">
                   <div className="text-mystic/60 text-xs font-sans mb-3 uppercase tracking-wider">Tasks Automated</div>
                   <div className="flex items-center gap-2">
                     <GitMerge className="w-5 h-5 text-[#00EEFF]/50" />
                     <div className="text-arctic font-mono text-2xl font-bold">
                       <Counter from={0} to={8.4} duration={3} decimals={1} />
                       <span className="text-sm text-mystic ml-1">M+</span>
                     </div>
                   </div>
                </div>
                <div className="bg-[#08121C]/60 p-6 rounded-2xl border border-[rgba(0,220,255,0.05)] hover:border-[rgba(0,220,255,0.3)] hover:-translate-y-[4px] hover:scale-[1.01] transition-all duration-300 ease-out-expo hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.15)] flex flex-col justify-between shadow-inner group">
                   <div className="text-mystic/60 text-xs font-sans mb-3 uppercase tracking-wider">Live AI Decisions</div>
                   <div className="flex items-center gap-2">
                     <Cpu className="w-5 h-5 text-[#FFC801]/70" />
                     <div className="text-arctic font-mono text-2xl font-bold">
                       <Counter from={0} to={142} duration={3} />
                       <span className="text-sm text-mystic ml-1">/sec</span>
                     </div>
                   </div>
                </div>
             </div>
          </article>

          {/* Right Column: Premium Workflow Visualization */}
          <article className="rounded-[24px] p-10 md:p-14 border border-[rgba(0,220,255,0.1)] shadow-[0_12px_40px_rgba(0,0,0,0.4),_0_0_30px_rgba(0,220,255,0.05)] relative overflow-hidden h-full flex items-center justify-center min-h-[500px] bg-oceanic-noir/40 backdrop-blur-xl">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,220,255,0.05)_0%,_transparent_70%)] pointer-events-none" />
             
             <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
               
               {/* Background Connection Line */}
               <div className="absolute top-[30px] bottom-[30px] left-1/2 -translate-x-1/2 w-0.5 bg-nocturnal/30 z-0">
                  <motion.div 
                    className="w-full h-24 bg-gradient-to-b from-transparent via-forsythia to-transparent shadow-[0_0_10px_#FFC801]"
                    animate={{ y: [-100, 500] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
               </div>

               {/* Nodes */}
               <div className="space-y-6 w-full relative z-10">
                 {workflowSteps.map((step, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, amount: 0.1 }}
                     transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.165, 0.84, 0.44, 1] }}
                     className="w-full flex items-center gap-6"
                   >
                     <div className="w-1/2 text-right">
                       {idx % 2 === 0 && (
                         <span className={`font-mono text-sm ${step.highlight ? 'text-forsythia font-bold' : 'text-mystic/70'}`}>
                           {step.label}
                         </span>
                       )}
                     </div>
                     
                     {/* Node Circle */}
                     <motion.div 
                       whileHover={{ scale: 1.2 }}
                       className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center border bg-oceanic-noir relative ${
                         step.highlight 
                          ? 'border-forsythia shadow-[0_0_20px_rgba(255,200,1,0.2)]' 
                          : 'border-nocturnal shadow-lg'
                       }`}
                     >
                       {step.highlight && (
                         <div className="absolute inset-0 rounded-full border border-saffron/30 animate-ping" />
                       )}
                       {step.icon}
                     </motion.div>

                     <div className="w-1/2 text-left">
                       {idx % 2 !== 0 && (
                         <span className={`font-mono text-sm ${step.highlight ? 'text-forsythia font-bold' : 'text-mystic/70'}`}>
                           {step.label}
                         </span>
                       )}
                     </div>
                   </motion.div>
                 ))}
               </div>

               {/* Floating depth elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-4 top-20 w-16 h-16 rounded-xl border border-nocturnal/50 bg-oceanic-noir/50 backdrop-blur-md flex items-center justify-center shadow-lg"
               >
                 <Server className="w-5 h-5 text-mystic/40" />
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute -left-8 bottom-32 w-20 h-20 rounded-xl border border-nocturnal/50 bg-oceanic-noir/50 backdrop-blur-md flex items-center justify-center shadow-lg"
               >
                 <ShieldCheck className="w-6 h-6 text-mystic/40" />
               </motion.div>
             </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
