import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does AI automation work?",
      answer: "Our intelligent pipeline ingests unstructured enterprise data, maps complex schemas using proprietary cognitive engines, and deploys autonomous agents to execute workflows in real-time."
    },
    {
      question: "How secure is enterprise data?",
      answer: "Security is our foundation. We maintain strict SOC2 Type II compliance, featuring zero-trust architecture, military-grade AES-256 encryption at rest and in transit, and role-based access control."
    },
    {
      question: "Can I integrate existing systems?",
      answer: "Absolutely. Our Global Integration Platform connects seamlessly with legacy enterprise software, modern cloud infrastructure, and custom internal APIs without requiring extensive code changes."
    },
    {
      question: "Is there an Enterprise plan?",
      answer: "Yes. The Enterprise plan includes isolated compute resources, unlimited AI agents, dedicated success managers, and the ability to train custom neural models on your proprietary datasets."
    },
    {
      question: "Do you provide API access?",
      answer: "Both Professional and Enterprise tiers include comprehensive API access with high-throughput rate limits, complete documentation, and dedicated webhooks for custom orchestration."
    },
    {
      question: "How quickly can we deploy?",
      answer: "Standard deployments take less than 14 days. Our dedicated technical account managers will work directly with your engineering teams to ensure zero downtime during migration."
    }
  ];

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-oceanic-noir py-32 px-6 relative border-t border-nocturnal/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(17,76,90,0.1)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nocturnal bg-nocturnal/20 mb-6"
          >
            <span className="font-mono text-label text-mystic uppercase tracking-[0.1em] font-semibold">Common Questions</span>
          </motion.div>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-heading-1 font-sans font-bold text-arctic mb-5"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-mystic/70 font-sans text-body-lg max-w-prose-narrow mx-auto"
          >
            Everything you need to know about deploying NexusAI across your organization.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.165, 0.84, 0.44, 1] }}
              className="border border-[rgba(0,220,255,0.1)] rounded-[24px] overflow-hidden bg-oceanic-noir/40 backdrop-blur-xl hover:border-[rgba(0,220,255,0.3)] hover:-translate-y-[2px] transition-all duration-300 shadow-lg"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00EEFF]/50 rounded-[24px] group"
              >
                <span className={`font-sans font-semibold text-body-lg pr-8 transition-colors ${openIdx === idx ? 'text-[#00EEFF]' : 'text-arctic group-hover:text-mystic'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors shrink-0 ${openIdx === idx ? 'bg-[#00EEFF]/10 border-[#00EEFF] text-[#00EEFF]' : 'bg-[#08121C] border-[rgba(0,220,255,0.15)] text-mystic group-hover:border-[rgba(0,220,255,0.3)]'}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
                  >
                    <div className="px-8 pb-8 text-mystic/70 font-sans text-body-lg leading-relaxed border-t border-[rgba(0,220,255,0.1)] pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
