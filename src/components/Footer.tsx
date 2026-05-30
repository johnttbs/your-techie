import React from "react";
import Logo from "./Logo";
import { Mail, Phone, ExternalLink, Linkedin, Facebook, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#02022D] border-t border-white/5 text-white/80 selection:bg-brand-orange">
      {/* MID PANEL: Grid details */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Presentation column */}
          <div className="md:col-span-5 space-y-6">
            <Logo variant="horizontal" size="md" light={true} />
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
              Building a community of talented, certified professional technical talents based in Nigeria and Sub-Saharan Africa. Fully aligned with the global cloud and remote computing market.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/yourtechiehub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center text-white/70 border border-white/5 hover:border-brand-orange/35 transition-all active:scale-90" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/yourtechiehub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center text-white/70 border border-white/5 hover:border-brand-orange/35 transition-all active:scale-90" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/yourtechiehub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center text-white/70 border border-white/5 hover:border-brand-orange/35 transition-all active:scale-90" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@yourtechie_hub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center text-white/70 border border-white/5 hover:border-brand-orange/35 transition-all active:scale-90" title="TikTok">
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider font-display border-l-2 border-brand-orange pl-2">
              Quick Resources
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <a href="#who-we-are" className="hover:text-brand-orange text-white/70 transition-colors">Who We Are</a>
              </li>
              <li>
                <a href="#focus-areas" className="hover:text-brand-orange text-white/70 transition-colors">Our Focus Tracks</a>
              </li>
              <li>
                <a href="#syllabus" className="hover:text-brand-orange text-white/70 transition-colors">DevOps Syllabus</a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-brand-orange text-white/70 transition-colors">Alumni Placements</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-orange text-white/70 transition-colors">Frequently Asked FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contacts and details */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider font-display border-l-2 border-brand-orange pl-2">
              Get in Touch
            </h4>
            
            <div className="space-y-4 font-sans text-xs sm:text-sm text-white/70">
              
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block font-bold text-white text-[11px] leading-tight uppercase font-mono">SUPPORT PHONE</span>
                  <a href="tel:+12404217887" className="block hover:text-brand-orange transition-colors">+1 (240) 421 7887 (US Support)</a>
                  <a href="tel:+2348101963400" className="block hover:text-brand-orange transition-colors">+234 810 196 3400 (Local / WhatsApp)</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block font-bold text-white text-[11px] leading-tight uppercase font-mono">OFFICIAL MAIL</span>
                  <a href="mailto:yourtechiehub@qmail.com" className="block hover:text-brand-orange transition-colors">yourtechiehub@qmail.com</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* LOWER PANEL: Copyright links bar */}
      <div className="bg-[#010115] py-6 border-t border-white/5 text-center text-[11px] sm:text-xs text-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <p>© 2026 Your Techie Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/10">&bull;</span>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
