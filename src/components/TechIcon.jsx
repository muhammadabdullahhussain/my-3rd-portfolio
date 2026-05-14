const TechIcon = ({ icon }) => {
  return (
    <div className="flex flex-col items-center gap-4 flex-shrink-0 group cursor-pointer px-2 md:px-4">
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon image */}
        <img
          src={icon.image}
          alt={icon.name}
          className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
          loading="lazy"
        />
      </div>
      <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-300">
        {icon.name}
      </span>
    </div>
  );
};

export default TechIcon;
