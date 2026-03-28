import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const Loader = () => {
  const { progress } = useProgress();

  useGSAP(() => {
    if (progress >= 100) {
      gsap.to(".loader-screen", {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.3,
        onComplete: () => {
          const el = document.querySelector(".loader-screen");
          if (el) el.style.display = "none";
        },
      });
    }
  }, [progress]);

  return (
    <div className="loader-screen">
      {/* Logo */}
      <div className="relative">
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
      <div className="flex flex-col items-center gap-3">
        <p className="gradient-title text-xl font-bold tracking-widest">
          Muhammad Abdullah
        </p>
        <p className="text-white/40 text-sm tracking-wider">Loading Experience...</p>
      </div>

      {/* Progress bar */}
      <div className="loader-progress-bar">
        <div
          className="loader-progress-fill"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="gradient-title-blue text-3xl font-bold tabular-nums">
        {Math.floor(Math.min(progress, 100))}%
      </p>
    </div>
  );
};

export default Loader;
