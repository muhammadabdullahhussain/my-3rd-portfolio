import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechIcon from "../components/TechIcon";
import { iconsList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".techstack-title-wrap", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".techstack-title-wrap", start: "top 90%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full relative py-24 overflow-hidden border-t border-b border-white/[0.02] bg-[#030303]/50">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="techstack-title-wrap opacity-0 text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase">Ecosystem & Tooling</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Digital <span className="gradient-title-blue">Arsenal</span>
          </h3>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-6 md:gap-8">
        {/* Left/Right fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        
        {/* Track 1 (Moves Left) */}
        <div className="marquee">
          <div className="marquee-track">
            {[...iconsList, ...iconsList, ...iconsList].map((icon, i) => (
              <TechIcon key={`t1-${i}`} icon={icon} />
            ))}
          </div>
        </div>

        {/* Track 2 (Moves Right) */}
        <div className="marquee">
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {[...iconsList, ...iconsList, ...iconsList].reverse().map((icon, i) => (
              <TechIcon key={`t2-${i}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
