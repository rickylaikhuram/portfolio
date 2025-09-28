"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ResumeButton } from "@/components/ResumeButton";
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XTwitterIcon,
  YouTubeIcon,
} from "../ui/svg";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            {"Let's Connect"}
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to
            say hello
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            href="mailto:rickylaikhuramofficial@gmail.com"
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] p-6 flex items-center gap-4"
          >
            <EmailIcon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                Email
              </p>
              <p className="text-sm text-foreground/70">
                rickylaikhuramofficial@gmail.com
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-xl" />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
            href="https://linkedin.com/in/rickylaikhuram"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] p-6 flex items-center gap-4"
          >
            <LinkedInIcon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                LinkedIn
              </p>
              <p className="text-sm text-foreground/70">rickylaikhuram</p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-xl" />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            href="https://github.com/rickylaikhuram"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] p-6 flex items-center gap-4"
          >
            <GitHubIcon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                GitHub
              </p>
              <p className="text-sm text-foreground/70">rickylaikhuram</p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-xl" />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            href="https://www.instagram.com/ricky_laikhuram"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] p-6 flex items-center gap-4"
          >
            <InstagramIcon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                Instagram
              </p>
              <p className="text-sm text-foreground/70">@ricky_laikhuram</p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-xl" />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            href="https://www.youtube.com/@ricky_laikhuram"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] p-6 flex items-center gap-4"
          >
            <YouTubeIcon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                YouTube
              </p>
              <p className="text-sm text-foreground/70">@ricky_laikhuram</p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-xl" />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
            href="https://x.com/ricky_laikhuram"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] p-6 flex items-center gap-4"
          >
            <XTwitterIcon className="h-6 w-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
            <div>
              <p className="font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                X (Twitter)
              </p>
              <p className="text-sm text-foreground/70">@ricky_laikhuram</p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-xl" />
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <ResumeButton />
          <Button variant="outline" asChild>
            <a href="mailto:rickylaikhuramofficial@gmail.com">Send Email</a>
          </Button>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/30">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm text-foreground/60 font-medium">
              Available for new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
