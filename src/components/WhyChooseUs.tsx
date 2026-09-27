import React from 'react';
import {
  Car,
  UserCheck,
  Compass,
  MapPin,
  Smile,
  ShieldAlert,
  FileCheck2,
  Layers,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/fleetData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Car className="w-5 h-5 text-[#FACC15]" />;
      case 1:
        return <UserCheck className="w-5 h-5 text-[#FACC15]" />;
      case 2:
        return <Compass className="w-5 h-5 text-[#FACC15]" />;
      case 3:
        return <MapPin className="w-5 h-5 text-[#FACC15]" />;
      case 4:
        return <Smile className="w-5 h-5 text-[#FACC15]" />;
      case 5:
        return <ShieldAlert className="w-5 h-5 text-[#FACC15]" />;
      case 6:
        return <FileCheck2 className="w-5 h-5 text-[#FACC15]" />;
      case 7:
        return <Layers className="w-5 h-5 text-[#FACC15]" />;
      default:
        return <Car className="w-5 h-5 text-[#FACC15]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#FACC15] font-bold">
            Quality Assurance &amp; Standards
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 text-balance">
            Why Choose Al Saif?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Our commitment is built on vehicle excellence, trained chauffeurs, transparent communication, and distinct operational boundaries.
          </p>
        </div>

        {/* 8 Authentic Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#2A0307] to-[#150103] border border-[#FACC15]/25 hover:border-[#FACC15]/60 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#44050B] border border-[#FACC15]/30 flex items-center justify-center mb-4 shadow">
                  {getIcon(idx)}
                </div>

                <h3 className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#FACC15]/15 text-[10px] text-amber-200/70 uppercase tracking-widest font-semibold">
                Al Saif Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
