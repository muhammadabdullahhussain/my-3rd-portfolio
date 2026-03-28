// Navigation
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

// Stats
const statsList = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

// Social Links
const bentoSocialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/muhammadabdullahhussain",
    icon: "/images/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/",
    icon: "/images/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923281351814",
    icon: "/images/whatsapp.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/images/insta.svg",
  },
];

// Tech Stack Icons
const iconsList = [
  { name: "HTML5", image: "/images/html.svg" },
  { name: "CSS3", image: "/images/css.svg" },
  { name: "JavaScript", image: "/images/js.svg" },
  { name: "React", image: "/images/react.svg" },
  { name: "TypeScript", image: "/images/ts.svg" },
  { name: "Three.js", image: "/images/threejs.svg" },
  { name: "GSAP", image: "/images/gsap.svg" },
  { name: "Figma", image: "/images/figma.svg" },
  { name: "GitHub", image: "/images/github.svg" },
  { name: "AWS", image: "/images/aws.svg" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

// Skill Categories
const skillCategories = [
  {
    category: "Frontend",
    color: "#598eff",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Three.js", level: 80 },
      { name: "GSAP", level: 85 },
      { name: "TailwindCSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    color: "#ff28d5",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    category: "Database & Cloud",
    color: "#C8D751",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 85 },
      { name: "AWS", level: 72 },
    ],
  },
  {
    category: "Design & Tools",
    color: "#ff6b35",
    skills: [
      { name: "Figma", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Git & GitHub", level: 93 },
      { name: "Docker", level: 70 },
    ],
  },
];

// Work Experience
const experienceList = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2022 — Present",
    type: "Full-time",
    description:
      "Building high-quality web applications for international clients across multiple industries including e-commerce, SaaS, and logistics.",
    highlights: [
      "Delivered 50+ custom web projects from design to deployment",
      "Built real-time dashboards with React, Node.js & WebSockets",
      "Integrated payment gateways (Stripe, PayPal) for e-commerce apps",
      "Created 3D interactive experiences with Three.js & GSAP",
    ],
    tech: ["React", "Node.js", "MongoDB", "Three.js", "AWS"],
    color: "#598eff",
  },
  {
    role: "Frontend Developer",
    company: "Shipday Platform",
    period: "2023 — 2024",
    type: "Contract",
    description:
      "Developed the delivery management dashboard UI with complex data visualization, real-time order tracking, and driver assignment features.",
    highlights: [
      "Built a real-time order tracking interface with map integration",
      "Designed responsive data tables handling 10,000+ records",
      "Improved dashboard load time by 40% through code optimization",
      "Implemented dark mode and accessibility improvements",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Google Maps API"],
    color: "#ff28d5",
  },
  {
    role: "UI/UX Designer & Developer",
    company: "Mannorwear Fashion",
    period: "2023",
    type: "Contract",
    description:
      "Designed and developed the full e-commerce platform with custom product builder, cart, and checkout flow.",
    highlights: [
      "Created custom product customization UI with live preview",
      "Integrated WooCommerce backend with custom React frontend",
      "Boosted conversion rate by 25% with optimized checkout flow",
    ],
    tech: ["React", "WooCommerce", "CSS3", "Figma"],
    color: "#C8D751",
  },
  {
    role: "Web Developer",
    company: "Various Startups",
    period: "2021 — 2022",
    type: "Part-time",
    description:
      "Started professional career building websites and landing pages for local businesses and startups.",
    highlights: [
      "Built 10+ landing pages with conversion-optimized design",
      "Learned React, Node.js, and database integration",
      "Delivered projects under tight deadlines",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    color: "#ff6b35",
  },
];

// Education
const educationList = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Punjab",
    period: "2020 — 2024",
    grade: "3.5 GPA",
    description:
      "Studied software engineering, algorithms, data structures, database systems, and computer networks.",
    achievements: [
      "Dean's List — 3 consecutive semesters",
      "Final year project: AI-powered web application",
      "Active member of the coding club",
    ],
    icon: "🎓",
    color: "#598eff",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Udemy / Coursera",
    period: "2021 — 2022",
    grade: "Certified",
    description:
      "Completed professional certification in MERN stack development, covering React, Node.js, MongoDB, and REST API design.",
    achievements: [
      "Top 5% of all learners",
      "Completed 8 real-world projects",
      "Built full e-commerce and SaaS apps",
    ],
    icon: "📜",
    color: "#ff28d5",
  },
  {
    degree: "Three.js & WebGL Journey",
    institution: "Bruno Simon — Three.js Journey",
    period: "2023",
    grade: "Certified",
    description:
      "Industry-leading course on 3D graphics for the web using Three.js, shaders, and WebGL.",
    achievements: [
      "Built 20+ 3D scenes and interactive experiences",
      "Mastered GLSL shaders and custom materials",
    ],
    icon: "🌐",
    color: "#C8D751",
  },
  {
    degree: "UI/UX Design Fundamentals",
    institution: "Google UX Design Certificate",
    period: "2022",
    grade: "Certified",
    description:
      "Learned design thinking, wireframing, prototyping, and usability testing.",
    achievements: [
      "Created 3 complete product design case studies",
      "Mastered Figma for design and prototyping",
    ],
    icon: "🎨",
    color: "#ff6b35",
  },
];

