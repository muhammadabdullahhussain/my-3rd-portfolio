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
        <section id="experience" ref={sectionRef} className="w-full relative overflow-hidden py-24 md:py-36">
            {/* Spheres */}
            <div className="gradient-sphere exp-sphere-1" />
            <div className="gradient-sphere exp-sphere-2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title */}
                <div className="exp-title-wrap mb-16 opacity-0">
                    <span className="text-white/30 text-sm font-medium tracking-[0.3em] uppercase mb-3 block">04 — Experience</span>
                    <h2 className="text-5xl md:text-7xl font-bold gradient-title leading-tight">Work History</h2>
                    <p className="text-white/50 text-lg mt-4 max-w-xl">
                        Years of crafting real-world solutions for clients across the globe.
                    </p>
                </div>

                {/* Timeline */}
                <div className="exp-timeline relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-pink-500/20 to-transparent hidden md:block" />

                    <div className="flex flex-col gap-8">
                        {experienceList.map((exp, i) => (
                            <div key={i} className="exp-card opacity-0 flex gap-6 md:gap-10">
                                {/* Timeline dot */}
                                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                                    <div
                                        className="timeline-dot mt-2"
                                        style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                                    />
                                </div>

                                {/* Card */}
                                <div className="flex-1 glass-card p-7 group hover:border-opacity-60 transition-all duration-400">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}40` }}>
                                                    {exp.type}
                                                </span>
                                                <span className="text-white/30 text-sm">{exp.period}</span>
                                            </div>
                                            <h3 className="text-white text-2xl font-bold mb-1">{exp.role}</h3>
                                            <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                                        </div>
                                    </div>

                                    <p className="text-white/50 leading-relaxed mb-5">{exp.description}</p>

                                    {/* Highlights */}
                                    <ul className="flex flex-col gap-2 mb-5">
                                        {exp.highlights.map((h, hi) => (
                                            <li key={hi} className="flex items-start gap-3 text-white/60 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span key={t} className="tech-tag text-xs" style={{ color: exp.color, background: `${exp.color}15`, borderColor: `${exp.color}30` }}>
                                                {t}
                                            </span>
                                        ))}
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
