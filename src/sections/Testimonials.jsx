import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? "star-filled" : "star-empty"}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="glass-card glass-card-pink p-8 flex-shrink-0 w-80 md:w-96 flex flex-col gap-4">
    <div className="flex items-start justify-between">
      <img
        src={testimonial.imgPath}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover ring-2 ring-pink-400/30"
        loading="lazy"
      />
      <svg className="w-10 h-10 text-pink-400 opacity-40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    <StarRating rating={testimonial.rating} />
    <p className="text-white/60 text-sm leading-relaxed flex-1">"{testimonial.review}"</p>
    <div className="border-t border-white/5 pt-4">
      <p className="text-white font-semibold">{testimonial.name}</p>
      <p className="text-white/40 text-sm">{testimonial.pos}</p>
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
    <section id="testimonials" ref={sectionRef} className="w-full relative overflow-hidden py-24 md:py-36">
      <div className="gradient-sphere testimonial-sphere-1" />
      <div className="gradient-sphere testimonial-sphere-2" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="testi-title-wrap mb-16 opacity-0 text-center">
            <span className="text-white/30 text-sm font-medium tracking-[0.3em] uppercase mb-3 block">06 — Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-bold gradient-title leading-tight mb-4">Client Reviews</h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">
              What my clients say about working with me.
            </p>
            {/* Rating summary */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-6 h-6 star-filled" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-2xl">5.0</span>
              <span className="text-white/40">({testimonials.length} reviews)</span>
            </div>
          </div>
        </div>

        {/* Infinite marquee row 1 (left-to-right) */}
        <div className="overflow-hidden mb-6 relative">
          <div className="tech-gradient-left absolute left-0 top-0 bottom-0 w-24 z-10" />
          <div className="tech-gradient-right absolute right-0 top-0 bottom-0 w-24 z-10" />
          <div className="flex gap-6 w-max" style={{ animation: "marquee-scroll 30s linear infinite" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Infinite marquee row 2 (right-to-left) */}
        <div className="overflow-hidden relative">
          <div className="tech-gradient-left absolute left-0 top-0 bottom-0 w-24 z-10" />
          <div className="tech-gradient-right absolute right-0 top-0 bottom-0 w-24 z-10" />
          <div className="flex gap-6 w-max" style={{ animation: "marquee-scroll 35s linear infinite reverse" }}>
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Join my happy clients</h3>
              <p className="text-white/50">Let's build something amazing together. Start your project today.</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary whitespace-nowrap"
            >
              <span>Work With Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
