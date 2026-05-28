import React, { useState } from "react";
import { Users2, Award, Briefcase, MapPin, Building, GraduationCap, ChevronRight, X } from "lucide-react";

interface Alumnus {
  name: string;
  role: string;
  formerRole: string;
  place: string;
  country: string;
  avatar: string;
  achievement: string;
  testimony: string;
  coords: { x: number; y: number }; // percentages
}

export default function AlumniNetwork() {
  const [selectedGrad, setSelectedGrad] = useState<Alumnus | null>(null);

  const grads: Alumnus[] = [
    {
      name: "Tochi",
      role: "AWS DevOps Engineer",
      formerRole: "Customer Success Officer",
      place: "Paystack (Fintech)",
      country: "Lagos, Nigeria",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      achievement: "Certified AWS DevOps Professional",
      testimony: "Before Your Techie Hub, I only knew how to use core support ticket boards. The practice labs on EC2 and pipeline triggers gave me the confidence to pass AWS exams and secure my role.",
      coords: { x: 30, y: 55 }
    },
    {
      name: "Boluwatife",
      role: "Cloud Systems Practitioner",
      formerRole: "Sales Associate",
      place: "Interswitch Group",
      country: "Abuja, Nigeria",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      achievement: "AWS Certified Cloud Practitioner",
      testimony: "Getting certified was step one. The real shift happened during our sprint stand-ups with other learners. Highly recommend to any non-tech person shifting careers.",
      coords: { x: 45, y: 45 }
    },
    {
      name: "Jide",
      role: "Site Reliability Associate",
      formerRole: "Secondary School Biology Teacher",
      place: "Kaluza UK (Remote)",
      country: "London, UK",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      achievement: "Certified AWS Developer Associate",
      testimony: "I was teaching high school biology. Transitioning felt impossible, but Your Techie Hub's instructors broke Linux commands down to simple daily exercises. Now I code infrastructure templates daily.",
      coords: { x: 18, y: 72 }
    },
    {
      name: "Adedolapo",
      role: "Cloud DevOps Architect",
      formerRole: "Mechanical Engineering Graduate",
      place: "Andela",
      country: "Johannesburg, South Africa",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
      achievement: "Kubernetes Certified Administrator (CKA)",
      testimony: "As an engineering grad, I understood math but not code. Docker orchestration and Kubernetes pods were taught so well by our mentors. The project capstone was a complete game changer.",
      coords: { x: 65, y: 68 }
    }
  ];

  return (
    <section id="community" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3.5 py-1.5 rounded-full font-bold uppercase inline-block mb-4">
            Become an Alumnus
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
            Be a part of Our Global <span className="text-brand-orange">DevOps</span> Network
          </h2>
          <p className="text-white/60 mt-4 text-sm sm:text-base leading-relaxed font-sans">
            Our alumni have migrated from retail, education, and hospitality roles into remote Cloud Engineering and SRE positions globally. Check out our connected hub.
          </p>
        </div>

        {/* Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* MAP CANVAS (8/12 Columns) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-8 aspect-[1.5/1] relative flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
            {/* Elegant stylized dots mockup vector representing Sub-Saharan Africa and coordinate systems */}
            <svg
              viewBox="0 0 800 500"
              className="absolute inset-0 w-full h-full opacity-35"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5">
                {/* Simulated geographic grids conforming to visual template */}
                <circle cx="400" cy="250" r="100" className="stroke-white/10" />
                <circle cx="400" cy="250" r="220" className="stroke-white/10" />
                <circle cx="400" cy="250" r="320" className="stroke-white/5" />
                <line x1="0" y1="250" x2="800" y2="250" className="stroke-white/5" />
                <line x1="400" y1="0" x2="400" y2="500" className="stroke-white/5" />
              </g>

              {/* Dotted Connection web paths */}
              <path
                d="M 240 275 L 360 225 L 144 360 M 360 225 L 520 340 M 144 360 L 520 340"
                stroke="url(#mapGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              
              <defs>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7836" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Map Coordinate Markers for Alumnae */}
            {grads.map((grad) => {
              const itemX = (grad.coords.x / 100) * 800;
              const itemY = (grad.coords.y / 100) * 500;
              const isChosen = selectedGrad?.name === grad.name;

              return (
                <button
                  key={grad.name}
                  onClick={() => setSelectedGrad(grad)}
                  className="absolute p-2 group active:scale-95 transition-all"
                  style={{
                    left: `${grad.coords.x}%`,
                    top: `${grad.coords.y}%`
                  }}
                  title={grad.name}
                >
                  <span className="relative flex h-5 w-5">
                    {/* Ring glow */}
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isChosen ? "bg-white" : "bg-brand-orange"
                    }`} />
                    {/* Main dot */}
                    <span className={`relative inline-flex rounded-full h-5 w-5 border border-white/40 shadow-md ${
                      isChosen ? "bg-white text-brand-navy" : "bg-brand-orange"
                    } items-center justify-center text-[10px] font-black`}>
                      ★
                    </span>
                  </span>

                  {/* Tiny Floating Hover Name Label */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-7 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 bg-black/80 px-2 py-0.5 rounded text-[10px] whitespace-nowrap z-30 transition-all font-mono">
                    {grad.name} ({grad.role.split(" ")[0]})
                  </span>
                </button>
              );
            })}

            {/* Hint message overlay */}
            <div className="absolute bottom-4 left-4 text-xs text-white/45 bg-black/40 px-3 py-1 rounded-full border border-white/5 pointer-events-none select-none">
              Click on a star marker to view the transition journey.
            </div>
          </div>

          {/* TRANSITION CARD (4/12 Columns) */}
          <div className="lg:col-span-5 h-[400px]">
            {selectedGrad ? (
              <div
                className="bg-white text-brand-navy rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between h-full relative"
                id="alumni-detail-card"
              >
                {/* Clear action */}
                <button
                  onClick={() => setSelectedGrad(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black hover:bg-gray-100 p-1 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Profile header */}
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={selectedGrad.avatar}
                      alt={selectedGrad.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-orange shadow-md select-none"
                    />
                    <div>
                      <h3 className="text-xl font-bold font-display text-brand-navy leading-tight">
                        {selectedGrad.name}
                      </h3>
                      <p className="text-xs font-semibold text-brand-orange leading-tight mt-0.5">
                        {selectedGrad.role}
                      </p>
                      <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {selectedGrad.country}
                      </p>
                    </div>
                  </div>

                  {/* Career transition pathway */}
                  <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 space-y-1 mt-4">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-gray-400 font-bold uppercase tracking-wider">Before</span>
                      <span className="text-brand-orange font-bold uppercase tracking-wider font-display">After</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-medium">
                      <span className="text-gray-500 font-sans">{selectedGrad.formerRole}</span>
                      <span className="text-brand-navy text-[13px] font-bold">{selectedGrad.role}</span>
                    </div>
                  </div>

                  {/* Placement info */}
                  <div className="flex items-start gap-2 mt-4 text-xs font-sans text-gray-600">
                    <Building className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-brand-navy block">Currently Placed at:</span>
                      {selectedGrad.place}
                    </div>
                  </div>
                </div>

                {/* Testimony block quote */}
                <div className="border-t border-gray-100 pt-5 mt-4">
                  <div className="flex items-center gap-2 mb-2 text-xs font-extrabold text-[#02024D] uppercase tracking-wider">
                    <Award className="w-4 h-4 text-brand-orange" />
                    <span>{selectedGrad.achievement}</span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic block line-clamp-4 font-sans">
                    &ldquo;{selectedGrad.testimony}&rdquo;
                  </p>
                </div>
              </div>
            ) : (
              // Default state widget
              <div
                className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full text-white/60"
                id="alumni-default-card"
              >
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8 text-brand-orange animate-bounce" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2">Our Talents Stories</h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans max-w-xs">
                  Read inspiring transition journeys of classmates who transitioned from retail and non-IT roles into global DevOps engineers. 
                </p>
                <button
                  onClick={() => setSelectedGrad(grads[0])}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange bg-brand-orange/5 border border-brand-orange/20 px-4 py-2 rounded-xl hover:bg-brand-orange/10 transition-colors"
                >
                  <span>Select Jide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
