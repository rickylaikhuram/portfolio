"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Toolkit</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl">The tools behind the work.</h2>
            <p className="max-w-sm text-sm leading-6 text-foreground/55">A practical stack for taking ideas from a first commit to a dependable product.</p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div key={category.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.5 }} className="group rounded-3xl border border-border/70 bg-card/40 p-5 transition-colors duration-300 hover:border-primary/25 hover:bg-card/70">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6"><CategoryIcon className="h-4 w-4" /></span>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => {
                    const SkillIcon = skill.icon;
                    const content = <><SkillIcon className="h-3.5 w-3.5 text-foreground/45" /><span>{skill.name}</span>{skill.subtext && <span className="text-[10px] text-foreground/35">· {skill.subtext}</span>}</>;
                    return skill.link ? <a key={skill.name} href={skill.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/35 px-2.5 py-1.5 text-xs text-foreground/65 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-foreground">{content}</a> : <span key={skill.name} className="flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/35 px-2.5 py-1.5 text-xs text-foreground/65 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-foreground">{content}</span>;
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
