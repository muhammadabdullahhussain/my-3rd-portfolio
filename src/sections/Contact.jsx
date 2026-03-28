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
  { icon: <div className="text-red-400 bg-red-400/10 p-2 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(248,113,113,0.15)]"><FiMail size={18} /></div>, label: "Email", value: "muhammadabdullahhussain639@gmail.com", href: "mailto:muhammadabdullahhussain639@gmail.com" },
  { icon: <div className="text-green-400 bg-green-400/10 p-2 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(74,222,128,0.15)]"><FaWhatsapp size={18} /></div>, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/923281351814" },
  { icon: <div className="text-blue-400 bg-blue-400/10 p-2 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(96,165,250,0.15)]"><FaLinkedinIn size={18} /></div>, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/" },
  { icon: <div className="text-rose-400 bg-rose-400/10 p-2 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(251,113,133,0.15)]"><FiMapPin size={18} /></div>, label: "Location", value: "Lahore, Pakistan", href: null },
  { icon: <div className="text-amber-400 bg-amber-400/10 p-2 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(251,191,36,0.15)]"><FiClock size={18} /></div>, label: "Availability", value: "Available for freelance", href: null },
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
    <section id="contact" ref={sectionRef} className="w-full relative overflow-hidden py-28 md:py-48">
      <div className="gradient-sphere" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(89,142,255,0.15), transparent 70%)", bottom: -200, left: -100 }} />
      <div className="gradient-sphere" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(255,40,213,0.1), transparent 70%)", top: -100, right: -100 }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Title */}
        <div className="contact-title-wrap mb-20 opacity-0 text-center">
          <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-4 block">08 — Collaboration</span>
          <h2 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-title leading-[1.1] mb-6">Let's Build <br /> Something Epic</h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into a digital masterpiece? I'm currently <span className="text-white font-bold">accepting new projects</span> for 2024.
          </p>
        </div>

        {/* Grid */}
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start w-full">

          {/* Left: Info + 3D */}
          <div className="contact-left opacity-0 flex flex-col gap-8">
            {/* Contact info list */}
            <div className="glass-card border-0 bg-white/[0.01] p-8 lg:p-12 flex flex-col overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div>
                <h3 className="text-white font-black text-3xl sm:text-4xl mb-10 tracking-tight flex items-center gap-4">
                  <span className="w-8 h-px bg-white/20 block" /> Direct Channels
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {contactInfo.map((item, i) => (
                    <div key={i} className={`flex flex-col group/info relative ${i === 0 ? "md:col-span-2" : ""}`}>
                      <div className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-3">
                        <span className="opacity-70 group-hover/info:opacity-100 group-hover/info:scale-110 transition-all">{item.icon}</span> {item.label}
                      </div>
                      
                      <div className="relative text-white/90">
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                            className="text-white text-base sm:text-[1.1rem] font-medium hover:text-white transition-colors leading-tight break-words relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-blue-400 after:transition-all after:duration-300">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-base sm:text-[1.1rem] font-medium leading-tight break-words">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-col sm:flex-row w-full gap-4 mt-12 pt-10 border-t border-white/5 relative">
                <a href="https://wa.me/923281351814" target="_blank" rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full p-px flex-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-[#0b0620] px-4 py-4 sm:px-8 rounded-full flex items-center justify-center transition-all group-hover:bg-transparent">
                    <span className="text-white text-sm sm:text-base font-medium tracing-wide">Direct WhatsApp</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/" target="_blank" rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full p-px flex-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-50 group-hover:opacity-100 group-hover:to-blue-500/50 transition-colors" />
                  <div className="relative bg-[#0b0620] px-4 py-4 sm:px-8 rounded-full flex items-center justify-center transition-all group-hover:bg-transparent">
                    <span className="text-white text-sm sm:text-base font-medium tracking-wide">LinkedIn Pro</span>
                  </div>
                </a>
              </div>
            </div>

            {/* 3D Scene - Borderless & Independent */}
            <div className="h-[480px] sm:h-[580px] lg:h-[700px] w-full mt-16">
              <ContactExperience />
            </div>
          </div>

          {/* Right: Form + Timeline */}
          <div className="contact-right opacity-0 flex flex-col gap-8 h-full">
            {/* Form Section */}
            <div className="glass-card border-0 bg-white/[0.01] p-8 lg:p-12 flex flex-col relative group/form">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-12 sm:mb-16">
                  <h3 className="text-white font-black text-3xl sm:text-4xl mb-3 tracking-tight flex items-center gap-4">
                    <span className="w-8 h-px bg-white/20 block" /> Send an Insight
                  </h3>
                  <p className="text-white/40 text-sm font-light tracking-wide pl-12">Expected response time: <span className="text-blue-400 font-medium">&lt; 24 Hours</span></p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Project Timeline to fill empty space */}
            <div className="glass-card border-0 bg-white/[0.01] p-8 lg:p-12 flex flex-col flex-grow overflow-hidden relative group/process">
              <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/process:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
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
                      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${step.color} shadow-lg z-10 transition-transform duration-500 group-hover:scale-[1.3] group-hover:shadow-[0_0_20px_var(--tw-shadow-color)]`} style={{'--tw-shadow-color': step.color === 'bg-blue-400' ? '#60a5fa' : step.color === 'bg-pink-400' ? '#f472b6' : '#4ade80'}} />
                      <div className="absolute left-[4px] top-[10px] w-2 h-2 rounded-full bg-white z-20 pointer-events-none" />
                      <h4 className="text-white font-semibold text-lg sm:text-xl mb-3 tracking-wide transition-colors group-hover:text-white group-hover:translate-x-1 duration-300">{step.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-300">{step.desc}</p>
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
