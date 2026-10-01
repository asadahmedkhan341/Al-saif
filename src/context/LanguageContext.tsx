import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ur';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isUrdu: boolean;
  t: (key: keyof typeof translations.en) => string;
}

export const translations = {
  en: {
    // Brand
    brandName: 'Al Saif Transport & Rent A Car',
    brandSubtitle: 'Luxury Cars • Chauffeur Service • Car Rental Karachi',
    tagline: 'Premium Cars. Professional Drivers. Wherever You Need to Go.',
    amountOnCall: 'Amount on Call',
    helpline247: '24/7 Helpline',
    available247: '24/7 Dispatch',

    // Navigation
    navHome: 'Home',
    navFleet: 'Our Fleet',
    navServices: 'Services',
    navWhyUs: 'Why Us',
    navHowItWorks: 'How It Works',
    navNationwide: 'Nationwide Travel',
    navContact: 'Contact & Book',
    navAdmin: 'Fleet Admin',
    bookNowBtn: 'Book Now',
    callNowBtn: 'Call Now',

    // Hero
    heroBadge: 'Karachi & All Pakistan Transport Service',
    heroTitlePrefix: 'Luxury Travel.',
    heroTitleHighlight: 'Professional Service.',
    heroSubtitle: 'Al Saif Transport & Rent A Car delivers premium chauffeur-driven luxury vehicles across Pakistan and reliable self-drive cars in Karachi. 24/7 dispatch with verified professional drivers.',
    heroExploreFleet: 'Explore Our Fleet',
    heroCallDirect: 'Call 0317 8710951',
    heroWhatsApp: 'WhatsApp Booking',
    badgeLuxuryChauffeur: 'Luxury Fleet (With Driver)',
    badgeLuxuryChauffeurSub: 'All Pakistan Coverage',
    badgeSelfDrive: 'Self-Drive (Without Driver)',
    badgeSelfDriveSub: 'Karachi Only',

    // Fleet Section
    fleetSectionBadge: 'Signature Vehicles',
    fleetSectionTitle: 'Explore Our Signature Fleet',
    fleetSectionSubtitle: 'Choose between chauffeur-driven luxury sedans and SUVs for all Pakistan, self-drive rentals within Karachi, or high-capacity buses and coasters.',
    jumpLuxury: 'Luxury Fleet (All Pakistan)',
    jumpSelfDrive: 'Self-Drive (Karachi Only)',
    jumpBuses: 'Buses & Coasters (All Pakistan)',

    // Fleet Categories
    catLuxuryTitle: 'Luxury Fleet:',
    catLuxuryTitleHighlight: 'With Driver (All Pakistan)',
    catLuxuryDesc: 'Flagship luxury SUVs and executive limousines accompanied by professional, uniformed chauffeurs. Available for diplomatic escorts, corporate delegations, weddings, and intercity journeys across all Pakistan provinces.',
    catLuxuryCount: '10 Luxury Models',

    catSelfDriveTitle: 'Self-Drive Fleet:',
    catSelfDriveTitleHighlight: 'Karachi Only (Self)',
    catSelfDriveDesc: 'Clean, fuel-efficient, and dependable automatic sedans and hatchbacks for self-drive. Strictly available within Karachi municipal limits for verified clients with valid CNIC and Driving License.',
    catSelfDriveCount: '8 Self-Drive Models',

    catBusesTitle: 'Buses & Coasters:',
    catBusesTitleHighlight: 'With Driver (All Pakistan)',
    catBusesDesc: 'Spacious executive Coasters, Toyota Grand Cabin Hiace vans, and luxury touring coaches (55 & 62 seaters). Operated by seasoned long-route drivers for weddings, corporate tours, and group travel throughout Pakistan.',
    catBusesCount: '7 Heavy Group Options',

    // Vehicle Card & Details
    luxuryChauffeurBadge: 'Luxury Chauffeur',
    selfDriveBadge: 'Self Drive',
    groupTransportBadge: 'Group Transport',
    withDriverPakTag: 'With Driver (All Pakistan)',
    karachiOnlyTag: 'Karachi Only (Self)',
    viewDetails: 'View Details',
    enquireVehicle: 'Enquire',
    reserveVehicle: 'Reserve Vehicle',
    closeModal: 'Close',
    fleetSpecs: 'Fleet Specifications',
    categoryLabel: 'Category',
    seatingLabel: 'Seating',
    transmissionLabel: 'Transmission',
    climateLabel: 'Climate Control',
    includedFeatures: 'Key Features & Inclusions',
    ruleNoticeLuxury: 'Available with professional chauffeur across all Pakistan routes.',
    ruleNoticeSelfDrive: 'Self-drive service without driver. Strictly Karachi coverage only.',
    ruleNoticeBuses: 'Available with professional driver across all Pakistan routes.',
    automaticTransmission: 'Automatic',
    manualTransmission: 'Manual',

    // Custom Duration Box
    customBoxTitle: 'Looking for specific models or custom durations?',
    customBoxDesc: 'Rates depend on trip duration, route (Karachi city vs outstation), driver allowance, fuel packages, and season. Call our 24/7 desk or message us on WhatsApp for an immediate guaranteed quote.',
    whatsappUs: 'WhatsApp Us',

    // Services Section
    servicesBadge: 'Our Services',
    servicesTitle: 'Tailored Transportation Solutions',
    servicesSubtitle: 'From private executive limousines to nationwide bulk group transit, we manage every journey with punctuality, verified chauffeurs, and immaculately maintained vehicles.',
    enquireServiceBtn: 'Enquire This Service',

    // Why Choose Us
    whyBadge: 'The Al Saif Standard',
    whyTitle: 'Why Choose Al Saif Transport & Rent A Car',
    whySubtitle: 'Setting the standard for luxury chauffeur experiences and reliable self-drive rentals in Karachi and throughout Pakistan.',

    // How It Works
    howBadge: 'Simple Booking Flow',
    howTitle: 'How It Works',
    howSubtitle: 'Booking your journey with Al Saif Transport is quick, straightforward, and personalized.',
    startBookingBtn: 'Start Your Reservation',

    // Pakistan Chauffeur Highlight
    chauffeurBadge: 'Chauffeur Service',
    chauffeurTitle: 'Pakistan-Wide Chauffeur Service',
    chauffeurDesc: 'Travel from Karachi to anywhere in Pakistan in complete comfort and privacy. Our verified long-route drivers are experienced with motorway networks, intercity security protocols, and long-distance navigation.',
    chauffeurCoverageTitle: 'Seamless Nationwide Route Coverage',
    chauffeurIntercityFleet: 'Intercity Fleet',
    chauffeurSuvShowcase: 'Toyota Fortuner & Land Cruiser',

    // Quick Booking Form
    bookingBadge: 'Direct Reservation Desk',
    bookingTitle: 'Request a Direct Quotation',
    bookingSubtitle: 'Fill out your requirements below for vehicle availability and instant rate calculation.',
    ruleBannerChauffeur: 'With Driver: All Pakistan',
    ruleBannerSelfDrive: 'Without Driver: Karachi Only',
    serviceTypeLabel: 'Service Type',
    driverOptionLabel: 'Driver Option',
    withDriverBtn: 'With Driver (Pakistan)',
    selfDriveBtn: 'Self Drive (Karachi Only)',
    fleetCategoryLabel: 'Fleet Category',
    allFleetsOption: 'All Fleets',
    luxuryCarsOption: 'Luxury Cars (With Driver - Pakistan)',
    selfDriveOption: 'Self-Drive (Karachi Only)',
    busTransportOption: 'Buses & Group Transports',
    selectVehicleLabel: 'Select Vehicle Model',
    pickupLocationLabel: 'Pickup Location',
    destinationLabel: 'Destination',
    pickupDateLabel: 'Pickup Date',
    pickupTimeLabel: 'Pickup Time',
    passengersLabel: 'Passenger Count',
    fullNameLabel: 'Full Name',
    phoneNumberLabel: 'Contact Phone Number',
    whatsappNumberLabel: 'WhatsApp Number (Optional)',
    messageLabel: 'Special Requirements / Route Notes',
    submitEnquiryBtn: 'Submit Booking Enquiry',
    submittingBtn: 'Submitting...',
    enquirySuccessTitle: 'Enquiry Received Successfully',
    enquirySuccessMessage: 'Thank you. Your enquiry has been logged. Our dispatch team will call or WhatsApp you directly with vehicle availability and rate quotation.',
    sendViaWhatsApp: 'Send Direct via WhatsApp',
    callDeskBtn: 'Call 0317 8710951',
    submitAnotherBtn: 'Submit Another Enquiry',

    // Contact Section
    contactBadge: 'Get in Touch',
    contactTitle: 'Visit Our Karachi Office or Call Directly',
    contactSubtitle: 'Our Liaquatabad office is open 24/7. Reach out via phone, WhatsApp, or drop by for vehicle viewing and fleet inspections.',
    addressTitle: 'Office Address',
    phoneNumbersTitle: 'Telephone Lines',
    whatsappTitle: 'Direct WhatsApp',
    emailTitle: 'Email Address',
    officeHoursTitle: 'Working Hours',
    officeHoursValue: 'Open 24 Hours / 7 Days a Week',
    viewOnGoogleMaps: 'Open in Google Maps',

    // Footer
    footerDesc: 'Al Saif Transport & Rent A Car is a premier luxury automobile and group transit service headquartered in Liaquatabad, Karachi, delivering chauffeur-driven elegance nationwide.',
    footerQuickLinks: 'Quick Links',
    footerFleetLinks: 'Fleet Categories',
    footerContactInfo: 'Contact Info',
    footerCopyright: 'Al Saif Transport & Rent A Car. All rights reserved.',
    footerDesignedNote: 'Official Website • Amount on Call',

    // Language Toggle
    langButtonText: 'اردو',
    langAriaLabel: 'Switch to Urdu',
    currentLanguageLabel: 'English',
  },
  ur: {
    // Brand
    brandName: 'السيف ترانسبورٹ اینڈ رینٹ اے کار',
    brandSubtitle: 'لگژری گاڑیاں • ڈرائیور سروس • رینٹ اے کار کراچی',
    tagline: 'شاندار گاڑیاں۔ بااعتماد ڈرائیورز۔ جہاں بھی آپ جانا چاہیں۔',
    amountOnCall: 'کال پر ریٹ',
    helpline247: '24/7 ہیلپ لائن',
    available247: '24/7 سروس دستیاب',

    // Navigation
    navHome: 'ہوم',
    navFleet: 'ہماری گاڑیاں',
    navServices: 'خدمات',
    navWhyUs: 'ہم کیوں',
    navHowItWorks: 'طریقہ کار',
    navNationwide: 'ملک گیر سفر',
    navContact: 'رابطہ و بکنگ',
    navAdmin: 'ایڈمن پورٹل',
    bookNowBtn: 'ابھی بک کریں',
    callNowBtn: 'کال کریں',

    // Hero
    heroBadge: 'کراچی اور پورے پاکستان کے لیے ٹرانسپورٹ سروس',
    heroTitlePrefix: 'پُرتعیش سفر۔',
    heroTitleHighlight: 'پیشہ ورانہ خدمت۔',
    heroSubtitle: 'السيف ترانسبورٹ اینڈ رینٹ اے کار پورے پاکستان میں تربیت یافتہ ڈرائیور کے ساتھ اعلیٰ درجے کی لگژری گاڑیاں اور کراچی میں قابلِ اعتماد سیلف ڈرائیو گاڑیاں فراہم کرتی ہے۔ 24/7 بکنگ اور فوری ڈسپیچ۔',
    heroExploreFleet: 'گاڑیاں دیکھیں',
    heroCallDirect: '0317 8710951 پر کال کریں',
    heroWhatsApp: 'واٹس ایپ بکنگ',
    badgeLuxuryChauffeur: 'لگژری فلیٹ (ڈرائیور کے ساتھ)',
    badgeLuxuryChauffeurSub: 'پورے پاکستان کے لیے',
    badgeSelfDrive: 'سیلف ڈرائیو (بغیر ڈرائیور)',
    badgeSelfDriveSub: 'صرف کراچی شہر',

    // Fleet Section
    fleetSectionBadge: 'ہماری گاڑیوں کا فلیٹ',
    fleetSectionTitle: 'ہماری نمایاں گاڑیاں ملاحظہ فرمائیں',
    fleetSectionSubtitle: 'پورے پاکستان کے لیے ڈرائیور کے ساتھ لگژری گاڑیاں، کراچی کے لیے سیلف ڈرائیو، یا بڑی فیملی اور گروپس کے لیے کشادہ بسیں اور کوسٹرز منتخب کریں۔',
    jumpLuxury: 'لگژری فلیٹ (پورے پاکستان میں)',
    jumpSelfDrive: 'سیلف ڈرائیو (صرف کراچی)',
    jumpBuses: 'بسیں اور کوسٹرز (پورے پاکستان میں)',

    // Fleet Categories
    catLuxuryTitle: 'لگژری فلیٹ:',
    catLuxuryTitleHighlight: 'ڈرائیور کے ساتھ (پورے پاکستان کے لیے)',
    catLuxuryDesc: 'اعلیٰ ترین لگژری ایس یو ویز اور ایگزیکٹو لیموزین گاڑیاں بااعتماد، بااخلاق اور یونیفارم ملبوس ڈرائیورز کے ہمراہ۔ پروٹوکول، غیر ملکی وفود، شادی بیاہ اور ملک بھر کے سفر کے لیے دستیاب۔',
    catLuxuryCount: '10 لگژری ماڈلز',

    catSelfDriveTitle: 'سیلف ڈرائیو فلیٹ:',
    catSelfDriveTitleHighlight: 'صرف کراچی (سیلف)',
    catSelfDriveDesc: 'صاف ستھری، کم پیٹرول خرچ کرنے والی خود کار (آٹومیٹک) گاڑیاں سیلف ڈرائیو کے لیے۔ صرف کراچی کی حدود کے لیے اصل شناختی کارڈ اور ڈرائیونگ لائسنس رکھنے والے صارفین کے لیے۔',
    catSelfDriveCount: '8 سیلف ڈرائیو ماڈلز',

    catBusesTitle: 'بسیں اور کوسٹرز:',
    catBusesTitleHighlight: 'ڈرائیور کے ساتھ (پورے پاکستان کے لیے)',
    catBusesDesc: 'کشادہ ایگزیکٹو کوسٹرز، ٹویوٹا گرینڈ کیبن ہائی ایس اور 55 و 62 نشستوں والی لگژری بسیں۔ طویل سفر کے تجربہ کار ڈرائیورز کے ساتھ شادی بیاہ، فیملی پکنک، اور گروپس کے لیے پاکستان بھر میں۔',
    catBusesCount: '7 بڑی گروپ گاڑیاں',

    // Vehicle Card & Details
    luxuryChauffeurBadge: 'لگژری ڈرائیور سروس',
    selfDriveBadge: 'سیلف ڈرائیو',
    groupTransportBadge: 'گروپ ٹرانسپورٹ',
    withDriverPakTag: 'ڈرائیور کے ساتھ (پورے پاکستان کے لیے)',
    karachiOnlyTag: 'صرف کراچی (سیلف)',
    viewDetails: 'تفصیلات دیکھیں',
    enquireVehicle: 'معلومات لیں',
    reserveVehicle: 'گاڑی بک کریں',
    closeModal: 'بند کریں',
    fleetSpecs: 'گاڑی کی خصوصیات',
    categoryLabel: 'زمرہ',
    seatingLabel: 'نشستیں',
    transmissionLabel: 'گیئر',
    climateLabel: 'اے سی',
    includedFeatures: 'شامل سہولیات اور خصوصیات',
    ruleNoticeLuxury: 'پورے پاکستان کے تمام روٹس کے لیے بااعتماد ڈرائیور کے ساتھ دستیاب۔',
    ruleNoticeSelfDrive: 'سیلف ڈرائیو بغیر ڈرائیور۔ سختی سے صرف کراچی کے لیے محدود۔',
    ruleNoticeBuses: 'پورے پاکستان کے تمام بین الشہری راستوں کے لیے تجربہ کار ڈرائیور کے ساتھ دستیاب۔',
    automaticTransmission: 'آٹومیٹک',
    manualTransmission: 'مینول',

    // Custom Duration Box
    customBoxTitle: 'کیا آپ کو کسی مخصوص ماڈل یا دن کی ضرورت ہے؟',
    customBoxDesc: 'کرایہ سفر کے دورانیے، روٹ (کراچی لوکل یا آؤٹ اسٹیشن)، ڈرائیور الاؤنس اور سیزن کے مطابق طے ہوتا ہے۔ فوری اور رعایتی ریٹ کے لیے ابھی کال یا واٹس ایپ کریں۔',
    whatsappUs: 'واٹس ایپ پر رابطہ کریں',

    // Services Section
    servicesBadge: 'ہماری خدمات',
    servicesTitle: 'جامع اور معیاری ٹرانسپورٹ خدمات',
    servicesSubtitle: 'شخصی لگژری گاڑیوں سے لے کر بین الشہری بڑی بسوں تک، ہم ہر سفر کو وقت کی پابندی، مستند ڈرائیورز اور صاف ستھری گاڑیوں کے ساتھ پُرسکون بناتے ہیں۔',
    enquireServiceBtn: 'سروس کی تفصیل لیں',

    // Why Choose Us
    whyBadge: 'السيف کا اعزاز',
    whyTitle: 'السيف ترانسبورٹ اینڈ رینٹ اے کار کا انتخاب کیوں کریں؟',
    whySubtitle: 'پورے پاکستان اور کراچی میں شاندار، محفوظ اور پیشہ ورانہ سفر کی روشن مثال۔',

    // How It Works
    howBadge: 'بکنگ کا آسان طریقہ کار',
    howTitle: 'بکنگ کیسے کریں؟',
    howSubtitle: 'السيف ترانسبورٹ کے ساتھ گاڑی کی بکنگ انتہائی تیز، آسان اور شفاف ہے۔',
    startBookingBtn: 'ابھی بکنگ کا آغاز کریں',

    // Pakistan Chauffeur Highlight
    chauffeurBadge: 'ملک گیر ڈرائیور سروس',
    chauffeurTitle: 'پورے پاکستان کے لیے ڈرائیور کے ساتھ سروس',
    chauffeurDesc: 'کراچی سے پاکستان کے کسی بھی کونے میں مکمل سکون اور حفاظت کے ساتھ سفر کریں۔ ہمارے تصدیق شدہ ڈرائیورز موٹرویز، ہائی ویز اور شمالی علاقہ جات کے تمام راستوں سے بخوبی واقف ہیں۔',
    chauffeurCoverageTitle: 'ملک بھر کے شہروں تک بلا تعطل رسائی',
    chauffeurIntercityFleet: 'انٹرسٹی فلیٹ',
    chauffeurSuvShowcase: 'ٹویوٹا فارچونر اور لینڈ کروزر',

    // Quick Booking Form
    bookingBadge: 'براہِ راست بکنگ ڈیسک',
    bookingTitle: 'گاڑی کی بکنگ اور ریٹ معلوم کریں',
    bookingSubtitle: 'اپنی مطلوبہ تفصیلات نیچے درج کریں، ہماری ٹیم فوری طور پر دستیابی اور ریٹ فراہم کرے گی۔',
    ruleBannerChauffeur: 'ڈرائیور کے ساتھ: پورے پاکستان کے لیے',
    ruleBannerSelfDrive: 'بغیر ڈرائیور: صرف کراچی کے لیے',
    serviceTypeLabel: 'سروس کی قسم',
    driverOptionLabel: 'ڈرائیور کا انتخاب',
    withDriverBtn: 'ڈرائیور کے ساتھ (پاکستان)',
    selfDriveBtn: 'سیلف ڈرائیو (صرف کراچی)',
    fleetCategoryLabel: 'گاڑیوں کا زمرہ',
    allFleetsOption: 'تمام گاڑیاں',
    luxuryCarsOption: 'لگژری گاڑیاں (ڈرائیور کے ساتھ - پاکستان)',
    selfDriveOption: 'سیلف ڈرائیو (صرف کراچی)',
    busTransportOption: 'بسیں اور گروپ ٹرانسپورٹ',
    selectVehicleLabel: 'گاڑی کا ماڈل منتخب کریں',
    pickupLocationLabel: 'پک اپ کا مقام',
    destinationLabel: 'منزل / جانے کا مقام',
    pickupDateLabel: 'پک اپ کی تاریخ',
    pickupTimeLabel: 'پک اپ کا وقت',
    passengersLabel: 'مسافروں کی تعداد',
    fullNameLabel: 'آپ کا پورا نام',
    phoneNumberLabel: 'رابطہ نمبر (فون)',
    whatsappNumberLabel: 'واٹس ایپ نمبر (اختیاری)',
    messageLabel: 'خصوصی ہدایات یا روٹ کے بارے میں',
    submitEnquiryBtn: 'بکنگ کی درخواست بھیجیں',
    submittingBtn: 'درخواست بھیجی جا رہی ہے...',
    enquirySuccessTitle: 'درخواست کامیابی سے موصول ہوگئی',
    enquirySuccessMessage: 'شکریہ! آپ کی درخواست موصول ہو چکی ہے۔ ہماری ٹیم فوری طور پر کال یا واٹس ایپ پر دستیابی اور ریٹ کے ساتھ آپ سے رابطہ کرے گی۔',
    sendViaWhatsApp: 'واٹس ایپ پر براہِ راست بھیجیں',
    callDeskBtn: '0317 8710951 پر کال کریں',
    submitAnotherBtn: 'دوسری درخواست جمع کرائیں',

    // Contact Section
    contactBadge: 'ہم سے رابطہ کریں',
    contactTitle: 'ہمارے کراچی آفس تشریف لائیں یا براہِ راست کال کریں',
    contactSubtitle: 'ہمارا لیاقت آباد دفتر 24 گھنٹے کھلا ہے۔ فون، واٹس ایپ یا بالمشافہ ملاقات کے لیے ہم ہمہ وقت حاضر ہیں۔',
    addressTitle: 'دفتر کا پتہ',
    phoneNumbersTitle: 'ٹیلی فون لائنز',
    whatsappTitle: 'براہِ راست واٹس ایپ',
    emailTitle: 'ای میل ایڈریس',
    officeHoursTitle: 'اوقاتِ کار',
    officeHoursValue: '24 گھنٹے / ہفتے کے 7 دن کھلا ہے',
    viewOnGoogleMaps: 'گوگل میپس پر دیکھیں',

    // Footer
    footerDesc: 'السيف ترانسبورٹ اینڈ رینٹ اے کار کراچی اور پاکستان کی ممتاز رینٹ اے کار اور گروپ ٹرانسپورٹ کمپنی ہے جو ڈرائیور کے ساتھ اعلیٰ معیار کی خدمات فراہم کرتی ہے۔',
    footerQuickLinks: 'فوری لنکس',
    footerFleetLinks: 'گاڑیوں کے زمرے',
    footerContactInfo: 'رابطہ کی تفصیلات',
    footerCopyright: 'السيف ترانسبورٹ اینڈ رینٹ اے کار۔ تمام جملہ حقوق محفوظ ہیں۔',
    footerDesignedNote: 'سرکاری ویب سائٹ • رقم کال پر',

    // Language Toggle
    langButtonText: 'English',
    langAriaLabel: 'Switch to English',
    currentLanguageLabel: 'اردو',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('alsaif_lang');
        if (saved === 'ur' || saved === 'en') {
          return saved;
        }
      } catch {
        // Fallback gracefully if localStorage is restricted
      }
    }
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('alsaif_lang', newLang);
      } catch {
        // Ignore quota/security errors
      }
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ur' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
      if (lang === 'ur') {
        document.body.classList.add('font-urdu');
        document.title = 'السيف ترانسبورٹ اینڈ رینٹ اے کار | لگژری گاڑیاں، ڈرائیور اور سیلف ڈرائیو کراچی';
      } else {
        document.body.classList.remove('font-urdu');
        document.title = 'Al Saif Transport & Rent A Car | Luxury Cars, Chauffeur & Car Rental Karachi';
      }
    }
  }, [lang]);

  const t = (key: keyof typeof translations.en): string => {
    return translations[lang][key] || translations.en[key] || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isUrdu: lang === 'ur',
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
