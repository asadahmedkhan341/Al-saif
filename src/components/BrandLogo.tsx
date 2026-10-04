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

  // Arabic Calligraphy "السيف" in Vibrant Metallic Gold as shown in the brochure
  const ArabicScript = () => (
    <div className="flex items-center justify-center -mt-2 sm:-mt-3 select-none" dir="rtl">
      <span
        dir="rtl"
        className="font-arabic font-extrabold tracking-normal text-4xl sm:text-5xl text-[#FACC15] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] filter"
        style={{
          fontFamily: "'Amiri', 'Noto Naskh Arabic', serif",
          textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 0 18px rgba(250,204,21,0.5)',
          WebkitTextStroke: '0.45px #CA8A04',
        }}
      >
        السيف
      </span>
    </div>
  );

  if (variant === 'symbol') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="w-24">
          <CarEmblem />
        </div>
        <span dir="rtl" className="font-arabic font-bold text-2xl text-[#FACC15] -mt-1.5 tracking-normal">السيف</span>
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
          <span
            dir="rtl"
            className="font-arabic font-extrabold text-base sm:text-lg md:text-xl text-[#FACC15] leading-none -mt-1 sm:-mt-1.5 tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            style={{
              fontFamily: "'Amiri', 'Noto Naskh Arabic', serif",
              textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 0 14px rgba(250,204,21,0.6)',
              WebkitTextStroke: '0.35px #CA8A04',
            }}
          >
            السيف
          </span>
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
