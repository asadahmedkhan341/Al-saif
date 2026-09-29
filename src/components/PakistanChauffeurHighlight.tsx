import React from 'react';
import { ShieldCheck, MapPin, Compass, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY_INFO, getFleetImageUrl } from '../data/fleetData';

export const PakistanChauffeurHighlight: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  return (
    <section id="chauffeur" className="py-20 relative overflow-hidden">
      {/* Background illumination in crimson maroon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#991B1B]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#380409] via-[#240306] to-[#120103] border border-[#FACC15]/35 p-5 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Left Column: Pakistan-Wide Chauffeur Service */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FACC15]">
                <Compass className="w-4 h-4 text-[#FACC15]" />
                <span>Nationwide Operational Reach</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Pakistan-Wide Luxury Chauffeur Service
              </h2>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                Whether you need intercity executive travel from Karachi to Hyderabad, Sukkur, Lahore, or Islamabad, or protocol escort for dignitaries, our chauffeur-driven luxury fleet—featuring Toyota Land Cruiser LC 300, LC 200, Prado TZ, and Revo Rocco—is ready for nationwide deployment.
              </p>

              {/* Service Rule Contrast Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#4A060C] border border-[#FACC15]/40 shadow-sm">
                  <div className="flex items-center gap-2 text-[#FACC15] font-bold text-xs uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                    <span>With Driver</span>
                  </div>
                  <h4 className="text-white font-bold text-sm">All Pakistan Travel</h4>
                  <p className="text-xs text-amber-100/80 mt-1">
                    Available for all cities, motorways, highways, business delegations, and intercity family routes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#4A060C] border border-[#FACC15]/40 shadow-sm">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4 text-[#FACC15]" />
                    <span>Self Drive</span>
                  </div>
                  <h4 className="text-white font-bold text-sm">Karachi Only</h4>
                  <p className="text-xs text-amber-100/80 mt-1">
                    Without driver rentals are strictly limited to Karachi municipal city limits for verified local clients.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <button
                  onClick={onBookNow}
                  className="w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black font-bold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-md active:scale-95 text-center flex items-center justify-center"
                >
                  Schedule Chauffeur Journey
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(
                    'Hello Al Saif Transport & Rent A Car, I am interested in intercity chauffeur service across Pakistan. Please provide details.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-black" />
                  <span>WhatsApp Coordination</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-bold text-amber-200 hover:text-white flex items-center justify-center gap-2 transition-colors border border-[#FACC15]/20 sm:border-transparent rounded-xl"
                >
                  <Phone className="w-4 h-4 text-[#FACC15]" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#FACC15]/30 shadow-2xl relative aspect-[4/3] bg-[#220205]">
                {/* On mobile (< 768px): Showroom image. On desktop (>= 768px): existing desktop image LC_300.jpg */}
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={getFleetImageUrl('Showroom image', 'Showroom.jpg')}
                  />
                  <img
                    src={getFleetImageUrl('With Driver', 'LC_300.jpg')}
                    alt="Al Saif Chauffeur Long Distance Pakistan Fleet"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
