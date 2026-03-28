import { useEffect, useRef, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to track active section
  useEffect(() => {
    const sections = navItems.map((item) => item.href.slice(1));
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`w-full fixed z-50 top-0 left-0 transition-all duration-500 ${scrolled ? "nav-scrolled" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="logo"
              className="md:size-11 size-9 object-cover object-center rounded-lg transition-transform group-hover:scale-110"
            />
            <span className="hidden sm:block text-white font-bold tracking-wide text-sm">
              Abdullah<span className="gradient-title-blue">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 pb-1 ${activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                  }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-pink-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden sm:flex btn-primary text-sm py-2.5 px-5"
            >
              <span>Hire Me</span>
            </a>
            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-400 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="nav-scrolled border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-left text-sm font-medium py-2 border-b border-white/5 last:border-0 transition-colors duration-300 ${activeSection === item.href.slice(1) ? "text-blue-400" : "text-white/60 hover:text-white"
                  }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="btn-primary text-sm py-2.5 px-5 text-center"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
