import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import FocusAreas from "./components/FocusAreas";
import FutureGoals from "./components/FutureGoals";
import AlumniNetwork from "./components/AlumniNetwork";
import SyllabusScheduler from "./components/SyllabusScheduler";
import Perks from "./components/Perks";
import SuccessStories from "./components/SuccessStories";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SignupModal from "./components/SignupModal";
import { generateSyllabusPDF } from "./utils/pdfGenerator";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSignup = () => {
    setIsModalOpen(true);
  };

  const handleDownloadSyllabus = () => {
    generateSyllabusPDF();
  };

  const handleExploreFocus = () => {
    const focusSec = document.getElementById("syllabus");
    if (focusSec) {
      const offset = 95;
      const elementPosition = focusSec.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FCFBF9] overflow-x-hidden selection:bg-brand-orange selection:text-white" id="main-app-container">
      {/* Sticky Top Nav bar */}
      <Navbar onRegisterClick={handleOpenSignup} />

      {/* Main Page Regions */}
      <main>
        {/* Core CTA Hero header */}
        <Hero
          onRegisterClick={handleOpenSignup}
          onExploreClick={handleExploreFocus}
        />

        {/* Detailed Wholesome Presentation of slide 2 & 3 content */}
        <AboutUs />

        {/* Specialized Tracks Focus (Slide 4 content) */}
        <FocusAreas />

        {/* Interactive Syllabus / Calendar Week plans (Schull Session 7) */}
        <SyllabusScheduler onDownloadSyllabus={handleDownloadSyllabus} />

        {/* Global connection points and placed candidates (Schull Section 6) */}
        <AlumniNetwork />

        {/* Perks and benefits details (Schull Section 8) */}
        <Perks />

        {/* Reviews and sliders (Schull Section 4 & 5) */}
        <SuccessStories />

        {/* Future vision tracks layout (Slide 5 content) */}
        <FutureGoals />

        {/* FAQ Accordion board panel (Schull Section 10) */}
        <FAQ />
      </main>

      {/* Full detailed footer links */}
      <Footer />

      {/* Overarching signup popup modal */}
      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating WhatsApp Contact Widget */}
      <a
        href="https://wa.me/2348101963400?text=Hello%20Your%20Techie%20Hub%2C%20I%20am%20interested%20in%20enrolling%20for%20the%20upcoming%20tech%20cohort!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        title="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <span className="absolute right-full mr-3 py-1.5 px-3 bg-brand-navy text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-white/10 uppercase font-mono tracking-wide">
          Chat on WhatsApp
        </span>
        {/* Animated pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10" />
        
        {/* Pure SVG path for accurate WhatsApp branding */}
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
