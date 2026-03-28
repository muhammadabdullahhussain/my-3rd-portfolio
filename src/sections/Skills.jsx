import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories, iconsList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState(0);
    const [barsAnimated, setBarsAnimated] = useState(false);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".skills-title-wrap", { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: ".skills-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
            });
            gsap.fromTo(".skill-category-card", { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
                scrollTrigger: {
                    trigger: ".skills-grid",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    onEnter: () => setBarsAnimated(true),
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="w-full relative overflow-hidden py-24 md:py-36">
            <div className="gradient-sphere" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(255,40,213,0.2), transparent 70%)", top: "20%", left: -100 }} />
            <div className="gradient-sphere" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(89,142,255,0.2), transparent 70%)", bottom: "10%", right: -50 }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title */}
                <div className="skills-title-wrap mb-16 opacity-0">
                    <span className="text-white/30 text-sm font-medium tracking-[0.3em] uppercase mb-3 block">05 — Skills</span>
                    <h2 className="text-5xl md:text-7xl font-bold gradient-title leading-tight">My Expertise</h2>
                    <p className="text-white/50 text-lg mt-4 max-w-xl">Tools and technologies I've mastered over the years.</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {skillCategories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveCategory(i)}
                            className={`filter-tab ${activeCategory === i ? "active" : ""}`}
                            style={activeCategory === i ? { background: cat.color, borderColor: "transparent" } : {}}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="skills-grid grid md:grid-cols-2 gap-6">
                    {skillCategories.map((cat, ci) => (
                        <div
                            key={ci}
                            className={`skill-category-card opacity-0 glass-card p-7 transition-all duration-500 ${cat === skillCategories[activeCategory] ? "scale-[1.01]" : ""}`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-3 h-3 rounded-full" style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                                <h3 className="text-white font-bold text-xl">{cat.category}</h3>
                            </div>
                            <div className="flex flex-col gap-5">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white/70 text-sm font-medium">{skill.name}</span>
                                            <span className="text-sm font-bold" style={{ color: cat.color }}>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-track">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: barsAnimated ? `${skill.level}%` : "0%",
                                                    background: `linear-gradient(90deg, ${cat.color}99, ${cat.color})`,
                                                    boxShadow: barsAnimated ? `0 0 8px ${cat.color}60` : "none",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Icons Marquee */}
                <div className="mt-16">
                    <p className="text-white/30 text-sm font-medium tracking-[0.3em] uppercase mb-8 text-center">Technologies I Work With</p>
                    <div className="marquee relative">
                        <div className="tech-gradient-left absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" />
                        <div className="tech-gradient-right absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" />
                        <div className="marquee-track">
                            {[...iconsList, ...iconsList].map((icon, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center gap-3 flex-shrink-0 group cursor-default"
                                >
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 group-hover:border-blue-400/40 group-hover:bg-blue-400/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(89,142,255,0.2)]">
                                        <img src={icon.image} alt={icon.name} className="w-8 h-8 object-contain" loading="lazy" />
                                    </div>
                                    <span className="text-white/30 text-xs group-hover:text-white/60 transition-colors">{icon.name}</span>
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
