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

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSignup = () => {
    setIsModalOpen(true);
  };

  const handleDownloadSyllabus = () => {
    setIsModalOpen(true);
  };

  const handleExploreFocus = () => {
    const focusSec = document.getElementById("focus-areas");
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

      {/* Lead generation newsletter input & Full detailed footer links */}
      <Footer />

      {/* Overarching signup popup modal */}
      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
