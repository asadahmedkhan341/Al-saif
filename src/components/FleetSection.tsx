import React from 'react';
import { Shield, MapPin, Users, Sparkles, HelpCircle, ArrowDown } from 'lucide-react';
import {
  Vehicle,
  LUXURY_VEHICLES,
  SELF_DRIVE_VEHICLES,
  BUS_TRANSPORT_VEHICLES,
  COMPANY_INFO,
} from '../data/fleetData';
import { VehicleCard } from './VehicleCard';

interface FleetSectionProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onBookDirect: (vehicle: Vehicle) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle, onBookDirect }) => {
  return (
    <section id="fleet" className="pt-10 sm:pt-14 pb-20 bg-gradient-to-b from-[#110103] via-[#1E0206] to-[#120104] relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#80121B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B040A] border border-[#FACC15]/40 text-[#FACC15] text-xs font-bold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Al Saif Premier Fleet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore Our <span className="text-[#FACC15]">Signature Fleet</span>
          </h2>

          <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Browse our vehicle catalog organized by service category — executive chauffeur-driven SUVs for all Pakistan, self-drive rentals for Karachi, and high-capacity luxury buses.
          </p>

          {/* Quick Category Jump Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#fleet-luxury"
              className="px-4 py-2 rounded-xl bg-[#2A0307] hover:bg-[#3D050B] border border-[#FACC15]/30 text-xs font-bold text-amber-200 hover:text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <Shield className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Luxury Fleet (With Driver)</span>
              <ArrowDown className="w-3 h-3 text-[#FACC15]/70" />
            </a>
            <a
              href="#fleet-self-drive"
              className="px-4 py-2 rounded-xl bg-[#2A0307] hover:bg-[#3D050B] border border-[#FACC15]/30 text-xs font-bold text-amber-200 hover:text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Self-Drive Fleet (Karachi Only)</span>
              <ArrowDown className="w-3 h-3 text-[#FACC15]/70" />
            </a>
            <a
              href="#fleet-buses"
              className="px-4 py-2 rounded-xl bg-[#2A0307] hover:bg-[#3D050B] border border-[#FACC15]/30 text-xs font-bold text-amber-200 hover:text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <Users className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Buses &amp; Coasters (Nationwide)</span>
              <ArrowDown className="w-3 h-3 text-[#FACC15]/70" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY 1: LUXURY FLEET - WITH DRIVER (ALL PAKISTAN)                    */}
        {/* ========================================================================= */}
        <div id="fleet-luxury" className="pt-8 mb-20 scroll-mt-24">
          {/* Category Banner / Header */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2B0408] via-[#38060C] to-[#1E0206] border border-[#FACC15]/30 shadow-xl mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180104] border border-[#FACC15]/40 text-[#FACC15] text-xs font-extrabold uppercase tracking-wide">
                <Shield className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Luxury Fleet</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Luxury Fleet: <span className="text-[#FACC15]">With Driver (All Pakistan)</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                Flagship luxury SUVs and executive limousines accompanied by professional, uniformed chauffeurs. Available for diplomatic escorts, corporate delegations, weddings, and intercity journeys across all Pakistan provinces.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#140103] border border-[#FACC15]/30 text-amber-200 text-xs font-bold font-mono">
                {LUXURY_VEHICLES.length} Luxury Models
              </span>
            </div>
          </div>

          {/* Luxury Vehicles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {LUXURY_VEHICLES.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelect={onSelectVehicle}
                onBookDirect={onBookDirect}
              />
            ))}
          </div>
        </div>

        {/* Category Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FACC15]/30 to-transparent my-16" />

        {/* ========================================================================= */}
        {/* CATEGORY 2: SELF-DRIVE FLEET - KARACHI ONLY (SELF)                       */}
        {/* ========================================================================= */}
        <div id="fleet-self-drive" className="pt-8 mb-20 scroll-mt-24">
          {/* Category Banner / Header */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2B0408] via-[#38060C] to-[#1E0206] border border-[#FACC15]/30 shadow-xl mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180104] border border-[#FACC15]/40 text-[#FACC15] text-xs font-extrabold uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Self-Drive Fleet</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Self-Drive Fleet: <span className="text-[#FACC15]">Karachi Only (Self)</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                Clean, fuel-efficient, and dependable automatic sedans and hatchbacks for self-drive. Strictly available within Karachi municipal limits for verified clients with valid CNIC and Driving License.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#140103] border border-[#FACC15]/30 text-amber-200 text-xs font-bold font-mono">
                {SELF_DRIVE_VEHICLES.length} Self-Drive Models
              </span>
            </div>
          </div>

          {/* Self-Drive Vehicles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SELF_DRIVE_VEHICLES.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelect={onSelectVehicle}
                onBookDirect={onBookDirect}
              />
            ))}
          </div>
        </div>

        {/* Category Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FACC15]/30 to-transparent my-16" />

        {/* ========================================================================= */}
        {/* CATEGORY 3: BUSES & COASTERS - WITH DRIVER (INTERCITY & NATIONWIDE)      */}
        {/* ========================================================================= */}
        <div id="fleet-buses" className="pt-8 mb-14 scroll-mt-24">
          {/* Category Banner / Header */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2B0408] via-[#38060C] to-[#1E0206] border border-[#FACC15]/30 shadow-xl mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180104] border border-[#FACC15]/40 text-[#FACC15] text-xs font-extrabold uppercase tracking-wide">
                <Users className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Buses &amp; Coasters</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Buses &amp; Coasters: <span className="text-[#FACC15]">With Driver (Intercity &amp; Nationwide)</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                Spacious executive Coasters, Toyota Grand Cabin Hiace vans, and luxury touring coaches (55 &amp; 62 seaters). Operated by seasoned long-route drivers for weddings, corporate tours, and group travel throughout Pakistan.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#140103] border border-[#FACC15]/30 text-amber-200 text-xs font-bold font-mono">
                {BUS_TRANSPORT_VEHICLES.length} Heavy Group Options
              </span>
            </div>
          </div>

          {/* Buses & Coasters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BUS_TRANSPORT_VEHICLES.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelect={onSelectVehicle}
                onBookDirect={onBookDirect}
              />
            ))}
          </div>
        </div>

        {/* Bottom Booking & Rates Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#2B0408] via-[#38060B] to-[#2B0408] border border-[#FACC15]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#680A12] border border-[#FACC15]/40 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6 text-[#FACC15]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Looking for specific models or custom durations?</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#FACC15] text-black font-extrabold">Amount on Call</span>
              </h4>
              <p className="text-xs text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                Rates depend on trip duration, route (Karachi city vs outstation), driver allowance, fuel packages, and season. Call our 24/7 desk or message us on WhatsApp for an immediate guaranteed quote.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#1C0205] border border-[#FACC15]/40 text-white text-xs font-bold hover:bg-[#2F0409] transition-all text-center"
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent('Hello Al Saif Transport, I want to inquire about custom vehicle booking and pricing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#25D366] text-black text-xs font-extrabold hover:bg-[#20BA5A] transition-all text-center shadow-[0_4px_15px_rgba(37,211,102,0.4)]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
