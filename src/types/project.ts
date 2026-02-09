import {
  AppWindow,
  BookOpen,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  FileJson,
  Globe,
  Inbox,
  Layers,
  LucideProps,
  Mail,
  Network,
  Paintbrush,
  Palette,
  Radio,
  Route,
  Server,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Tech =
  | "TypeScript"
  | "React"
  | "Redux"
  | "Node.js"
  | "Express.js"
  | "Tailwind CSS"
  | "Next.js"
  | "PostgreSQL"
  | "Redis"
  | "AWS S3"
  | "MongoDB"
  | "JavaScript"
  | "React Router DOM"
  | "Strapi CMS"
  | "REST APIs"
  | "Shadcn/ui"
  | "Lucide React"
  | "Markdown"
  | "Socket.io"
  | "WebSockets"
  | "Google Gemini API"
  | "Prisma"
  | "Nodemailer"
  | "IMAP";

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export interface Project {
  title: string;
  live?: string;
  github?: string;
  description: string;
  tech: Tech[];
  features: string[];
  time: string;
  badge?: { label: string; icon: IconType };
}

// ---------- ICON MAPPING ----------
export const techIcons: Record<Tech, IconType> = {
  TypeScript: Code2,
  React: Layers,
  Redux: Workflow,
  "Node.js": Server,
  "Express.js": Network,
  "Tailwind CSS": Paintbrush,
  PostgreSQL: Database,
  Redis: Boxes,
  "AWS S3": Cloud,
  MongoDB: Database,
  JavaScript: FileJson,
  "React Router DOM": Route,
  "Strapi CMS": Globe,
  "REST APIs": Server,
  Markdown: BookOpen,
  "Next.js": Zap,
  "Shadcn/ui": Palette,
  "Lucide React": AppWindow,
  "Socket.io": Radio,
  WebSockets: Wifi,
  "Google Gemini API": Brain,
  Prisma: Database,           // Database ORM
  Nodemailer: Mail,            // Email sending
  IMAP: Inbox,
};
