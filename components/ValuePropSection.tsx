import React from 'react';

const ValuePropSection: React.FC = () => {
  const values = [
    {
      target: "Diagnostic Laboratories",
      benefits: [
        "Software-only enhancement",
        "No additional equipment or reagents",
        "Differentiated CBC reports",
        "Increased clinician engagement",
        "Supports reflex and follow-up testing"
      ]
    },
    {
      target: "Clinicians",
      benefits: [
        "Earlier visibility into possible deficiency",
        "Structured, interpretable risk insights",
        "Supports confirmatory testing decisions",
        "Improves preventive care conversations",
        "Data-driven patient interaction"
      ]
    },
    {
      target: "Health Systems",
      benefits: [
        "Scalable preventive screening",
        "Reduced late-stage complications",
        "Population-level health insights",
        "Optimized diagnostic pathways",
        "Improved health economic outcomes"
      ]
    }
  ];

  return (
    <div className="relative z-20 py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-blue-300 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 md:mb-6 block">Value Proposition</span>
          <h2 className="text-3xl md:text-5xl font-light">Impact Across <span className="font-medium italic">Ecosystems</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <div key={i} className="glass-effect p-8 md:p-12 rounded-[32px] md:rounded-[40px] border border-white/10 hover:border-blue-400/30 hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col group">
              <h3 className="text-xl md:text-2xl font-medium mb-8 md:mb-10 text-blue-300 group-hover:text-white transition-colors">{v.target}</h3>
              <ul className="space-y-4 md:space-y-6 flex-grow">
                {v.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3 md:gap-4 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-2 group-hover:bg-blue-400 group-hover/item:scale-125 transition-all shrink-0"></div>
                    <span className="text-sm md:text-base text-white/75 font-light group-hover:text-white/95 transition-colors leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuePropSection;