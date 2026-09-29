/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { PakistanChauffeurHighlight } from './components/PakistanChauffeurHighlight';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { ALL_VEHICLES, Vehicle, BookingEnquiry } from './data/fleetData';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState<Vehicle[]>(ALL_VEHICLES);
  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [prefilledVehicleForBooking, setPrefilledVehicleForBooking] = useState<string>('Toyota Land Cruiser LC 300');

  // Smooth scroll to contact & reservation section
  const handleScrollToBooking = (vehicleName?: string) => {
    if (vehicleName) {
      setPrefilledVehicleForBooking(vehicleName);
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFleet = () => {
    const elem = document.getElementById('fleet');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleBookDirect = (vehicle: Vehicle) => {
    handleScrollToBooking(vehicle.name);
  };

  const handleEnquiryCreated = (newEnquiry: BookingEnquiry) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const handleToggleVehicleStatus = (id: string) => {
    // future toggle support
  };

  const handleAddVehicle = (newVehicle: Vehicle) => {
    setVehicles((prev) => [newVehicle, ...prev]);
  };

  const handleDeleteVehicle = (id: string) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const handleUpdateEnquiryStatus = (id: string, status: 'New' | 'Contacted' | 'Quoted') => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#110103] text-[#F3F4F6] selection:bg-[#FACC15]/40 selection:text-black flex flex-col font-sans overflow-x-hidden">
        {/* 1. Full-screen animated loading experience */}
        {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

        {/* 2. Top Navigation Bar */}
        <Navbar
          onOpenBooking={() => handleScrollToBooking()}
          onOpenAdmin={() => setAdminOpen(true)}
        />

        <main className="flex-1">
          {/* 3. Cinematic Hero Section */}
          <Hero
            onExploreClick={handleScrollToFleet}
            onBookClick={() => handleScrollToBooking()}
          />

          {/* 4. Signature Fleet Showcase */}
          <FleetSection
            onSelectVehicle={handleSelectVehicle}
            onBookDirect={handleBookDirect}
          />

          {/* 5. Our Services */}
          <ServicesSection
            onEnquireService={(srvTitle) => handleScrollToBooking(srvTitle)}
          />

          {/* 10. Why Choose Al Saif */}
          <WhyChooseUs />

          {/* 11. How It Works */}
          <HowItWorks onStartProcess={() => handleScrollToBooking()} />

          {/* 12. Pakistan-wide Chauffeur Service Highlight */}
          <PakistanChauffeurHighlight onBookNow={() => handleScrollToBooking()} />

          {/* 13 & 14. Contact & Location Map */}
          <ContactSection
            onSuccessEnquiry={handleEnquiryCreated}
            prefilledVehicle={prefilledVehicleForBooking}
          />
        </main>

        {/* 15. Footer */}
        <Footer />

        {/* Floating Action Buttons (WhatsApp, Call, Back to top) */}
        <FloatingActions />

        {/* Vehicle Detail Modal */}
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onBookNow={(veh) => {
            setSelectedVehicle(null);
            handleScrollToBooking(veh.name);
          }}
        />

        {/* Admin / Fleet & Enquiries Management Console */}
        <AdminPortalModal
          isOpen={adminOpen}
          onClose={() => setAdminOpen(false)}
          vehicles={vehicles}
          enquiries={enquiries}
          onToggleVehicleStatus={handleToggleVehicleStatus}
          onAddVehicle={handleAddVehicle}
          onDeleteVehicle={handleDeleteVehicle}
          onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
        />
      </div>
    </LanguageProvider>
  );
}
