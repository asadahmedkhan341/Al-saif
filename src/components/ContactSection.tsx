import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink, Building2 } from 'lucide-react';
import { COMPANY_INFO, BookingEnquiry } from '../data/fleetData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactSectionProps {
  onSuccessEnquiry?: (enquiry: BookingEnquiry) => void;
  prefilledVehicle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessEnquiry, prefilledVehicle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Luxury Chauffeur Service');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Auto-fill or adjust when a vehicle is preselected
  React.useEffect(() => {
    if (prefilledVehicle && prefilledVehicle !== 'Toyota Land Cruiser LC 300') {
      setNotes((prev) => (prev.includes(prefilledVehicle) ? prev : `Selected vehicle: ${prefilledVehicle}\n${prev}`.trim()));
    }
  }, [prefilledVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide your phone number.');
      return;
    }
    setError('');

    const newEnquiry: BookingEnquiry = {
      id: `ENQ-C${Date.now().toString().slice(-5)}`,
      createdAt: new Date().toISOString(),
      serviceType: serviceNeeded,
      vehicleCategory: 'general',
      vehicleName: 'General Consultation',
      pickupLocation: 'Karachi / TBD',
      destination: 'As per itinerary',
      date: 'Flexible',
      pickupTime: 'TBD',
      passengers: '1-4',
      driverOption: serviceNeeded.includes('Self') ? 'Self Drive' : 'With Driver',
      name,
      phoneNumber: phone,
      whatsappNumber: phone,
      message: `${notes ? notes + ' | ' : ''}Email: ${email || 'None'}`,
      status: 'New',
    };

    if (onSuccessEnquiry) {
      onSuccessEnquiry(newEnquiry);
    }
    setSubmitted(true);
  };

  const whatsappMessage = `Hello Al Saif Transport & Rent A Car, my name is ${name || 'Customer'}. I am looking for ${serviceNeeded}. Please share details and quotation.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(whatsappMessage)}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Sir Shah Suleman Road Liaquatabad Karachi Pakistan'
  )}`;

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-[#180103] via-[#100102] to-[#1C0205]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#FACC15] font-bold">
            Get In Touch 24/7
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 text-balance">
            Let&apos;s Plan Your Journey
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Tell us what vehicle or transportation service you need and our team will provide availability and a quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#2A0307] to-[#150103] border border-[#FACC15]/30 space-y-6 shadow-xl">
              <h3 className="font-display text-xl font-bold text-white flex items-center justify-between">
                <span>Contact Information</span>
                <span className="text-xs font-mono text-[#FACC15] font-bold">Karachi Hub</span>
              </h3>

              {/* Mobiles */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#44050B] border border-[#FACC15]/30 flex items-center justify-center text-[#FACC15] shrink-0 shadow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold tracking-wider text-amber-200/80">Mobile Lines (Call / 24/7)</span>
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#FACC15] transition-colors font-mono"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <span className="text-white/40">|</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneSecondary}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#FACC15] transition-colors font-mono"
                    >
                      {COMPANY_INFO.phoneSecondaryDisplay}
                    </a>
                  </div>
                  <span className="block text-[11px] text-zinc-400 mt-0.5">Direct Fleet Dispatch</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#44050B] border border-[#FACC15]/30 flex items-center justify-center text-[#25D366] shrink-0 shadow">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold tracking-wider text-amber-200/80">WhatsApp Direct</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-[#25D366] transition-colors font-mono"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <span className="block text-[11px] text-zinc-400 mt-0.5">Instant quotations &amp; bookings</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#44050B] border border-[#FACC15]/30 flex items-center justify-center text-[#FACC15] shrink-0 shadow">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold tracking-wider text-amber-200/80">Official Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#FACC15] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <span className="block text-[11px] text-zinc-400 mt-0.5">Corporate travel inquiries</span>
                </div>
              </div>

              {/* Physical Office Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#44050B] border border-[#FACC15]/30 flex items-center justify-center text-[#FACC15] shrink-0 shadow">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold tracking-wider text-amber-200/80">Karachi Head Office</span>
                  <p className="text-xs sm:text-sm font-medium text-white leading-relaxed mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder & Direct Navigation Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2A0307] to-[#150103] border border-[#FACC15]/30 overflow-hidden relative shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FACC15] font-bold block">Office Location</span>
                  <h4 className="text-sm font-bold text-white">Sir Shah Suleman Road, Liaquatabad</h4>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#44050B] hover:bg-[#5C0810] border border-[#FACC15]/40 text-xs text-amber-200 flex items-center gap-1.5 transition-colors font-bold shadow-sm"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Styled Automotive Map Graphic Container in Maroon & Gold */}
              <div className="w-full h-44 rounded-xl bg-[#140103] border border-[#FACC15]/20 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                {/* Abstract road grid */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="40" x2="100%" y2="40" stroke="#FACC15" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="100%" y2="90" stroke="#FFF" strokeWidth="1.5" />
                  <line x1="0" y1="140" x2="100%" y2="140" stroke="#FFF" strokeWidth="1" strokeDasharray="8 8" />
                  <line x1="80" y1="0" x2="80" y2="100%" stroke="#FFF" strokeWidth="1" />
                  <line x1="180" y1="0" x2="180" y2="100%" stroke="#FACC15" strokeWidth="1.5" />
                  <line x1="280" y1="0" x2="280" y2="100%" stroke="#FFF" strokeWidth="1" />
                  <circle cx="180" cy="90" r="14" fill="#8B0000" stroke="#FACC15" strokeWidth="2" />
                </svg>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#8B0000] border-2 border-[#FACC15] flex items-center justify-center text-white mb-2 shadow-lg animate-bounce">
                    <MapPin className="w-5 h-5 text-[#FACC15]" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Plot # 711/10, Near Jazz Franchise
                  </span>
                  <span className="text-[11px] text-amber-200/80 mt-0.5">
                    Sir Shah Suleman Road, Liaquatabad Town, Karachi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#2A0307] to-[#150103] border border-[#FACC15]/30 shadow-xl">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs text-neutral-300 mb-6">
                Fill in your details below and our team will get in touch immediately with availability and rates.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-400/50 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched</h4>
                  <p className="text-xs text-neutral-200 max-w-sm mx-auto leading-relaxed">
                    Thank you. Your message has been sent to Al Saif Transport &amp; Rent A Car. We will call you shortly at <span className="text-[#FACC15] font-bold">{phone}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs text-amber-200/70 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Asad Khan"
                        className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="03xx xxxxxxx"
                        className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={serviceNeeded}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FACC15]"
                      >
                        <option value="Luxury Chauffeur Service">Luxury Chauffeur (With Driver — All Pakistan)</option>
                        <option value="Self Drive — Karachi">Self Drive (Without Driver — Karachi Only)</option>
                        <option value="Bus & Transport">Bus &amp; Group Transport (14-62 Seater)</option>
                        <option value="Airport Transfer">Airport Transfer (Karachi Airport)</option>
                        <option value="Corporate Transportation">Corporate Transportation</option>
                        <option value="Wedding / Event Rental">Wedding / Event Rental</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                      Your Message / Itinerary
                    </label>
                    <textarea
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify your vehicle preference, travel destination, number of days or passengers..."
                      className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-amber-200/80">
                      <span>Rate Policy: </span>
                      <strong className="text-[#FACC15] font-mono uppercase ml-1">Amount on Call</strong>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FACC15] via-[#FDE047] to-[#EAB308] text-black text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 flex-1 sm:flex-initial active:scale-95"
                      >
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
