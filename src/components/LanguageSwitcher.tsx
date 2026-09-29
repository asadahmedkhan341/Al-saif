import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'pill' | 'toggle' | 'mobile';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', variant = 'pill' }) => {
  const { lang, setLang, toggleLang, isUrdu } = useLanguage();

  if (variant === 'toggle') {
    return (
      <button
        onClick={toggleLang}
        type="button"
        title={isUrdu ? 'Switch to English' : 'اردو میں تبدیل کریں'}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#FACC15]/40 bg-[#250306] hover:bg-[#3B050B] text-xs font-bold transition-all shadow-sm group ${className}`}
        aria-label={isUrdu ? 'Switch to English' : 'Switch to Urdu'}
      >
        <Languages className="w-3.5 h-3.5 text-[#FACC15] group-hover:rotate-12 transition-transform" />
        <span className={isUrdu ? 'text-[#FACC15]' : 'text-neutral-200'}>
          {isUrdu ? 'English' : 'اردو'}
        </span>
      </button>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-2 rounded-xl bg-[#200205] border border-[#FACC15]/30 ${className}`}>
        <div className="flex items-center gap-2 px-2 text-xs font-bold text-amber-200">
          <Languages className="w-4 h-4 text-[#FACC15]" />
          <span>Language / زبان:</span>
        </div>
        <div className="flex items-center p-0.5 rounded-lg bg-[#140103] border border-[#FACC15]/20">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
              lang === 'en'
                ? 'bg-[#FACC15] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang('ur')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all font-arabic ${
              lang === 'ur'
                ? 'bg-[#FACC15] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            اردو
          </button>
        </div>
      </div>
    );
  }

  // Default dual pill switcher
  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-xl bg-[#1C0205] border border-[#FACC15]/35 shadow-inner ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wider transition-all duration-200 flex items-center gap-1 ${
          lang === 'en'
            ? 'bg-[#FACC15] text-black font-extrabold shadow-sm'
            : 'text-amber-200/70 hover:text-white hover:bg-white/5'
        }`}
        title="Switch to English"
      >
        <span>EN</span>
      </button>
      <button
        type="button"
        onClick={() => setLang('ur')}
        className={`px-2.5 py-1 rounded-lg text-[12px] font-bold font-arabic transition-all duration-200 flex items-center gap-1 ${
          lang === 'ur'
            ? 'bg-[#FACC15] text-black font-extrabold shadow-sm'
            : 'text-amber-200/70 hover:text-white hover:bg-white/5'
        }`}
        title="اردو زبان میں تبدیل کریں"
      >
        <span>اردو</span>
      </button>
    </div>
  );
};
