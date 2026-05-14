import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".exp-title-wrap", { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: ".exp-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
            });
            gsap.fromTo(".exp-card", { opacity: 0, x: -60 }, {
                opacity: 1, x: 0, duration: 0.7, ease: "power3.out", stagger: 0.15,
                scrollTrigger: { trigger: ".exp-timeline", start: "top 80%", toggleActions: "play none none reverse" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="w-full relative overflow-hidden py-16 md:py-24">
            {/* Spheres */}
            <div className="gradient-sphere exp-sphere-1" />
            <div className="gradient-sphere exp-sphere-2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title Section - Professional Refinement */}
                <div className="exp-title-wrap mb-16 opacity-0">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
                        <div className="flex gap-6 items-start">
                            <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-green-500 to-transparent rounded-full mt-2 shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5">
                                    <span className="text-green-400 text-[10px] font-black tracking-[0.3em] uppercase drop-shadow-md">04 — Experience</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                </div>
                                <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
                                    Work <span className="gradient-title-blue">History</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-white/50 text-lg md:text-xl max-w-sm leading-relaxed font-medium">
                            Years of crafting <span className="text-white font-bold border-b border-green-500/50 pb-0.5">real-world solutions</span> for clients across the globe.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="exp-timeline relative max-w-5xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden md:block" />

                    <div className="flex flex-col gap-10">
                        {experienceList.map((exp, i) => (
                            <div key={i} className="exp-card opacity-0 flex gap-6 md:gap-12 relative group">
                                {/* Timeline dot (Desktop) */}
                                <div className="hidden md:flex flex-col items-center flex-shrink-0 relative z-10 w-20">
                                    <div 
                                        className="w-4 h-4 rounded-full border-4 border-[#0b0620] mt-8 transition-all duration-500 group-hover:scale-150"
                                        style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}80` }}
                                    />
                                </div>

                                {/* Card */}
                                <div className="flex-1 glass-card p-8 md:p-10 transition-all duration-500 border border-white/5 group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                    {/* Subtle Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border transition-colors duration-300" 
                                                          style={{ background: `${exp.color}15`, color: exp.color, borderColor: `${exp.color}30` }}>
                                                        {exp.type}
                                                    </span>
                                                    <span className="text-white/40 text-xs font-bold tracking-widest uppercase">{exp.period}</span>
                                                </div>
                                                <h3 className="text-white text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">{exp.role}</h3>
                                                <p className="text-lg font-bold tracking-wide" style={{ color: exp.color }}>{exp.company}</p>
                                            </div>
                                        </div>

                                        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">{exp.description}</p>

                                        {/* Highlights */}
                                        <ul className="flex flex-col gap-3 mb-8">
                                            {exp.highlights.map((h, hi) => (
                                                <li key={hi} className="flex items-start gap-4 text-white/60 text-sm md:text-base">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}` }} />
                                                    <span className="group-hover:text-white/80 transition-colors duration-300">{h}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech tags */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold tracking-wider uppercase border transition-all duration-300" 
                                                      style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.05)" }}
                                                      onMouseEnter={(e) => {
                                                          e.currentTarget.style.color = "#fff";
                                                          e.currentTarget.style.background = `${exp.color}20`;
                                                          e.currentTarget.style.borderColor = `${exp.color}50`;
                                                      }}
                                                      onMouseLeave={(e) => {
                                                          e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                                          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                                                      }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
