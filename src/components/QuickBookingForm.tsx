import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Send, MessageCircle, Phone, CheckCircle2, AlertCircle, Car, Shield } from 'lucide-react';
import { ALL_VEHICLES, COMPANY_INFO, BookingEnquiry } from '../data/fleetData';
import { useLanguage } from '../context/LanguageContext';

interface QuickBookingFormProps {
  onSuccessEnquiry?: (enquiry: BookingEnquiry) => void;
  initialVehicleId?: string;
}

export const QuickBookingForm: React.FC<QuickBookingFormProps> = ({ onSuccessEnquiry, initialVehicleId }) => {
  const { t, isUrdu } = useLanguage();
  const [serviceType, setServiceType] = useState('Luxury Chauffeur Service');
  const [vehicleCategory, setVehicleCategory] = useState<'all' | 'luxury' | 'self-drive' | 'bus-transport'>('all');
  const [selectedVehicle, setSelectedVehicle] = useState(initialVehicleId || 'Toyota Land Cruiser LC 300');
  const [driverOption, setDriverOption] = useState<'With Driver' | 'Self Drive'>('With Driver');
  const [pickupLocation, setPickupLocation] = useState('Karachi');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [passengers, setPassengers] = useState('1-4');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCategoryChange = (cat: 'all' | 'luxury' | 'self-drive' | 'bus-transport') => {
    setVehicleCategory(cat);
    if (cat === 'self-drive') {
      setDriverOption('Self Drive');
      setPickupLocation('Karachi (Self-drive Karachi only)');
    } else {
      setDriverOption('With Driver');
    }
  };

  const filteredVehicles = ALL_VEHICLES.filter((v) => {
    if (vehicleCategory === 'all') return true;
    return v.category === vehicleCategory;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!phoneNumber.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }

    setFormError('');

    const newEnquiry: BookingEnquiry = {
      id: `ENQ-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      serviceType,
      vehicleCategory,
      vehicleName: selectedVehicle,
      pickupLocation: pickupLocation || 'Karachi',
      destination: destination || 'As requested',
      date: date || 'Immediate / Flexible',
      pickupTime: pickupTime || 'Standard Dispatch',
      passengers,
      driverOption,
      name,
      phoneNumber,
      whatsappNumber: whatsappNumber || phoneNumber,
      message,
      status: 'New',
    };

    if (onSuccessEnquiry) {
      onSuccessEnquiry(newEnquiry);
    }

    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Al Saif Transport & Rent A Car,\n\n` +
      `I would like to enquire about vehicle booking:\n` +
      `• Vehicle: ${selectedVehicle}\n` +
      `• Service: ${serviceType}\n` +
      `• Driver Option: ${driverOption}\n` +
      `• Pickup: ${pickupLocation}\n` +
      `• Destination: ${destination || 'Within territory'}\n` +
      `• Date & Time: ${date || 'Flexible'} at ${pickupTime || 'TBD'}\n` +
      `• Passengers: ${passengers}\n` +
      `• Customer Name: ${name || 'Customer'}\n` +
      `• Contact: ${phoneNumber}\n\n` +
      `Please provide quotation (Amount on Call) and availability.`
    );
  };

  return (
    <section id="booking-section" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A060C] border border-[#FACC15]/40 text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-3">
            <span>{t('bookingBadge')}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
            {t('bookingTitle')}
          </h2>
          <p className="text-sm text-neutral-300 mt-2">
            {t('bookingSubtitle')}
          </p>

          {/* Important Business Notice */}
          <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-[#3C050B] via-[#4D060D] to-[#3C050B] border border-[#FACC15]/30 max-w-xl mx-auto text-xs shadow-md">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-bold">
              <span className="text-[#FACC15] uppercase tracking-wider">{isUrdu ? 'سروس کے اصول:' : 'Service Rules:'}</span>
              <span className="text-white">{t('ruleBannerChauffeur')}</span>
              <span className="text-red-400">•</span>
              <span className="text-white">{t('ruleBannerSelfDrive')}</span>
              <span className="text-red-400">•</span>
              <span className="text-[#FACC15] font-arabic amount-on-call-price">{t('amountOnCall')}</span>
            </div>
          </div>
        </div>

        {/* The Booking Card Form in Crimson Maroon */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#2A0307] to-[#150103] rounded-2xl border border-[#FACC15]/30 p-4 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-400/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('enquirySuccessTitle')}</h3>
              <p className="text-sm text-neutral-200 max-w-lg mx-auto leading-relaxed">
                {isUrdu ? (
                  <>
                    شکریہ جناب <strong className="text-white">{name}</strong>! <strong className="text-[#FACC15]">{selectedVehicle}</strong> کے لیے آپ کی درخواست موصول ہو چکی ہے۔ ہماری ڈسپیچ ٹیم فوری طور پر فون یا واٹس ایپ نمبر <strong className="text-white">{phoneNumber}</strong> پر دستیابی اور حتمی کوٹیشن کے ساتھ رابطہ کرے گی۔
                  </>
                ) : (
                  <>
                    Thank you, <strong className="text-white">{name}</strong>. Your enquiry for{' '}
                    <strong className="text-[#FACC15]">{selectedVehicle}</strong> has been logged. Our dispatch team will call or WhatsApp you directly at{' '}
                    <strong className="text-white">{phoneNumber}</strong> with vehicle availability and rate quotation.
                  </>
                )}
              </p>
              <div className="p-4 bg-[#3B050B] border border-[#FACC15]/25 rounded-xl max-w-md mx-auto text-xs text-amber-100">
                <span>{isUrdu ? 'ریٹ:' : 'Pricing: '}</span>
                <strong className="text-[#FACC15] font-arabic amount-on-call-price">{t('amountOnCall')}</strong> ·{' '}
                <span>{driverOption === 'With Driver' ? t('withDriverBtn') : t('selfDriveBtn')}</span>
              </div>

              {/* Direct Next Actions */}
              <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:brightness-105 transition-all flex items-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('sendViaWhatsApp')}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-5 py-3 rounded-xl border border-[#FACC15]/40 bg-[#42060C] text-white font-bold text-xs hover:bg-[#5C0912] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FACC15]" />
                  <span>{t('callNowBtn')} {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-3 rounded-xl text-amber-200/70 hover:text-white text-xs transition-colors"
                >
                  {t('submitAnotherBtn')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formError && (
                <div className="p-3.5 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Step 1: Service Type & Driver Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-2">
                    {t('serviceTypeLabel')}
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FACC15] transition-colors"
                  >
                    <option value="Luxury Chauffeur Service">{isUrdu ? 'لگژری ڈرائیور سروس (ڈرائیور کے ساتھ - پورے پاکستان)' : 'Luxury Chauffeur Service (With Driver - All Pakistan)'}</option>
                    <option value="Self Drive — Karachi">{isUrdu ? 'سیلف ڈرائیو — کراچی (بغیر ڈرائیور - صرف کراچی)' : 'Self Drive — Karachi (Without Driver - Karachi Only)'}</option>
                    <option value="Bus & Transport">{isUrdu ? 'بسیں اور گروپ ٹرانسپورٹ' : 'Bus & Group Transport'}</option>
                    <option value="Corporate Transport">{isUrdu ? 'کارپوریٹ ٹرانسپورٹ' : 'Corporate Transport'}</option>
                    <option value="Airport Transfer">{isUrdu ? 'ایئرپورٹ ٹرانسفر (کراچی ایئرپورٹ)' : 'Airport Transfer (Karachi Airport)'}</option>
                    <option value="Event / Wedding Transport">{isUrdu ? 'شادی بیاہ / ایونٹس ٹرانسپورٹ' : 'Event / Wedding Transport'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-2">
                    {t('driverOptionLabel')}
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#180205] rounded-xl border border-[#FACC15]/30">
                    <button
                      type="button"
                      onClick={() => {
                        setDriverOption('With Driver');
                        if (vehicleCategory === 'self-drive') setVehicleCategory('all');
                      }}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all ${
                        driverOption === 'With Driver'
                          ? 'bg-[#FACC15] text-black shadow-md'
                          : 'text-amber-100/70 hover:text-white'
                      }`}
                    >
                      {t('withDriverBtn')}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setDriverOption('Self Drive');
                        setVehicleCategory('self-drive');
                        setPickupLocation('Karachi (Self-drive Karachi only)');
                      }}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all ${
                        driverOption === 'Self Drive'
                          ? 'bg-[#FACC15] text-black shadow-md'
                          : 'text-amber-100/70 hover:text-white'
                      }`}
                    >
                      {t('selfDriveBtn')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2: Vehicle Category Filter & Vehicle Select */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4">
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-2">
                    {t('fleetCategoryLabel')}
                  </label>
                  <select
                    value={vehicleCategory}
                    onChange={(e) => handleCategoryChange(e.target.value as any)}
                    className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FACC15]"
                  >
                    <option value="all">{t('allFleetsOption')}</option>
                    <option value="luxury">{t('luxuryCarsOption')}</option>
                    <option value="self-drive">{t('selfDriveOption')}</option>
                    <option value="bus-transport">{t('busTransportOption')}</option>
                  </select>
                </div>

                <div className="md:col-span-8">
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-2">
                    {t('selectVehicleLabel')}
                  </label>
                  <select
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FACC15]"
                  >
                    {filteredVehicles.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.serviceRule})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Route & Schedule */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    {t('pickupLocationLabel')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder={isUrdu ? 'مثلاً کلفٹن / ایئرپورٹ / گلشن' : 'e.g. Clifton / Airport / Liaquatabad'}
                      className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                    />
                    <MapPin className="w-4 h-4 text-[#FACC15] absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    {t('destinationLabel')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={
                        driverOption === 'With Driver'
                          ? (isUrdu ? 'مثلاً اسلام آباد / لاہور / حیدرآباد / لوکل' : 'e.g. Islamabad / Hyderabad / Local')
                          : (isUrdu ? 'صرف کراچی کی حدود' : 'Within Karachi Territory')
                      }
                      className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                    />
                    <Car className="w-4 h-4 text-[#FACC15] absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    {t('pickupDateLabel')}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#FACC15]"
                    />
                    <Calendar className="w-4 h-4 text-[#FACC15] absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    {t('pickupTimeLabel')}
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#FACC15]"
                    />
                    <Clock className="w-4 h-4 text-[#FACC15] absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Step 4: Contact & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    {t('fullNameLabel')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isUrdu ? 'آپ کا مکمل نام' : 'Full name'}
                    className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    {t('phoneNumberLabel')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="03xx xxxxxxx"
                    className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    {t('passengersLabel')}
                  </label>
                  <div className="relative">
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#FACC15]"
                    >
                      <option value="1-2">{isUrdu ? '1 تا 2 مسافر' : '1 - 2 Passengers'}</option>
                      <option value="3-4">{isUrdu ? '3 تا 4 مسافر' : '3 - 4 Passengers'}</option>
                      <option value="5-7">{isUrdu ? '5 تا 7 مسافر' : '5 - 7 Passengers'}</option>
                      <option value="10-14">{isUrdu ? '10 تا 14 مسافر (ہائی ایس)' : '10 - 14 Passengers (Hiace)'}</option>
                      <option value="15-30">{isUrdu ? '15 تا 30 مسافر (کوسٹر)' : '15 - 30 Passengers (Coaster)'}</option>
                      <option value="35-62">{isUrdu ? '35 تا 62 مسافر (بڑی بس)' : '35 - 62 Passengers (Touring Bus)'}</option>
                    </select>
                    <Users className="w-4 h-4 text-[#FACC15] absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message Note */}
              <div>
                <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                  {t('messageLabel')}
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    isUrdu
                      ? 'دنوں کی تعداد، سامان، سیکیورٹی پروٹوکول یا خصوصی راستے کی تفصیل لکھیں...'
                      : 'Mention number of days, luggage requirements, VIP protocol escort, or intercity stopovers...'
                  }
                  className="w-full bg-[#180205] border border-[#FACC15]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-amber-200/40 focus:outline-none focus:border-[#FACC15]"
                />
              </div>

              {/* Form Action Controls */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#FACC15]/20">
                <div className="text-xs text-amber-200/80">
                  <span>{isUrdu ? 'سرکاری ریٹ:' : 'Price Quote: '}</span>
                  <span className="text-[#FACC15] font-bold uppercase tracking-wider font-mono text-sm ml-1 font-arabic amount-on-call-price">
                    {t('amountOnCall')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3 rounded-xl border border-[#25D366]/50 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isUrdu ? 'واٹس ایپ کوٹیشن' : 'WhatsApp Quote'}</span>
                  </a>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#FACC15] via-[#FDE047] to-[#EAB308] text-black font-bold uppercase tracking-wider text-xs hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>{t('submitEnquiryBtn')}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
