import { GitHubIcon } from "@/components/ui/svg";
import { SkillCategory } from "@/types/skills";
import {
  Award,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Container,
  Database,
  FileJson,
  GitBranch,
  Layers,
  Layout,
  Globe,
  Network,
  Paintbrush,
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
    ],
    icon: Code2,
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Rocket },
      { name: "Astro", icon: Rocket },
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
      { name: "Hono", icon: Network },
      { name: "Strapi", icon: Globe },
      { name: "Sanity", icon: FileJson },
      { name: "WebSockets", icon: Wifi },
      { name: "PartyKit", icon: Network },
      { name: "Durable Objects", icon: Shield },
      { name: "RESTful APIs", icon: Network },
      { name: "LLM Integration", icon: Brain },
    ],
    icon: Server,
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
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
      { name: "Vercel", icon: Cloud },
      { name: "Render", icon: Cloud },
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
    title: "Awards",
    items: [
      {
        name: "Robert Memorial Internship",
        icon: Trophy,
        subtext: "MaolKeki Foundation",
        link: "https://e-pao.net/epSubPageExtractor.asp?src=education.Education_Announcements.Edn_Ann_2025.MaolKeki_Foundation_Robert_Memorial_Internship_Awarded_20250723",
      },
    ],
    icon: Award,
  },
];
