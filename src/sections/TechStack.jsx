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
      gsap.fromTo(".techstack-title", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".techstack-title", start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="techstack-title opacity-0 text-center mb-14">
          <span className="text-white/30 text-sm font-medium tracking-[0.3em] uppercase mb-3 block">Tools & Technologies</span>
          <h3 className="text-white text-3xl font-bold">My Tech Arsenal</h3>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="marquee relative">
        <div className="tech-gradient-left absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" />
        <div className="tech-gradient-right absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" />
        <div className="marquee-track py-4">
          {[...iconsList, ...iconsList].map((icon, i) => (
            <TechIcon key={i} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
