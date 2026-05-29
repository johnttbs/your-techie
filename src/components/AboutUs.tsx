import React from "react";
import { ArrowUpRight, ShieldCheck, Milestone, Compass, Target, HeartHandshake, Eye } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="who-we-are" className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER PART: WHO WE ARE (Slide 2 equivalent) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Panel: Deep Navy bold presentation (mimicking slide 2 left side) */}
          <div className="lg:col-span-3 bg-brand-navy rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[350px]">
            {/* Corner pattern */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-orange/10 border border-brand-orange/20" />
            
            <div className="flex justify-between items-start z-10">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                Est. May 2026
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-orange border border-white/10">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="my-8 z-10">
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-none mb-4">
                Who We <br />Are
              </h2>
              <div className="h-1.5 w-16 bg-brand-orange rounded-full" />
            </div>

            <div className="flex items-center gap-3 z-10 border-t border-white/10 pt-4">
              <span className="text-xs text-white/60 font-mono">SOCIAL</span>
              <span className="text-sm font-semibold text-brand-orange">@yourtechiehub</span>
            </div>
          </div>

          {/* Middle Panel: Founder Spotlight Portrait Card using the newly uploaded picture */}
          <div 
            className="lg:col-span-4 rounded-3xl overflow-hidden relative group shadow-xl border border-gray-100 bg-[#121212] min-h-[420px] flex flex-col justify-end select-none"
          >
            {/* Image of Mary Ajayi - referenced securely with referrerPolicy */}
            <img
              src="/src/assets/images/mary_ajayi_who_we_are.png"
              alt="Mary Ajayi - Founder of Your Techie Hub"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            />
            
            {/* Elegant overlay gradient to guarantee rich text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none z-10" />
            
            {/* Contact or status indicator */}
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-brand-navy/95 backdrop-blur-xs text-white border border-white/10 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm font-sans flex items-center gap-1.5">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                Founder Spotlight
              </span>
            </div>

            {/* Card Information */}
            <div className="p-6 z-10 text-white relative">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/20 border border-brand-orange/30 px-2.5 py-0.5 rounded-md inline-block mb-2 font-mono">
                Leadership
              </span>
              
              <h4 className="text-2xl font-black font-display tracking-tight leading-none mb-1 text-white">
                Mary Ajayi
              </h4>
              <p className="text-xs text-white/95 font-medium font-sans mb-3">
                Founder &amp; Academy Director
              </p>

              {/* Founder description line */}
              <p className="text-[11px] text-white/70 leading-relaxed font-sans line-clamp-2">
                Driving elite educational standards and solid practical DevOps/Cloud training pathways at Your Techie Hub.
              </p>
            </div>
          </div>

          {/* Right Panel: Content details with tagline in quote (mimicking slide 2 right side) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 font-sans">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-brand-orange font-sans">
                Our Tagline
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1 font-display">
                &ldquo;Be a Techie&rdquo;
              </h3>
            </div>

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p className="font-semibold text-brand-navy text-base border-l-4 border-brand-orange pl-4 bg-orange-50/55 py-1.5 rounded-r font-sans">
                Your Techie Hub is a practical Tech Academy focused on helping aspiring professionals transition into tech through hands-on learning, elite mentorship, and real-world projects.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm font-sans">
                We guide complete beginners and tech aspirants with project environments and career training, ensuring every step is fully supported towards standard real-world requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-brand-navy">100% Practical</h4>
                  <p className="text-[11px] text-gray-500 leading-tight">Live labs &amp; cloud setups</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Milestone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-brand-navy font-sans">Career Support</h4>
                  <p className="text-[11px] text-gray-500 leading-tight font-sans">Mentoring &amp; job prep</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER PART: WHY WE EXIST / VISION & MISSION (Slide 3 equivalent) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left Panel: Why We Exist Presentation */}
          <div className="lg:col-span-5 bg-brand-navy rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[350px]">
            {/* Visual background (Slide 3 orange half-circle design styled gracefully) */}
            <div className="absolute top-1/2 -right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-orange border border-brand-orange/30 translate-x-12 shrink-0 pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                Purpose
              </span>
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-brand-orange border border-white/10">
                <span>🌟</span>
              </div>
            </div>

            <div className="my-8 z-10">
              <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight leading-none mb-4">
                Why We <br />Exist?
              </h2>
              <div className="h-1 w-20 bg-brand-orange rounded-full" />
            </div>

            <div className="flex items-center gap-3 z-10 border-t border-white/10 pt-4">
              <span className="text-xs text-white/60 font-mono font-sans inline-block">GOAL</span>
              <span className="text-sm font-semibold text-brand-orange">Empower &amp; Elevate Tech Talents</span>
            </div>
          </div>

          {/* Right Panel: Vision & Mission Blocks with large elegant layout */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Vision Block */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative group hover:border-brand-orange/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy/[0.02] rounded-bl-full pointer-events-none group-hover:bg-brand-orange/[0.04] transition-all" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-all">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy font-display mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To build a recognized, impactful, and globally trusted Tech Academy that serves as a launchpad for world-class technical talent.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-bold text-brand-orange flex items-center gap-1.5 uppercase tracking-wider">
                <span>Recognized &amp; Impactful</span>
              </div>
            </div>

            {/* Mission Block */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative group hover:border-brand-orange/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy/[0.02] rounded-bl-full pointer-events-none group-hover:bg-brand-orange/[0.04] transition-all" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy font-display mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  Empower aspiring tech professionals to build real-world skills, unwavering confidence, and rewarding career growth opportunities in modern organizations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-bold text-brand-navy flex items-center gap-1.5 uppercase tracking-wider">
                <span>Empower &amp; Accelerate</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
