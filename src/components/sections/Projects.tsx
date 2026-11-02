"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/project";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const BadgeIcon = project.badge?.icon;
  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * 0.08, duration: 0.55 }} className="group flex h-full flex-col rounded-3xl border border-border/70 bg-card/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/85 hover:shadow-2xl hover:shadow-primary/5 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-primary">{project.time}</span>
        {project.badge && BadgeIcon && <span className="flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[10px] font-medium text-foreground/55"><BadgeIcon className="h-3 w-3" /> {project.badge.label}</span>}
      </div>
      <h3 className="mt-7 text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">{project.title}</h3>
      <p className="mt-4 text-sm leading-6 text-foreground/60">{project.description}</p>
      <ul className="mt-5 space-y-2">
        {project.features.slice(0, 3).map((feature) => <li key={feature} className="flex gap-2 text-xs leading-5 text-foreground/50"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />{feature}</li>)}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {project.tech.slice(0, 5).map((tech) => <span key={tech} className="rounded-lg border border-border/80 bg-muted/35 px-2.5 py-1 text-[11px] text-foreground/55">{tech}</span>)}
        {project.tech.length > 5 && <span className="px-1 py-1 text-[11px] text-foreground/35">+{project.tech.length - 5}</span>}
      </div>
      <div className="mt-7 flex items-center gap-3 border-t border-border/60 pt-5">
        {project.live && <Button size="sm" asChild><a href={project.live} target="_blank" rel="noreferrer"><ExternalLink className="h-3.5 w-3.5" /> Live demo</a></Button>}
        {project.github && <Button size="sm" variant="outline" asChild><a href={project.github} target="_blank" rel="noreferrer"><Github className="h-3.5 w-3.5" /> Source</a></Button>}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl">Things I&apos;ve built.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-foreground/55">A few products and experiments across AI, commerce, developer tools, and real-time collaboration.</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>

        <div className="mt-16 flex items-center gap-3"><Layers3 className="h-4 w-4 text-primary" /><h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/55">More experiments</h3><span className="h-px flex-1 bg-border/70" /></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
        <a href="https://github.com/rickylaikhuram" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground/55 transition-colors hover:text-primary">Explore more on GitHub <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </section>
  );
}
