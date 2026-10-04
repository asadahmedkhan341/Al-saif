import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'compact' | 'symbol';
  lightMode?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  lightMode = false,
}) => {
  // SVG of the aerodynamic luxury car silhouette outline from the brochure
  const CarEmblem = ({ width = '100%', height = 'auto' }: { width?: string; height?: string }) => (
    <svg
      viewBox="0 20 540 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[340px] drop-shadow-md mx-auto"
      style={{ width, height }}
      aria-label="Al Saif Emblem"
    >
      {/* Dynamic Upper Aerodynamic Roof & Hood Silhouette */}
      <path
        d="M20 105 C75 90, 125 58, 175 42 C240 22, 330 22, 400 52 C450 72, 495 90, 520 95 C510 92, 470 78, 420 62 C350 40, 270 38, 200 52 C150 64, 90 92, 35 108 Z"
        fill="#FFFFFF"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
      />
      
      {/* Front Hood & Fender Blade */}
      <path
        d="M125 112 C135 95, 150 78, 175 70 C165 74, 152 82, 140 102 C134 110, 128 112, 125 112 Z"
        fill="#FFFFFF"
      />

      {/* Aerodynamic Speed Curves & Midline Streak */}
      <path
        d="M185 64 C245 42, 320 42, 385 62 C340 50, 255 49, 195 66 Z"
        fill="#FACC15"
      />

      {/* Rear Spoiler / Tail Line */}
      <path
        d="M120 72 C95 82, 70 95, 45 106 C70 98, 98 86, 125 76 Z"
        fill="#FACC15"
      />

      {/* Sleek Lower Accent Streak */}
      <path
        d="M210 74 C280 62, 345 66, 395 80 C345 71, 275 69, 215 78 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
    </svg>
  );

  // SVG text element with proper RTL Arabic rendering of "السيف" in Vibrant Metallic Gold
  const ArabicScript = () => (
    <div className="flex items-center justify-center -mt-2 sm:-mt-3 select-none" dir="rtl">
      <svg
        viewBox="0 0 200 56"
        className="w-44 sm:w-56 h-12 sm:h-14 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="السيف"
      >
        <defs>
          <filter id="arabicGoldGlowFull" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#CA8A04" floodOpacity="0.5" />
          </filter>
        </defs>
        <text
          x="50%"
          y="42"
          textAnchor="middle"
          direction="rtl"
          unicodeBidi="bidi-override"
          xmlLang="ar"
          fill="#FACC15"
          stroke="#CA8A04"
          strokeWidth="0.45"
          filter="url(#arabicGoldGlowFull)"
          style={{
            fontFamily: "'Noto Naskh Arabic', 'Noto Sans Arabic', 'Amiri', serif",
            fontWeight: 800,
            fontSize: '44px',
            direction: 'rtl',
            letterSpacing: '0px',
          }}
        >
          السيف
        </text>
      </svg>
    </div>
  );

  if (variant === 'symbol') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="w-24">
          <CarEmblem />
        </div>
        <svg
          viewBox="0 0 120 32"
          className="w-20 h-6 -mt-1 overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="السيف"
        >
          <text
            x="50%"
            y="24"
            textAnchor="middle"
            direction="rtl"
            unicodeBidi="bidi-override"
            xmlLang="ar"
            fill="#FACC15"
            style={{
              fontFamily: "'Noto Naskh Arabic', 'Noto Sans Arabic', 'Amiri', serif",
              fontWeight: 800,
              fontSize: '22px',
              direction: 'rtl',
              letterSpacing: '0px',
            }}
          >
            السيف
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center ${className}`}>
        {/* Transparent Brand Logo: Aerodynamic Car Silhouette + Gold Arabic Calligraphy 'السيف' */}
        <div className="relative flex flex-col items-center justify-center bg-transparent group select-none" dir="rtl">
          <div className="w-28 sm:w-36 h-auto transition-transform duration-200 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            <CarEmblem />
          </div>
          <svg
            viewBox="0 0 140 32"
            className="w-28 sm:w-36 h-6 sm:h-7 -mt-1 sm:-mt-1.5 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="السيف"
          >
            <defs>
              <filter id="arabicGoldGlowHoriz" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.9" />
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#CA8A04" floodOpacity="0.5" />
              </filter>
            </defs>
            <text
              x="50%"
              y="24"
              textAnchor="middle"
              direction="rtl"
              unicodeBidi="bidi-override"
              xmlLang="ar"
              fill="#FACC15"
              stroke="#CA8A04"
              strokeWidth="0.35"
              filter="url(#arabicGoldGlowHoriz)"
              style={{
                fontFamily: "'Noto Naskh Arabic', 'Noto Sans Arabic', 'Amiri', serif",
                fontWeight: 800,
                fontSize: '22px',
                direction: 'rtl',
                letterSpacing: '0px',
              }}
            >
              السيف
            </text>
          </svg>
        </div>
      </div>
    );
  }

  // Full brochure-authentic banner layout
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Top Silhouette Emblem */}
      <div className="w-full max-w-[280px] sm:max-w-[340px]">
        <CarEmblem />
      </div>

      {/* Gold Arabic Name: السيف */}
      <ArabicScript />

      {/* Brand Title: AL SAIF TRANSPORT & RENT A CAR */}
      <h1
        className="font-extrabold italic uppercase tracking-wider text-base sm:text-lg md:text-xl text-white mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
        style={{
          textShadow: '0 2px 5px rgba(0,0,0,0.9), 0 0 10px rgba(139,0,0,0.8)',
          letterSpacing: '0.04em',
        }}
      >
        AL SAIF TRANSPORT & RENT A CAR
      </h1>

      <p className="text-[11px] sm:text-xs text-amber-200/90 font-medium tracking-wide mt-0.5">
        Liaquatabad, Karachi • All Pakistan Service
      </p>
    </div>
  );
};
