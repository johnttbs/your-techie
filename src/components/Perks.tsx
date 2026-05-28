import React from "react";
import { Terminal, Users, GraduationCap, Award, HelpCircle, ShieldCheck } from "lucide-react";

export default function Perks() {
  const perkCards = [
    {
      title: "Linux Fundamental & Fully Guided Labs",
      desc: "Get up to speed on Linux commands and DevOps concepts. Practice in actual sandboxed terminal interfaces and real-world AWS instance environments.",
      icon: <Terminal className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "One-on-One Mentorship",
      desc: "Regular check-ins and direct feedback from experienced DevOps Architects. Break through blocking problems and acquire correct coding best practices.",
      icon: <Users className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "Employability Training & Soft Skills",
      desc: "Prepare for high-level interviews with mock technical sessions, professional resume audits, Agile/Scrum workflow reviews, and portfolio feedback.",
      icon: <GraduationCap className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "Supportive Alumni & Peer Community",
      desc: "Join a diverse, cooperative community of peers. Build code templates together, share interview leads, and participate in collaborative hackathons.",
      icon: <Award className="w-6 h-6 text-brand-orange" />,
    }
  ];

  return (
    <section id="perks" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] font-mono tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3.5 py-1.5 rounded-full font-bold uppercase inline-block mb-4">
            Perks of Joining Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
            Perks <span className="text-brand-orange">of</span> Signing Up
          </h2>
          <p className="text-white/70 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            We don&apos;t just teach tools. We structure your entire learning environment to mimic actual enterprise teams, giving you a definitive edge.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" id="perks-grid">
          {perkCards.map((p, index) => (
            <div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex items-start gap-5 hover:border-brand-orange/40 hover:bg-white/8 transition-all duration-300 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all text-brand-orange">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white font-display mb-2">
                  {p.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
