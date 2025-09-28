"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ResumeButton } from "@/components/ResumeButton";

// SVG Icons Components
const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XTwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

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
            Let's Connect
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
