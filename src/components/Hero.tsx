import React from "react";
import { ArrowUpRight, Cloud, Terminal, ShieldAlert, Award, ChevronRight, Server, Globe2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onRegisterClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-navy pt-36 pb-20 md:pb-28 overflow-hidden flex items-center"
    >
      {/* Visual background decorations - absolute zero lag */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft elegant gradient mesh */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-navy-light/10 rounded-full filter blur-[150px]" />
        {/* Small grid pattern subtle overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero text panel */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest self-center lg:self-start mb-2 shadow-sm animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Tagline: &ldquo;Be a Techie&rdquo;</span>
            </div>

            {/* Core Titles */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-display">
              Advance your Career <br className="hidden sm:inline" />
              in <span className="text-brand-orange relative inline-block">
                Cloud &amp; DevOps
                <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/30 rounded-lg" />
              </span>
            </h1>

            {/* Sub-headline quote from the flyer */}
            <div className="bg-white/5 border-l-4 border-brand-orange rounded-r-xl p-5 text-left max-w-2xl mx-auto lg:mx-0">
              <p className="text-white font-semibold text-lg sm:text-xl font-display leading-relaxed">
                Building a practical and growth-focused Tech Academy together.
              </p>
              <p className="text-white/70 text-sm mt-1.5 leading-relaxed">
                We focus on helping aspiring tech professionals transition into tech through hands-on learning, real-world projects, direct mentorship, and deep community support.
              </p>
            </div>

            {/* Interactive Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white font-extrabold text-base rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 group border border-brand-orange/20"
              >
                Enroll in Next Cohort
                <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-base rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center gap-2 active:scale-95"
              >
                View Syllabus
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Live stats or bullets */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-white text-2xl font-black">241+</div>
                <div className="text-white/60 text-xs mt-0.5">Learners &amp; Mentors</div>
              </div>
              <div>
                <div className="text-white text-2xl font-black">65%</div>
                <div className="text-white/60 text-xs mt-0.5">Non-IT Backgrounds</div>
              </div>
              <div>
                <div className="text-white text-2xl font-black">81%</div>
                <div className="text-white/60 text-xs mt-0.5">Knowledge Retention</div>
              </div>
            </div>
          </div>

          {/* Premium Right Side Graphics Lockup (The laptop/cloud/DevOps orchestration illustration) */}
          <div className="lg:col-span-12 xl:col-span-5 flex justify-center relative select-none lg:mt-0 mt-8">
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 p-4 border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
              {/* Backside circular nodes */}
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-brand-orange/10 border border-brand-orange/20 animate-pulse flex items-center justify-center text-brand-orange">
                <Cloud className="w-10 h-10" />
              </div>

              <div className="absolute bottom-8 right-8 w-28 h-28 rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center text-white/80">
                <Terminal className="w-10 h-10 text-brand-orange mb-1" />
                <span className="text-[10px] font-mono">sh admin.sh</span>
              </div>

              {/* Glowing decorative rings */}
              <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-white/10 animate-[spin_50s_linear_infinite]" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-brand-orange/20 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Center Content: Mock Cloud Topology dashboard */}
              <div className="relative z-10 w-full max-w-[340px] bg-brand-navy border border-white/10 rounded-2xl shadow-2xl p-4 font-mono text-xs select-text">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  </div>
                  <span className="text-[10px] text-white/50 bg-white/5 px-2 py-0.5 rounded">yourtechiehub.com</span>
                </div>

                <div className="space-y-2.5 text-white/90">
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                    <Server className="w-4 h-4 text-brand-orange animate-pulse" />
                    <div>
                      <p className="font-bold text-[11px] text-white">cluster-devops-01</p>
                      <p className="text-[9px] text-white/60">Status: <span className="text-green-400">Stable</span> (4 Nodes)</p>
                    </div>
                  </div>

                  <div className="space-y-1 bg-black/30 p-2 rounded text-[10px] font-mono leading-relaxed">
                    <p className="text-brand-orange">$ npx deploy --target=cloud</p>
                    <p className="text-white/60">&gt; Building Docker container...</p>
                    <p className="text-white/60">&gt; Push stable registry (AWS ECR)</p>
                    <p className="text-green-400">&gt; Terraform apply complete! [2.4s]</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-white/5 p-1.5 rounded text-center">
                      <p className="text-white/50">PLATFORMS</p>
                      <p className="font-bold text-white mt-0.5">AWS &bull; Azure</p>
                    </div>
                    <div className="bg-white/5 p-1.5 rounded text-center">
                      <p className="text-white/50">CONTAINERS</p>
                      <p className="font-bold text-brand-orange mt-0.5 font-display text-[11px]">Docker &bull; K8s</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Little Floating Badge */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-brand-navy border border-white/10 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                <div className="p-1 rounded bg-brand-orange/10 text-brand-orange">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left font-display">
                  <p className="text-[10px] font-bold text-gray-400 leading-none">PLACEMENT</p>
                  <p className="text-xs font-black text-brand-navy leading-tight mt-0.5">Top Tier Hiring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
