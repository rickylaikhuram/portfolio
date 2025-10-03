"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  FileJson,
  Code2,
  Layers,
  Rocket,
  Paintbrush,
  Workflow,
  Server,
  Network,
  Database,
  Cloud,
  Briefcase,
  Boxes,
  Globe,
  BookOpen,
  Route,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { type LucideProps } from "lucide-react";

type Tech =
  | "TypeScript"
  | "React"
  | "Redux"
  | "Node.js"
  | "Express.js"
  | "Tailwind CSS"
  | "PostgreSQL"
  | "Redis"
  | "AWS S3"
  | "MongoDB"
  | "JavaScript"
  | "React Router DOM"
  | "Strapi CMS"
  | "REST APIs"
  | "Markdown";

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface Project {
  title: string;
  live?: string;
  github?: string;
  description: string;
  tech: Tech[];
  features: string[];
  time: string;
  badge?: { label: string; icon: IconType };
}

// ---------- ICON MAPPING ----------
const techIcons: Record<Tech, IconType> = {
  TypeScript: Code2,
  React: Layers,
  Redux: Workflow,
  "Node.js": Server,
  "Express.js": Network,
  "Tailwind CSS": Paintbrush,
  PostgreSQL: Database,
  Redis: Boxes,
  "AWS S3": Cloud,
  MongoDB: Database,
  JavaScript: FileJson,
  "React Router DOM": Route,
  "Strapi CMS": Globe,
  "REST APIs": Server,
  Markdown: BookOpen,
};

// ---------- PROJECT DATA ----------
const projects: Project[] = [
  {
    title: "E-commerce Website",
    live: "https://cloverarena.com",
    github: "https://github.com/rickylaikhuram/ecommerce-frontend",
    description:
      "Full-stack e-commerce platform with product management, wishlist, multi-step forms with drag-and-drop image reordering",
    tech: [
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "AWS S3",
    ],
    features: [
      "Redux state management",
      "secure APIs",
      "AWS S3 presigned uploads",
    ],
    time: "2025",
    badge: { label: "Freelance", icon: Briefcase },
  },
  {
    title: "Blogging Platform",
    live: "https://tathyapulse.com/",
    description:
      "Developed a blogging platform for a client to showcase their work and content. Implemented React Router DOM for seamless page navigation and integrated Strapi CMS to dynamically render markdown blog posts.",
    tech: [
      "React",
      "React Router DOM",
      "JavaScript",
      "Strapi CMS",
      "REST APIs",
      "Markdown",
    ],
    features: [
      "Implemented client-side routing for blog navigation",
      "Integrated Strapi CMS backend APIs with React frontend",
      "Built dynamic markdown content rendering system",
      "Created seamless content management experience for client",
    ],
    time: "2025",
    badge: { label: "Internship", icon: Briefcase },
  },
  {
    title: "Event Platform",
    live: "https://resomit.online",
    github: "https://github.com/rickylaikhuram/resoui",
    description:
      "Official event management platform for my college, featuring real-time tracking, role-based access (Super Admin/Admin/User), and multi-step registration for college events.",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "JWT authentication",
      "Zod validation",
      "React Hook Form (35% error reduction, 42% better completion rates)",
    ],
    time: "2025",
    badge: { label: "College", icon: Rocket },
  },
  {
    title: "URL Shortener",
    github: "https://github.com/rickylaikhuram/urlShortner",
    description:
      "Lightweight URL shortening service with efficient redirects and optimized performance for handling high-volume requests",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: ["Optimized routing", "edge case handling"],
    time: "2024",
  },
  {
    title: "Job Portal (MERN)",
    github: "https://github.com/rickylaikhuram/Job_Portal",
    description:
      "Role-based job portal with recruiter panels and applicant management system for seamless job application processes",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "JWT authentication",
      "role-based access",
      "Zod schema validation",
    ],
    time: "2024",
  },
];

// ---------- COMPONENT ----------
export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and
            problem-solving abilities
          </p>
        </motion.div>

        {/* Mobile: Card layout */}
        <div className="md:hidden space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-card/80 backdrop-blur border border-border/50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[280px] flex flex-col">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.badge && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary">
                        <project.badge.icon className="w-3 h-3" />
                        {project.badge.label}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 mb-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => {
                      const Icon = techIcons[tech] || Code2;
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/40 border border-border/50 hover:border-border hover:bg-muted/60 transition-all duration-200 group/item"
                        >
                          <Icon className="h-3.5 w-3.5 text-foreground/60 group-hover/item:text-foreground transition-colors" />
                          <span className="text-xs font-medium text-foreground/70 group-hover/item:text-foreground transition-colors">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-foreground/60 px-2.5 py-1">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-3">
                    {project.live && (
                      <Button
                        size="sm"
                        asChild
                        className="flex items-center gap-2"
                      >
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex items-center gap-2"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="w-3 h-3" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted/30 border border-border/30 text-foreground/70">
                    {project.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Timeline layout */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-border transform -translate-x-px"></div>

            {projects
              .sort((a, b) => parseInt(b.time) - parseInt(a.time))
              .map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-start mb-8 group"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-1">
                    <div className="w-3 h-3 bg-border rounded-full group-hover:bg-primary transition-colors duration-200"></div>
                  </div>

                  {/* Year */}
                  <div className="ml-6 mr-8 min-w-[60px] pt-0.5">
                    <span className="text-sm text-foreground/60 font-medium">
                      {project.time}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card/80 backdrop-blur border border-border/50 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:bg-card/90 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors flex items-center gap-3">
                          {project.title}
                          <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent w-16" />
                        </h4>
                        {project.badge && (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary">
                            <project.badge.icon className="w-3.5 h-3.5" />
                            {project.badge.label}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => {
                          const Icon = techIcons[tech] || Code2;
                          return (
                            <div
                              key={tech}
                              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/40 border border-border/50 hover:border-border hover:bg-muted/60 transition-all duration-200 group/item"
                            >
                              <Icon className="h-3.5 w-3.5 text-foreground/60 group-hover/item:text-foreground transition-colors" />
                              <span className="text-xs font-medium text-foreground/70 group-hover/item:text-foreground transition-colors">
                                {tech}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex gap-3">
                        {project.live && (
                          <Button
                            size="sm"
                            variant="default"
                            asChild
                            className="h-8 text-xs"
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Live
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="h-8 text-xs"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5"
                            >
                              <Github className="w-3 h-3" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>

                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-2xl" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
