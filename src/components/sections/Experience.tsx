"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { sortedExperiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Experience</p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl">Where I&apos;ve been building.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-foreground/55">A timeline of the teams, products, and systems that have shaped how I work.</p>
        </motion.div>

        <div className="relative ml-2 border-l border-border/70 md:ml-5">
          {sortedExperiences.map((exp, index) => (
            <motion.article key={exp.id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.1, duration: 0.6 }} className="group relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_5px] shadow-primary/10 transition-transform duration-300 group-hover:scale-125" />
              <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>
                    {exp.current && <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">Current</span>}
                  </div>
                  <p className="mt-2 flex items-center gap-2 text-sm text-primary"><BriefcaseBusiness className="h-4 w-4" /> {exp.company} <span className="text-foreground/25">·</span> <span className="text-foreground/50">{exp.location}</span></p>
                </div>
                <span className="font-mono text-xs text-foreground/40">{exp.period}</span>
              </div>
              <div className="glass-panel rounded-3xl p-5 md:p-7">
                <ul className="grid gap-4 md:grid-cols-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-6 text-foreground/65">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <a href="#projects" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-foreground/55 transition-colors hover:text-primary">See selected work <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </section>
  );
}
