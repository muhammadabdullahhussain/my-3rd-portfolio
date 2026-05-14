import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { projectsList, projectCategories } from "../constants";
import { FiGrid, FiLayout, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="project-card group cursor-pointer h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden aspect-video bg-black/40">
        {/* Blurred background for full visibility */}
        <img
          src={project.img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110"
        />
        <img
          src={project.img}
          alt={project.title}
          className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-20"
            style={{ background: `${project.color}`, color: "#000", boxShadow: `0 0 20px ${project.color}50` }}>
            Featured
          </div>
        )}
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Overlay with buttons */}
        <div className="project-card-overlay flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-3 w-full">
            <button className="btn-primary text-xs py-2 px-4 flex-1 text-center justify-center">
              <span>View Case Study</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4 mb-3">
            <h3 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
            <div className="w-2 h-2 rounded-full" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }} />
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-white/70 transition-colors duration-300">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-white/60">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CarouselCard = ({ project, onClick }) => {
  return (
    <div 
      className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden cursor-pointer border border-white/10 group bg-[#050505] flex flex-col transition-all duration-500 hover:border-blue-500/30"
      onClick={() => onClick(project)}
    >
      {/* Blurred background layer for immersion */}
      <img 
        src={project.img} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-10 scale-110"
      />
      
      {/* Image Container - Dominant part, full visibility */}
      <div className="relative w-full aspect-video overflow-hidden bg-black/40 border-b border-white/5">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Subtle overlay for the image part only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Compact Content Area */}
      <div className="relative p-6 md:p-8 flex flex-col gap-4 z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-blue-500 text-black">
              {project.category}
            </span>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white transition-colors">
            <span>VIEW CASE STUDY</span>
            <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-white/50 text-xs md:text-sm max-w-4xl line-clamp-2 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-[9px] font-bold bg-white/5 border border-white/10 text-white/50 group-hover:text-white/80 transition-colors">
              {t}
            </span>
          ))}
        </div>

        <div className="md:hidden mt-4">
          <button className="btn-primary w-full py-2 text-xs justify-center">
            <span>View Detailed Case Study</span>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'carousel'
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const filtered = projectsList.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  const handleProjectClick = (project) => {
    navigate(`/project/${project.slug}`);
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proj-title-wrap", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".proj-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="w-full relative overflow-hidden py-20 md:py-28">
      <div className="gradient-sphere projects-sphere-1" />
      <div className="gradient-sphere projects-sphere-2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Title Section - Professional Refinement */}
        <div className="proj-title-wrap mb-12 opacity-0">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-white/5 pb-10">
            <div className="flex gap-6 items-start">
              <div className="hidden md:block w-1 h-32 bg-gradient-to-b from-blue-500 to-transparent rounded-full mt-2 shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
                  <span className="text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase drop-shadow-md">02 — Portfolio</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                </div>
                <h2 className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter">
                  Selected <br className="hidden md:block" /> 
                  <span className="gradient-title-blue">Projects</span>
                </h2>
              </div>
            </div>
            
            <div className="flex flex-col items-start lg:items-end gap-8">
              <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed text-left lg:text-right font-medium">
                A curated selection of <span className="text-white font-bold border-b border-blue-500/50 pb-0.5">{projectsList.length} global solutions</span> involving high-stakes engineering and bespoke design.
              </p>
              
              {/* View Mode Toggle */}
              <div className="flex bg-[#050505]/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
                <button 
                  onClick={() => setViewMode("carousel")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 ${viewMode === "carousel" ? "bg-blue-500 text-black shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "text-white/40 hover:text-white"}`}
                >
                  <FiLayout className="w-4 h-4" />
                  <span>Carousel</span>
                </button>
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 ${viewMode === "grid" ? "bg-blue-500 text-black shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "text-white/40 hover:text-white"}`}
                >
                  <FiGrid className="w-4 h-4" />
                  <span>Grid</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs - Ultra Premium SaaS Style */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-16 mt-6">
          <span className="text-white/40 text-xs font-black uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:-right-5 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-blue-500 after:rounded-full hidden sm:block">Filter by</span>
          <div className="flex flex-wrap items-center p-1.5 rounded-full bg-black/40 border border-white/5 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-6 sm:px-8 py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden ${
                  activeFilter === cat 
                    ? "text-white" 
                    : "text-white/40 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {activeFilter === cat && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.2)] z-0" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects View */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.id} className="proj-card-item group">
                <ProjectCard project={project} onClick={handleProjectClick} />
              </div>
            ))}
          </div>
        ) : (
          <div className="carousel-container relative">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="mySwiper !pb-20"
            >
              {filtered.map((project) => (
                <SwiperSlide key={project.id} className="!w-[90%] md:!w-[80%] lg:!w-[70%]">
                  <CarouselCard project={project} onClick={handleProjectClick} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:text-black transition-all">
              <FiChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:text-black transition-all">
              <FiChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-8">End of curated list</p>
          <a href="https://github.com/muhammadabdullahhussain" target="_blank" rel="noopener noreferrer" className="btn-outline group">
            <span>Discover more on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
