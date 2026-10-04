import React from 'react';

// Exact connected Arabic vector path for 'السيف' (Right-to-Left: Alef, Lam, Seen, Yeh, Feh)
// Extracted with 100% geometric accuracy from Noto Naskh Arabic
const AL_SAIF_ARABIC_PATH = "M67.50 80Q54.90 80 48.60 75.75Q42.30 71.50 42.30 63Q42.30 59.80 42.65 57.10Q43 54.40 43.70 52L47.30 52Q47.10 53.20 47 54.45Q46.90 55.70 46.90 56.90Q46.90 63 49.15 66.05Q51.40 69.10 56.40 70.80Q59 71.50 62.30 71.95Q65.60 72.40 69.70 72.40Q72.90 72.40 75.95 72.20Q79 72 81.90 71.60Q84.80 71.20 87.60 70.70Q83.60 66.50 83.60 61.70Q83.60 60.20 83.90 58.05Q84.20 55.90 84.60 53.95Q85 52 85.40 51.30Q87.20 48.10 89.65 45.75Q92.10 43.40 95.05 42.15Q98 40.90 101.20 40.90Q103.80 40.90 106.25 43.50Q108.70 46.10 110.20 50.30Q111.70 54.60 111.70 58.90Q111.70 66.20 105.90 71.30Q108.80 71.80 111.90 72.10Q115 72.40 118.10 72.40Q118.90 72.40 118.90 73.20L118.90 79.20Q118.90 80 118.10 80Q105.60 80 97.60 76Q94.30 77.20 89.65 78.10Q85 79 79.40 79.50Q73.80 80 67.50 80M96.60 68.10Q103.80 65.40 107.80 61.90Q107.50 59.40 106.25 56.55Q105 53.70 103.20 51.60Q101.40 49.40 100.30 49.40Q98.40 49.40 96 51Q93.60 52.60 91.30 55.15Q89 57.70 87.40 60.80Q89.40 63.10 91.70 64.95Q94 66.80 96.60 68.10M98.80 36Q94.40 32.70 91.60 29.50Q94.20 26.90 95.90 25.10Q97.60 23.30 98.60 22.20Q100.20 23.90 101.85 25.55Q103.50 27.20 105.20 28.70Q104.10 30.30 102.45 32.15Q100.80 34 98.80 36 M117.20 80Q116.40 80 116.40 79.20L116.40 73.20Q116.40 72.40 117.20 72.40Q123.40 72.40 127.70 71.85Q132 71.30 133.80 70Q134.90 69.30 136.40 66.85Q137.90 64.40 140.80 58.90Q141.30 58.10 142.05 57.65Q142.80 57.20 143.90 57.20Q145.10 57.20 146.40 58Q145.80 59.50 144.75 61.85Q143.70 64.20 142.80 66.20Q141.90 68.20 141.50 68.60Q144.90 70.70 147.80 71.55Q150.70 72.40 154.10 72.40Q154.90 72.40 154.90 73.20L154.90 79.20Q154.90 80 154.10 80Q144.80 80 138.30 74.20L136.70 76.30Q136 77 132.85 77.90Q129.70 78.80 125.45 79.40Q121.20 80 117.20 80M144.30 98.30Q142.10 96.60 140.45 95.05Q138.80 93.50 137.70 92.10Q138.20 91.60 139.80 89.90Q141.40 88.20 144.10 85.40Q144.70 86 146.25 87.50Q147.80 89 150.30 91.40Q148.40 94.40 144.30 98.30M129.30 99.70Q127.10 97.90 125.40 96.35Q123.70 94.80 122.60 93.60Q124 92.30 125.60 90.65Q127.20 89 129.10 86.80Q129.70 87.50 131.20 89Q132.70 90.50 135.20 92.80Q134.30 94.30 132.80 96Q131.30 97.70 129.30 99.70 M175.80 80Q173 80 169.30 79.10Q165.60 78.20 163.60 76.90Q162.20 78.30 159.40 79.15Q156.60 80 153.20 80Q152.40 80 152.40 79.20L152.40 73.20Q152.40 72.40 153.20 72.40Q156 72.40 157.85 71.90Q159.70 71.40 161.30 70.10Q163 68.70 163.85 67.35Q164.70 66 166.60 62.90Q167.10 62.10 167.85 61.70Q168.60 61.30 169.70 61.30Q171.10 61.30 172.10 62Q170.60 65.80 169.55 68.05Q168.50 70.30 168 71.10Q168.80 71.50 171.25 71.95Q173.70 72.40 176.90 72.40Q179.20 72.40 181.15 72.10Q183.10 71.80 184.70 71.40Q185.40 70.30 186.25 67.60Q187.10 64.90 188 62.10Q188.90 59.30 189.50 58Q190.40 56 191.20 55.40Q192 54.80 193.50 54.80Q194.90 54.80 195.90 55.50Q195.20 57.10 193.95 60.70Q192.70 64.30 190.70 70.90Q192.20 71.60 193.30 71.85Q194.40 72.10 196 72.10Q198.60 72.10 201.50 71.10Q202 70.50 202.70 68.70Q203.40 66.90 204.40 63.90Q205.20 61.40 206.10 59.20Q207 57 207.90 55.50Q208.30 54.70 209.10 54.35Q209.90 54 211 54Q212.40 54 213.40 54.70Q212.70 56.30 211.45 59.85Q210.20 63.40 208.40 68.90Q211.90 70.80 214.40 71.60Q216.90 72.40 220.30 72.40Q221.20 72.40 221.20 73.20L221.20 79.20Q221.20 80 220.30 80Q216.40 80 212.55 78.50Q208.70 77 206.10 74.60Q205.80 75.30 205.50 75.95Q205.20 76.60 204.70 77.30Q204 78.50 201.30 79.25Q198.60 80 195.90 80Q191.30 80 187.90 77.50Q187.20 78.40 185.10 78.95Q183 79.50 180.45 79.70Q177.90 79.90 175.80 80 M219.40 80Q218.50 80 218.50 79.20L218.50 73.20Q218.50 72.40 219.40 72.40Q225.40 72.40 230.50 69.70Q230.20 65.90 229.90 62.20Q229.60 58.50 229.30 54.90Q228.40 45.50 227.50 36.40Q226.60 27.30 225.50 18.50Q226.90 17 228.55 15.60Q230.20 14.20 232.10 12.90Q232.40 18.30 232.80 25.35Q233.20 32.40 233.80 41.20Q234.30 48.50 234.50 54.85Q234.70 61.20 234.80 66.50Q234.80 68.20 233.80 71.05Q232.80 73.90 231.30 76.50Q230.40 78.20 227.40 79.10Q224.40 80 219.40 80 M255.70 79.20L251.10 80Q251 71.20 250.75 63.20Q250.50 55.20 250.15 47.90Q249.80 40.60 249.40 34.10Q249 27.60 248.40 21.80Q248.20 19.10 248.75 17.30Q249.30 15.50 250.85 14.45Q252.40 13.40 255 12.90Q255.40 14.80 256.35 18.05Q257.30 21.30 258.50 24.80L255.80 27.10Q256.20 34.50 256.35 42.30Q256.50 50.10 256.35 59.10Q256.20 68.10 255.70 79.20";

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

  // Pure Vector Arabic Calligraphy 'السيف' (connected Right-to-Left) in Metallic Gold
  const ArabicScript = () => (
    <div className="flex items-center justify-center -mt-2 sm:-mt-3 select-none" dir="rtl">
      <svg
        viewBox="0 0 300 100"
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
        <path
          d={AL_SAIF_ARABIC_PATH}
          fill="#FACC15"
          stroke="#CA8A04"
          strokeWidth="1.2"
          filter="url(#arabicGoldGlowFull)"
        />
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
          viewBox="0 0 300 100"
          className="w-20 h-6 -mt-1 overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="السيف"
        >
          <path
            d={AL_SAIF_ARABIC_PATH}
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="0.8"
          />
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
            viewBox="0 0 300 100"
            className="w-24 sm:w-32 h-6 sm:h-7 -mt-1 sm:-mt-1.5 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="السيف"
          >
            <defs>
              <filter id="arabicGoldGlowHoriz" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.9" />
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#CA8A04" floodOpacity="0.5" />
              </filter>
            </defs>
            <path
              d={AL_SAIF_ARABIC_PATH}
              fill="#FACC15"
              stroke="#CA8A04"
              strokeWidth="0.8"
              filter="url(#arabicGoldGlowHoriz)"
            />
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
