import React from 'react';
import { X, Phone, ShieldCheck, MapPin, Users, Gauge, Wind, Calendar, Check, ArrowRight } from 'lucide-react';
import { Vehicle, COMPANY_INFO } from '../data/fleetData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onBookNow: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({ vehicle, onClose, onBookNow }) => {
  if (!vehicle) return null;

  const whatsappMessage = `Hello Al Saif Transport & Rent A Car, I am interested in the ${vehicle.name}. Please share availability and quotation.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-gradient-to-b from-[#2C0307] to-[#120103] border border-[#FACC15]/35 rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-amber-200 hover:text-white border border-[#FACC15]/30 transition-colors"
          aria-label="Close vehicle details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vehicle Image Header */}
        <div className="relative aspect-[16/9] w-full bg-[#1A0205] overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C0307] via-transparent to-black/50" />

          {/* Overlay Tag */}
          <div className="absolute bottom-4 left-6">
            <span className="text-xs uppercase tracking-wider text-[#FACC15] font-bold block">
              {vehicle.categoryLabel}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-0.5 drop-shadow">
              {vehicle.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Rule & Coverage Alert */}
          <div className="p-4 rounded-xl bg-[#3E050B] border border-[#FACC15]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                <span className="text-sm font-bold text-white">
                  {vehicle.serviceRule}
                </span>
              </div>
              <p className="text-xs text-amber-100/80 mt-1">
                {vehicle.category === 'luxury' && 'Available with professional chauffeur across all Pakistan routes.'}
                {vehicle.category === 'self-drive' && 'Self-drive service without driver. Strictly Karachi coverage only.'}
                {vehicle.category === 'bus-transport' && 'Available for corporate, tours, events, and group travel.'}
              </p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="text-[10px] text-amber-200 uppercase font-bold tracking-wider block">Official Rate</span>
              <span className="font-mono text-base font-bold text-[#FACC15] uppercase tracking-wide">
                Amount on Call
              </span>
            </div>
          </div>

          {/* Genuine Vehicle Specs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15] mb-3">
              Fleet Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-[#1E0205] border border-[#FACC15]/20">
                <span className="text-[10px] text-amber-200/70 block uppercase font-bold">Category</span>
                <span className="text-xs font-bold text-white">{vehicle.vehicleType}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#1E0205] border border-[#FACC15]/20">
                <span className="text-[10px] text-amber-200/70 block uppercase font-bold">Seating</span>
                <span className="text-xs font-bold text-white">{vehicle.seatingCapacity || 'Available on enquiry'}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#1E0205] border border-[#FACC15]/20">
                <span className="text-[10px] text-amber-200/70 block uppercase font-bold">Transmission</span>
                <span className="text-xs font-bold text-white">{vehicle.transmission || 'Available on enquiry'}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#1E0205] border border-[#FACC15]/20">
                <span className="text-[10px] text-amber-200/70 block uppercase font-bold">Climate Control</span>
                <span className="text-xs font-bold text-white">{vehicle.acStatus || 'Available on enquiry'}</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15] mb-2.5">
              Included Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-200">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="text-xs text-neutral-300 leading-relaxed pt-2 border-t border-[#FACC15]/15">
            <p>{vehicle.description}</p>
          </div>

          {/* Action Triggers */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#FACC15]/20">
            <div className="flex items-center gap-2 text-xs text-amber-200/90 font-medium">
              <span>24/7 Helpline:</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono text-white font-bold hover:underline">
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:brightness-105 transition-all flex items-center justify-center gap-2 flex-1 sm:flex-initial shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="py-2.5 px-4 rounded-xl border border-[#FACC15]/40 bg-[#42060C] hover:bg-[#5C0912] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-initial"
              >
                <Phone className="w-4 h-4 text-[#FACC15]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onBookNow(vehicle);
                }}
                className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black font-bold text-xs hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
              >
                <span>Book This Car</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
