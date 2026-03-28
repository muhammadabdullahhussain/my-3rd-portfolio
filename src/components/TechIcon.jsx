const TechIcon = ({ icon }) => {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0 group cursor-default">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 group-hover:border-blue-400/40 group-hover:bg-blue-400/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(89,142,255,0.2)]">
        <img
          src={icon.image}
          alt={icon.name}
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-white/30 text-xs group-hover:text-white/60 transition-colors whitespace-nowrap">
        {icon.name}
      </span>
    </div>
  );
};

export default TechIcon;
