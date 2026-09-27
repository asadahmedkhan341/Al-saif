import React, { useState, useEffect } from 'react';
import { ArrowUp, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/fleetData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWhatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(
    'Hello Al Saif Transport & Rent A Car, I would like to enquire about vehicle rental availability.'
  )}`;

  return (
    <>
      {/* Floating Action Buttons Container (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="pointer-events-auto p-3 rounded-full bg-[#3B050B]/90 hover:bg-[#52070E] text-[#FACC15] hover:text-white border border-[#FACC15]/30 shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        )}

        {/* Quick WhatsApp Tooltip / Bubble */}
        {showChatPopup && (
          <div className="pointer-events-auto w-72 p-4 rounded-2xl bg-gradient-to-b from-[#2C0307] to-[#150103] border border-[#FACC15]/40 shadow-2xl space-y-3 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-[#FACC15]/20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-white">Al Saif Dispatch 24/7</span>
              </div>
              <button
                onClick={() => setShowChatPopup(false)}
                className="text-amber-200 hover:text-white"
                aria-label="Close chat bubble"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-neutral-200 leading-relaxed">
              Need instant rates or vehicle availability across Pakistan? Connect directly on WhatsApp.
            </p>
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow hover:brightness-105 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-black" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        )}

        {/* Floating WhatsApp Action Button with Slow Gentle Pop Animation */}
        <div className="relative group">
          {/* Animated slow gentle radar wave */}
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-35 animate-whatsapp-ping pointer-events-none" />

          <a
            href={defaultWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Al Saif Transport on WhatsApp"
            className="relative pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.55)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.75)] animate-whatsapp-pop hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>
    </>
  );
};
