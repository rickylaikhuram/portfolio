"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeButton } from "@/components/ResumeButton";

const stats = [
  ["01+", "year in production"],
  ["20+", "tools built"],
  ["200+", "monthly users"],
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-16 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            OPEN TO REMOTE OPPORTUNITIES
          </motion.div>

          <h1 className="max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl">
            Building digital products that <span className="bg-gradient-to-r from-foreground via-foreground/75 to-primary bg-clip-text text-transparent">hold up in production.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/65 md:text-lg">
            I&apos;m Ricky Laikhuram, a full-stack developer working across TypeScript, React, Node.js, and PostgreSQL. I build reliable platforms, real-time systems, and thoughtful interfaces on Cloudflare and AWS.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => scrollTo("projects")} className="shadow-lg shadow-primary/20">
              Explore my work <ArrowDownRight className="h-4 w-4" />
            </Button>
            <ResumeButton variant="outline" className="h-10 px-6" />
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-border/60 pt-6">
            {stats.map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-foreground/45">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[22rem] lg:ml-auto lg:max-w-md"
        >
          <div className="float-slow absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
          <div className="glass-panel shine-border relative overflow-hidden rounded-[1.5rem] p-3">
            <div className="flex items-center gap-4 rounded-[1.1rem] border border-border/60 bg-gradient-to-br from-card via-background to-primary/10 p-3 md:gap-5 md:p-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-background md:h-32 md:w-32">
                <Image src="/profile.jpg" alt="Portrait of Ricky Laikhuram" fill className="object-cover object-center opacity-85" priority />
              </div>
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-primary"><Sparkles className="h-3 w-3" /> Engineer / Builder</div>
                <p className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">Ricky Laikhuram</p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-foreground/55"><MapPin className="h-3 w-3" /> Manipur, India</div>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4 font-mono text-[11px] text-foreground/45">
              <span className="flex items-center gap-2"><Terminal className="h-3.5 w-3.5" /> rickylaikhuram.dev</span>
              <span className="text-emerald-400">● online</span>
            </div>
          </div>
          <motion.button
            whileHover={{ y: -4, rotate: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-left shadow-2xl shadow-black/20"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary"><ArrowUpRight className="h-4 w-4" /></span>
            <span><span className="block text-xs font-semibold">Have a project?</span><span className="block text-[11px] text-foreground/50">Let&apos;s talk</span></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
