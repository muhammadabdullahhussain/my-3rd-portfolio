import { footerIconsList, footerLinks, navItems } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleNavClick = (href) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0b0620 0%, #0d0824 100%)" }}>
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #598eff40, #ff28d540, #598eff40, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 w-full">

          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="logo" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="text-white font-bold text-lg">Muhammad Abdullah</p>
                <p className="text-blue-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Building beautiful, high-performance web experiences. Based in Lahore, Pakistan 🇵🇰. Available for freelance worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {footerIconsList.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-400/50 hover:bg-blue-400/5 transition-all duration-300 hover:-translate-y-1"
                  aria-label={icon.name}
                >
                  <img src={icon.icon} alt={icon.name} className="w-5 h-5 opacity-70" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns wrapper */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {footerLinks.map((col, i) => (
              <div key={i} className="flex flex-col">
                <h4 className="text-white font-semibold mb-4 sm:mb-5 text-sm tracking-wider">{col.heading}</h4>
                <ul className="flex flex-col gap-2.5 sm:gap-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("#") ? (
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className="text-white/40 text-sm hover:text-blue-400 transition-colors text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 text-sm hover:text-blue-400 transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter / status */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider">Quick Contact</h4>
            <div className="glass-card p-5 sm:p-6 flex flex-col gap-4 w-full overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-white/60 text-sm break-words leading-tight">Available for new projects</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="btn-primary text-sm py-3 px-2 text-center justify-center w-full"
              >
                <span className="truncate">Start a Project</span>
              </a>
              <a
                href="https://wa.me/923281351814"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-3 px-2 text-center justify-center w-full"
              >
                <span className="truncate">💬 WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">
            {year} © Muhammad Abdullah Hussain. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-white/20 text-xs hover:text-white/50 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          <p className="text-white/20 text-xs">
            Built with ❤️ + React + Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
