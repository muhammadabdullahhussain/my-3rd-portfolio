import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "../components/ContactForm";
import ContactExperience from "../components/ContactExperience";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: <div className="text-red-400 bg-red-400/10 p-2.5 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(248,113,113,0.15)] group-hover/info:bg-red-400/20 transition-colors"><FiMail size={18} /></div>, label: "Email", value: "muhammadabdullahhussain639@gmail.com", href: "mailto:muhammadabdullahhussain639@gmail.com" },
  { icon: <div className="text-green-400 bg-green-400/10 p-2.5 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.15)] group-hover/info:bg-green-400/20 transition-colors"><FaWhatsapp size={18} /></div>, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/923281351814" },
  { icon: <div className="text-blue-400 bg-blue-400/10 p-2.5 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.15)] group-hover/info:bg-blue-400/20 transition-colors"><FaLinkedinIn size={18} /></div>, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/" },
  { icon: <div className="text-rose-400 bg-rose-400/10 p-2.5 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(251,113,133,0.15)] group-hover/info:bg-rose-400/20 transition-colors"><FiMapPin size={18} /></div>, label: "Location", value: "Lahore, Pakistan", href: null },
  { icon: <div className="text-amber-400 bg-amber-400/10 p-2.5 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.15)] group-hover/info:bg-amber-400/20 transition-colors"><FiClock size={18} /></div>, label: "Availability", value: "Available for freelance", href: null },
];

const Contact = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-title-wrap", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(".contact-left", { opacity: 0, x: -60 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-grid", start: "top 80%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(".contact-right", { opacity: 0, x: 60 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-grid", start: "top 80%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="w-full relative overflow-hidden py-20 md:py-28">
      <div className="gradient-sphere" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(89,142,255,0.15), transparent 70%)", bottom: -200, left: -100 }} />
      <div className="gradient-sphere" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(255,40,213,0.1), transparent 70%)", top: -100, right: -100 }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Title Section - Professional Refinement */}
        <div className="contact-title-wrap mb-20 opacity-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
            <div className="flex gap-6 items-start">
              <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-rose-500 to-transparent rounded-full mt-2 shadow-[0_0_15px_rgba(244,63,94,0.4)]" />
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5">
                  <span className="text-rose-400 text-[10px] font-black tracking-[0.3em] uppercase drop-shadow-md">08 — Collaboration</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                </div>
                <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
                  Let's Build <span className="gradient-title-blue">Something Epic</span>
                </h2>
              </div>
            </div>
            <p className="text-white/50 text-lg md:text-xl max-w-sm leading-relaxed font-medium md:text-right">
              Ready to transform your vision into a digital masterpiece? I'm currently <span className="text-white font-bold border-b border-rose-500/50 pb-0.5">accepting new projects</span> for 2024.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">

          {/* Left: Info + 3D */}
          <div className="contact-left opacity-0 flex flex-col gap-8">
            {/* Contact info list */}
            <div className="glass-card p-8 lg:p-12 flex flex-col overflow-hidden relative group transition-all duration-500 border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-white font-black text-3xl sm:text-4xl mb-10 tracking-tight flex items-center gap-4">
                  <span className="w-8 h-px bg-white/20 block" /> Direct Channels
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {contactInfo.map((item, i) => (
                    <div key={i} className={`flex flex-col group/info relative ${i === 0 ? "md:col-span-2" : ""}`}>
                      <div className="text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-3">
                        <span className="opacity-80 group-hover/info:opacity-100 group-hover/info:scale-110 transition-all duration-300">{item.icon}</span> {item.label}
                      </div>
                      
                      <div className="relative text-white/90">
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                            className="text-white text-base sm:text-[1.1rem] font-bold hover:text-blue-400 transition-colors leading-tight break-words relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-blue-400 after:transition-all after:duration-300">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white/80 text-base sm:text-[1.1rem] font-bold leading-tight break-words">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-col sm:flex-row w-full gap-4 mt-12 pt-10 border-t border-white/5 relative z-10">
                <a href="https://wa.me/923281351814" target="_blank" rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full p-px flex-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-[#0b0620] px-4 py-4 sm:px-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
                    <span className="text-white text-sm sm:text-base font-bold tracking-wide">WhatsApp</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/" target="_blank" rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full p-px flex-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-[#0b0620] px-4 py-4 sm:px-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
                    <span className="text-white text-sm sm:text-base font-bold tracking-wide">LinkedIn</span>
                  </div>
                </a>
              </div>
            </div>

            {/* 3D Scene - Borderless & Independent */}
            <div className="h-[480px] sm:h-[580px] lg:h-[700px] w-full mt-4">
              <ContactExperience />
            </div>
          </div>

          {/* Right: Form + Timeline */}
          <div className="contact-right opacity-0 flex flex-col gap-8 h-full">
            {/* Form Section */}
            <div className="glass-card p-8 lg:p-12 flex flex-col relative group/form transition-all duration-500 border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-10 sm:mb-14">
                  <h3 className="text-white font-black text-3xl sm:text-4xl mb-3 tracking-tight flex items-center gap-4">
                    <span className="w-8 h-px bg-white/20 block" /> Send an Insight
                  </h3>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase pl-12">Expected response: <span className="text-blue-400">&lt; 24 Hours</span></p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Project Timeline to fill empty space */}
            <div className="glass-card p-8 lg:p-12 flex flex-col flex-grow overflow-hidden relative group/process transition-all duration-500 border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover/process:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-white font-black text-3xl sm:text-4xl mb-10 tracking-tight flex items-center gap-4">
                  <span className="w-8 h-px bg-white/20 block" /> Our Process
                </h3>
                
                <div className="flex flex-col gap-10 relative mt-2">
                  <div className="absolute left-[7px] top-[10px] bottom-[10px] w-[2px] bg-gradient-to-b from-blue-500/50 via-pink-500/50 to-transparent" />
                  
                  {[
                    { title: "Discovery & Strategy", desc: "We discuss your vision, target audience, and core project requirements in thorough detail.", color: "bg-blue-400" },
                    { title: "Design & Development", desc: "I create the interface, and upon your approval, begin full-stack development with regular updates.", color: "bg-pink-400" },
                    { title: "Delivery & Support", desc: "You receive the final product directly, alongside deployment assistance and 1 month free support.", color: "bg-green-400" }
                  ].map((step, i) => (
                    <div key={i} className="relative pl-12 group cursor-default">
                      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${step.color} shadow-lg z-10 transition-all duration-500 group-hover:scale-150`} style={{ boxShadow: `0 0 15px ${step.color}80` }} />
                      <div className="absolute left-[4px] top-[10px] w-2 h-2 rounded-full bg-white z-20 pointer-events-none" />
                      <h4 className="text-white font-black text-lg sm:text-xl mb-2 tracking-wide transition-colors group-hover:text-blue-400 duration-300">{step.title}</h4>
                      <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-300">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
