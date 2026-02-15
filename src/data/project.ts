import { Project } from "@/types/project";
import { Brain, Briefcase, Rocket } from "lucide-react";

export const projects: Project[] = [
  {
    title:
      "Shadow Signal - Real-Time Multiplayer Social Deduction Game (AI-Integrated)",
    live: "https://ai-powered-social-deduction-game-fr.vercel.app/",
    description:
      "A real-time multiplayer social deduction game developed as part of a technical assessment, featuring server-authoritative gameplay, role-based game modes, and AI-powered word generation.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebSockets",
      "Google Gemini API",
      "Tailwind CSS",
    ],
    features: [
      "Real-time multiplayer gameplay using Socket.io",
      "Server-authoritative game state and turn handling",
      "Multiple game modes (Infiltrator and Spy)",
      "AI-powered word and clue generation using Google Gemini",
      "Room-based matchmaking and role assignment",
      "Responsive, mobile-friendly UI",
    ],
    time: "2026",
    badge: { label: "Assessment Project", icon: Brain },
  },
  {
    title: "AI-Powered RFP Management System - Procurement Automation Platform",
    github:
      "https://github.com/rickylaikhuram/ai-powered-rfp-management-system",
    description:
      "A comprehensive procurement platform that streamlines the Request for Proposal workflow using AI, enabling natural language RFP creation, automated vendor management, email distribution, and intelligent proposal comparison.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Google Gemini API",
      "Nodemailer",
      "IMAP",
      "Tailwind CSS",
    ],
    features: [
      "Conversational AI interface for natural language RFP creation",
      "Multi-turn chat sessions with context-aware RFP refinement",
      "Automated vendor email distribution via SMTP",
      "IMAP-based email polling for vendor response collection",
      "AI-powered proposal parsing from emails and PDF attachments",
      "Intelligent proposal comparison with scoring and recommendations",
    ],
    time: "2026",
    badge: { label: "Full-Stack Project", icon: Brain },
  },
  {
    title: "RandomHub",
    live: "https://randomhub.app",
    description:
      "Multi-generator platform with 15+ client-side generators (password, names, QR codes, lorem ipsum, JSON formatter, text converter, wheel spinner, and more) with zero backend dependencies.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Lucide React",
    ],
    features: [
      "15+ standalone generators",
      "Client-side only (no backend)",
      "Perfect Lighthouse scores (98 Performance, 100 Accessibility, 100 Best Practices, 100 SEO)",
      "localStorage theme persistence",
    ],
    time: "2025",
    badge: { label: "Personal", icon: Rocket },
  },
  {
    title: "E-commerce Website",
    live: "https://cloverarena.com",
    github: "https://github.com/rickylaikhuram/ecommerce-frontend",
    description:
      "Full-stack e-commerce platform with product management, wishlist, multi-step forms with drag-and-drop image reordering",
    tech: [
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "AWS S3",
    ],
    features: [
      "Redux state management",
      "secure APIs",
      "AWS S3 presigned uploads",
    ],
    time: "2025",
    badge: { label: "Freelance", icon: Briefcase },
  },
  {
    title: "Event Platform",
    live: "https://resomit.online",
    github: "https://github.com/rickylaikhuram/resoui",
    description:
      "Official event management platform for my college, featuring real-time tracking, role-based access (Super Admin/Admin/User), and multi-step registration for college events.",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "JWT authentication",
      "Zod validation",
      "React Hook Form (35% error reduction, 42% better completion rates)",
    ],
    time: "2025",
    badge: { label: "College", icon: Rocket },
  },
  {
    title: "URL Shortener",
    github: "https://github.com/rickylaikhuram/urlShortner",
    description:
      "Lightweight URL shortening service with efficient redirects and optimized performance for handling high-volume requests",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: ["Optimized routing", "edge case handling"],
    time: "2024",
  },
  {
    title: "Job Portal (MERN)",
    github: "https://github.com/rickylaikhuram/Job_Portal",
    description:
      "Role-based job portal with recruiter panels and applicant management system for seamless job application processes",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "JWT authentication",
      "role-based access",
      "Zod schema validation",
    ],
    time: "2024",
  },
];
