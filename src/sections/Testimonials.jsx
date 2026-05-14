import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = ({ testimonial }) => (
  <div className="glass-card p-8 md:p-10 flex-shrink-0 w-[320px] md:w-[420px] flex flex-col gap-6 relative group transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
    {/* Subtle Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" : "text-white/10"}`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <svg className="w-10 h-10 md:w-12 md:h-12 text-white/5 group-hover:text-blue-500/20 transition-colors duration-500 transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-white/70 text-sm md:text-base leading-relaxed flex-1 italic group-hover:text-white/90 transition-colors duration-300">"{testimonial.review}"</p>
      
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
        <img
          src={testimonial.imgPath}
          alt={testimonial.name}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300"
          loading="lazy"
        />
        <div>
          <p className="text-white font-bold text-base md:text-lg tracking-wide">{testimonial.name}</p>
          <p className="text-white/40 text-[10px] md:text-xs font-black tracking-widest uppercase mt-1">{testimonial.pos}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testi-title-wrap", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".testi-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="w-full relative overflow-hidden py-16 md:py-24">
      <div className="gradient-sphere testimonial-sphere-1" />
      <div className="gradient-sphere testimonial-sphere-2" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title Section - Professional Refinement */}
          <div className="testi-title-wrap mb-16 opacity-0">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
              <div className="flex gap-6 items-start">
                <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent rounded-full mt-2 shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
                <div>
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
                    <span className="text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase drop-shadow-md">07 — Testimonials</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  </div>
                  <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
                    Client <span className="gradient-title-blue">Reviews</span>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="text-white/50 text-lg md:text-xl leading-relaxed font-medium mb-3 md:text-right">
                  What my clients say about <span className="text-white font-bold border-b border-blue-500/50 pb-0.5">working with me.</span>
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-black text-xl">5.0</span>
                  <span className="text-white/40 text-sm font-semibold">({testimonials.length} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Infinite marquee row */}
        <div className="overflow-hidden mb-6 relative py-4">
          <div className="tech-gradient-left absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none" />
          <div className="tech-gradient-right absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none" />
          
          <div className="flex gap-6 w-max hover:[animation-play-state:paused]" style={{ animation: "marquee-scroll 45s linear infinite" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-black mb-2 tracking-tight">Join my happy clients</h3>
              <p className="text-white/60 font-medium">Let's build something amazing together. Start your project today.</p>
            </div>
            
            <div className="relative z-10">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

