"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeButton } from "@/components/ResumeButton";
import { GitHubIcon, LinkedInIcon } from "../ui/svg";

const links = [
  { label: "Email", value: "rickylaikhuramofficial@gmail.com", href: "mailto:rickylaikhuramofficial@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/rickylaikhuram", href: "https://linkedin.com/in/rickylaikhuram", icon: LinkedInIcon },
  { label: "GitHub", value: "github.com/rickylaikhuram", href: "https://github.com/rickylaikhuram", icon: GitHubIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card/65 to-foreground/5 p-7 md:p-12">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Let&apos;s connect</p>
              <h2 className="max-w-xl text-4xl font-bold tracking-[-0.05em] md:text-6xl">Have a hard problem? <span className="text-foreground/45">Let&apos;s make it useful.</span></h2>
              <p className="mt-6 max-w-lg leading-7 text-foreground/60">I&apos;m open to remote full-stack and backend roles, interesting product collaborations, and conversations about building for the web.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Button size="lg" asChild><a href="mailto:rickylaikhuramofficial@gmail.com">Send me an email <ArrowUpRight className="h-4 w-4" /></a></Button><ResumeButton variant="outline" /></div>
              <p className="mt-6 flex items-center gap-2 text-xs text-foreground/45"><MapPin className="h-3.5 w-3.5" /> Based in Manipur, India · available globally</p>
            </div>
            <div className="grid gap-3">
              {links.map((link) => { const Icon = link.icon; return <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="group flex items-center justify-between rounded-2xl border border-border/70 bg-background/35 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-background/60"><span className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-background/70 text-foreground/60 transition-colors group-hover:text-primary"><Icon className="h-4 w-4" /></span><span><span className="block text-xs font-semibold">{link.label}</span><span className="mt-1 block text-xs text-foreground/45">{link.value}</span></span></span><ArrowUpRight className="h-4 w-4 text-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" /></a>; })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
