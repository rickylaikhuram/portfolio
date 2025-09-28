"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Cloud,
  Zap,
  Server,
  Layout,
} from "lucide-react";
const skills = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
    icon: Code2,
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS", "Redux"],
    icon: Layout, // More specific icon
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "JWT (Authentication)", "Prisma (ORM)"],
    icon: Server,
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    icon: Database,
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3)",
      "Cloudflare",
      "Firebase Hosting",
      "Docker",
      "GitHub Actions",
      "VPS Setup",
    ],
    icon: Cloud,
  },
  {
    title: "Development Tools",
    items: ["Git", "Postman", "VS Code", "GitHub"],
    icon: Wrench,
  },
  {
    title: "Core Concepts",
    items: [
      "OOP",
      "Web Application Development",
      "RESTful APIs",
      "Version Control",
      "State Management",
      "Caching Strategies",
      "CI/CD Pipeline",
    ],
    icon: Zap,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.title}
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
              <Card
                className={`
                relative overflow-hidden rounded-3xl border-border/50 
                bg-card/80 backdrop-blur-sm
                hover:border-border transition-all duration-300
                hover:shadow-xl hover:shadow-black/5
                group-hover:scale-[1.02]
                min-h-[280px] flex flex-col
              `}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon className="h-6 w-6 text-foreground/70 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                  <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                </CardHeader>

                <CardContent className="flex-1 pt-2">
                  <div className="grid grid-cols-1 gap-3">
                    {category.items.map((skill, skillIdx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                        className="flex items-center group/item"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-foreground/40 to-foreground/20 mr-3 group-hover/item:from-foreground/60 group-hover/item:to-foreground/40 transition-all duration-200" />
                        <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-2xl" />
                </div>
              </Card>
            </motion.div>
          ))}
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
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-foreground/60 font-medium">
              Always learning and growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
