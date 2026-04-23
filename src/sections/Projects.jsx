import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { projectsList, projectCategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="project-card group cursor-pointer h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden aspect-[16/10]">
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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
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

  useGSAP(() => {
    gsap.fromTo(".proj-card-item", { opacity: 0, y: 50, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.08,
    });
  }, [filtered]);

  return (
    <section id="projects" ref={sectionRef} className="w-full relative overflow-hidden py-28 md:py-48">
      <div className="gradient-sphere projects-sphere-1" />
      <div className="gradient-sphere projects-sphere-2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Title */}
        <div className="proj-title-wrap mb-16 opacity-0 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-4 block">02 — Portfolio</span>
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
              <ProjectCard project={project} onClick={handleProjectClick} />
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
