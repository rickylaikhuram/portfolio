"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { ResumeButton } from "@/components/ResumeButton";

const focusAreas = ["Product engineering", "Real-time systems", "AI workflows", "Edge infrastructure"];

export default function About() {
  return (
    <section id="about" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-4 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary"><Sparkles className="h-3.5 w-3.5" /> A little about me</p>
            <h2 className="max-w-lg text-4xl font-bold tracking-[-0.04em] md:text-5xl">Curious by default. <span className="text-foreground/45">Deliberate in the details.</span></h2>
            <p className="mt-6 max-w-md leading-7 text-foreground/60">I enjoy turning fuzzy problems into clear, useful software. My work sits at the intersection of robust backend systems, expressive interfaces, and the infrastructure that connects them.</p>
            <p className="mt-4 max-w-md leading-7 text-foreground/60">Currently, I&apos;m building production platforms at Openthrive while exploring better ways to use AI in everyday workflows.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => <span key={area} className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs text-foreground/65">{area}</span>)}
            </div>
            <div className="mt-9"><ResumeButton variant="outline" /></div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-panel rounded-3xl p-6 sm:col-span-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><GraduationCap className="h-5 w-5" /></div>
                <span className="font-mono text-xs text-foreground/40">2021 — 2025</span>
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Education</p>
              <h3 className="mt-2 text-xl font-semibold">Bachelor of Engineering in Computer Science</h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-foreground/55"><MapPin className="h-3.5 w-3.5" /> Manipur Institute of Technology · Manipur, India</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="glass-panel rounded-3xl p-6">
              <Award className="h-5 w-5 text-amber-300" />
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Recognition</p>
              <h3 className="mt-2 font-semibold leading-6">Robert Memorial Internship Award</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/55">MaolKeki Foundation · Jul 2025</p>
              <a href="https://e-pao.net/epSubPageExtractor.asp?src=education.Education_Announcements.Edn_Ann_2025.MaolKeki_Foundation_Robert_Memorial_Internship_Awarded_20250723" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/75">Read the feature <ArrowUpRight className="h-3 w-3" /></a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16, duration: 0.5 }} className="currently-card relative z-10 rounded-3xl p-6">
              <p className="font-mono text-xs text-primary">CURRENTLY</p>
              <p className="mt-7 text-2xl font-semibold tracking-tight">Making complex systems feel simple.</p>
              <p className="mt-3 text-sm leading-6 text-foreground/55">From document processing to collaborative docs and real-time messaging.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
