import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  // Smooth fake progress
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Fast at first, then slow down, then finish
      if (currentProgress < 85) {
        currentProgress += Math.random() * 15;
      } else if (currentProgress < 99) {
        currentProgress += Math.random() * 2;
      }
      
      if (currentProgress > 100) currentProgress = 100;
      
      setProgress(Math.floor(currentProgress));
      
      if (currentProgress === 100) {
        clearInterval(interval);
      }
    }, 150);

    // Force complete after a maximum time (e.g. 2.5s) to never hang
    const maxTimeout = setTimeout(() => {
      setProgress(100);
      clearInterval(interval);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(maxTimeout);
    };
  }, []);

  useGSAP(() => {
    if (progress >= 100) {
      gsap.to(".loader-screen", {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.3,
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    }
  }, [progress, onComplete]);

  return (
    <div className="loader-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014]">
      {/* Logo */}
      <div className="relative mb-8">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center animate-pulse-glow"
          style={{ background: "linear-gradient(135deg,#598eff,#1c34ff)" }}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        {/* Spinning ring */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: "3s" }}
          viewBox="0 0 80 80"
        >
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="url(#loader-grad)"
            strokeWidth="2"
            strokeDasharray="226"
            strokeDashoffset={226 - (226 * progress) / 100}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#598eff" />
              <stop offset="100%" stopColor="#ff28d5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Progress text */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <p className="gradient-title text-xl font-bold tracking-widest">
          Muhammad Abdullah
        </p>
        <p className="text-white/40 text-sm tracking-wider">Loading Experience...</p>
      </div>

      {/* Progress bar */}
      <div className="loader-progress-bar w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-6">
        <div
          className="loader-progress-fill h-full bg-gradient-to-r from-[#598eff] to-[#ff28d5] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="gradient-title-blue text-3xl font-bold tabular-nums">
        {progress}%
      </p>
    </div>
  );
};

export default Loader;
