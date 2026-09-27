import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Car,
  Compass,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/fleetData';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for header shrink & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll spy for active navigation item
      const sections = ['hero', 'fleet', 'services', 'why-us', 'how-it-works', 'chauffeur', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Fleet', href: '#fleet', id: 'fleet' },
    {
      label: 'Services',
      href: '#services',
      id: 'services',
      hasDropdown: true,
      dropdownType: 'services',
    },
    { label: 'Self Drive', href: '#fleet-self-drive', id: 'fleet-self-drive' },
    { label: 'Buses', href: '#fleet-buses', id: 'fleet-buses' },
    { label: 'About Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const servicesDropdownItems = [
    {
      title: 'Luxury Chauffeur Service',
      desc: 'Uniformed professional drivers across Pakistan',
    },
    {
      title: 'Self Drive Car Rental',
      desc: 'Instant verification for Karachi only',
    },
    {
      title: 'Airport Executive Transfers',
      desc: 'On-time pickup at Karachi Jinnah International',
    },
    {
      title: 'Wedding & Event Transportation',
      desc: 'Decorated fleet for your special occasions',
    },
    {
      title: 'Corporate Transportation Fleet',
      desc: 'Monthly & daily corporate chauffeur services',
    },
    {
      title: 'Intercity Nationwide Travel',
      desc: 'Lahore, Islamabad, Murree, Hyderabad & beyond',
    },
  ];

  const whatsappDirectUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(
    'Hello Al Saif Transport & Rent A Car, I would like to enquire about vehicle booking.'
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[#120104]/96 backdrop-blur-xl border-b border-[#FACC15]/20 py-3 shadow-[0_12px_36px_rgba(0,0,0,0.7)]'
            : 'bg-[#180104]/50 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Al Saif Brand Logo (Clean, Premium, Transparent Emblem) */}
            <div className="flex items-center shrink-0">
              <a
                href="#hero"
                className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] rounded-lg transition-transform hover:scale-[1.02]"
                aria-label="Al Saif Transport & Rent A Car Homepage"
              >
                <BrandLogo variant="horizontal" />
              </a>
            </div>

            {/* CENTER: Navigation Links with Generous Spacing & Carento-style Interactions */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8 font-medium text-[13px] tracking-normal text-neutral-200">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                if (link.hasDropdown && link.dropdownType === 'services') {
                  return (
                    <div
                      key={link.id}
                      ref={servicesDropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <a
                        href={link.href}
                        onClick={() => setActiveSection(link.id)}
                        className={`flex items-center gap-1.5 py-1.5 transition-colors group relative ${
                          isActive ? 'text-[#FACC15] font-semibold' : 'text-neutral-200 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? 'rotate-180 text-[#FACC15]' : 'text-neutral-400 group-hover:text-white'
                          }`}
                        />
                        {/* Animated Underline */}
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] bg-[#FACC15] transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </a>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-84 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="bg-[#1A0205]/98 backdrop-blur-2xl border border-[#FACC15]/25 rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                            <div className="px-3 py-1.5 border-b border-white/5 mb-1.5">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FACC15]">
                                10 Specialized Transport Solutions
                              </span>
                            </div>
                            <div className="space-y-1">
                              {servicesDropdownItems.map((item) => (
                                <a
                                  key={item.title}
                                  href="#services"
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group flex flex-col px-3 py-2 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                  <span className="text-xs font-semibold text-white group-hover:text-[#FACC15] transition-colors">
                                    {item.title}
                                  </span>
                                  <span className="text-[11px] text-neutral-400 group-hover:text-neutral-300">
                                    {item.desc}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`relative py-1.5 transition-colors duration-200 group ${
                      isActive ? 'text-[#FACC15] font-semibold' : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Animated underline indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#FACC15] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: Quick Contact & Book Now CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp Quick Icon */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] transition-all hover:scale-105 active:scale-95"
                title="Chat on WhatsApp"
                aria-label="Direct WhatsApp consultation"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              {/* Quick Call Secondary Contact */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-neutral-200 hover:text-[#FACC15] border border-white/10 hover:border-[#FACC15]/40 bg-white/[0.03] hover:bg-white/[0.07] transition-all"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                <span className="font-mono tabular-nums tracking-normal font-semibold">03178710951</span>
              </a>

              {/* Primary "Book Now" CTA Button */}
              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#FACC15] via-[#FDE047] to-[#EAB308] hover:brightness-105 shadow-[0_4px_18px_rgba(250,204,21,0.35)] transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <span className="tracking-wide">Book Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Mobile Right Controls: WhatsApp, Call & Hamburger */}
              <div className="flex items-center gap-1.5 lg:hidden">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#25D366] hover:bg-white/5 active:scale-95"
                  aria-label="WhatsApp Us"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="p-2 rounded-lg text-[#FACC15] hover:bg-white/5 active:scale-95"
                  aria-label="Call Al Saif"
                >
                  <Phone className="w-5 h-5" />
                </a>

                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 rounded-lg text-white hover:text-[#FACC15] hover:bg-white/5 focus:outline-none"
                  aria-label="Open mobile navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SLIDE-IN NAVIGATION PANEL (Carento-inspired Full Height Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-In Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#140103] border-l border-[#FACC15]/25 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <BrandLogo variant="horizontal" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-[#3A050B] text-[#FACC15] border border-[#FACC15]/30'
                        : 'text-neutral-200 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${isActive ? 'text-[#FACC15]' : 'text-neutral-500'}`}
                    />
                  </a>
                );
              })}

              {/* Service Policies in Drawer */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#FACC15] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>With Driver: All Pakistan</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Luxury chauffeur service nationwide.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-200 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Self Drive: Karachi Only</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Verified rentals for Karachi city only.
                  </p>
                </div>
              </div>
            </div>

            {/* Drawer Bottom CTAs */}
            <div className="p-6 border-t border-white/10 space-y-3 bg-[#0D0002]">
              {/* Primary Book Your Vehicle CTA */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-black uppercase tracking-wider bg-gradient-to-r from-[#FACC15] via-[#FDE047] to-[#EAB308] shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Book Your Vehicle</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* WhatsApp Us CTA */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 flex items-center justify-center gap-2 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>

              {/* Direct Call Numbers */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/5 text-neutral-200 border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="font-mono">0317 8710951</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneSecondary}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/5 text-neutral-200 border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="font-mono">0302 2443365</span>
                </a>
              </div>

              {/* Management Portal Link */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full text-center text-[11px] text-neutral-500 hover:text-amber-200 py-1"
              >
                Fleet &amp; Enquiries Console
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