// Services
const servicesList = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Next.js, Node.js, and modern databases. Clean code, fast performance, scalable architecture.",
    features: ["React / Next.js", "Node.js / Express", "REST & GraphQL APIs", "Database Design"],
    color: "#598eff",
    price: "From $500",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using React Native. iOS and Android from a single codebase with native performance.",
    features: ["React Native", "iOS & Android", "Push Notifications", "App Store Deployment"],
    color: "#ff28d5",
    price: "From $800",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Stunning interfaces designed in Figma with a focus on user experience, conversion, and brand identity.",
    features: ["Figma Design", "Wireframing", "Prototyping", "Design Systems"],
    color: "#C8D751",
    price: "From $300",
  },
  {
    icon: "🌟",
    title: "3D & Animation",
    description:
      "Interactive 3D experiences and micro-animations using Three.js, GSAP, and WebGL for next-level web presence.",
    features: ["Three.js / WebGL", "GSAP Animations", "3D Model Integration", "Particle Systems"],
    color: "#ff6b35",
    price: "From $600",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Complete online stores with product management, cart, checkout, payment integration (Stripe, PayPal), and admin dashboards.",
    features: ["Custom Store", "Payment Gateway", "Inventory Management", "Analytics Dashboard"],
    color: "#a855f7",
    price: "From $700",
  },
  {
    icon: "🚀",
    title: "Consulting & Support",
    description:
      "Technical consulting, code review, performance optimization, and ongoing support for your existing projects.",
    features: ["Code Review", "Performance Audit", "Tech Stack Advice", "Ongoing Maintenance"],
    color: "#06b6d4",
    price: "From $50/hr",
  },
];

