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
        <section id="services" ref={sectionRef} className="w-full relative overflow-hidden py-24 md:py-36">
            <div className="gradient-sphere services-sphere-1" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title */}
                <div className="svc-title-wrap mb-16 opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-white/30 text-sm font-medium tracking-[0.3em] uppercase mb-3 block">04 — Services</span>
                        <h2 className="text-5xl md:text-7xl font-bold gradient-title leading-tight">What I Offer</h2>
                    </div>
                    <p className="text-white/50 text-lg max-w-sm md:text-right">
                        End-to-end digital solutions tailored to your needs and goals.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="svc-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesList.map((svc, i) => (
                        <div
                            key={i}
                            className="svc-card opacity-0 service-card"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            style={hovered === i ? { borderColor: `${svc.color}40`, boxShadow: `0 30px 80px ${svc.color}15` } : {}}
                        >
                            {/* Glow bg on hover */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at top left, ${svc.color}08, transparent 60%)`, opacity: hovered === i ? 1 : 0 }}
                            />

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 relative"
                                style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}
                            >
                                {svc.icon}
                            </div>

                            <h3 className="text-white text-xl font-bold mb-3">{svc.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">{svc.description}</p>

                            {/* Features */}
                            <ul className="flex flex-col gap-2 mb-6">
                                {svc.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-white/60 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Price + CTA */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <span className="font-bold text-lg" style={{ color: svc.color }}>{svc.price}</span>
                                <a
                                    href="#contact"
                                    onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    Get started →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white text-3xl font-bold mb-2">Have a custom project in mind?</h3>
                        <p className="text-white/50">Let's discuss it and create a tailored solution just for you.</p>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
                            <span>Start a Project</span>
                        </a>
                        <a href="https://wa.me/923281351814" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
