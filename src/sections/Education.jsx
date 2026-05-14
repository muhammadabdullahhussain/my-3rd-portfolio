import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".edu-title-wrap", { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: ".edu-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
            });
            gsap.fromTo(".edu-card", { opacity: 0, x: 60 }, {
                opacity: 1, x: 0, duration: 0.7, ease: "power3.out", stagger: 0.15,
                scrollTrigger: { trigger: ".edu-grid", start: "top 80%", toggleActions: "play none none reverse" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="education" ref={sectionRef} className="w-full relative overflow-hidden py-16 md:py-24">
            {/* Sphere */}
            <div className="gradient-sphere" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(200,215,81,0.2), transparent 70%)", top: "auto", bottom: 100, left: -100 }} />
            <div className="gradient-sphere" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(89,142,255,0.2), transparent 70%)", top: 100, right: -50 }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title Section - Professional Refinement */}
                <div className="edu-title-wrap mb-16 opacity-0">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
                        <div className="flex gap-6 items-start">
                            <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-yellow-500 to-transparent rounded-full mt-2 shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5">
                                    <span className="text-yellow-400 text-[10px] font-black tracking-[0.3em] uppercase drop-shadow-md">06 — Education</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                                </div>
                                <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
                                    Academic <span className="gradient-title-blue">Background</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-white/50 text-lg md:text-xl max-w-sm leading-relaxed font-medium">
                            Formal education and <span className="text-white font-bold border-b border-yellow-500/50 pb-0.5">professional certifications</span> that shaped my expertise.
                        </p>
                    </div>
                </div>

                {/* Education Grid */}
                <div className="edu-grid grid md:grid-cols-2 gap-6 md:gap-8">
                    {educationList.map((edu, i) => (
                        <div key={i} className="edu-card opacity-0 glass-card p-8 md:p-10 transition-all duration-500 border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative group cursor-default">
                            {/* Subtle Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                                        style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30`, boxShadow: `0 0 20px ${edu.color}20` }}
                                    >
                                        {edu.icon}
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-white text-2xl font-black leading-tight mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">{edu.degree}</h3>
                                        <p className="font-bold text-base mb-2 tracking-wide" style={{ color: edu.color }}>{edu.institution}</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-white/40 text-xs font-bold tracking-widest uppercase">{edu.period}</span>
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: edu.color }} />
                                            <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border transition-colors duration-300" style={{ background: `${edu.color}15`, color: edu.color, borderColor: `${edu.color}30` }}>
                                                {edu.grade}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">{edu.description}</p>

                                <div className="border-t border-white/5 pt-6">
                                    <p className="text-white/30 text-[10px] font-black tracking-[0.2em] uppercase mb-4">Key Achievements</p>
                                    <ul className="flex flex-col gap-3">
                                        {edu.achievements.map((a, ai) => (
                                            <li key={ai} className="flex items-start gap-4 text-white/60 text-sm md:text-base">
                                                <span className="mt-1 opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-md">{edu.icon}</span>
                                                <span className="group-hover:text-white/80 transition-colors duration-300">{a}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
