import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleCode, ArrowRight } from "lucide-react";

interface FAQPair {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList: FAQPair[] = [
    {
      q: "What is Your Techie Hub?",
      a: "Your Techie Hub is a practical, growth-focused Tech Academy dedicated to helping aspiring tech professionals transition into modern domains like Cloud and DevOps. We deliver this through hands-on labs, peer stand-ups, direct industry mentorship, and real placement support."
    },
    {
      q: "What is the duration of the program?",
      a: "Our core Cloud & DevOps programs run for exactly 18 weeks (about 4.5 months) of intensive dual-track training, followed by optional internship placements and technical portfolio reviews."
    },
    {
      q: "Can I apply for the program if I'm not a graduate or if I'm a beginner?",
      a: "Yes! In fact, over 65% of our learners join us with absolutely zero history in IT. Our syllabus begins on week one with absolute foundational operating concepts (VMS, SSH, terminal controls) before scaling to orchestrate cloud infrastructures."
    },
    {
      q: "Does Your Techie Hub provide internship opportunities to help talents gain real experience?",
      a: "Absolutely. We partner with African and global startups to provision 3-month remote team-based internship slots for successful graduates, ensuring they can put their learned DevOps frameworks to work in actual production setups."
    },
    {
      q: "Can I cancel or apply for a refund?",
      a: "Yes. To protect your investment, we offer a 100% money-back guarantee. If you decide the learning pace or DevOps layout is not for you within the first 14 days of starting, we issue a prompt refund, no queries asked."
    },
    {
      q: "Must I be a Nigerian citizen to apply?",
      a: "No! While your classroom colleagues include highly talented graduates from Nigeria and Sub-Saharan Africa, our sessions are held 100% remotely. We accommodate candidates worldwide with global schedules and remote links."
    },
    {
      q: "I work full time. What options do I have?",
      a: "The program is engineered for flexible progression. Live labs and core alignment stand-ups are held on weekends or live during evenings, and all events are recorded with slack mentoring groups reachable 24/7."
    },
    {
      q: "Will a certificate of completion be issued after successful completion of the program?",
      a: "Yes. Upon completing your capstone pipeline deployment, you are awarded an accredited Certificate of Completion. We also provide official badges reflecting AWS and Kubernetes ready credentials to highlight on LinkedIn."
    },
    {
      q: "Is a job guaranteed for me after training?",
      a: "We do not sell mock guarantees, but we build absolute capability. Your Techie Hub provides intense soft skills audits, mock technical whiteboard reviews, professional resume optimization, and direct match-making to active global cloud partner channels."
    },
    {
      q: "How flexible is the program?",
      a: "Extremely flexible. The dual format matches asynchronous lab preparation with synchronous technical discussions. This ensures you can scale your studying whether you hold full-time employment or are currently in university."
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-96 bg-brand-orange/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3.5 py-1.5 rounded-full font-bold uppercase inline-block mb-4">
            FAQ Panel
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
            Answers to our frequently asked questions
          </h2>
          <p className="text-white/60 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Everything you need to know about Your Techie Hub, schedules, eligibility, or payment refunds.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4" id="faqs-accordion-list">
          {faqList.map((f, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-white/10 border-brand-orange"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(i)}
                  className="w-full flex items-center justify-between p-5 text-left select-none text-white focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-brand-orange font-display">
                    {f.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/50 shrink-0 select-none ml-4 transition-transform ${
                    isOpen ? "rotate-180 text-brand-orange" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Body Content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                  <div className="p-5 pt-0 border-t border-white/5 text-white/70 text-xs sm:text-sm font-sans leading-relaxed">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ask custom question CTA banner */}
        <div className="mt-12 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6" id="faq-ask-custom">
          <div className="flex items-center gap-4.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
              <MessageCircleCode className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">Have a custom question not covered here?</h4>
              <p className="text-white/60 text-xs mt-1 font-sans">Our support desk is glad to assist you via WhatsApp or Email.</p>
            </div>
          </div>
          <a
            href="mailto:yourtechiehub@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange bg-brand-orange/10 hover:bg-brand-orange hover:text-white border border-brand-orange/20 px-5 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95"
          >
            <span>Ask Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
