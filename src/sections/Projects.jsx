import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsList, projectCategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, onClick }) => {
  const isMobile = project.category === "mobile";
  
  return (
    <div
      className="project-card group cursor-pointer h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className={`relative overflow-hidden transition-all duration-500 ${isMobile ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
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
            {project.liveUrl !== "#" && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                className="btn-primary text-xs py-2 px-4 flex-1 text-center justify-center">
                <span>Live Demo</span>
              </a>
            )}
            <button className="btn-outline text-xs py-2 px-4 flex-1 text-center justify-center backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">
              View Details
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
          {project.tech.length > 3 && (
            <span className="px-2 py-1 rounded-full text-[10px] font-bold text-white/40">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const isMobile = project.category === "mobile";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
      <div
        className="relative max-w-4xl w-full glass-card border-white/10 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-all z-50 backdrop-blur-md"
        >
          ✕
        </button>

        <div className="w-full bg-black/40 relative flex items-center justify-center overflow-hidden h-64 sm:h-80 md:h-[400px]">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-8">
             <div className="flex items-center gap-3">
              <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full p-8 sm:p-12 overflow-y-auto custom-scrollbar">
          <div className="mb-10">
            <h2 className="text-white text-3xl sm:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter italic">
              {project.title.split(" — ")[0]}
              {project.title.includes(" — ") && (
                <>
                  <br />
                  <span className="text-white/40 not-italic font-light">{project.title.split(" — ")[1]}</span>
                </>
              )}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-light italic border-l-2 border-white/10 pl-6">
              "{project.longDesc}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-lg text-xs font-bold bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-end justify-end self-end">
              {project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-center justify-center py-4 px-10">
                  <span>Explore Live →</span>
                </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto text-center justify-center py-4 px-10 bg-white/5 border-white/10">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const filtered = projectsList.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proj-title-wrap", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".proj-title-wrap", start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    gsap.fromTo(".proj-card-item", { opacity: 0, y: 50, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.08,
    });
  }, [filtered]);

  return (
    <section id="projects" ref={sectionRef} className="w-full relative overflow-hidden py-28 md:py-48">
      <div className="gradient-sphere projects-sphere-1" />
      <div className="gradient-sphere projects-sphere-2" />

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Title */}
        <div className="proj-title-wrap mb-16 opacity-0 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-4 block">06 — Featured Works</span>
            <h2 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-title leading-[1.1]">Selected <br className="hidden md:block" /> Projects</h2>
          </div>
          <p className="text-white/50 text-lg max-w-sm leading-relaxed lg:pb-2">
            A curated selection of <span className="text-white font-semibold italic">{projectsList.length} global solutions</span> involving high-stakes engineering and design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab px-6 py-3 text-sm font-bold uppercase tracking-widest ${activeFilter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div key={project.id} className="proj-card-item group">
              <ProjectCard project={project} onClick={setSelectedProject} />
            </div>
          ))}
        </div>

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
