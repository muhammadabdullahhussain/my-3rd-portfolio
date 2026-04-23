import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsList } from "../constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsList.find((p) => p.slug === slug);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!project) {
      navigate("/");
      return;
    }

    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(".p-header", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" });
      gsap.fromTo(".p-image", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(".p-content", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.5 });
      gsap.fromTo(".p-sidebar", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.7 });
    }, containerRef);

    return () => ctx.revert();
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div ref={containerRef} className="min-h-screen bg-[#030014] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="p-header mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/60">
              {project.category}
            </span>
            <div className="w-2 h-2 rounded-full" style={{ background: project.color }} />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
            {project.title.split(" — ")[0]}
            <br />
            <span className="text-white/20">{project.title.split(" — ")[1]}</span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="p-image relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-20 border border-white/10">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 p-content">
            <h2 className="text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-8">About the Project</h2>
            <div className="text-white/70 text-xl md:text-2xl leading-relaxed mb-12 italic border-l-4 border-white/10 pl-8">
              "{project.longDesc}"
            </div>
            
            <h3 className="text-white text-2xl font-bold mb-6">Overview</h3>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              This project involved deep architectural decisions to ensure scalability and high performance. 
              The goal was to create a seamless user experience while maintaining robust backend logic. 
              {project.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h4 className="text-white font-bold mb-4">Core Challenge</h4>
                <p className="text-white/50 text-sm">Designing a system that balances complex functionality with extreme performance and minimalist aesthetics.</p>
              </div>
              <div className="glass-card p-8">
                <h4 className="text-white font-bold mb-4">The Solution</h4>
                <p className="text-white/50 text-sm">Leveraging modern stacks like {project.tech[0]} and {project.tech[1]} to build a reactive, data-driven environment.</p>
              </div>
            </div>
          </div>

          <div className="p-sidebar">
            <div className="sticky top-32 space-y-12">
              {/* Tech Stack */}
              <div>
                <h3 className="text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-5 py-2.5 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-6">Live Resources</h3>
                <div className="flex flex-col gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center py-4 text-center group"
                  >
                    <span>View Live Site</span>
                    <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center py-4 text-center bg-white/5 border-white/10 group"
                  >
                    <span>Source Code</span>
                    <FiGithub className="group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="glass-card p-8 bg-blue-500/5 border-blue-500/10">
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">Completion Status</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Production Ready</span>
                  <span className="text-blue-400 font-black">100%</span>
                </div>
                <div className="w-full h-1 bg-white/5 mt-4 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
