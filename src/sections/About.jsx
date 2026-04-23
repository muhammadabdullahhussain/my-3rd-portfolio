import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Alien } from "../components/models/Alien";
import { bentoSocialLinks, statsList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(".about-title-wrap", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
      });
      // Bento grid cards stagger
      gsap.fromTo(".bento-card", { opacity: 0, y: 60, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".bento-grid", start: "top 80%", toggleActions: "play none none reverse" },
      });
      // Stats counter
      gsap.fromTo(".stat-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".stats-row", start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="w-full relative overflow-hidden py-28 md:py-48">
      {/* Spheres */}
      <div className="gradient-sphere about-sphere-1" />
      <div className="gradient-sphere about-sphere-2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Title */}
        <div className="about-title-wrap mb-20 opacity-0">
          <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-4 block">01 — The Story</span>
          <h2 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-title leading-[1.1] mb-6">
            Architecting <br className="hidden md:block" /> Digital Identity
          </h2>
          <p className="text-white/60 text-base sm:text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            I am a <span className="text-white font-semibold italic">visionary developer</span> dedicated to bridging the gap between cutting-edge technology and human-centric design.
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsList.map((stat, i) => (
            <div key={i} className="stat-item opacity-0 glass-card p-6 sm:p-8 text-center group hover:bg-white/[0.02]">
              <p className="text-4xl sm:text-5xl md:text-6xl font-black gradient-title-blue mb-2 transition-transform duration-500 group-hover:scale-110">{stat.number}</p>
              <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-12 gap-5 sm:gap-8">

          {/* Bio card */}
          <div className="bento-card opacity-0 md:col-span-8 col-span-12">
            <div className="glass-card p-8 sm:p-12 h-full flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse" />
                  <img src="/images/flower.svg" alt="flower" className="w-16 h-16 flower relative z-10" />
                </div>
                <div>
                  <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-2">Muhammad Abdullah</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest">Available for Innovation</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed font-medium">
                  Based in <span className="text-white underline decoration-blue-500 underline-offset-4">Pakistan</span> — I am a Full Stack Developer & Shopify Expert with over <span className="text-white font-bold underline decoration-pink-500 underline-offset-4">4 years</span> of professional experience.
                </p>
                <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                  I specialize in building high-performance e-commerce ecosystems using Shopify, WooCommerce, and the MERN stack. From custom Shopify App development to complex enterprise dashboards, I've transformed 100+ visions into scalable, revenue-driving realities for global clients.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-10">
                {["System Architect", "UI Strategist", "3D Tinkerer", "Motion Specialist"].map((t) => (
                  <span key={t} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white/50 hover:text-white hover:border-blue-500 transition-all duration-300">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Alien card */}
          <div className="bento-card opacity-0 md:col-span-4 col-span-12">
            <div className="h-80 md:h-full min-h-[320px] rounded-3xl overflow-hidden cursor-grab relative group"
              style={{ background: "linear-gradient(225deg, #0b0620 0%, #1c34ff 100%)" }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(89,142,255,0.2),transparent_70%)]" />
              <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ff28d5" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={4} />
                <Alien scale={2.5} position={[0, -5, 0]} />
              </Canvas>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card-sm backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest text-center">Interactive 3D Entity</p>
              </div>
            </div>
          </div>

          {/* Service cards row */}
          {[
            { icon: "🌐", title: "Scaleable Web", desc: "Enterprise-grade performance meeting avant-garde design aesthetics." },
            { icon: "🎨", title: "Intuitive UI", desc: "User journeys meticulously crafted to convert, retain, and inspire." },
            { icon: "🌟", title: "Spatial 3D", desc: "Breaking the second dimension with immersive, interactive web experiences." }
          ].map((s, i) => (
            <div key={i} className="bento-card opacity-0 md:col-span-4 col-span-12 group">
              <div className="glass-card p-10 h-full flex flex-col justify-center border-white/5 hover:border-blue-500/30 transition-all duration-500">
                <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform duration-500">{s.icon}</div>
                <h4 className="gradient-title-blue text-2xl font-black mb-3">{s.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}

          {/* Motto card */}
          <div className="bento-card opacity-0 md:col-span-6 col-span-12">
            <div className="glass-card p-12 h-full flex flex-col justify-center gap-4 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 text-[10rem] opacity-[0.02] font-black pointer-events-none group-hover:scale-110 transition-transform duration-1000">LVL</div>
              <h3 className="gradient-title text-4xl sm:text-5xl font-black tracking-tighter">BEYOND LIMITS.</h3>
              <h3 className="gradient-title-blue text-4xl sm:text-5xl font-black tracking-tighter">BEYOND NORMAL.</h3>
              <h3 className="gradient-title-gold text-4xl sm:text-5xl font-black tracking-tighter">BEYOND WEB.</h3>
            </div>
          </div>

          {/* Social link cards */}
          {bentoSocialLinks.map((item, i) => (
            <div key={i} className="bento-card opacity-0 md:col-span-3 col-span-6">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 flex flex-col items-center justify-center gap-4 group h-full hover:bg-blue-500/5 transition-all duration-500"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <img src={item.icon} alt={item.name} className="w-10 h-10 relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">{item.name}</span>
              </a>
            </div>
          ))}

          {/* Resume download */}
          <div className="bento-card opacity-0 col-span-12">
            <div className="glass-card p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 bg-[radial-gradient(circle_at_top_right,rgba(89,142,255,0.1),transparent_50%)]">
              <div>
                <h4 className="text-white text-3xl sm:text-4xl font-black mb-4">Elevate your next project.</h4>
                <p className="text-white/50 text-lg max-w-xl leading-relaxed">Let's consolidate my expertise with your vision. Review my full professional trajectory.</p>
              </div>
              <a
                href="#"
                className="btn-primary py-4 px-10 group"
              >
                <span>Obtain Full Portfolio [PDF]</span>
                <span className="text-xl group-hover:rotate-12 transition-transform">📄</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
