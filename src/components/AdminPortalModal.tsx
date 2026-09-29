import React, { useState } from 'react';
import { X, Shield, Plus, Check, Eye, EyeOff, Trash2, Download, FileText, Phone, MessageCircle } from 'lucide-react';
import { Vehicle, BookingEnquiry, COMPANY_INFO, getFleetImageUrl } from '../data/fleetData';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicles: Vehicle[];
  enquiries: BookingEnquiry[];
  onToggleVehicleStatus: (id: string) => void;
  onAddVehicle: (newVehicle: Vehicle) => void;
  onDeleteVehicle: (id: string) => void;
  onUpdateEnquiryStatus: (id: string, status: 'New' | 'Contacted' | 'Quoted') => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  vehicles,
  enquiries,
  onToggleVehicleStatus,
  onAddVehicle,
  onDeleteVehicle,
  onUpdateEnquiryStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'vehicles' | 'new-vehicle'>('enquiries');

  // New vehicle form state
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'luxury' | 'self-drive' | 'bus-transport'>('luxury');
  const [seating, setSeating] = useState('5 Passengers');
  const [transmission, setTransmission] = useState<'Automatic' | 'Manual'>('Automatic');
  const [acStatus, setAcStatus] = useState<'A/C' | 'Non-A/C'>('A/C');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleCreateVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    let serviceRule: 'With Driver — All Pakistan' | 'Without Driver — Karachi Only' | 'With Driver — All Pakistan & Intercity' =
      'With Driver — All Pakistan';
    let categoryLabel = 'Luxury Cars With Driver';
    let image = getFleetImageUrl('With Driver', 'LC_300.jpg');

    if (category === 'self-drive') {
      serviceRule = 'Without Driver — Karachi Only';
      categoryLabel = 'Self Drive Cars — Karachi';
      image = getFleetImageUrl('Karachi Only (Self)', 'Corolla_new.jpg');
    } else if (category === 'bus-transport') {
      serviceRule = 'With Driver — All Pakistan';
      categoryLabel = 'Buses & Coasters — With Driver';
      image = getFleetImageUrl('Buses & Coasters', 'Yutong_55_seater_A_C.jpg');
    }

    const created: Vehicle = {
      id: `veh-${Date.now()}`,
      name,
      category,
      categoryLabel,
      serviceRule,
      pricing: 'Amount on Call',
      image,
      seatingCapacity: seating,
      transmission,
      acStatus,
      features: ['Air Conditioned', 'Full Safety Equipment', 'Amount on Call'],
      vehicleType: `${category.toUpperCase()} Unit`,
      description: description || 'New fleet addition available for booking.',
    };

    onAddVehicle(created);
    setName('');
    setDescription('');
    setActiveTab('vehicles');
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ vehicles, enquiries }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `al-saif-fleet-export-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#2A0307] to-[#120103] border border-[#FACC15]/35 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#FACC15]/20 flex items-center justify-between bg-[#380409]">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#FACC15]" />
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Al Saif Management &amp; Dispatch Console
              </h3>
              <p className="text-[11px] text-amber-200/80">
                Karachi Fleet Operations &amp; Real-time Enquiries
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportJSON}
              className="text-xs text-amber-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-[#FACC15]/30 bg-[#4D060E] flex items-center gap-1.5"
              title="Export database json"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Data</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
              aria-label="Close portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-[#10121D]">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'enquiries'
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Customer Enquiries ({enquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('vehicles')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'vehicles'
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Fleet Roster ({vehicles.length})
          </button>
          <button
            onClick={() => setActiveTab('new-vehicle')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
              activeTab === 'new-vehicle'
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Vehicle</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {/* TAB 1: ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div>
              {enquiries.length === 0 ? (
                <div className="text-center py-12 text-neutral-500 text-xs">
                  <FileText className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p>No customer enquiries have been submitted yet.</p>
                  <p className="mt-1">Customer enquiries from the booking and contact forms will appear here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {enquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-xl bg-[#141724] border border-white/5 text-xs text-neutral-300 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[#E5C378] font-bold">{enq.id}</span>
                          <span className="text-neutral-500">·</span>
                          <span className="font-semibold text-white">{enq.name}</span>
                          <span className="text-neutral-500">·</span>
                          <span className="font-mono text-neutral-400">{enq.phoneNumber}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={enq.status}
                            onChange={(e) => onUpdateEnquiryStatus(enq.id, e.target.value as any)}
                            className="bg-[#1C2030] text-[11px] text-neutral-200 border border-neutral-700 rounded px-2 py-1"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Quoted">Quoted</option>
                          </select>

                          <a
                            href={`https://wa.me/92${enq.phoneNumber.replace(/^0/, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30"
                            title="Chat with customer on WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={`tel:${enq.phoneNumber}`}
                            className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20"
                            title="Call customer"
                          >
                            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                          </a>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                        <div>
                          <span className="text-neutral-500 block">Requested Vehicle:</span>
                          <span className="text-white font-medium">{enq.vehicleName}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Driver Option:</span>
                          <span className="text-white font-medium">{enq.driverOption}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Route:</span>
                          <span className="text-white font-medium">
                            {enq.pickupLocation} → {enq.destination}
                          </span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Date &amp; Passengers:</span>
                          <span className="text-white font-medium">
                            {enq.date} ({enq.passengers})
                          </span>
                        </div>
                      </div>

                      {enq.message && (
                        <div className="p-2 rounded bg-black/30 text-neutral-400 text-[11px]">
                          <strong>Customer Note:</strong> {enq.message}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: VEHICLE ROSTER */}
          {activeTab === 'vehicles' && (
            <div className="space-y-2">
              {vehicles.map((v) => (
                <div
                  key={v.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#141724] border border-white/5 text-xs text-neutral-300"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={v.image}
                      alt={v.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-9 object-cover rounded bg-neutral-900"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{v.name}</h4>
                      <p className="text-[11px] text-neutral-400">{v.serviceRule}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[#E5C378] text-[11px] amount-on-call-price">Amount on Call</span>
                    <button
                      onClick={() => onDeleteVehicle(v.id)}
                      className="p-1.5 rounded text-neutral-500 hover:text-red-400 transition-colors"
                      title="Delete vehicle"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: ADD VEHICLE */}
          {activeTab === 'new-vehicle' && (
            <form onSubmit={handleCreateVehicle} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 uppercase tracking-wider mb-1 font-medium">
                    Vehicle Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Toyota Crown Executive"
                    className="w-full bg-[#181B28] border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 uppercase tracking-wider mb-1 font-medium">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-[#181B28] border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="luxury">Luxury Cars with Driver (All Pakistan)</option>
                    <option value="self-drive">Self Drive Cars (Karachi Only)</option>
                    <option value="bus-transport">Bus &amp; Group Transport</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-neutral-300 uppercase tracking-wider mb-1 font-medium">
                    Seating Capacity
                  </label>
                  <input
                    type="text"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full bg-[#181B28] border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 uppercase tracking-wider mb-1 font-medium">
                    Transmission
                  </label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value as any)}
                    className="w-full bg-[#181B28] border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 uppercase tracking-wider mb-1 font-medium">
                    Climate Control
                  </label>
                  <select
                    value={acStatus}
                    onChange={(e) => setAcStatus(e.target.value as any)}
                    className="w-full bg-[#181B28] border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="A/C">A/C</option>
                    <option value="Non-A/C">Non-A/C</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 uppercase tracking-wider mb-1 font-medium">
                  Description / Features
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Comfortable chauffeur or self-drive vehicle available on enquiry..."
                  className="w-full bg-[#181B28] border border-neutral-700 rounded-lg px-3 py-2 text-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#D4AF37] text-black font-semibold text-xs hover:brightness-110 transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Save to Fleet Roster</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
