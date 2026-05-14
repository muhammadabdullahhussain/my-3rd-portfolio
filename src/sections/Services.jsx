import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const [hovered, setHovered] = useState(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".svc-title-wrap", { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: ".svc-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
            });
            gsap.fromTo(".svc-card", { opacity: 0, y: 60, scale: 0.92 }, {
                opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.1,
                scrollTrigger: { trigger: ".svc-grid", start: "top 80%", toggleActions: "play none none reverse" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="w-full relative overflow-hidden py-16 md:py-24">
            <div className="gradient-sphere services-sphere-1" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title Section - Professional Refinement */}
                <div className="svc-title-wrap mb-16 opacity-0">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
                        <div className="flex gap-6 items-start">
                            <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent rounded-full mt-2 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5">
                                    <span className="text-purple-400 text-[10px] font-black tracking-[0.3em] uppercase drop-shadow-md">05 — Services</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                </div>
                                <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
                                    What I <span className="gradient-title-blue">Offer</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-white/50 text-lg md:text-xl max-w-sm leading-relaxed font-medium md:text-right">
                            End-to-end digital solutions <span className="text-white font-bold border-b border-purple-500/50 pb-0.5">tailored to your needs</span> and goals.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="svc-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {servicesList.map((svc, i) => (
                        <div
                            key={i}
                            className="svc-card opacity-0 glass-card p-8 md:p-10 flex flex-col h-full relative group transition-all duration-500 border border-white/5 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            style={hovered === i ? { borderColor: `${svc.color}40` } : {}}
                        >
                            {/* Glow bg on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at top left, ${svc.color}10, transparent 70%)`, opacity: hovered === i ? 1 : 0 }}
                            />

                            {/* Icon */}
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 relative transition-transform duration-500 group-hover:scale-110"
                                style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30`, boxShadow: hovered === i ? `0 0 20px ${svc.color}30` : 'none' }}
                            >
                                {svc.icon}
                            </div>

                            <h3 className="text-white text-2xl font-black mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">{svc.title}</h3>
                            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 flex-grow">{svc.description}</p>

                            {/* Features */}
                            <ul className="flex flex-col gap-3 mb-8">
                                {svc.features.map((f) => (
                                    <li key={f} className="flex items-start gap-4 text-white/60 text-sm md:text-base">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ background: svc.color, boxShadow: `0 0 10px ${svc.color}` }} />
                                        <span className="group-hover:text-white/80 transition-colors duration-300">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Price + CTA */}
                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <span className="font-black text-xl tracking-wide" style={{ color: svc.color }}>{svc.price}</span>
                                <a
                                    href="#contact"
                                    onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2"
                                    style={hovered === i ? { background: `${svc.color}20`, color: '#fff', borderColor: `${svc.color}50` } : { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.1)' }}
                                >
                                    Get started <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h3 className="text-white text-3xl font-black mb-2 tracking-tight">Have a custom project in mind?</h3>
                        <p className="text-white/60 font-medium">Let's discuss it and create a tailored solution just for you.</p>
                    </div>
                    <div className="flex gap-4 flex-wrap relative z-10">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} 
                           className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all duration-300">
                            Start a Project
                        </a>
                        <a href="https://wa.me/923281351814" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
