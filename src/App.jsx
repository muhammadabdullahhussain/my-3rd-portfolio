import { useEffect, useState } from "react";
import {
  Loader,
  NavBar,
  Hero,
  About,
  Experience,
  Education,
  Services,
  Skills,
  Projects,
  Testimonials,
  Contact,
  Footer,
  ChatBot,
} from "./sections";
import { Suspense } from "react";

// Back to top button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

// Custom cursor (desktop only)
const CustomCursor = () => {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let animId;

    const onMove = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const addHover = () => { ring.style.width = "80px"; ring.style.height = "80px"; ring.style.borderColor = "rgba(255,40,213,0.5)"; };
    const removeHover = () => { ring.style.width = "40px"; ring.style.height = "40px"; ring.style.borderColor = "rgba(89,142,255,0.5)"; };

    document.querySelectorAll("a, button, [class*='cursor-pointer']").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);
  return null;
};

const App = () => {
  return (
    <div className="bg-black-100 relative w-full min-h-screen overflow-x-hidden">
      {/* Custom cursor elements */}
      <div className="cursor-dot hidden md:block" />
      <div className="cursor-ring hidden md:block" />
      <CustomCursor />

      {/* Loading screen */}
      <Suspense fallback={null}>
        <Loader />
      </Suspense>

      {/* Fixed elements */}
      <NavBar />
      <BackToTop />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
