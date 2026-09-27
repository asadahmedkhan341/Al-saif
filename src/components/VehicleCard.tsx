import React from 'react';
import { Shield, MapPin, Users, Gauge, Wind, Check } from 'lucide-react';
import { Vehicle, COMPANY_INFO } from '../data/fleetData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect?: (vehicle: Vehicle) => void;
  onBookDirect?: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect, onBookDirect }) => {
  const isLuxury = vehicle.category === 'luxury';
  const isSelfDrive = vehicle.category === 'self-drive';
  const isBus = vehicle.category === 'bus-transport';

  const whatsappMessage = `Hello Al Saif Transport & Rent A Car, I am interested in the ${vehicle.name}. Please share availability and quotation.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="group rounded-2xl bg-gradient-to-b from-[#2A0307] to-[#140103] border border-[#FACC15]/25 hover:border-[#FACC15]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.85)] hover:-translate-y-1">
      {/* Vehicle Media Header */}
      <div 
        onClick={() => onSelect?.(vehicle)}
        className="relative aspect-[16/10] overflow-hidden bg-[#1D0205] cursor-pointer"
        title={`View details for ${vehicle.name}`}
      >
        <img
          src={vehicle.image}
          alt={vehicle.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Contrast Scrim with maroon undertone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140103] via-transparent to-black/35" />

        {/* Badge in Corner */}
        <div className="absolute top-3 left-3 bg-[#380409]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#FACC15]/30 text-[11px] font-bold tracking-wide shadow">
          {isLuxury && (
            <span className="text-[#FACC15] flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#FACC15]" />
              Luxury Chauffeur
            </span>
          )}
          {isSelfDrive && (
            <span className="text-white flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FACC15]" />
              Self Drive
            </span>
          )}
          {isBus && (
            <span className="text-amber-200 flex items-center gap-1">
              <Users className="w-3 h-3 text-[#FACC15]" />
              Group Transport
            </span>
          )}
        </div>

        {/* Coverage Tag */}
        <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold tracking-tight text-amber-200 drop-shadow">
          {isLuxury && 'With Driver (All Pakistan)'}
          {isSelfDrive && 'Karachi Only (Self)'}
          {isBus && 'With Driver (Intercity & Nationwide)'}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Vehicle Name and Type */}
          <div className="mb-2">
            <span className="text-[10px] tracking-wider uppercase text-amber-200/80 font-bold">
              {vehicle.vehicleType}
            </span>
            <h3 
              onClick={() => onSelect?.(vehicle)}
              className="font-display text-lg font-bold text-white group-hover:text-[#FACC15] transition-colors leading-snug cursor-pointer"
              title={`View details for ${vehicle.name}`}
            >
              {vehicle.name}
            </h3>
          </div>

          <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
            {vehicle.description}
          </p>

          {/* Genuine Specs List (only non-fabricated data) */}
          <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-[#FACC15]/15 text-neutral-200 mb-4">
            {vehicle.seatingCapacity && (
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                <span>{vehicle.seatingCapacity}</span>
              </div>
            )}
            {vehicle.transmission && (
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                <span>{vehicle.transmission}</span>
              </div>
            )}
            {vehicle.acStatus && (
              <div className="flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                <span>{vehicle.acStatus}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
              <span>Verified Fleet</span>
            </div>
          </div>
        </div>

        {/* Footer Area: Pricing + Centered WhatsApp CTA */}
        <div className="pt-2 space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] text-amber-200/70 uppercase tracking-wider font-semibold">Pricing</span>
            <span className="font-mono text-sm font-bold text-[#FACC15] tracking-wider uppercase">
              {vehicle.pricing}
            </span>
          </div>

          {/* Centered Small WhatsApp CTA */}
          <div className="flex justify-center w-full pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs transition-all duration-200 shadow-[0_2px_10px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
              title={`WhatsApp enquiry for ${vehicle.name}`}
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-black shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
