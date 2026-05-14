import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroExperience from "../components/HeroExperience";

const ROLES = [
  "Full Stack Developer",
  "Shopify App Developer",
  "MERN Stack Expert",
  "Next.js Specialist",
  "E-commerce Strategist",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roleRef = useRef(roleIndex);
  roleRef.current = roleIndex;

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // GSAP entrance animation
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(".hero-greeting", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".hero-name", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15 }, "-=0.4")
      .fromTo(".hero-role-wrap", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.3")
      .fromTo(".hero-social", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.08 }, "-=0.4")
      .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");
  }, []);

  return (
    <section id="home" className="w-full h-dvh overflow-hidden relative text-white">
      {/* Background gradient spheres */}
      <div className="gradient-sphere sphere-1" />
      <div className="gradient-sphere sphere-2" />

      {/* ─── MOBILE: Background Text Layer (z-0, behind character) ─── */}
      <div className="lg:hidden absolute top-[12%] left-6 right-6 z-0 flex flex-col items-start pointer-events-none">

        <div className="flex flex-col tracking-[-0.03em] ml-[-2px]">
          <h1 className="hero-name font-black text-[18vw] leading-[0.82] text-white opacity-0 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            MUHAMMAD
          </h1>
          <h1 className="hero-name font-black text-[18vw] leading-[0.82] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 uppercase drop-shadow-[0_10px_20px_rgba(59,130,246,0.2)]">
            ABDULLAH
          </h1>
        </div>
      </div>

      {/* Bottom fade — higher z-index to overlay character legs */}
      <div className="absolute bottom-0 left-0 right-0 h-56 hero-bottom-fade z-[15] pointer-events-none" />

      {/* 3D Canvas background (z-10, character model) */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <HeroExperience />
      </div>

      {/* ─── Main Content Wrapper (z-20, above character) ─── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-between pt-32 pb-24 pointer-events-none lg:pointer-events-auto">

        {/* Top Content (Desktop View) - Hidden on Mobile */}
        <div className="hidden lg:block mt-8 max-w-3xl">
          <div className="overflow-hidden mb-[-8px] relative">
            <h1 className="hero-name font-black text-[3rem] sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[6rem] leading-[0.9] tracking-[-0.03em] text-white opacity-0 uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              MUHAMMAD
            </h1>
          </div>
          <div className="overflow-hidden relative">
            <h1 className="hero-name font-black text-[3rem] sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[6rem] leading-[0.9] tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 uppercase drop-shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
              ABDULLAH
            </h1>
          </div>
        </div>

        {/* ── MOBILE: Foreground Bottom Section ── */}
        <div className="lg:hidden absolute bottom-[100px] left-6 right-6 flex justify-between items-end pointer-events-none">
          {/* Bottom Left: Explore */}
          <div className="flex flex-col items-center gap-1.5 opacity-100 pb-1">
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em] drop-shadow-md">Explore</span>
            <span className="text-2xl text-white font-light drop-shadow-md">↓</span>
          </div>

          {/* Bottom Right: Logo + Developer */}
          <div className="flex flex-col items-center">
            {/* Custom Circular Eye Logo */}
            <div className="w-[86px] h-[86px] bg-white rounded-full flex justify-center items-end overflow-hidden mb-[-12px] shadow-2xl">
              <div className="w-[46px] h-[46px] bg-[#000] rounded-full relative flex justify-center items-end bottom-[-12px]">
                <div className="w-[14px] h-[14px] bg-white rounded-full mb-3" />
              </div>
            </div>
            <h2 className="text-[12.5vw] font-black text-white tracking-tighter uppercase leading-none drop-shadow-2xl m-0 p-0 text-center">
              DEVELOPER
            </h2>
          </div>
        </div>

        {/* ── DESKTOP: Full bottom bar ── */}
        <div className="hidden lg:flex flex-row items-end justify-between gap-16">

          {/* Left: role + desc + CTAs */}
          <div className="flex flex-col gap-8 max-w-xl">

            {/* Typewriter role */}
            <div className="hero-role-wrap flex items-center gap-4 opacity-0">
              <span className="w-10 h-[2px] bg-gradient-to-r from-blue-400 to-pink-500 flex-shrink-0" />
              <span className="gradient-title-blue text-2xl font-black tracking-tight uppercase">
                {displayed}
                <span className="inline-block w-[3px] h-6 bg-pink-500 ml-2 animate-pulse shadow-[0_0_10px_rgba(255,40,213,0.5)]" />
              </span>
            </div>

            <p className="hero-desc text-white/60 text-lg leading-relaxed max-w-md opacity-0 font-medium">
              With over{" "}
              <span className="text-white font-bold">4+ years of experience</span>, 
              I build high-performance Full Stack apps and specialized e-commerce solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="hero-cta btn-primary opacity-0 group !px-6 !py-3"
              >
                <span className="text-sm tracking-wide">Explore Projects</span>
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="hero-cta btn-outline opacity-0 backdrop-blur-sm !px-6 !py-3"
              >
                <span className="text-sm tracking-wide">Start a Project</span>
              </a>
            </div>
          </div>

          {/* Right: socials + scroll line */}
          <div className="flex flex-col items-end justify-end gap-8 pb-4">
            <div className="flex flex-col gap-4">
              {[
                { icon: "github", href: "https://github.com/muhammadabdullahhussain", label: "GitHub" },
                { icon: "linkedin", href: "https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/", label: "LinkedIn" },
                { icon: "whatsapp", href: "https://wa.me/923281351814", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social opacity-0 w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-500 group"
                  aria-label={s.label}
                >
                  <img
                    src={`/images/${s.icon}.svg`}
                    alt={s.label}
                    className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            <div className="hero-scroll opacity-0 flex flex-col items-center gap-4">
              <span className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
                SCROLL
              </span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 via-pink-500 to-transparent relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50 animate-[scroll-hint_2s_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating WhatsApp FAB — Mobile only ── */}
      <a
        href="https://wa.me/923281351814"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-8 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Ping animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <div className="relative w-[58px] h-[58px] bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.45)] group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
          <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-7 h-7 brightness-0 invert" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
