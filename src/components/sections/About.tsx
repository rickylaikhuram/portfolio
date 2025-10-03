"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResumeButton } from "@/components/ResumeButton";
import { User, GraduationCap, Briefcase, Languages } from "lucide-react";

const aboutInfo = [
  {
    title: "Education",
    content:
      "Bachelor of Engineering in Computer Science (Aug 2021 - May 2025), Manipur Institute of Technology",
    icon: GraduationCap,
  },
  {
    title: "Recent Experience",
    content:
      "Software Engineer Intern at Lamzing Technologies Pvt. Ltd. (Mar 2025 - Aug 2025) - Completed",
    icon: Briefcase,
  },
  {
    title: "Languages",
    content: "English, Hindi, Manipuri (Native)",
    icon: Languages,
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A web developer exploring new tech and learning to become a better
            engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Personal Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="group"
          >
            <Card className="relative overflow-hidden rounded-3xl border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 group-hover:scale-[1.02] min-h-[280px] flex flex-col">
              <CardHeader className="">
                <div className="flex items-center gap-3 mb-2">
                  <User className="h-6 w-6 text-foreground/70 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                    My Path in Tech
                  </CardTitle>
                </div>
                <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1">
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    I develop full-stack web applications professionally and
                    through freelance work, partnering with clients to bring
                    their ideas to life.
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-1">
                    Currently learning machine learning and AI to broaden my
                    technical capabilities.
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    I believe in growing through each project and creating
                    software that makes a difference.
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                  <ResumeButton
                    variant="outline"
                    className="w-full cursor-pointer"
                  />
                </div>
              </CardContent>

              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-2xl" />
              </div>
            </Card>
          </motion.div>

          {/* Information Cards */}
          <div className="space-y-6">
            {aboutInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group"
              >
                <Card className="relative overflow-hidden rounded-3xl border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 group-hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <info.icon className="h-5 w-5 text-foreground/70 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                      <CardTitle className="text-base font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                        {info.title}
                      </CardTitle>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {info.content}
                    </p>
                  </CardContent>

                  {/* Subtle background pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-xl" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
