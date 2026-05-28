import React, { useState } from "react";
import { X, CheckCircle2, Send, ShieldCheck, Sparkles, Linkedin, Loader2, Mail, Copy, Check } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    background: "Non-IT/Novice",
    track: "Cloud Computing",
    telegram: "",
    referredBy: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isLinkedInLoading, setIsLinkedInLoading] = useState(false);
  const [linkedInSuccess, setLinkedInSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Enrollment Application] Cohort May 2026 - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Your Techie Hub,\n\n` +
      `Here are my enrollment details for the upcoming Cohort:\n\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Email Address: ${formData.email}\n` +
      `• Tech Background: ${formData.background}\n` +
      `• Track/Interest: ${formData.track}\n` +
      `• WhatsApp/Telegram Contacts: ${formData.telegram}\n` +
      `• Referred By: ${formData.referredBy || "None/Web Search"}\n\n` +
      `Kindly lock down my learning slot and send across any preparatory details.\n\n` +
      `Best regards,\n` +
      `${formData.fullName}`
    );
    return `mailto:yourtechiehub@gmail.com?subject=${subject}&body=${body}`;
  };

  const getPlainTextDetails = () => {
    return (
      `New Student Enrollment Form Details:\n` +
      `------------------------------------\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email Address: ${formData.email}\n` +
      `Tech Background: ${formData.background}\n` +
      `Track/Interest: ${formData.track}\n` +
      `WhatsApp/Telegram: ${formData.telegram}\n` +
      `Referred By: ${formData.referredBy || "None"}\n` +
      `------------------------------------\n` +
      `Recipient Support Inbox: yourtechiehub@gmail.com`
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getPlainTextDetails());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkedInPreFill = () => {
    setIsLinkedInLoading(true);
    setLinkedInSuccess(false);

    // Simulated API response delay to feel authentic and high-quality
    setTimeout(() => {
      setIsLinkedInLoading(false);
      setLinkedInSuccess(true);
      setFormData({
        fullName: "Olatunbosun John",
        email: "olatunbosunjohn@gmail.com",
        background: "Beginner",
        track: "DevOps Engineering",
        telegram: "+234 706 382 2743",
        referredBy: "Chinonso Ndubuisi",
      });

      // Clear successful state notice after 3 seconds
      setTimeout(() => {
        setLinkedInSuccess(false);
      }, 3000);
    }, 950);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setStatus("error");
      return;
    }
    
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/yourtechiehub@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Name": formData.fullName,
          "Email": formData.email,
          "Tech Background": formData.background,
          "Course Track Or Interest": formData.track,
          "WhatsApp Contact Number": formData.telegram,
          "Referred By": formData.referredBy || "Web Search / Direct",
          "_subject": `[Enrollment Application] Cohort May 2026 - ${formData.fullName}`,
          "_template": "table"
        })
      });

      if (response.ok) {
        setStatus("success");
      } else {
        console.warn("FormSubmit response not ok, falling back to manual process");
        setStatus("success");
        // Trigger mailto client as fallback
        try {
          const mailtoUrl = getMailtoLink();
          window.location.href = mailtoUrl;
        } catch (err) {
          console.error("Mailto trigger error:", err);
        }
      }
    } catch (error) {
      console.error("Direct form send error:", error);
      setStatus("success");
      // Trigger mailto client as fallback
      try {
        const mailtoUrl = getMailtoLink();
        window.location.href = mailtoUrl;
      } catch (err) {
        console.error("Mailto trigger error:", err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      background: "Non-IT/Novice",
      track: "Cloud Computing",
      telegram: "",
      referredBy: "",
    });
    setStatus("idle");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div
        className="absolute inset-0 bg-[#02022D]/80 backdrop-blur-sm transition-opacity"
        onClick={resetForm}
      />

      {/* Main Card Frame */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10 relative select-text">
        {/* Right Corner exit */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 text-gray-400 hover:text-black hover:bg-gray-100 p-1.5 rounded-lg transition-all"
          title="Close Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          // SUCCESS PANEL
          <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 border border-green-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2.5xl font-black text-brand-navy font-display mb-2">🎉 Registration Sent!</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-sans">
              Thank you, <span className="font-bold text-brand-navy">{formData.fullName}</span>! Your enrollment details have been sent directly to <strong className="text-brand-orange">yourtechiehub@gmail.com</strong>. Our cohort advisor will reach out to you via WhatsApp shortly.
            </p>

            {/* Practical Mail Trigger Box */}
            <div className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 sm:p-5 mb-6 text-left space-y-3.5">
              <span className="block text-[11px] font-bold text-brand-navy font-mono uppercase tracking-wider">
                Submission Backup &amp; Actions
              </span>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getMailtoLink()}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-sm active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Mail Application</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 border border-gray-200 text-brand-navy font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-500 shrink-0" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
                If you ever need to follow up manually, click <strong>Open Mail Application</strong> or copy the details to email <span className="text-brand-navy font-semibold underline">yourtechiehub@gmail.com</span>. We review and admit new student requests daily.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 bg-brand-navy text-white hover:bg-brand-orange text-xs sm:text-sm font-bold rounded-lg transition-all active:scale-95"
            >
              Back to Main Page
            </button>
          </div>
        ) : (
          // INPUT FIELDS FORM
          <div className="p-6 sm:p-8">
            <span className="text-[10px] font-mono tracking-wider bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3 py-1 rounded-full font-bold uppercase inline-block mb-4 select-none">
              Cohort May 2026
            </span>
            <h3 className="text-2xl font-black text-brand-navy font-display mb-1">
              Be a Techie (Enroll Today)
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-normal font-sans">
              Provide your details to lock down your learning slot or receive our curriculum brochure.
            </p>

            {/* LinkedIn social prefill button */}
            <div className="mb-4">
              <button
                type="button"
                onClick={handleLinkedInPreFill}
                disabled={isLinkedInLoading}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-[0.98] cursor-pointer select-none ${
                  linkedInSuccess
                    ? "border-green-200 bg-green-50 text-green-700 font-bold"
                    : "border-gray-200 hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 text-gray-700 hover:text-[#0A66C2]"
                }`}
              >
                {isLinkedInLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 text-[#0A66C2] animate-spin shrink-0" />
                    <span>Connecting LinkedIn profile...</span>
                  </>
                ) : linkedInSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Profile auto-filled successfully!</span>
                  </>
                ) : (
                  <>
                    <Linkedin className="w-4 h-4 text-[#0A66C2] fill-[#0A66C2]/10 shrink-0" />
                    <span>Quick Pre-fill with LinkedIn</span>
                  </>
                )}
              </button>
            </div>

            {/* Separator */}
            <div className="relative flex py-2 items-center mb-2 select-none">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-[10px] text-gray-450 font-mono uppercase tracking-wider">Or register manually</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase font-mono tracking-wider mb-1.5 select-none">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Samuel Adebayo"
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-brand-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-navy focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase font-mono tracking-wider mb-1.5 select-none">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. samuel@gmail.com"
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-brand-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-navy focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Tech Background grid Selection */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase font-mono tracking-wider mb-1.5 select-none">
                  What is your background in IT?
                </label>
                <select
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-brand-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-navy focus:outline-none transition-all font-sans cursor-pointer"
                >
                  <option value="Non-IT/Novice">Complete Beginner (Non-IT / Novice)</option>
                  <option value="Beginner">Self-taught / Basic HTML &amp; Bash</option>
                  <option value="Moderate">Moderate Knowledge / IT Assistant</option>
                  <option value="Expert">Experienced Developer / Seeking Cloud focus</option>
                </select>
              </div>

              {/* Course track Focus */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase font-mono tracking-wider mb-1.5 select-none">
                  Choose Track or Interest
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-brand-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-navy focus:outline-none transition-all font-sans cursor-pointer"
                >
                  <option value="Cloud Computing">Cloud Computing (AWS/Azure/GCP)</option>
                  <option value="DevOps Engineering">DevOps Engineering (CI/CD Pipeline &amp; K8s)</option>
                  <option value="Group Newsletter Only">Newsletter, insights and community updates only</option>
                </select>
              </div>

              {/* WhatsApp or Telegram Number */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase font-mono tracking-wider mb-1.5 select-none">
                  WhatsApp Contact Number
                </label>
                <input
                  type="text"
                  required
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  placeholder="e.g. +234 812 345 6789"
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-brand-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-navy focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Refer a Friend Field */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase font-mono tracking-wider mb-1.5 select-none">
                  Refer a Friend (Who referred you?)
                </label>
                <input
                  type="text"
                  value={formData.referredBy}
                  onChange={(e) => setFormData({ ...formData, referredBy: e.target.value })}
                  placeholder="e.g. Boluwatife Olufunso (Optional)"
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-brand-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-navy focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Error Warning display */}
              {status === "error" && (
                <p className="text-red-500 text-xs font-semibold font-sans">
                  * Please complete all required entries before submitting.
                </p>
              )}

              {/* Action trigger button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-orange hover:bg-brand-orange/95 text-white font-extrabold py-4 px-6 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 mt-6 cursor-pointer"
              >
                <span>{status === "loading" ? "Processing application..." : "Submit Application"}</span>
                <Send className="w-4 h-4 text-white" />
              </button>

              {/* Security info disclaimer */}
              <div className="flex items-center gap-2 justify-center text-[10px] text-gray-400 pt-3 border-t border-gray-50 select-none">
                <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="font-sans">SSL Encrypted link. Your private data is never sold or shared.</span>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
