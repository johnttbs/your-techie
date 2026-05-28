import React from "react";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "iconOnly";
  size?: "sm" | "md" | "lg" | "xl";
  light?: boolean;
}

export default function Logo({
  className = "",
  variant = "horizontal",
  size = "md",
  light = false,
}: LogoProps) {
  // Determine size classes for the icon
  const iconSizeClass = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-20 h-20",
  }[size];

  // Determine logo text sizes
  const textTitleClass = {
    sm: "text-sm tracking-wider font-bold",
    md: "text-lg tracking-wider font-bold font-display",
    lg: "text-2xl tracking-widest font-black font-display",
    xl: "text-4xl tracking-widest font-black font-display",
  }[size];

  const subtextClass = {
    sm: "text-[8px] tracking-[0.2em]",
    md: "text-[10px] tracking-[0.3em]",
    lg: "text-xs tracking-[0.4em]",
    xl: "text-lg tracking-[0.4em] mt-1",
  }[size];

  // Brand colors
  const primaryColor = light ? "text-white" : "text-brand-navy";
  const accentColor = light ? "text-brand-orange" : "text-brand-orange";

  const renderIcon = () => (
    <svg
      viewBox="0 0 100 100"
      className={`${iconSizeClass} shrink-0 transition-all duration-300`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left-most diagonal bar slanting down-right */}
      <path
        d="M 22 36 L 50 64"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={light ? "text-white" : "text-brand-navy"}
      />
      {/* Inner Chevron */}
      <path
        d="M 37 35 L 50 48 L 63 35"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={light ? "text-white" : "text-brand-navy"}
      />
      {/* Right-most diagonal bar slanting down-left */}
      <path
        d="M 73 41 L 60 54"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={light ? "text-white" : "text-brand-navy"}
      />
    </svg>
  );

  if (variant === "iconOnly") {
    return <div className={`inline-flex items-center justify-center ${className}`}>{renderIcon()}</div>;
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`} id="brand-logo-vertical">
        {renderIcon()}
        <div className={`mt-3 flex flex-col items-center ${primaryColor}`}>
          <span className={`${textTitleClass} uppercase font-black leading-none`}>
            Your Techie
          </span>
          <span className={`${subtextClass} uppercase font-medium mt-0.5 tracking-[0.35em] text-brand-orange`}>
            Hub
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`} id="brand-logo-horizontal">
      {renderIcon()}
      <div className={`flex flex-col ${primaryColor}`}>
        <span className={`${textTitleClass} uppercase font-extrabold leading-tight`}>
          Your Techie
        </span>
        <span className={`${subtextClass} uppercase font-bold tracking-[0.3em] text-brand-orange`}>
          Hub
        </span>
      </div>
    </div>
  );
}
