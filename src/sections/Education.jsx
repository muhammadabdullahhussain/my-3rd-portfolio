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
        <section id="education" ref={sectionRef} className="w-full relative overflow-hidden py-24 md:py-36">
            {/* Sphere */}
            <div className="gradient-sphere" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(200,215,81,0.2), transparent 70%)", top: "auto", bottom: 100, left: -100 }} />
            <div className="gradient-sphere" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(89,142,255,0.2), transparent 70%)", top: 100, right: -50 }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title */}
                <div className="edu-title-wrap mb-16 opacity-0">
                    <span className="text-white/30 text-sm font-medium tracking-[0.3em] uppercase mb-3 block">07 — Education</span>
                    <h2 className="text-5xl md:text-7xl font-bold gradient-title leading-tight">Academic Background</h2>
                    <p className="text-white/50 text-lg mt-4 max-w-xl">
                        Formal education and professional certifications that shaped my expertise.
                    </p>
                </div>

                {/* Education Grid */}
                <div className="edu-grid grid md:grid-cols-2 gap-6">
                    {educationList.map((edu, i) => (
                        <div key={i} className="edu-card opacity-0 glass-card p-8 group cursor-default">
                            <div className="flex items-start gap-5 mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                                    style={{ background: `${edu.color}20`, border: `1px solid ${edu.color}30` }}
                                >
                                    {edu.icon}
                                </div>
                                <div>
                                    <h3 className="text-white text-xl font-bold leading-tight mb-1">{edu.degree}</h3>
                                    <p className="font-semibold text-sm mb-1" style={{ color: edu.color }}>{edu.institution}</p>
                                    <div className="flex items-center gap-3">
                                        <span className="text-white/30 text-sm">{edu.period}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${edu.color}15`, color: edu.color }}>
                                            {edu.grade}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-white/50 text-sm leading-relaxed mb-5">{edu.description}</p>

                            <div className="border-t border-white/5 pt-5">
                                <p className="text-white/30 text-xs font-medium tracking-wider uppercase mb-3">Key Achievements</p>
                                <ul className="flex flex-col gap-2">
                                    {edu.achievements.map((a, ai) => (
                                        <li key={ai} className="flex items-start gap-3 text-white/60 text-sm">
                                            <span className="text-base leading-none mt-0.5">{edu.icon}</span>
                                            {a}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
