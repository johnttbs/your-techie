import React from "react";
import { Shield, Sparkles, BrainCircuit, BarChart3, GraduationCap, Briefcase, Compass, ArrowUpRight } from "lucide-react";

export default function FutureGoals() {
  const goals = [
    {
      id: "cyber-software",
      title: "Cybersecurity & Software Engineering",
      tag: "Expansion Phase I &bull; Q3 2026",
      icon: <Shield className="w-6 h-6 text-brand-orange" />,
      items: ["Software engineering workflows", "Full-Stack engineering patterns", "Penetration testing audits", "Network defense controls"],
      description: "Equipping developers with security-first coding techniques and secure core APIs to withstand high vulnerability threats.",
      badgeColor: "bg-red-50 text-red-700 border-red-100"
    },
    {
      id: "ml-ai-data",
      title: "Machine Learning, AI & Data Analysis",
      tag: "Expansion Phase II &bull; Q4 2026",
      icon: <BrainCircuit className="w-6 h-6 text-brand-orange" />,
      items: ["Prompt Engineering & LLMs", "Data visualization with Python/D3", "Custom predictive models", "Database telemetry (SQL/Pandas)"],
      description: "Harnessing predictive models and generative intelligence pipelines to solve business strategy questions and big data challenges.",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100"
    },
    {
      id: "career-programs",
      title: "Tech Career & Additional Programs",
      tag: "Expansion Phase III &bull; Q1 2027",
      icon: <GraduationCap className="w-6 h-6 text-brand-orange" />,
      items: ["CV Audit & Optimization", "Hiring partnerships & networking", "Mock behavioral sessions", "Global tech leadership skills"],
      description: "Guiding candidates through strict resume audits, soft skills workshops, portfolio polishing, and placement in international networks.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-100"
    }
  ];

  return (
    <section id="future-goals" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Absolute vectors */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/[0.02] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-brand-orange animate-spin-slow" />
            <span>Academy Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight text-brand-navy">
            Future Expansion <span className="text-brand-orange">Goals</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed font-sans">
            Our vision extends beyond Cloud and DevOps. Discover the specialized career pathways we are building to help you lead the next wave of technological innovation.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" id="future-goals-grid">
          {goals.map((g, idx) => (
            <div
              key={g.id}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Tagline info */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
                    {g.icon}
                  </div>
                  <div className={`text-[10px] font-bold px-3 py-1 rounded-full border ${g.badgeColor} uppercase tracking-wider font-mono`}>
                    Pending Launch
                  </div>
                </div>

                {/* Tracking info */}
                <span className="text-[10px] font-semibold text-brand-orange uppercase tracking-widest font-mono">
                  {g.tag}
                </span>

                {/* Main title */}
                <h3 className="text-2xl font-extrabold text-brand-navy mt-2 mb-4 font-display group-hover:text-brand-orange transition-colors">
                  {g.title}
                </h3>

                {/* Custom description paragraph */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {g.description}
                </p>

                {/* Sub-items bullets from PDF flyer text */}
                <div className="space-y-3.5 border-t border-gray-100 pt-6">
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase block mb-1">
                    Track Curriculum Focus:
                  </span>
                  {g.items.map((it, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span className="text-gray-700 text-xs sm:text-sm font-sans font-medium">{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expansion state */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-brand-orange transition-colors">
                <span className="uppercase tracking-wider">Interest Registration Open</span>
                <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-orange group-hover:text-white transition-all transform group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden shadow-xl" id="future-goals-bottom">
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-brand-orange/10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Join as a Pilot Member</span>
              <h3 className="text-2xl font-extrabold font-display mt-1">Want to pilot or support these upcoming pathways?</h3>
              <p className="text-white/70 text-sm mt-1.5 font-sans">Share your input on our curriculum or register for early notifications.</p>
            </div>
            <button
              onClick={() => {
                const doc = document.getElementById("footer");
                if (doc) doc.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-6 py-3 rounded-xl border border-white/20 hover:border-white/30 transition-all whitespace-nowrap active:scale-95"
            >
              Get Notified
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
