// Skills.jsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories, iconsList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".skills-title-wrap", { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: ".skills-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
            });
            gsap.fromTo(".skill-category-card", { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
                scrollTrigger: { trigger: ".skills-grid", start: "top 80%", toggleActions: "play none none reverse" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="w-full relative overflow-hidden py-16 md:py-24">
            <div className="gradient-sphere" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(255,40,213,0.2), transparent 70%)", top: "20%", left: -100 }} />
            <div className="gradient-sphere" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(89,142,255,0.2), transparent 70%)", bottom: "10%", right: -50 }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title Section - Professional Refinement */}
                <div className="skills-title-wrap mb-16 opacity-0">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
                        <div className="flex gap-6 items-start">
                            <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent rounded-full mt-2 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5">
                                    <span className="text-purple-400 text-[10px] font-black tracking-[0.3em] uppercase drop-shadow-md">03 — Skills</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                </div>
                                <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
                                    My <span className="gradient-title-blue">Expertise</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-white/50 text-lg md:text-xl max-w-sm leading-relaxed font-medium">
                            A comprehensive overview of the tools, frameworks, and technologies I use to <span className="text-white font-bold border-b border-purple-500/50 pb-0.5">build digital experiences.</span>
                        </p>
                    </div>
                </div>

                {/* Skills Bento Grid - Premium Layout */}
                <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {skillCategories.map((cat, ci) => (
                        <div
                            key={ci}
                            className="skill-category-card opacity-0 glass-card p-8 md:p-10 transition-all duration-500 border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative group"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-3xl md:text-4xl filter drop-shadow-lg">{cat.icon}</span>
                                    <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight">{cat.category}</h3>
                                </div>
                                
                                <p className="text-white/50 text-sm md:text-base mb-8 leading-relaxed max-w-md">
                                    {cat.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2.5">
                                    {cat.skills.map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold tracking-wide border transition-all duration-300"
                                            style={{
                                                backgroundColor: "rgba(255,255,255,0.03)",
                                                borderColor: "rgba(255,255,255,0.08)",
                                                color: "rgba(255,255,255,0.8)",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = `${cat.color}15`;
                                                e.currentTarget.style.borderColor = `${cat.color}50`;
                                                e.currentTarget.style.color = "#fff";
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                                e.currentTarget.style.boxShadow = `0 4px 15px ${cat.color}30`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                                e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Icons Marquee (Optional / Compact version) */}
                <div className="mt-24 pt-10 border-t border-white/5">
                    <p className="text-white/30 text-xs font-bold tracking-[0.4em] uppercase mb-10 text-center">Technologies I Work With</p>
                    <div className="marquee relative">
                        <div className="tech-gradient-left absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none" />
                        <div className="tech-gradient-right absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none" />
                        <div className="marquee-track">
                            {[...iconsList, ...iconsList, ...iconsList].map((icon, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity">
                                    <img src={icon.image} alt={icon.name} className="w-10 h-10 object-contain drop-shadow-md" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
