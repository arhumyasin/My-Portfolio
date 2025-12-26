"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {ExternalLink, Code, GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Project data
const projects = [
  {
    id: "ecommerce-platform",
    title: "Ochi Interactive Studio",
    description:
      "A high-quality React rebuild of the Ochi design studio website, featuring advanced Framer Motion animations and fluid transitions. This project highlights my capability to create premium, animation-heavy experiences with performance and precision.",
    image:
      "/images/Ochi.png",
    tags: ["Framer Motion (Advanced Animations)","React.js","Motion Layouts", "GSAP", "Tailwind CSS", "locomotive.js", "Interaction Design"],
    github: "https://github.com/arhumyasin",
    // live: "https://example.com",
  },
  {
    id: "task-management",
    title: "Skiper Ui",
    description:
      "A responsive React-based UI website rebuilt to replicate Skiper’s clean design system and modern component behavior. This project demonstrates my ability to convert complex UI layouts into production-ready React interfaces with smooth interactions.",
    image:
      "/images/Skiper.png",
    tags: ["React.js", "State Management","Reusable Ui Components","Tailwind CSS", "Component Architecture"],
    github: "https://github.com/arhumyasin",
    // live: "https://example.com",
  },
  {
    id: "portfolio-website",
    title: "Lazarev Agency",
    description:
      "A modern agency-style website built to showcase high-quality animations, smooth interactions, and premium UI design. Created to demonstrate the type of professional, visually impressive websites I can build for real brands and businesses.",
    image:
      "/images/Ai.png",
    tags: ["GSAP","Html", "CSS", "JavaScript", "2D Animations", "Interactive Design","Design-to-Code Execution"],
    github: "https://github.com/arhumyasin",
    // live: "https://example.com",
  },
  {
    id: "Thirty-Six-Studio",
    title: "Thrity-Six-Studio",
    description:
      "An interactive canvas-based animation where a single click triggers a swarm of chili images, each moving at unique speeds to create a lively and dynamic visual effect. Built using React and advanced animation techniques, this feature demonstrates fine-grained control over frame-based animations, performance optimization, and user-driven interactive experiences.",
    image:
      "/images/AnimatedStudio.png",
    tags: ["React.js","Canvas","Frame-based Animation","Interactive UI","GSAP","Html", "CSS", "JavaScript", "2D Animations", "Interactive Design","Design-to-Code Execution"],
    github: "https://github.com/arhumyasin",
    // live: "https://example.com",
  },
  {
    id: "GTA-VI",
    title: "GTA VI Animated Web Experience",
    description:
      "An animated web page inspired by GTA VI, featuring immersive animations and interactive elements that bring the game’s world to life. Built using modern web technologies, this project showcases smooth scrolling, dynamic visual effects, and attention to user engagement through cinematic animations",
    image:
      "/images/GTAFront.png",
    tags: ["React.js","GSAP","Locomotive.js","Frame-based Animation","Web-based Cinematic effects","Interactive UI","Html", "CSS", "JavaScript", "2D Animations", "Interactive Design","Design-to-Code Execution"],
    github: "https://github.com/arhumyasin",
    // live: "https://example.com",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              A selection of my recent work. Each project is unique and Interactive Design with Animations.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

 function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href="/projects" className="block h-full">
      <motion.div
        className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all h-full cursor-pointer"
        whileHover={{ y: -5 }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 z-0" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] z-0" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-[50px] z-0" />

        {/* Image */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover block"
            />
          </motion.div>

          {/* Floating badge */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium z-20 border">
            {project.tags[0]}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 relative z-10">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(1).map((tag) => (
              <Badge key={tag} variant="outline">
                <Code className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* GitHub link (clickable separately) */}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4 mr-1" />
              GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </Link>
  );
}


      {/* View Details Link
      <Link href={`/projects/${project.id}`} className="absolute inset-0">
        <span className="sr-only">View {project.title} details</span>
      </Link>
    </motion.div> */}
  {/* );
} */}
