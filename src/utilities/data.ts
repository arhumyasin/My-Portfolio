export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
  images?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    title: "K72 Website — Responsive Modern UI with Animation",
    description:
      "A fully responsive modern website built with React, Tailwind CSS, React Router DOM, and advanced GSAP + ScrollTrigger animations — delivering a smooth, premium interactive experience.",
    longDescription:
      "The K72 Website is a fully responsive and modern web experience built with React.js, using React Router DOM for smooth page navigation and Tailwind CSS for clean, scalable styling. The website incorporates GSAP, ScrollTrigger, and custom 2D animations to create an immersive, dynamic interface.Every section is thoughtfully crafted to provide engaging interactions, fluid transitions, and a premium-level user experience. The site adapts beautifully across all devices, ensuring that users enjoy the same polished interface on mobile, tablet, and desktop. 2D animations, micro-interactions, and controlled motion sequences give the website a unique visual identity. Combined with optimized performance, lightweight components, and a consistent design system, the K72 Website reflects professional-grade front-end development.",
    features: [
      "Advanced GSAP + ScrollTrigger Animations",
      "Custom 2D Visual Animations",
      "Smooth Page Navigation using React Router DOM",
      "Micro-interactions for Better UX",
      "Optimized Performance and Fast Loading",
      "Consistent and Scalable Design System",
      "Responsive Layout across all screen sizes",
    ],
    challenges:
      "Designed and fine-tuned custom 2D animations using GSAP, ensuring they blend naturally with scroll progress and user interactions.",
    image: "/images/Ropes.jpg",
    images: ["/images/Menu.jpg", "/images/Ropes.jpg", "/images/Front.jpg"],
    tech: ["React.js", "GSAP", "ScrollTrigger", "TailwindCSS"],
    github: "https://github.com/arhumyasin",
    // live: "https://example.com",
    slug: "finance-dashboard",
  },
  {
    title: "Skiper UI — Modern Interface with Advanced Components",
    description:
      "A polished, responsive UI system built using React, TypeScript folders, Tailwind CSS, and Lucide React — featuring smooth animations and reusable component architecture.",
    longDescription:
      "Skiper UI is a complete modern interface rebuilt using React inside a TypeScript-supported folder structure. Since the Skiper library is fully optimized for TypeScript, the project maintains clean architecture, strongly typed files, and modular component organization. The UI includes a wide range of reusable components, smooth animations, and pixel-perfect layout styling achieved using Tailwind CSS. Lucide React icons enhance the visual identity while GSAP-inspired motion patterns bring subtle micro-animations, hover effects, and transitions to life. The entire experience delivers a clean, premium, and functional modern UI suitable for dashboards, SaaS platforms, and interactive websites.",
    features: [
      "Clean, Reusable, and Scalable UI Components",
      "Modern Layouts with Tailwind CSS Utility Classes",
      "Lucide React Icons for Crisp Visual Identity",
      "Smooth Hover Interactions and Micro-Animations",
      "TypeScript-Compatible Folder Structure",
      "Fast Rendering with Optimized Component Architecture",
      "Fully Responsive Design for All Screen Sizes"
    ],
    challenges: `Maintaining a Strong Component Architecture:
                 Ensuring every UI block remained reusable and scalable required a clean TypeScript folder structure and strict separation of concerns.

                 Balancing Visual Aesthetics with Performance:
                 Used lightweight motion effects and optimized utility classes to keep animations smooth without affecting load time.`,

    image: "/images/Skiper.png",
    images: [
      "/images/SkiperCard.jpg",
      "/images/Skiper.png",
      "/images/Name.jpg",
    ],
    tech: ["React.js", "TypeScript (Structure)", "Tailwind CSS", "Lucide React", "Reusable Components"],
    github: "https://github.com/arhumyasin",
    // live: "https://example.com",
    slug: "ecommerce-platform",
  },
  {
    title: "OCHI — Modern React + Tailwind Fully Animated Website",
    description:
      "A highly interactive, animation-rich website inspired by OCHI, built with React, Tailwind CSS, Framer Motion, Locomotive Scroll, ScrollTrigger, and custom 2D animation sequences to deliver a premium, modern visual experience.",
    longDescription:
      "This project is a fully responsive and animation-focused website crafted to replicate the smooth, minimal, and cinematic feel of OCHI’s official experience. I combined Framer Motion, Locomotive Scroll, and GSAP ScrollTrigger to build fluid parallax transitions, custom cursor interactions, staggered 2D animations, section reveals, and modern card-based layouts. The entire site is optimized for performance, micro-interactions, pixel-perfect visual balance, and a premium luxury-brand feel.",
    features: [
      "Smooth locomotive scrolling with inertia effects",
      "Cinematic section transitions",
      "2D animated elements with staggered timing",
      "Parallax image & text animations",
      "Interactive hover effects with custom cursor",
      "Clean and minimal brand-inspired UI",
      "Fully responsive layout for all screen sizes",
      "High-performance GPU-accelerated animations",

    ],
    challenges:
      "Locomotive Scroll and GSAP ScrollTrigger often conflict when used together.",
    image: "/images/Eyes.jpg",
    images: [
      "/images/Eyes.jpg",
      "/images/Ochi.png",
      "/images/TextCard.jpg",
    ],
    tech: ["React.js","Tailwind CSS","Framer Motion","GSAP + ScrollTrigger","Locomotive Scroll","2D Animation Techniques","Responsive & Modern UI/UX","Component-based Architecture",],
    github: "https://github.com/arhumyasin",
    slug: "task-management",
  },
  {
    title: "GTA VI Animated Web Experience",
    description:
      "A highly interactive, animation-rich website inspired by GTA VI, built with React, JavaScript, Locomotive Scroll, Scroll Trigger, and animation sequences to deliver a premium, modern visual experience.",
    longDescription:
      "An animated web page inspired by GTA VI, featuring immersive animations and interactive elements that bring the game’s world to life. Built using modern web technologies, this project showcases smooth scrolling, dynamic visual effects, and attention to user engagement through cinematic animations.",
    features: [
      "Immersive Animation",
      "Dynamic Visual Effects",
      "Interactive Elements",
      "Interactive hover effects",
      "Clean and minimal brand-inspired UI",
      "High-performance accelerated animations",

    ],
    challenges:
      "Locomotive Scroll and GSAP ScrollTrigger often conflict when used together.",
    image: "/images/GTAFront.png",
    images: [
      "/images/GTAFront.png",
      "/images/GTASecond.png",
      "/images/Svg.png",
    ],
    tech: ["React.js","GSAP + ScrollTrigger","Locomotive Scroll","2D Animation Techniques","Modern UI/UX",],
    github: "https://github.com/arhumyasin",
    slug: "GTA-VI",
  },
  {
    title: "Thirty-Six-Studio",
    description:
      "An interactive canvas-based animation where a single click triggers a swarm of chili images, each moving at unique speeds to create a lively and dynamic visual effect",
    longDescription:
      "An interactive canvas-based animation where a single click triggers a swarm of chili images, each moving at unique speeds to create a lively and dynamic visual effect. Built using React and advanced animation techniques, this feature demonstrates fine-grained control over frame-based animations, performance optimization, and user-driven interactive experiences",
    features: [
    "Click-triggered Interactive Animation",
    "Frame-based Motion with 150 Images per Chili",
    "Unique Speed per Element for Realistic Movement",
    "Smooth Performance Optimization",
    "Canvas-based High-Fidelity Visuals",
    "Engaging User-driven Experience",
    ],
    challenges:
      "Managing performance while animating multiple high-frame images simultaneously and ensuring smooth motion without lag.",
    image: "/images/AnimatedStudio.png",
    images: [
      "/images/AnimatedStudio.png",
      "/images/FrontStudio.png",
      "/images/lastStudio.png",
    ],
    tech: ["React.js","Canvas API","JavaScript","Tailwind CSS","GSAP + ScrollTrigger","Locomotive Scroll","2D Animation Techniques","Modern UI/UX","Component-based Architecture",],
    github: "https://github.com/arhumyasin",
    slug: "Thirty-Six-Studio",
  },
];