// Projects
const projectsList = [
  {
    id: 1,
    title: "Shipday Dashboard",
    category: "web",
    description:
      "A real-time delivery management platform with live order tracking, driver assignment, and analytics dashboard.",
    longDesc:
      "Built a comprehensive delivery management platform for Shipday with real-time WebSocket-based order tracking, interactive map integration, bulk driver management, and performance analytics.",
    img: "/images/p5.png",
    tech: ["React", "TypeScript", "Node.js", "Google Maps API", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#598eff",
  },
  {
    id: 2,
    title: "Sofi — Fashion Platform",
    category: "web",
    description:
      "Elegant e-commerce platform for a fashion brand with custom product filtering, wishlist, and multi-currency checkout.",
    longDesc:
      "Designed and developed a full-featured fashion e-commerce platform with advanced filtering, size guides, wishlist, and Stripe payment integration.",
    img: "/images/p1.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#ff28d5",
  },
  {
    id: 3,
    title: "Mannorwear",
    category: "web",
    description:
      "Custom fashion e-commerce with a unique product customization tool allowing users to design their own outfits.",
    longDesc:
      "Built a fashion e-commerce platform with a real-time product customizer where users can choose colors, fabrics, and sizes with live preview.",
    img: "/images/p9.png",
    tech: ["React", "WooCommerce", "PHP", "CSS3", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#C8D751",
  },
  {
    id: 4,
    title: "Associate College Platform",
    category: "web",
    description:
      "A full academic management system for a college including student portals, grade management, and online registration.",
    longDesc:
      "Developed a college management system with role-based access for admins, teachers, and students. Features include online registration, result management, and fee tracking.",
    img: "/images/p10.png",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#ff6b35",
  },
  {
    id: 5,
    title: "Jasmina — Portfolio",
    category: "design",
    description:
      "Minimal and elegant portfolio website for a creative professional with smooth GSAP animations and 3D elements.",
    longDesc:
      "Designed and built a stunning personal portfolio with GSAP scroll animations, custom cursor, and Three.js 3D hero section.",
    img: "/images/p2.png",
    tech: ["React", "GSAP", "Three.js", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#a855f7",
  },
  {
    id: 6,
    title: "d.tampe — Brand Site",
    category: "design",
    description:
      "Brand website for a creative agency with bold typography, parallax scrolling, and custom hover interactions.",
    longDesc:
      "Full brand site with custom scroll experiences, parallax effects, magnetic buttons, and animated page transitions.",
    img: "/images/p3.png",
    tech: ["React", "GSAP", "CSS3", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#06b6d4",
  },
  {
    id: 7,
    title: "Blimp.gr — SaaS Platform",
    category: "web",
    description:
      "SaaS analytics dashboard with multi-tenant architecture, custom charts, data export, and team management.",
    longDesc:
      "Built a SaaS analytics platform with subscription billing, real-time data visualization using D3.js, team management, and white-label support.",
    img: "/images/p4.png",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#10b981",
  },
  {
    id: 8,
    title: "Lewis — Portfolio",
    category: "design",
    description:
      "High-impact portfolio for a photographer with full-screen galleries, lazy loading, and cinematic transitions.",
    longDesc:
      "Photography portfolio with masonry gallery layout, lightbox, cinematic page transitions, and mobile-first design.",
    img: "/images/p6.png",
    tech: ["React", "GSAP", "CSS Grid", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#f59e0b",
  },
  {
    id: 9,
    title: "Shipday Mobile App",
    category: "web",
    description:
      "React Native driver app for Shipday with real-time order notifications, GPS tracking, and proof of delivery.",
    longDesc:
      "Cross-platform mobile app for delivery drivers with real-time push notifications, Google Maps navigation, digital proof of delivery, and offline support.",
    img: "/images/p7.png",
    tech: ["React Native", "Firebase", "Google Maps", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#ef4444",
  },
  {
    id: 10,
    title: "Hawk Style Dashboard",
    category: "web",
    description:
      "Admin dashboard for a retail chain with inventory management, sales analytics, and employee management.",
    longDesc:
      "Full-featured admin panel with inventory tracking, sales funnel analytics, employee scheduling, and PDF report generation.",
    img: "/images/p8.png",
    tech: ["React", "Node.js", "MySQL", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#8b5cf6",
  },
  {
    id: 11,
    title: "Nixtio — Furniture Marketplace",
    category: "mobile",
    description:
      "A luxury furniture marketplace featuring a curated collection of modern chairs, lounges, and office furniture.",
    longDesc:
      "Nixtio provides a premium shopping experience for high-end furniture with high-resolution catalogs, secure checkout, and detailed product comparisons for modern living spaces.",
    img: "/apps screenshots/9ba393e689edbf03bd78db202d096cf8.webp",
    tech: ["React Native", "Firebase", "Framer Motion", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#4ade80",
  },
  {
    id: 12,
    title: "CoinWave — Crypto Trading",
    category: "mobile",
    description:
      "A sophisticated cryptocurrency exchange and trading platform with real-time market data and advanced charting.",
    longDesc:
      "CoinWave provides traders with a powerful interface for exchanging digital assets, managing portfolios, and analyzing market trends with precision and speed.",
    img: "/apps screenshots/original-313ce9380bf93d8a63bca0172fcccca6.webp",
    tech: ["React Native", "Web3.js", "Chart.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#8b5cf6",
  },
  {
    id: 13,
    title: "TripGlide — Travel Booking",
    category: "mobile",
    description:
      "A premium travel companion app for exploring destinations, booking tours, and planning multi-day adventures.",
    longDesc:
      "TripGlide offers an immersive travel experience with expert-curated itineraries, high-quality destination photography, and seamless tour booking across South America and beyond.",
    img: "/apps screenshots/original-5a0621b7a943fc636554615a823aa49d.webp",
    tech: ["React Native", "Google Maps", "Firebase", "Amadeus API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#3b82f6",
  },
  {
    id: 14,
    title: "GourmetGrove — Food Delivery",
    category: "mobile",
    description:
      "A premium food delivery and reservation app connecting users with elite restaurants and exclusive dining experiences.",
    longDesc:
      "GourmetGrove simplifies dining by offering seamless table reservations, real-time order tracking, and personalized culinary recommendations from the city's top-rated chefs.",
    img: "/apps screenshots/original-ac3dbbf377894c99a2f38962bf293856.webp",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#ff6b35",
  },
  {
    id: 15,
    title: "Xefag — Pharmacy App",
    category: "mobile",
    description:
      "A modern pharmacy application for ordering medications, tracking prescriptions, and consulting with pharmacists.",
    longDesc:
      "Xefag revolutionizes the way you manage your health by providing an easy-to-use platform for purchasing healthcare products with fast delivery and expert medical guidance.",
    img: "/apps screenshots/original-f14b1f6910cab67c2565d9a97004bfcd.webp",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#fbbf24",
  },
  {
    id: 16,
    title: "Nixtio — AI Scanner",
    category: "mobile",
    description:
      "A powerful AI-driven document scanner for digitizing, editing, and converting documents on the go.",
    longDesc:
      "Nixtio AI Scanner simplifies document management with high-precision OCR, automated edge detection, and seamless PDF/JPG conversion with smart organizational tools.",
    img: "/apps screenshots/original-f61ad4c1ae2a222cdd4da78082ff7a7b.webp",
    tech: ["React Native", "OpenCV", "TensorFlow.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#6366f1",
  },
  {
    id: 17,
    title: "Mobile UI Design Kit",
    category: "design",
    description:
      "A comprehensive design system for modern mobile applications with hundreds of reusable components.",
    longDesc:
      "This UI Kit provides a robust foundation for building consistent and beautiful mobile interfaces, including typography, color systems, and interactive elements.",
    img: "/apps screenshots/go-media-user-interface-design-mobile-2048x731.jpg",
    tech: ["Figma", "Sketch", "Adobe XD", "UI Design"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#c084fc",
  },
  {
    id: 18,
    title: "BondUs — Connect & Chat",
    category: "mobile",
    description:
      "A proximity-based social ecosystem connecting you with local communities and professionals within a 25km radius.",
    longDesc:
      "BondUs bridges the gap between digital interaction and real-world connection. Users can discover experts nearby, join interest-led group chats, and build meaningful professional networks using smart filters and map-based discovery.",
    img: "/apps screenshots/2a029619-77e0-4f95-8834-7af69eac8290.jpeg",
    tech: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#6366f1",
  },
];

// Project filter categories
const projectCategories = ["all", "web", "mobile", "design"];

// Old carousel slides (kept for compatibility)
const slides = projectsList.map((p) => ({ id: p.id, title: p.title, img: p.img }));

// Testimonials
const testimonials = [
  {
    name: "John Miller",
    pos: "Founder of ModernEdge Solutions",
    review:
      "Muhammad Abdullah turned our vision into a stunning, functional platform. Their creativity and technical expertise truly set them apart. The delivery speed and quality blew us away.",
    imgPath: "/images/client1.png",
    rating: 5,
  },
  {
    name: "Emily Carter",
    pos: "UX Designer at PixelWorks Studio",
    review:
      "Consistently brings fresh ideas and innovative solutions. Their passion for creativity and pixel-perfect attention to detail elevate every project. Highly recommend!",
    imgPath: "/images/client2.png",
    rating: 5,
  },
  {
    name: "Sarah Lopez",
    pos: "Entrepreneur & Small Business Owner",
    review:
      "Exceeded my expectations with a unique, beautifully designed product that works flawlessly. My sales doubled within 3 months of launching the new website!",
    imgPath: "/images/client3.png",
    rating: 5,
  },
  {
    name: "David Chen",
    pos: "Project Manager at CreativeSphere Agency",
    review:
      "Blends technical skills with bold creativity to deliver exceptional results. Pushes boundaries and elevates every project. We've worked together on 5 projects now.",
    imgPath: "/images/client4.png",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    pos: "CTO at Blimp Technologies",
    review:
      "Delivered our SaaS dashboard ahead of schedule with zero bugs. The code quality was exceptional — clean, modular, and well-documented. A true professional.",
    imgPath: "/images/client1.png",
    rating: 5,
  },
  {
    name: "Maria Santos",
    pos: "Creative Director at Studio Nova",
    review:
      "The 3D animations and micro-interactions added to our site completely transformed our brand perception. Clients constantly compliment our website now.",
    imgPath: "/images/client2.png",
    rating: 5,
  },
];

// Footer
const footerIconsList = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: "/images/b-fb.svg" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "/images/b-insta.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/", icon: "/images/b-linked.svg" },
  { name: "WhatsApp", href: "https://wa.me/923281351814", icon: "/images/b-whatsapp.svg" },
];

const footerLinks = [
  {
    heading: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
    ],
  },
  {
    heading: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "3D & Animation", href: "#services" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { name: "Send Message", href: "#contact" },
      { name: "WhatsApp", href: "https://wa.me/923281351814" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/" },
      { name: "GitHub", href: "https://github.com/muhammadabdullahhussain" },
    ],
  },
];

export {
  navItems,
  statsList,
  bentoSocialLinks,
  iconsList,
  skillCategories,
  experienceList,
  educationList,
  servicesList,
  projectsList,
  projectCategories,
  slides,
  testimonials,
  footerIconsList,
  footerLinks,
};
