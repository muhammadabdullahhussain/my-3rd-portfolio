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
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "4+", label: "Years Experience" },
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
  { name: "Shopify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
  { name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "WooCommerce", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
  { name: "React", image: "/images/react.svg" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", image: "/images/ts.svg" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Supabase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "GitHub", image: "/images/github.svg" },
];

// Skill Categories
const skillCategories = [
  {
    category: "Full Stack & CMS",
    color: "#598eff",
    skills: [
      { name: "Next.js / React", level: 95 },
      { name: "Shopify App Dev", level: 92 },
      { name: "WooCommerce / WP", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Node.js / Express", level: 90 },
    ],
  },
  {
    category: "Shopify Expertise",
    color: "#95bf47",
    skills: [
      { name: "Remix / Polaris", level: 94 },
      { name: "GraphQL / APIs", level: 85 },
      { name: "Theme Customization", level: 98 },
      { name: "App Extensions", level: 88 },
    ],
  },
  {
    category: "Databases & UI",
    color: "#ff28d5",
    skills: [
      { name: "MongoDB / MySQL", level: 88 },
      { name: "Supabase", level: 85 },
      { name: "Tailwind / Shadcn", level: 95 },
      { name: "React Native", level: 82 },
    ],
  },
  {
    category: "Tools & DevOps",
    color: "#ff6b35",
    skills: [
      { name: "Git & GitHub", level: 93 },
      { name: "CI/CD Workflows", level: 80 },
      { name: "Firebase / Vercel", level: 90 },
      { name: "RESTful APIs", level: 92 },
    ],
  },
];

// Work Experience
const experienceList = [
  {
    role: "Full Stack / Shopify App Developer",
    company: "The Support Point",
    period: "June 2025 — Present",
    type: "Full-time",
    description:
      "Developing full-stack web and mobile applications using modern technologies including React, Next.js, TypeScript, Node.js, and Express.js.",
    highlights: [
      "Building and maintaining scalable Shopify apps, including custom integrations and APIs.",
      "Designing efficient database architectures using MongoDB and MySQL.",
      "Implementing secure authentication systems and optimizing backend performance.",
      "Creating responsive, user-friendly UI/UX using Tailwind CSS and modern libraries.",
    ],
    tech: ["Shopify", "Next.js", "TypeScript", "Node.js", "MySQL"],
    color: "#598eff",
  },
  {
    role: "Full Stack MERN / Next.js Developer",
    company: "Bigosoft",
    period: "August 2024 — May 2025",
    type: "Full-time",
    description:
      "Built scalable full-stack applications using Next.js, React, TypeScript, Node.js, and MongoDB.",
    highlights: [
      "Developed RESTful APIs with secure authentication and optimized database schemas.",
      "Created modular, reusable components with advanced state management.",
      "Optimized performance for large-scale production environments.",
    ],
    tech: ["MERN", "Next.js", "TypeScript", "Tailwind"],
    color: "#ff28d5",
  },
  {
    role: "MERN Stack & React Native Intern",
    company: "Nitensclue",
    period: "October 2023 — July 2024",
    type: "Internship",
    description:
      "Delivered scalable, high-performance front-end solutions for live projects.",
    highlights: [
      "Implemented APIs, backend logic, and database management with MySQL/Sequelize.",
      "Managed version control and CI/CD workflows with Git/GitHub Desktop.",
      "Deployed projects on Vercel and handled production deployments.",
    ],
    tech: ["React Native", "MySQL", "Sequelize", "Vercel"],
    color: "#C8D751",
  },
  {
    role: "Next.js Developer",
    company: "Sakafa Web Solutions",
    period: "April 2023 — September 2023",
    type: "Contract",
    description:
      "Developed Next.js applications with Redux and React Query for efficient state management.",
    highlights: [
      "Built scalable, maintainable code using reusable components and modern frontend best practices.",
      "Managed projects via Git/GitHub, delivering solutions publicly.",
    ],
    tech: ["Next.js", "Redux", "React Query", "Tailwind"],
    color: "#ff6b35",
  },
  {
    role: "Freelance Full Stack & CMS Developer",
    company: "Self-Employed / Upwork",
    period: "April 2022 — March 2023",
    type: "Freelance",
    description:
      "Started as a CMS developer specializing in WordPress and WooCommerce before transitioning to Full Stack JavaScript development.",
    highlights: [
      "Developed 30+ custom WordPress and WooCommerce websites for global clients.",
      "Built custom Shopify themes and basic app integrations.",
      "Mastered MERN stack development through rigorous self-study and real-world client projects.",
      "Delivered high-performance solutions independently, following modern architecture.",
    ],
    tech: ["WordPress", "WooCommerce", "Shopify", "MERN Stack", "PHP"],
    color: "#a855f7",
  },
];

// Education
const educationList = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Virtual University of Pakistan",
    period: "2025 — Present",
    grade: "Currently Enrolled",
    description:
      "Pursuing a degree in Software Engineering with a focus on advanced software development and system architecture.",
    achievements: [
      "Online distance learning while working full-time",
      "Focusing on large-scale software engineering principles",
    ],
    icon: "🎓",
    color: "#598eff",
  },
  {
    degree: "Intermediate (Computer Science - ICS)",
    institution: "Government Graduate College, Punjab",
    period: "2022 — 2024",
    grade: "75% Marks (3rd Position)",
    description:
      "Excelled in Computer Science and Mathematics, securing 3rd position in class.",
    achievements: [
      "3rd position in class overall",
      "2nd position in inter-school coding competition",
      "Completed multiple personal React.js projects during studies",
    ],
    icon: "📜",
    color: "#ff28d5",
  },
  {
    degree: "Matriculation (SSC - Class X)",
    institution: "BISE, Faisalabad",
    period: "2021 — 2022",
    grade: "Excellent",
    description:
      "Foundational education in science and mathematics.",
    achievements: [
      "Strong foundation in logical reasoning and problem solving",
    ],
    icon: "🏫",
    color: "#C8D751",
  },
];

// Services
const servicesList = [
  {
    icon: "🛍️",
    title: "Shopify App Development",
    description:
      "Building high-performance Shopify apps using Remix, Polaris, and GraphQL. Custom integrations, APIs, and embedded app experiences.",
    features: ["Remix / Next.js", "Shopify Polaris UI", "GraphQL APIs", "Webhook Integration"],
    color: "#95bf47",
    price: "From $800",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Complete WooCommerce and Shopify store setup with custom theme development, product management, and payment integration.",
    features: ["Custom Store Design", "WooCommerce / Shopify", "Payment Gateway", "Inventory Sync"],
    color: "#a855f7",
    price: "From $600",
  },
  {
    icon: "🌐",
    title: "Full Stack Development",
    description:
      "Scalable web applications built with MERN stack and Next.js. Clean code, fast performance, and secure architecture.",
    features: ["Next.js / React", "Node.js / Express", "MongoDB / MySQL", "REST APIs"],
    color: "#598eff",
    price: "From $500",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native. iOS and Android solutions with native-like performance.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Firebase Auth"],
    color: "#ff28d5",
    price: "From $1000",
  },
  {
    icon: "🎨",
    title: "Modern UI/UX Design",
    description:
      "Stunning, responsive interfaces designed in Figma with a focus on conversion and user retention.",
    features: ["Figma / Adobe XD", "Prototyping", "Design Systems", "Tailwind / Shadcn"],
    color: "#C8D751",
    price: "From $300",
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    description:
      "Speeding up existing websites, optimizing database queries, and improving Core Web Vitals for better SEO.",
    features: ["SEO Optimization", "Load Time Reduction", "Database Tuning", "Code Audit"],
    color: "#06b6d4",
    price: "From $50/hr",
  },
];

// Projects
const projectsList = [
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
  {
    id: 1,
    slug: "mannorwear",
    title: "MannorWear — Fashion E-commerce",
    category: "web",
    description:
      "A high-end fashion e-commerce platform built with Next.js and MERN stack, featuring seamless payments and dynamic collections.",
    longDesc:
      "Developed a responsive fashion e-commerce platform using Next.js and MERN stack. Features dynamic product filtering, real-time inventory management, and an optimized checkout flow designed for high conversion rates.",
    img: "/images/p9.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "MERN Stack"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#C8D751",
  },
  {
    id: 2,
    slug: "fresh-basket",
    title: "Fresh Basket — Grocery App",
    category: "mobile",
    description:
      "A clean, minimal e-commerce platform with dynamic search, real-time Firebase integration, and modular code structure.",
    longDesc:
      "Built a modern grocery delivery platform focusing on speed and simplicity. Implemented dynamic search/filtering, real-time database synchronization via Firebase, and a responsive UI that works across all devices.",
    img: "/images/p1.png",
    tech: ["React", "Firebase", "REST API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#4ade80",
  },
  {
    id: 3,
    slug: "edu-track",
    title: "Edu Track — College Management",
    category: "web",
    description:
      "A comprehensive college management system designed to streamline academic operations and student tracking.",
    longDesc:
      "Developed a full-scale management system for educational institutions. Features include student portals, attendance tracking, fee management, and automated report generation using Node.js and MySQL.",
    img: "/images/p10.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#3b82f6",
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
    slug: "quizora",
    title: "Quizora — Quiz SaaS",
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
    slug: "nixtio",
    color: "#ec4899",
  },
  {
    id: 12,
    slug: "shopify-inventory-pro",
    title: "Shopify — Inventory Pro",
    category: "web",
    description:
      "A custom Shopify app built with Remix and Polaris for real-time inventory synchronization across multiple warehouses.",
    longDesc:
      "Developed a custom Shopify public app that integrates with external ERP systems to sync inventory levels across multi-location stores. Uses webhooks for real-time updates and GraphQL for high-performance data fetching.",
    img: "/images/p9.png",
    tech: ["Shopify Remix", "Polaris", "GraphQL", "Node.js", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#95bf47",
  },
  {
    id: 13,
    slug: "luxury-watches-wp",
    title: "WordPress — Luxury Watches",
    category: "web",
    description:
      "A premium WooCommerce store for luxury watches with custom theme development and high-speed optimization.",
    longDesc:
      "Built a highly optimized e-commerce store using WordPress and WooCommerce. Developed a custom theme with ACF and Elementor Pro, focusing on mobile responsiveness and SEO performance.",
    img: "/images/p10.png",
    tech: ["WordPress", "WooCommerce", "PHP", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#21759b",
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
