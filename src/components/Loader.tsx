import React, { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';

interface LoaderProps {
  onFinish: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    const duration = 2100; // ~2.1s cinematic experience
    const intervalTime = 25;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            onFinish();
          }, 400); // smooth exit
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      onFinish();
    }, 150);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#4A050A] via-[#2A0205] to-[#120103] text-white transition-opacity duration-500 overflow-hidden ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Al Saif Transport & Rent A Car"
    >
      {/* Background ambient lighting in brochure maroon & gold */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(168,19,33,0.35),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#8B0000]/25 to-transparent pointer-events-none" />

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-xs tracking-widest uppercase text-amber-200/80 hover:text-[#FACC15] transition-colors py-1.5 px-3 border border-[#FACC15]/30 rounded bg-[#4A050A]/70 backdrop-blur z-20 shadow-md"
      >
        Skip Intro
      </button>

      {/* Brochure Brand Identity: Car Silhouette Outline + Arabic "السيف" + Brand Name */}
      <div className="flex flex-col items-center mb-6 relative z-10 scale-90 sm:scale-100 transition-transform">
        <BrandLogo variant="full" />
      </div>

      {/* Cinematic Vehicle Animation Area */}
      <div className="relative w-full max-w-md h-36 flex flex-col items-center justify-end px-2 sm:px-4 scale-[0.85] sm:scale-100 origin-bottom transition-transform">
        {/* Headlight beam streaking forward to the right in warm gold */}
        <div className="absolute right-12 bottom-9 w-48 h-14 bg-gradient-to-r from-[#FFFBE8]/50 via-[#FACC15]/20 to-transparent blur-sm transform -rotate-2 pointer-events-none animate-headlight origin-left" />

        {/* Ambient light streak across car body */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-24 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
        </div>

        {/* The Luxury Car Silhouette with Floating Suspension */}
        <div className="relative w-80 h-28 animate-car-float">
          {/* Car Body SVG Profile in deep crimson metallic coat */}
          <svg
            viewBox="0 0 320 100"
            className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Aerodynamic roofline & cabin glass */}
            <path
              d="M75 52 L110 26 C120 23, 190 23, 215 30 L250 52 Z"
              fill="#1A0306"
              stroke="#FACC15"
              strokeWidth="0.8"
              opacity="0.85"
            />
            {/* Window divider pillars */}
            <path d="M145 25 L145 52 M190 26 L190 52" stroke="#0F0103" strokeWidth="2.5" />

            {/* Main Luxury Car Body contour in deep metallic red/maroon */}
            <path
              d="M18 64 C22 55, 35 52, 60 52 L80 50 L115 25 C125 22, 195 22, 220 28 L256 50 L295 53 C306 56, 312 62, 312 70 C312 73, 308 77, 298 77 L272 77 C270 65, 258 56, 244 56 C230 56, 218 65, 216 77 L106 77 C104 65, 92 56, 78 56 C64 56, 52 65, 50 77 L24 77 C18 77, 14 72, 18 64 Z"
              fill="url(#carBodyGradientMaroon)"
              stroke="#FACC15"
              strokeWidth="1.2"
            />

            {/* Chrome body highlight crease */}
            <path
              d="M45 61 L285 61"
              stroke="rgba(255, 255, 255, 0.65)"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Front Headlight (illuminated bright golden/white) */}
            <path
              d="M292 55 L310 59 L298 65 Z"
              fill="#FFFBE8"
              className="drop-shadow-[0_0_10px_#FACC15]"
            />

            {/* Rear Taillight */}
            <path
              d="M18 57 L30 58 L26 64 Z"
              fill="#EF4444"
              className="drop-shadow-[0_0_8px_#DC2626]"
            />

            {/* Door seam lines */}
            <path d="M130 52 L128 76 M188 52 L186 76" stroke="rgba(250, 204, 21, 0.4)" strokeWidth="1" />

            <defs>
              <linearGradient id="carBodyGradientMaroon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A81321" />
                <stop offset="45%" stopColor="#69060F" />
                <stop offset="100%" stopColor="#2E0105" />
              </linearGradient>
            </defs>
          </svg>

          {/* FRONT ROTATING WHEEL WITH GOLD ACCENTS */}
          <div
            className="absolute right-[56px] bottom-[2px] w-[44px] h-[44px] rounded-full border-2 border-black bg-[#150204] flex items-center justify-center shadow-lg"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="w-full h-full animate-spin-wheel flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#570910] opacity-80" />
              <div className="w-7 h-7 rounded-full border border-[#FACC15] flex items-center justify-center bg-[#2B0307]">
                <div className="absolute w-6 h-[1.5px] bg-[#FACC15]" />
                <div className="absolute h-6 w-[1.5px] bg-[#FACC15]" />
                <div className="absolute w-6 h-[1.5px] bg-[#FACC15] rotate-45" />
                <div className="absolute w-6 h-[1.5px] bg-[#FACC15] -rotate-45" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FACC15] z-10 border border-black shadow" />
              </div>
            </div>
          </div>

          {/* REAR ROTATING WHEEL WITH GOLD ACCENTS */}
          <div
            className="absolute left-[58px] bottom-[2px] w-[44px] h-[44px] rounded-full border-2 border-black bg-[#150204] flex items-center justify-center shadow-lg"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="w-full h-full animate-spin-wheel flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#570910] opacity-80" />
              <div className="w-7 h-7 rounded-full border border-[#FACC15] flex items-center justify-center bg-[#2B0307]">
                <div className="absolute w-6 h-[1.5px] bg-[#FACC15]" />
                <div className="absolute h-6 w-[1.5px] bg-[#FACC15]" />
                <div className="absolute w-6 h-[1.5px] bg-[#FACC15] rotate-45" />
                <div className="absolute w-6 h-[1.5px] bg-[#FACC15] -rotate-45" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FACC15] z-10 border border-black shadow" />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Moving Road / Ground Effect */}
        <div className="w-full relative h-4 overflow-hidden -mt-1 border-t border-[#7F0E17]/60">
          <div className="w-[200%] h-full flex items-center animate-road-move">
            <div className="w-1/2 flex items-center justify-between px-2">
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
            </div>
            <div className="w-1/2 flex items-center justify-between px-2">
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
              <span className="w-8 h-[2px] bg-[#FACC15]/70 rounded-full inline-block" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar & Percentage in Gold & Crimson */}
      <div className="w-64 max-w-[85vw] mt-7 flex flex-col items-center">
        <div className="w-full h-1.5 bg-[#2E0206] rounded-full overflow-hidden border border-[#7F0E17]/50">
          <div
            className="h-full bg-gradient-to-r from-[#8B0000] via-[#FACC15] to-[#FEF08A] transition-all duration-75 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.7)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex items-center justify-between w-full mt-2 text-xs text-amber-200/70">
          <span className="tracking-widest uppercase font-mono text-[10px]">Loading Fleet</span>
          <span className="font-mono text-[#FACC15] font-bold tabular-nums">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Service Rule Badges at Bottom */}
      <div className="absolute bottom-5 text-center text-[11px] text-amber-100/60 tracking-wider px-4 max-w-full flex flex-wrap justify-center items-center gap-1.5">
        <span className="text-[#FACC15]">With Driver: All Pakistan</span>
        <span className="text-red-500/60">·</span>
        <span className="text-white">Self Drive: Karachi Only</span>
        <span className="text-red-500/60">·</span>
        <span className="text-[#FACC15] amount-on-call-price">Amount on Call</span>
      </div>
    </div>
  );
};
