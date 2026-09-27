import React from 'react';
import { ArrowRight, CheckCircle, Car, Send, MessageSquareQuote, Luggage } from 'lucide-react';
import { PROCESS_STEPS } from '../data/fleetData';

export const HowItWorks: React.FC<{ onStartProcess: () => void }> = ({ onStartProcess }) => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Car className="w-5 h-5 text-[#FACC15]" />;
      case '02':
        return <Send className="w-5 h-5 text-[#FACC15]" />;
      case '03':
        return <MessageSquareQuote className="w-5 h-5 text-[#FACC15]" />;
      case '04':
        return <Luggage className="w-5 h-5 text-[#FACC15]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#FACC15]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#1C0205] via-[#120103] to-[#1C0205] border-y border-[#FACC15]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#FACC15] font-bold">
            Simple 4-Step Process
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 text-balance">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Booking a luxury chauffeur vehicle or self-drive rental is streamlined from first enquiry to journey completion.
          </p>
        </div>

        {/* 4 Steps with connecting lines */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-[2px] bg-gradient-to-r from-transparent via-[#FACC15]/40 to-transparent -translate-y-8 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#2A0307] to-[#150103] border border-[#FACC15]/25 hover:border-[#FACC15]/60 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif-brand text-2xl font-extrabold text-[#FACC15]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#44050B] border border-[#FACC15]/30 flex items-center justify-center group-hover:scale-105 transition-all shadow">
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FACC15] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#FACC15]/15 flex items-center gap-1.5 text-[11px] text-[#FACC15] font-bold">
                  <span>Fast Coordination</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartProcess}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black font-bold uppercase tracking-wider text-xs hover:brightness-110 shadow-lg transition-all inline-flex items-center gap-2 active:scale-95"
          >
            <span>Start Your Booking Process</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
