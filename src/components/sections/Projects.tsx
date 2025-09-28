"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    live: "https://cloverarena.com",
    github: "https://github.com/rickylaikhuram",
    description:
      "Full-stack e-commerce platform with product management, wishlist, multi-step forms with drag-and-drop image reordering",
    tech: [
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "AWS S3",
    ],
    features: [
      "Redux state management",
      "secure APIs",
      "AWS S3 presigned uploads",
    ],
    time: "2025",
  },
  {
    title: "College Event Website",
    live: "https://resomit.online",
    github: "https://github.com/rickylaikhuram",
    description:
      "Event management system with real-time tracking, role-based access (Super Admin/Admin/User), multi-step registration",
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
  },
  {
    title: "URL Shortener",
    live: undefined,
    github: "https://github.com/rickylaikhuram",
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
    live: undefined,
    github: "https://github.com/rickylaikhuram",
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

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
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

        {/* Mobile: Simple card layout */}
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
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted/30 border border-border/30 text-foreground/70">
                    {project.time}
                  </span>
                </div>

                <div className="flex-1 mb-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <div key={tech} className="flex items-center group/item">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-foreground/40 to-foreground/20 mr-2 group-hover/item:from-foreground/60 group-hover/item:to-foreground/40 transition-all duration-200" />
                        <span className="text-xs font-medium text-foreground/70 group-hover/item:text-foreground/90 transition-colors duration-200">
                          {tech}
                        </span>
                      </div>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-foreground/60">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

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
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex items-center gap-2"
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: GitHub-style timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
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

                  {/* Project content */}
                  <div className="flex-1">
                    <div className="bg-card/80 backdrop-blur border border-border/50 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:bg-card/90 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
                      <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-foreground/90 transition-colors flex items-center gap-3">
                        {project.title}
                        <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent flex-1" />
                      </h4>

                      <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-1 gap-3 mb-4">
                        {project.tech.slice(0, 6).map((tech, techIdx) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                            className="flex items-center group/item"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-foreground/40 to-foreground/20 mr-3 group-hover/item:from-foreground/60 group-hover/item:to-foreground/40 transition-all duration-200" />
                            <span className="text-xs font-medium text-foreground/70 group-hover/item:text-foreground transition-colors duration-200">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                        {project.tech.length > 6 && (
                          <span className="text-xs text-foreground/50 ml-5">
                            +{project.tech.length - 6} more technologies
                          </span>
                        )}
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
                      </div>

                      {/* Subtle background pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-2xl" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/30">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-foreground/60 font-medium">
              More projects in development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
