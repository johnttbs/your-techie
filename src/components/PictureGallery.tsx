import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon, Briefcase, Landmark } from "lucide-react";

interface GalleryPhoto {
  src: string;
  category: string;
  title: string;
  badge: string;
  description: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/src/assets/images/mary_ajayi_1780037096227.png",
    category: "DevOps Learning Lab",
    title: "Practical Learning Lab",
    badge: "Lab Workspace",
    description: "Mary Ajayi in the physical classroom workspace, designing comprehensive learning paths with the physical DevOps architecture board."
  },
  {
    src: "/src/assets/images/founder_mary_ajayi_actual_1779990187218.png",
    category: "Strategic Direction",
    title: "Academy Directing & Standards",
    badge: "Leadership",
    description: "Formulating premium curriculums, building trusted pathways, and driving engineering perfection at Your Techie Hub."
  },
  {
    src: "/src/assets/images/founder_mary_ajayi_1779989904373.png",
    category: "Elite Mentoring",
    title: "Personalized Strategy Sessions",
    badge: "Mentorship",
    description: "Guiding transition students from non-technical backgrounds with direct, welcoming advice and structured roadmaps."
  },
  {
    src: "/src/assets/images/mary_ajayi.png",
    category: "Industry Alignments",
    title: "Global Enterprise Linkages",
    badge: "Networking",
    description: "Liaising with corporate recruiters and technology networks to facilitate student project matching and hiring opportunities."
  }
];

export default function PictureGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prevIdx) => (prevIdx! + 1) % galleryPhotos.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prevIdx) => (prevIdx! - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  return (
    <section id="picture-gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic sleek background sparkles */}
      <div className="absolute top-1/4 left-1/12 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 rounded-full text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Academy Flashpoints
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-display mb-4">
            Interactive Gallery
          </h2>
          <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Take an real-world look inside Your Techie Hub. From targeted syllabus design by the whiteboard to curated professional pathway reviews, witness where elite tech trajectories are created.
          </p>
        </div>

        {/* Cohesive Bento-Style Portait Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#FAF9F6] rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Frame Container */}
              <div 
                onClick={() => setSelectedIdx(idx)}
                className="relative aspect-[3/4] overflow-hidden cursor-zoom-in bg-gray-100"
              >
                <img
                  src={photo.src}
                  alt={photo.category}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Image hover screen filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider font-mono">
                      Click to expand
                    </span>
                    <h4 className="text-white text-base font-bold font-display leading-tight mt-1 flex items-center gap-1.5">
                      {photo.title} <Maximize2 className="w-4 h-4 text-brand-orange shrink-0" />
                    </h4>
                  </div>
                </div>

                {/* Constant Floating Indicator Tag */}
                <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-xs text-brand-navy border border-gray-100 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm font-sans flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
                  {photo.badge}
                </span>
              </div>

              {/* Text Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange font-mono">
                    {photo.category}
                  </span>
                  <h3 className="text-base font-extrabold text-brand-navy font-display mt-1 leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
                
                {/* Premium Interactive Action Line */}
                <div className="border-t border-gray-100 pt-4 mt-4 flex items-center justify-between text-[11px] font-bold text-brand-navy uppercase tracking-wider">
                  <button 
                    onClick={() => setSelectedIdx(idx)}
                    className="flex items-center gap-1.5 text-brand-orange hover:text-brand-navy hover:underline transition-colors cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    Expand Photo
                  </button>
                  <span className="text-gray-400 font-mono">0{idx + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Fact Bar underneath */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-[#FDFCFB] rounded-3xl p-6 sm:p-8 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy text-sm sm:text-base">
                100% Genuine Academy Snapshots
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                These are actual on-site and strategic setup pictures of our workspace and mentoring sessions.
              </p>
            </div>
          </div>
          <div className="flex gap-4 shrink-0 font-display">
            <div className="text-center px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-2xs">
              <div className="text-lg font-black text-brand-orange font-mono">100%</div>
              <div className="text-[10px] uppercase font-bold text-gray-500">Real Campus</div>
            </div>
            <div className="text-center px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-2xs">
              <div className="text-lg font-black text-brand-navy font-mono">Active</div>
              <div className="text-[10px] uppercase font-bold text-gray-500">Advisory</div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Overlay Zoom Portal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button / Backdrop */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 cursor-pointer border border-white/10 active:scale-95"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider Interface Area */}
            <div className="relative w-full max-w-5xl aspect-[4/3] max-h-[75vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-16 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/10 text-white flex items-center justify-center cursor-pointer transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Active Image Frame */}
              <motion.div 
                key={selectedIdx}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl bg-black"
              >
                <img
                  src={galleryPhotos[selectedIdx].src}
                  alt={galleryPhotos[selectedIdx].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain pointer-events-none rounded-lg"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-16 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/10 text-white flex items-center justify-center cursor-pointer transition-all"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Information Bar (Bottom Panel) */}
            <motion.div 
              key={`info-${selectedIdx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-3xl mt-6 text-center text-white z-10 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider font-mono">
                {galleryPhotos[selectedIdx].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-tight mt-1 text-white">
                {galleryPhotos[selectedIdx].title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed max-w-2xl mx-auto">
                {galleryPhotos[selectedIdx].description}
              </p>
              
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryPhotos.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setSelectedIdx(dotIdx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === selectedIdx 
                        ? "bg-brand-orange w-6" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    title={`Go to photo ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
