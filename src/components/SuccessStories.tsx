import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Quote, Award, Sparkles, Volume2, Calendar, Check } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  statusBefore: string;
  text: string;
  certification: string;
  avatar: string;
}

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoTimestamp, setVideoTimestamp] = useState(12);

  const testimonials: Testimonial[] = [
    {
      name: "Boluwatife Olufunso",
      role: "Cloud Systems Practitioner @ Interswitch",
      statusBefore: "Sales Associate",
      text: "Switching from a sales role was incredibly intimidating, but Your Techie Hub created a safe harbor for learning. Daily tasks, paired systems, and hands-on VPC setups gave me the necessary edge.",
      certification: "Certified AWS Cloud Practitioner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
    },
    {
      name: "Chinonso Ndubuisi",
      role: "Associate SRE @ Sterling Bank",
      statusBefore: "Unemployed Graduate",
      text: "The CI/CD pipeline module is pure gold. We didn't just study commands; we built end-to-end setups where real code commits triggered actual server updates. It's exactly my day job now.",
      certification: "Docker & K8s Specialist",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80"
    },
    {
      name: "Khadijah Alao",
      role: "DevOps Engineer @ Kuda Microfinance",
      statusBefore: "Retail Bank Teller",
      text: "Our mentors demystified Linux and containerization. The code reviews were strict but extremely helpful. My transition took 5 months, and I secure remote roles easily today.",
      certification: "AWS Solutions Architect Core",
      avatar: "https://images.unsplash.com/photo-1534751516642-a131ffd1037f?w=100&q=80"
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="success-stories" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Carousel Slider Panel (Schull Section 4 equivalent) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-[11px] font-mono tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3.5 py-1.5 rounded-full font-bold uppercase inline-block mb-4">
              Real Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-navy leading-tight">
              Our Techies&apos; Success Stories
            </h2>
            <p className="text-gray-600 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              What our talents say about their learning experience with Your Techie Hub. Filter through authentic career changes.
            </p>

            {/* Slider controls */}
            <div className="flex gap-4.5 justify-center lg:justify-start mt-8" id="slider-arrows">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/30 hover:bg-gray-50 flex items-center justify-center text-brand-navy shadow-sm transition-all active:scale-95"
                title="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-2xl bg-brand-navy text-white hover:bg-brand-orange flex items-center justify-center shadow-md shadow-brand-navy/10 transition-all active:scale-95"
                title="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Display Card */}
          <div className="lg:col-span-7" id="active-slider-card">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden select-text">
              {/* Massive ambient decorative quote */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-gray-50 shrink-0 pointer-events-none z-0" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Certification Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/5 border border-brand-orange/15 text-brand-orange text-[10px] font-bold uppercase tracking-wider mb-6 font-mono self-start">
                  <Award className="w-3.5 h-3.5" />
                  <span>{testimonials[currentSlide].certification}</span>
                </div>

                {/* Main Quote Text */}
                <p className="text-base sm:text-lg md:text-xl text-brand-navy font-display font-semibold italic leading-relaxed mb-8">
                  &ldquo;{testimonials[currentSlide].text}&rdquo;
                </p>

                {/* Profile detail bottom */}
                <div className="flex items-center gap-4.5 border-t border-gray-50 pt-6">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-gray-100 shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-base text-brand-navy leading-tight">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Role: <span className="font-semibold text-brand-navy">{testimonials[currentSlide].role}</span>
                    </p>
                    <p className="text-[10px] text-brand-orange font-semibold tracking-wider uppercase mt-1">
                      Before: {testimonials[currentSlide].statusBefore}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Video Player Segment (Schull Section 5 equivalent) */}
        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-md" id="video-intro-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Player Info left side */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <span className="text-[10px] font-mono bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block">
                Academy Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#02024D] font-display leading-snug">
                Your Techie Hub&apos;s Training Sessions Earn High Praise
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                Our learners share active video walk-through, lab setups, and how they conquered complex commands easily. Play to see clips.
              </p>
              
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                  <Check className="w-4 h-4 text-brand-orange" />
                  <span>Interactive lab walk-through</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                  <Check className="w-4 h-4 text-brand-orange" />
                  <span>Real portfolio review check</span>
                </div>
              </div>
            </div>

            {/* Simulated Responsive High-Fidelity Video Player right side */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] w-full bg-brand-navy rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
                
                {/* Simulated Thumbnail Image overlay */}
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-black/40 to-black/30 bg-cover bg-center select-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=850&q=80')" }}>
                    {/* Upper title */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-brand-orange text-white px-3 py-1 rounded-full font-bold">LIVE STREAM</span>
                      <span className="text-[10px] font-mono text-white/80">Recording • cohort-may-2026</span>
                    </div>

                    {/* Big central Play Trigger */}
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange hover:bg-white text-white hover:text-brand-orange flex items-center justify-center shadow-2xl transition-all scale-100 hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </button>

                    {/* Bottom overlay parameters */}
                    <div className="flex justify-between items-center text-white/90">
                      <div>
                        <p className="font-bold font-display text-sm sm:text-base leading-tight">Learners Share Their Labs Experience</p>
                        <p className="text-[10px] text-white/60">Duration: 18:24 mins • Recorded May 2026</p>
                      </div>
                      <Volume2 className="w-5 h-5 text-white/75" />
                    </div>
                  </div>
                ) : (
                  // PLAYING SIMULATOR (Beautiful dynamic visual waveform stream and active subtitle transcription code changes state)
                  <div className="absolute inset-0 z-10 bg-[#04041C] p-6 flex flex-col justify-between text-white font-mono text-xs select-none">
                    
                    {/* Top panel */}
                    <div className="flex justify-between items-center pb-3 border-b border-white/15">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                        <span className="font-bold text-white text-[10px]">yourtechiehub-practicallab.mp4</span>
                      </div>
                      <button
                        onClick={() => setIsVideoPlaying(false)}
                        className="text-xs text-white/60 hover:text-brand-orange font-bold uppercase"
                      >
                        [Stop Simulation]
                      </button>
                    </div>

                    {/* Central visualization panel */}
                    <div className="flex flex-col items-center justify-center my-4 space-y-4">
                      {/* Wave particles */}
                      <div className="flex items-center gap-1 h-12">
                        {[0.2, 0.8, 0.4, 0.9, 0.3, 0.7, 0.1, 0.9, 0.5, 0.8, 0.2, 0.8, 0.1, 0.9, 0.4, 0.9, 0.2].map((v, keyI) => (
                          <div
                            key={keyI}
                            className="w-1 bg-brand-orange rounded-full"
                            style={{
                              height: `${v * 100}%`,
                              animation: `pulse ${1 + v}s infinite ease-in-out`
                            }}
                          />
                        ))}
                      </div>

                      {/* Transcripts based on current seconds */}
                      <div className="text-center max-w-lg bg-white/5 border border-white/5 p-4 rounded-xl text-xs sm:text-sm font-sans tracking-wide leading-relaxed">
                        <p className="text-brand-orange font-bold mb-1 font-display">Boluwatife is speaking:</p>
                        <p className="text-white/90 italic">
                          &ldquo;...creating AWS subnets and checking our bash logging output was so smooth during the stand-ups. If you have non-tech background, this is definitely where you belong...&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Seek panel bottom controls */}
                    <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-3">
                      <button
                        onClick={() => setIsVideoPlaying(false)}
                        className="p-1.5 rounded-lg hover:bg-white/5 text-white/80 hover:text-white"
                        title="Pause"
                      >
                        <Pause className="w-4 h-4 fill-current" />
                      </button>
                      
                      {/* Fake seek track */}
                      <div className="flex-1 h-1.5 rounded-full bg-white/15 overflow-hidden">
                        <div className="h-full w-2/5 bg-brand-orange rounded-full" />
                      </div>

                      <span className="text-[10px] text-white/50">07:12 / 18:24</span>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
