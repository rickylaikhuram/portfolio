"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  Server,
  Layout,
  Lock,
  Package,
  Boxes,
  Workflow,
  GitBranch,
  Terminal,
  FileJson,
  Paintbrush,
  Cpu,
  Rocket,
  Settings,
  Shield,
  Layers,
  Network,
  Container,
  Github,
} from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: FileJson },
      { name: "TypeScript", icon: Code2 },
      { name: "Python", icon: Terminal },
      { name: "C", icon: Cpu },
      { name: "C++", icon: Cpu },
    ],
    icon: Code2,
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Rocket },
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "Redux", icon: Workflow },
    ],
    icon: Layout,
  },
  {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Network },
      { name: "JWT", icon: Lock },
      { name: "Prisma", icon: Database },
    ],
    icon: Server,
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "Redis", icon: Boxes },
    ],
    icon: Database,
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: Cloud },
      { name: "Cloudflare", icon: Shield },
      { name: "Docker", icon: Container },
      { name: "GitHub Actions", icon: Workflow },
    ],
    icon: Cloud,
  },
  {
    title: "Development Tools",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Postman", icon: Network },
      { name: "VS Code", icon: Code2 },
    ],
    icon: Settings,
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
                min-h-[210px] flex flex-col
              `}
              >
                <CardHeader className="">
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon className="h-6 w-6 text-foreground/70 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                  <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + skillIdx * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                        className="group/item"
                      >
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-border/50 hover:border-border hover:bg-muted/60 transition-all duration-200">
                          <skill.icon className="h-4 w-4 text-foreground/60 group-hover/item:text-foreground transition-colors" />
                          <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
