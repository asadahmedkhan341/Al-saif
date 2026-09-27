import React from 'react';
import {
  Crown,
  KeyRound,
  PlaneTakeoff,
  Briefcase,
  HeartHandshake,
  Users,
  Compass,
  Bus,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/fleetData';

interface ServicesSectionProps {
  onEnquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#FACC15]" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-[#FDE047]" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-5 h-5 text-[#FACC15]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#FACC15]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-300" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#FACC15]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-300" />;
      case 'Bus':
        return <Bus className="w-5 h-5 text-[#FACC15]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#FACC15]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#FACC15]" />;
      default:
        return <Crown className="w-5 h-5 text-[#FACC15]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#1E0205] via-[#140103] to-[#1C0205] border-t border-[#FACC15]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#FACC15] font-bold">
            Comprehensive Transportation
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 text-balance">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Tailored automotive and chauffeur services designed for corporate executives, intercity travelers, families, and private functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#2A0307] to-[#150103] border border-[#FACC15]/25 hover:border-[#FACC15]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#44050B] border border-[#FACC15]/30 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#5C0810] transition-all shadow-md">
                  {getIcon(service.iconName)}
                </div>

                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FACC15] block">
                    {service.coverage}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FACC15] transition-colors mt-0.5">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#FACC15]/15 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#FACC15] uppercase tracking-wider">
                  Amount on Call
                </span>

                <button
                  onClick={() => onEnquireService(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#FACC15] transition-colors"
                >
                  <span>Enquire Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
