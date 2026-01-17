import { GitHubIcon } from "@/components/ui/svg";
import { SkillCategory } from "@/types/skills";
import {
  Award,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  FileJson,
  GitBranch,
  Layers,
  Layout,
  Lock,
  Network,
  Paintbrush,
  Radio,
  Rocket,
  Server,
  Settings,
  Shield,
  Terminal,
  Trophy,
  Wifi,
  Workflow,
} from "lucide-react";

export const skills: SkillCategory[] = [
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
      { name: "WebSockets", icon: Wifi },
      { name: "AI Integration", icon: Brain },
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
      { name: "GitHub", icon: GitHubIcon },
      { name: "Postman", icon: Network },
      { name: "VS Code", icon: Code2 },
    ],
    icon: Settings,
  },
  {
    title: "Certifications",
    items: [
      {
        name: "Software Engineer",
        icon: Trophy,
        subtext: "HackerRank",
        link: "https://www.hackerrank.com/certificates/74e960fd1d5e",
      },
    ],
    icon: Award,
  },
];
