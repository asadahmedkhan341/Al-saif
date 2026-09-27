import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';
import { showroomBg } from '../assets/images';

interface HeroProps {
  onExploreClick?: () => void;
  onBookClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center pt-28 sm:pt-32 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* ========================================================
          BACKGROUND: Luxury Automotive Showroom with Cinematic Scrim
      ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Luxury Showroom Photography Background */}
        <img
          src={showroomBg}
          alt="Al Saif Luxury Automotive Showroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Cinematic Scrim in Al Saif Deep Maroon & Obsidian for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#160103]/90 via-[#100102]/88 to-[#0B0002]/98" />

        {/* Ambient Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,2,6,0.45)_0%,rgba(11,0,2,0.92)_80%)]" />

        {/* Ceiling Warm Golden Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[radial-gradient(circle,rgba(250,204,21,0.14)_0%,rgba(163,18,29,0.18)_50%,transparent_75%)] blur-[90px] pointer-events-none" />

        {/* Bottom smooth fade to next section */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#110103] to-transparent pointer-events-none" />

        {/* Subtle geometric dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FACC15 1px, transparent 0)`,
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* ========================================================
            HERO HEADER: Center Aligned
        ======================================================== */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
          {/* Top Badge: Al Saif Transport & Rent A Car */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B0409]/85 border border-[#FACC15]/40 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#FACC15] tracking-wider uppercase">
              Al Saif Transport &amp; Rent A Car
            </span>
          </div>

          {/* Main Headline: Modern, Large, Clean Plus Jakarta Sans, Center Aligned */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            Luxury Travel.{' '}
            <span className="block sm:inline bg-gradient-to-r from-[#FFFBE8] via-[#FACC15] to-[#EAB308] bg-clip-text text-transparent">
              Professional Service.
            </span>
          </h1>

          {/* Supporting Text: Center Aligned */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Premium chauffeur-driven vehicles across Pakistan and reliable self-drive car rentals in Karachi. Transparent service with immediate phone &amp; WhatsApp dispatch.
          </p>

          {/* Service Scope Badges: Centered */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs sm:text-sm text-neutral-200 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 border border-[#FACC15]/30 text-white backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
              <span className="font-semibold">With Driver — All Pakistan</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 border border-[#FACC15]/30 text-white backdrop-blur-md shadow-sm">
              <MapPin className="w-4 h-4 text-[#FACC15]" />
              <span className="font-semibold">Self Drive — Karachi Only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
