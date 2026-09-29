import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/fleetData';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2B0307] via-[#1A0103] to-[#0A0001] text-amber-100/80 border-t border-[#FACC15]/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FACC15]/15">
          {/* Brand & Social Media Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo variant="horizontal" />
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
              Premier car rental, luxury chauffeur-driven vehicles, self-drive rentals in Karachi, and executive group transportation services across Pakistan.
            </p>

            {/* Visit Our Social Media */}
            <div className="pt-2 space-y-2.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                Visit our social media
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Al Saif Transport & Rent A Car on Facebook"
                  className="w-10 h-10 rounded-xl bg-[#3C050B]/90 hover:bg-[#1877F2] text-[#FACC15] hover:text-white border border-[#FACC15]/30 hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md group"
                >
                  <FacebookIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>

                {/* TikTok */}
                <a
                  href={COMPANY_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Al Saif Transport & Rent A Car on TikTok"
                  className="w-10 h-10 rounded-xl bg-[#3C050B]/90 hover:bg-black text-[#FACC15] hover:text-white border border-[#FACC15]/30 hover:border-white/50 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md group"
                >
                  <TikTokIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>

                {/* Instagram */}
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Al Saif Transport & Rent A Car on Instagram"
                  className="w-10 h-10 rounded-xl bg-[#3C050B]/90 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-[#FACC15] hover:text-white border border-[#FACC15]/30 hover:border-pink-500/50 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md group"
                >
                  <InstagramIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a href="#hero" className="hover:text-[#FACC15] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#FACC15] transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#fleet-luxury" className="hover:text-[#FACC15] transition-colors">
                  Luxury Cars (With Driver)
                </a>
              </li>
              <li>
                <a href="#fleet-self-drive" className="hover:text-[#FACC15] transition-colors">
                  Self-Drive (Karachi Only)
                </a>
              </li>
              <li>
                <a href="#fleet-buses" className="hover:text-[#FACC15] transition-colors">
                  Buses &amp; Group Transport
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FACC15] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FACC15] transition-colors">
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Rules & Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              Service Guidelines
            </h4>
            <div className="p-4 rounded-xl bg-[#3C050B]/90 border border-[#FACC15]/25 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-zinc-200">
                <ShieldCheck className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span className="font-semibold text-white">With Driver — All Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <ShieldCheck className="w-4 h-4 text-[#FDE047] shrink-0" />
                <span className="font-semibold text-white">Without Driver — Karachi Only</span>
              </div>
              <div className="pt-2 border-t border-[#FACC15]/15 flex items-center justify-between">
                <span className="text-amber-200/80">Pricing Policy:</span>
                <span className="font-mono text-[#FACC15] font-bold uppercase text-[11px] tracking-wider amount-on-call-price">
                  Amount on Call
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-200">
                <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                <span className="text-amber-200 font-medium">Mobile:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-mono font-bold">
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <span className="text-white/40">|</span>
                <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="hover:text-white font-mono font-bold">
                  {COMPANY_INFO.phoneSecondaryDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="text-amber-200 font-medium">WhatsApp:</span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono font-bold"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <Mail className="w-3.5 h-3.5 text-[#FACC15]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white truncate">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/60 gap-3 text-center sm:text-left">
          <p>© 2021 Al Saif Transport &amp; Rent A Car. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-[11px]">
            <span>Liaquatabad Town, Karachi</span>
            <span aria-hidden="true">•</span>
            <span>All Pakistan Chauffeur Services</span>
            <span aria-hidden="true">•</span>
            <span className="text-[#FACC15] font-semibold amount-on-call-price">Amount on Call</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
