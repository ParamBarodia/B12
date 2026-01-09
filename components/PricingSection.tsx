import React from 'react';

const PricingSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-20 py-20 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-blue-300 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 md:mb-6 block">Commercial Model</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8">Flexible <span className="font-medium italic">BioSaaS</span> Model</h2>
          <p className="text-white/80 text-xs md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Designed to scale efficiently with laboratory throughput while maintaining predictable costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-8 mb-20 md:mb-32">
          <div className="glass-effect p-8 md:p-14 rounded-[32px] md:rounded-[40px] border border-blue-400/30 bg-blue-400/5 shadow-[0_0_50px_rgba(96,165,250,0.05)] relative overflow-hidden group hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 bg-blue-400 text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-6 md:px-8 py-2 md:py-3 rounded-bl-3xl group-hover:bg-blue-300 transition-colors">
              Laboratory Integrated
            </div>
            
            <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/60 mb-2">Platform Access</div>
            <h3 className="text-2xl md:text-4xl font-light text-white mb-8 md:mb-10 group-hover:text-blue-100 transition-colors">Integration Tier</h3>
            
            <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
              {[
                "One-time onboarding & LIS enablement",
                "Subscription-based platform access",
                "Volume-based pricing (CBC throughput)",
                "Dedicated LIS integration support",
                "Continuous monitoring & updates",
                "24/7 technical surveillance"
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-xs md:text-base text-white font-light group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 group-hover/item:scale-125 transition-transform"></div>
                  <span className="group-hover:text-blue-50 transition-colors">{f}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => scrollTo('contact')}
              className="w-full py-4 md:py-5 bg-blue-400 text-black rounded-xl md:rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-blue-300 shadow-[0_10px_30px_rgba(96,165,250,0.2)] active:scale-95"
            >
              Enquire for Laboratory
            </button>
          </div>

          <div className="flex flex-col justify-center space-y-8 md:space-y-12 p-2 md:p-4">
            <div className="group hover:-translate-x-1 transition-transform duration-500">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-300 mb-3 md:mb-4 flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                <span className="w-4 md:w-6 h-[1px] bg-blue-300 group-hover:w-10 transition-all duration-500"></span> Onboarding
              </h4>
              <p className="text-[11px] md:text-sm text-white/80 leading-relaxed font-light group-hover:text-white transition-colors">System enablement includes secure data mapping, LIS certification, and clinical report template design to match your lab standards.</p>
            </div>
            <div className="group hover:-translate-x-1 transition-transform duration-500">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-300 mb-3 md:mb-4 flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                <span className="w-4 md:w-6 h-[1px] bg-blue-300 group-hover:w-10 transition-all duration-500"></span> Scalability
              </h4>
              <p className="text-[11px] md:text-sm text-white/80 leading-relaxed font-light group-hover:text-white transition-colors">Commercial models are tiered based on your laboratory's CBC throughput, ensuring unit economics align with your operational growth.</p>
            </div>
            <div className="group hover:-translate-x-1 transition-transform duration-500">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-300 mb-3 md:mb-4 flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                <span className="w-4 md:w-6 h-[1px] bg-blue-300 group-hover:w-10 transition-all duration-500"></span> Continuous Value
              </h4>
              <p className="text-[11px] md:text-sm text-white/80 leading-relaxed font-light group-hover:text-white transition-colors">Subscription includes all algorithm updates, security patches, and regulatory alignment updates as Clinomic Labs evolves.</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 md:p-12 rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/[0.01] hover:border-white/20 hover:-translate-y-1 transition-all duration-500 group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-12">
            <div className="max-w-xl">
              <span className="text-white/60 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4 block">Trust & Governance</span>
              <h3 className="text-2xl md:text-3xl font-light mb-4 md:mb-6 group-hover:text-white transition-colors">Designed for <span className="font-medium text-white">Trust</span></h3>
              <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed mb-6 md:mb-8 group-hover:text-white transition-colors">
                Clinomic Labs is built as a clinical decision support system. We prioritize transparency and security in every integration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Explainable AI/Pattern outputs",
                  "Data privacy (Local compliance)",
                  "Full clinical audit trails",
                  "Local clinical validation kits"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-white group/item">
                    <div className="w-1 h-1 rounded-full bg-blue-400 shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span className="group-hover/item:text-blue-100 transition-colors">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 flex justify-center md:block">
               <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full border border-white/10 flex items-center justify-center relative group-hover:border-blue-400/30 transition-colors">
                  <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse"></div>
                  <div className="text-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-xl sm:text-2xl md:text-3xl font-light text-blue-300 mb-1 group-hover:text-blue-400">CDSS</div>
                    <div className="text-[7px] md:text(8px) text-white/80 uppercase tracking-widest">Classification</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;